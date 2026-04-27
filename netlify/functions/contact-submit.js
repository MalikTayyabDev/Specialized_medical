/**
 * Netlify Function: proxies contact form to Web3Forms.
 * Keeps WEB3FORMS_ACCESS_KEY secret (set in Netlify environment variables).
 */

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { success: false, message: "Method not allowed." })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return json(500, {
      success: false,
      message: "Server is missing WEB3FORMS_ACCESS_KEY.",
    })
  }

  try {
    const contentType = (event.headers["content-type"] || event.headers["Content-Type"] || "").toLowerCase()
    const params = new URLSearchParams()

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = new URLSearchParams(event.body || "")
      for (const [k, v] of body.entries()) params.append(k, v)
    } else if (contentType.includes("application/json")) {
      const body = JSON.parse(event.body || "{}")
      for (const [k, v] of Object.entries(body)) params.append(k, String(v ?? ""))
    } else {
      // Netlify may send form submissions as urlencoded; fallback to best-effort parse.
      const body = new URLSearchParams(event.body || "")
      for (const [k, v] of body.entries()) params.append(k, v)
    }

    // Ensure required Web3Forms fields.
    params.set("access_key", accessKey)
    if (!params.has("botcheck")) params.set("botcheck", "")

    // Build name field like Gatsby/static did (if not provided).
    if (!params.get("name")) {
      const firstName = (params.get("firstName") || "").trim()
      const lastName = (params.get("lastName") || "").trim()
      const full = `${firstName} ${lastName}`.trim()
      if (full) params.set("name", full)
    }

    if (!params.get("subject")) {
      params.set("subject", "New contact request — Specialized Medical")
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
      return json(200, data)
    }

    return json(resp.status || 400, data || { success: false, message: "Unable to send." })
  } catch (e) {
    return json(500, { success: false, message: "Server error." })
  }
}

