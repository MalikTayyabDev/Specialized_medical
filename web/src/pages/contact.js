import * as React from "react"
import { ICON, imagesPath } from "../components/Layout"

const IMG = {
  hero: "/images/figma-contact/contact-hero.jpg",
}

const WHY_POINTS = [
  "Live-streaming, real-time ECG data",
  "Holter, Extended Holter, Event Monitoring, and Telemetry (MCT)",
  "Simple office workflow",
  "24/7 live monitoring and alerts",
  "Report integration and physician interpretation workflow",
  "Billing support",
  "Zero-cost equipment",
  "Patient-friendly monitor design",
  "Reimbursement value",
  "TAVR monitoring support",
  "No-risk beta trial",
]

const ACTION_CARDS = [
  {
    title: "Request a Demo",
    text: "See Specialized Medical in action with a live demonstration.",
    hash: "demo",
    iconFile: "contact-action-demo.svg",
  },
  {
    title: "Start Your No-Risk Beta Trial",
    text: "Try it on a few patients — no obligation.",
    hash: "beta",
    iconFile: "contact-action-beta.svg",
  },
  {
    title: "Talk to Sales",
    text: "Speak directly with our team about partnership opportunities.",
    hash: "sales",
    iconFile: "contact-action-sales.svg",
  },
  {
    title: "Existing Client Support",
    text: "Get help with your current Specialized Medical system.",
    hash: "support",
    iconFile: "contact-action-support.svg",
  },
]

const INTEREST_OPTIONS = [
  { value: "demo", label: "Request a demo" },
  { value: "beta", label: "No-risk beta trial" },
  { value: "sales", label: "Talk to sales" },
  { value: "support", label: "Existing client support" },
  { value: "other", label: "Other / general inquiry" },
]

