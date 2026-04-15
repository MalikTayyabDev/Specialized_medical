const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  },
  body: JSON.stringify(body),
})

function clean(v) {
  return String(v == null ? "" : v).trim()
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method Not Allowed" })
  }

  let data
  try {
    data = JSON.parse(event.body || "{}")
  } catch {
    return json(400, { ok: false, error: "Invalid JSON" })
  }

  // Basic honeypot field (should be empty)
  if (clean(data.botField)) {
    return json(200, { ok: true })
  }

  const firstName = clean(data.firstName)
  const lastName = clean(data.lastName)
  const email = clean(data.email)
  const phone = clean(data.phone)
  const interest = clean(data.interest)
  const message = clean(data.message)

  if (!firstName || !lastName || !email || !message) {
    return json(400, { ok: false, error: "Missing required fields" })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const fromName = process.env.CONTACT_FROM_NAME || "Specialized Medical Website"

  if (!apiKey || !toEmail || !fromEmail) {
    return json(500, { ok: false, error: "Email service not configured" })
  }

  const subject = `Website contact: ${interest || "general"} — ${firstName} ${lastName}`

  const text = [
    "New contact form submission:",
    "",
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
    interest ? `Interest: ${interest}` : "Interest: (not selected)",
    "",
    "Message:",
    message,
    "",
    `Source IP: ${event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"] || ""}`,
  ].join("\n")

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "(not provided)"}</p>
    <p><strong>Interest:</strong> ${interest ? escapeHtml(interest) : "(not selected)"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace">${escapeHtml(
      message
    )}</pre>
  `

  // Send to team
  const teamPayload = {
    personalizations: [{ to: [{ email: toEmail }] }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email },
    subject,
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html },
    ],
  }

  const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamPayload),
  })

  if (!sgRes.ok) {
    return json(502, { ok: false, error: "Failed to send email" })
  }

  // Optional auto-reply (enable by setting CONTACT_AUTOREPLY=1)
  if (process.env.CONTACT_AUTOREPLY === "1") {
    const autoPayload = {
      personalizations: [{ to: [{ email }] }],
      from: { email: fromEmail, name: fromName },
      subject: "We received your message",
      content: [
        {
          type: "text/plain",
          value:
            "Thanks for contacting Specialized Medical. We received your message and will follow up shortly.",
        },
      ],
    }
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(autoPayload),
    })
  }

  return json(200, { ok: true })
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

