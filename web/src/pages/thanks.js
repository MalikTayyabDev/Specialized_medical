import * as React from "react"
import { Link } from "gatsby"

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <section
        className="figma-section thanks-page__section"
        aria-labelledby="thanks-heading"
      >
        <div className="figma-container">
          <div className="thanks-page__card">
            <div className="thanks-page__icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 id="thanks-heading" className="figma-h2 thanks-page__title">
              Thank you
            </h1>
            <p className="thanks-page__lead">
              Your message has been received. A member of our team will follow up
              shortly.
            </p>
            <p className="thanks-page__next" id="thanks-next">
              What happens next
            </p>
            <ul className="thanks-page__list" aria-labelledby="thanks-next">
              <li>
                We review your inquiry and route it to the right specialist.
              </li>
              <li>
                If you requested a demo or trial, we will reach out to schedule a
                time that works for your practice.
              </li>
              <li>
                If you need immediate assistance, call{" "}
                <a href="tel:+18557732633">1-855-773-2633</a>.
              </li>
            </ul>
            <div className="thanks-page__actions">
              <Link className="figma-btn figma-btn--solid" to="/">
                Back to Home
              </Link>
              <Link className="figma-btn figma-btn--outline-dark" to="/contact/">
                Contact us again
              </Link>
            </div>
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