const ContactPage = () => {
  const formRef = React.useRef(null)
  const [submitState, setSubmitState] = React.useState("idle")
  const [submitError, setSubmitError] = React.useState("")

  const scrollToForm = (interest) => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    if (interest && formRef.current) {
      const select = formRef.current.querySelector('select[name="interest"]')
      if (select) {
        select.value = interest
      }
    }
  }

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            data[key] == null ? "" : String(data[key])
          )}`
      )
      .join("&")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitState === "submitting") return
    setSubmitState("submitting")
    setSubmitError("")

    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("firstName"),
          lastName: fd.get("lastName"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          interest: fd.get("interest"),
          message: fd.get("message"),
          botField: fd.get("bot-field"),
        }),
      })
      if (!res.ok) throw new Error("send-failed")
      setSubmitState("success")
      form.reset()
      window.location.assign("/thanks/")
    } catch (err) {
      setSubmitState("error")
      setSubmitError(
        "Sorry—something went wrong. Please try again or call 1-855-773-2633."
      )
    }
  }

  return (
    <main className="contact-page contact-page--figma" data-design="figma-19-604">
      <section className="contact-figma-hero" aria-labelledby="contact-hero-heading">
        <div className="contact-figma-hero__plate">
          <div
            className="contact-figma-hero__bg"
            style={{ backgroundImage: `url(${IMG.hero})` }}
            role="presentation"
          />
          <div className="contact-figma-hero__gradient" aria-hidden="true" />
          <div className="figma-container contact-figma-hero__inner">
            <p className="figma-hero__pill">
              <span className="figma-hero__pill-dot" aria-hidden="true" />
              Contact Us
            </p>
            <h1 id="contact-hero-heading" className="contact-figma-hero__title">
              Let&apos;s Talk About{" "}
              <span className="contact-figma-hero__title-accent">Better Cardiac</span>{" "}
              Monitoring
            </h1>
            <p className="contact-figma-hero__lead">
              Choose the right path for your practice.
            </p>
          </div>
        </div>
      </section>

      <section className="figma-section contact-actions" aria-label="Contact options">
        <div className="figma-container">
          <div className="contact-actions__grid">
            {ACTION_CARDS.map((card) => (
              <button
                key={card.title}
                type="button"
                className="contact-action-card"
                onClick={() => scrollToForm(card.hash)}
              >
                <div className="contact-action-card__icon" aria-hidden>
                  <img
                    src={ICON(card.iconFile)}
                    alt=""
                    width={20}
                    height={20}
                    decoding="async"
                  />
                </div>
                <h2 className="contact-action-card__title">{card.title}</h2>
                <p className="contact-action-card__text">{card.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="figma-section contact-main"
        id="contact-form"
        aria-labelledby="contact-main-heading"
      >
        <div className="figma-container">
          <div className="contact-main__panel">
            <div className="contact-main__info">
              <h2 id="contact-main-heading" className="contact-main__title">
                Why{" "}
                <span className="contact-main__title-accent">
                  Specialized Medical?
                </span>
              </h2>
              <ul className="contact-main__list">
                {WHY_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="contact-main__quote" role="figure">
                <p className="contact-main__quote-line">
                  &ldquo;Trusted by physicians and appreciated by patients for
                  real-time data, rapid reporting, and easy-to-wear monitor
                  design.&rdquo;
                </p>
                <p className="contact-main__quote-line contact-main__quote-line--emph">
                  &ldquo;This monitor system is SO MUCH better than the old
                  way!&rdquo; — R. Gall
                </p>
              </div>
              <div className="contact-main__direct">
                <div className="contact-main__line">
                  <img
                    src={ICON("vector3527-jgyk.svg")}
                    alt=""
                    width={20}
                    height={20}
                    decoding="async"
                  />
                  <p>
                    <span className="contact-main__phone-muted">
                      1-855-SPEC-MED
                    </span>{" "}
                    <span className="contact-main__phone-strong">
                      (1-855-773-2633)
                    </span>
                  </p>
                </div>
                <div className="contact-main__line">
                  <img
                    src={ICON("fi62447103527-gtjs.svg")}
                    alt=""
                    width={20}
                    height={20}
                    decoding="async"
                  />
                  <a href="mailto:info@specialized-med.com">
                    info@specialized-med.com
                  </a>
                </div>
                <div className="contact-main__line">
                  <img
                    src={imagesPath("figma-assets/location_icon.png")}
                    alt=""
                    width={20}
                    height={20}
                    decoding="async"
                  />
                  <span>
                    Specialized Medical, LLC 34145 Pacific Coast Highway, #700
                    Dana Point, CA 92629
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-main__form-wrap" ref={formRef}>
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thanks/"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span className="contact-form__label">First name</span>
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                    />
                  </label>
                  <label className="contact-form__field">
                    <span className="contact-form__label">Last name</span>
                    <input
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                    />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span className="contact-form__label">Email</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                  <label className="contact-form__field">
                    <span className="contact-form__label">
                      Phone number (optional)
                    </span>
                    <input name="phone" type="tel" autoComplete="tel" />
                  </label>
                </div>
                <label className="contact-form__field contact-form__field--full">
                  <span className="contact-form__label">
                    I am interested in…
                  </span>
                  <select name="interest" defaultValue="">
                    <option value="">Select an option</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="contact-form__field contact-form__field--full">
                  <span className="contact-form__label">Message</span>
                  <textarea name="message" rows={5} placeholder="" />
                </label>
                {submitState === "error" ? (
                  <p className="contact-form__error" role="status">
                    {submitError}
                  </p>
                ) : null}
                <button type="submit" className="contact-form__submit">
                  {submitState === "submitting" ? "Submitting…" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-cta contact-figma-cta"
        aria-labelledby="contact-cta-heading"
      >
        <div className="figma-container">
          <div className="figma-cta__box">
            <h2
              id="contact-cta-heading"
              className="figma-h2 figma-h2--center figma-h2--narrow"
            >
              Start Your No-Risk
              <br />
              <span className="figma-h2__accent">Beta Trial</span>
            </h2>
            <p className="figma-cta__p figma-cta__p--lead">
              See how Specialized Medical can support your practice with live-streaming
              ECG data and a simplified office workflow—then start a no-obligation beta
              from the form above. If it isn’t the right fit, we’ll take everything
              back—no hassle.
            </p>
            <div className="figma-cta__actions">
              <a className="figma-btn figma-btn--solid" href="#contact-form">
                Start Your No-Risk Beta Trial
              </a>
              <a className="figma-cta__talk" href="tel:+18557732633">
                Talk to Our Team→
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage

export function Head() {
  return (
    <>
      <title>Contact Us | Specialized Medical</title>
      <meta
        name="description"
        content="Contact Specialized Medical for demos, beta trials, sales, and support—turn-key cardiac monitoring for your practice."
      />
    </>
  )
}
