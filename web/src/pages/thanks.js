import * as React from "react"
import { Link } from "gatsby"

export default function ThanksPage() {
  return (
    <main className="figma-page">
      <section className="figma-section" aria-labelledby="thanks-heading">
        <div className="figma-container" style={{ maxWidth: 820 }}>
          <h1 id="thanks-heading" className="figma-h2" style={{ textAlign: "center" }}>
            Thank you.
          </h1>
          <p style={{ textAlign: "center", color: "rgba(35, 31, 30, 0.7)" }}>
            Your message has been submitted. A member of our team will follow up shortly.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <Link className="figma-btn figma-btn--solid" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export function Head() {
  return (
    <>
      <title>Thank you | Specialized Medical</title>
      <meta name="robots" content="noindex" />
    </>
  )
}

