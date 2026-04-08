import * as React from "react"
import { ICON } from "../components/Layout"

const HERO_BG =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=80"

const WHY_POINTS = [
  "Live-streaming, real-time ECG data with industry-leading waveform clarity.",
  "Four tests from one device—Holter, extended Holter, event, and telemetry (MCT).",
  "Complete turn-key cardiac monitoring with enrollment through final report.",
  "Billing support and resources to help your practice navigate coding questions.",
  "No-risk beta trial options for practices evaluating a better monitoring partner.",
  "24/7 monitoring with alerts by phone, text, or email when timing matters.",
  "Detailed reporting designed for efficient clinical review and follow-up.",
  "Wireless technology built for patient comfort and reliable connectivity.",
  "Dedicated onboarding and technical support for your team and patients.",
  "HIPAA-aligned workflows with attention to privacy and data handling.",
  "Experienced technicians and clinical staff focused on quality and turnaround.",
]

const ACTION_CARDS = [
  {
    title: "Request a Demo",
    text: "See Specialized Medical in action with a live demonstration tailored to your workflow.",
    hash: "demo",
    icon: "chat",
  },
  {
    title: "Start Your No-Risk Beta Trial",
    text: "Try it on a few patients — no obligation — with guided onboarding from our team.",
    hash: "beta",
    icon: "play",
  },
  {
    title: "Talk to Sales",
    text: "Speak directly with our team about partnership opportunities and program fit.",
    hash: "sales",
    icon: "phone",
  },
  {
    title: "Existing Client Support",
    text: "Get help with your current Specialized Medical system, supplies, and logistics.",
    hash: "support",
    icon: "gear",
  },
]

const INTEREST_OPTIONS = [
  { value: "demo", label: "Request a demo" },
  { value: "beta", label: "No-risk beta trial" },
  { value: "sales", label: "Talk to sales" },
  { value: "support", label: "Existing client support" },
  { value: "other", label: "Other / general inquiry" },
]

function CardIcon({ name }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" }
  switch (name) {
    case "chat":
      return (
        <svg {...common} aria-hidden>
          <path
            d="M21 12a8 8 0 01-8 8H8l-5 3v-3H5a8 8 0 118-11h8v3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "play":
      return (
        <svg {...common} aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
        </svg>
      )
    case "phone":
      return (
        <svg {...common} aria-hidden>
          <path
            d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2A17 17 0 016.5 3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "gear":
      return (
        <svg {...common} aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33h.06a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.06a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.06a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
          />
        </svg>
      )
    default:
      return null
  }
}

const ContactPage = () => {
  const formRef = React.useRef(null)

  const scrollToForm = (interest) => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    if (interest && formRef.current) {
      const select = formRef.current.querySelector('select[name="interest"]')
      if (select) {
        select.value = interest
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const first = String(fd.get("firstName") || "").trim()
    const last = String(fd.get("lastName") || "").trim()
    const email = String(fd.get("email") || "").trim()
    const phone = String(fd.get("phone") || "").trim()
    const interest = String(fd.get("interest") || "").trim()
    const message = String(fd.get("message") || "").trim()

    const subject = encodeURIComponent("Contact form — Specialized Medical")
    const body = encodeURIComponent(
      [
        `Name: ${first} ${last}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interest: ${interest || "(not selected)"}`,
        "",
        message,
      ].join("\n")
    )
    window.location.href = `mailto:info@specialized-med.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div
          className="contact-hero__bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          role="presentation"
        />
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__inner">
          <p className="contact-hero__pill">
            <span className="contact-hero__pill-dot" aria-hidden />
            Contact Us
          </p>
          <h1 id="contact-hero-heading" className="contact-hero__title">
            Let&apos;s Talk About{" "}
            <span className="contact-hero__title-accent">
              Better Cardiac Monitoring
            </span>
          </h1>
          <p className="contact-hero__lead">
            Choose the right path for your practice.
          </p>
        </div>
      </section>

      <section className="contact-actions" aria-label="Contact options">
        <div className="container">
          <div className="contact-actions__grid">
            {ACTION_CARDS.map((card) => (
              <button
                key={card.title}
                type="button"
                className="contact-action-card"
                onClick={() => scrollToForm(card.hash)}
              >
                <div className="contact-action-card__icon" aria-hidden>
                  <CardIcon name={card.icon} />
                </div>
                <h2 className="contact-action-card__title">{card.title}</h2>
                <p className="contact-action-card__text">{card.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="contact-main"
        id="contact-form"
        aria-labelledby="contact-main-heading"
      >
        <div className="container">
          <div className="contact-main__panel">
            <div className="contact-main__info">
              <h2 id="contact-main-heading" className="contact-main__title">
                Why <span className="accent">Specialized Medical?</span>
              </h2>
              <ul className="contact-main__list">
                {WHY_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <blockquote className="contact-main__quote">
                <p>
                  &ldquo;Trusted by physicians and appreciated by patients… This
                  monitor system is SO MUCH better than the old way!&rdquo;
                </p>
                <footer>— R. Gail</footer>
              </blockquote>
              <div className="contact-main__direct">
                <div className="contact-main__line">
                  <img src={ICON("vector3527-jgyk.svg")} alt="" width={18} height={18} />
                  <a href="tel:+18557732633">1-855-SPEC-MED (1-855-773-2633)</a>
                </div>
                <div className="contact-main__line">
                  <img src={ICON("fi62447103527-gtjs.svg")} alt="" width={18} height={18} />
                  <a href="mailto:info@specialized-med.com">
                    info@specialized-med.com
                  </a>
                </div>
                <div className="contact-main__line">
                  <img src={ICON("vector3527-rp3.svg")} alt="" width={18} height={18} />
                  <span>
                    Specialized Medical, LLC
                    <br />
                    34145 Pacific Coast Highway, #700
                    <br />
                    Dana Point, CA 92629
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-main__form-wrap" ref={formRef}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                    <span className="contact-form__label">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </label>
                </div>
                <label className="contact-form__field contact-form__field--full">
                  <span className="contact-form__label">I am interested in…</span>
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
                  <textarea name="message" rows={5} placeholder="How can we help?" />
                </label>
                <button type="submit" className="contact-form__submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-cta contact-page-cta"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container">
          <h2 id="contact-cta-heading">
            Start Your No-Risk <span className="accent">Beta Trial</span>
          </h2>
          <p>
            Try Specialized Medical with guided onboarding and support—so your
            team can evaluate workflows, reporting, and patient experience with
            no long-term obligation.
          </p>
          <p>
            Questions before you begin? We&apos;re happy to walk through options
            for your practice.
          </p>
          <div className="section-cta__actions contact-page-cta__actions">
            <a className="btn btn--primary" href="#contact-form">
              Start Your No-Risk Beta Trial
            </a>
            <a className="contact-page-cta__link" href="tel:+18557732633">
              Talk to Our Team<span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="contact-trust" aria-label="Trust">
        <div className="container contact-trust__inner">
          <span className="contact-trust__badge">HIPAA Compliant</span>
          <a
            href="https://www.facebook.com/"
            className="contact-trust__social"
            aria-label="Facebook"
          >
            <img src={ICON("vector3527-h9kk.svg")} alt="" width={22} height={22} />
          </a>
        </div>
      </div>
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
