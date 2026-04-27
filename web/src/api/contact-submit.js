/**
 * Gatsby Function: proxies contact form to Web3Forms.
 * This avoids browser-origin restrictions and lets you test locally.
 */

function json(res, status, body) {
  res.status(status)
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  res.setHeader("Cache-Control", "no-store")
  res.end(JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { success: false, message: "Method not allowed." })
  }

  try {
    const body = req.body && typeof req.body === "object" ? req.body : {}

    // Local/dev preview: allow testing the UX without relying on Web3Forms settings
    // (keys are often domain-restricted and return 403 on localhost).
    if (process.env.NODE_ENV !== "production") {
      return json(res, 200, { success: true, message: "Dev mode: accepted." })
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.GATSBY_WEB3FORMS_ACCESS_KEY ||
      String(body.access_key || "")

    if (!accessKey) {
      return json(res, 500, {
        success: false,
        message:
          "Server is missing WEB3FORMS_ACCESS_KEY (or the request did not include access_key).",
      })
    }

    const params = new URLSearchParams()

    for (const [k, v] of Object.entries(body)) {
      params.append(k, String(v ?? ""))
    }

    params.set("access_key", accessKey)
    if (!params.has("botcheck")) params.set("botcheck", "")
    if (!params.get("subject")) {
      params.set("subject", "New contact request — Specialized Medical")
    }

    if (!params.get("name")) {
      const firstName = (params.get("firstName") || "").trim()
      const lastName = (params.get("lastName") || "").trim()
      const full = `${firstName} ${lastName}`.trim()
      if (full) params.set("name", full)
    }

    const resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    const data = await resp.json().catch(() => null)
    if (resp.ok && data && data.success === true) {
      return json(res, 200, data)
    }

    return json(res, resp.status || 400, data || { success: false })
  } catch (e) {
    return json(res, 500, { success: false, message: "Server error." })
  }
}

