import * as React from "react"
import { Link } from "gatsby"

const IMG = {
  hero: "/images/figma-faq/faq-hero.jpg",
  testimonial: "/images/figma-faq/faq-testimonial-portrait.jpg",
}

const FAQ_SECTIONS = [
  {
    title: "How It Works",
    items: [
      {
        q: "How does the office workflow work?",
        a: "Your medical assistant completes a simple 3-step process: Enroll the patient in the web portal, Hook-Up, and Disconnect. The workflow is designed to be straightforward for office staff and easy to repeat across patients. Once the patient is enrolled and leaves the office, Specialized Medical takes over the rest with continuous monitoring, real-time alerts, report generation, and patient support.",
      },
      {
        q: "How long does setup take?",
        a: "Most hook-ups are completed in minutes: enroll the patient, apply the monitor, and confirm the connection. We provide training materials and support so your team can repeat the same simple steps confidently across patients.",
      },
      {
        q: "What happens after the patient leaves?",
        a: "Specialized Medical provides 24/7 monitoring, real-time alerts when clinically appropriate, report generation, and patient support—so your practice is not managing connectivity, uploads, or study logistics after the visit.",
      },
      {
        q: "How are alerts delivered?",
        a: "Alerts can be delivered by phone, text, or email based on your practice preferences and escalation protocols, so the right clinician is notified quickly when action may be needed.",
      },
    ],
  },
  {
    title: "Reports and Data",
    items: [
      {
        q: "Are reports EMR-ready?",
        a: "Yes. Final reports are formatted for integration with your workflow and can be delivered in EMR-ready formats where supported, helping your team document and close the loop without chasing files.",
      },
      {
        q: "Can physicians electronically review, interpret, date, and sign reports?",
        a: "Yes. Physicians can complete review, interpretation, dating, and electronic signature through the supported workflow we configure with your practice.",
      },
      {
        q: "How are symptomatic vs. asymptomatic events shown?",
        a: "Reporting distinguishes patient-triggered (symptomatic) events from device-detected (asymptomatic) events so clinicians can interpret findings in the right clinical context.",
      },
      {
        q: "Is data live, or is it uploaded later?",
        a: "Our platform is built around live-streaming ECG data—there is no manual uploading step and no unnecessary delay in rhythm visibility during the monitoring period.",
      },
    ],
  },
  {
    title: "Billing and Reimbursement",
    items: [
      {
        q: "Are CPT and ICD-10 billing templates provided?",
        a: "Yes. We provide customized billing templates with applicable CPT and ICD-10 codes to support clean claims submission aligned to your documentation and payer requirements.",
      },
      {
        q: "Do you work with billing staff or third-party billers?",
        a: "Yes. We coordinate directly with your billing team or third-party biller to streamline submission and reduce back-and-forth on routine monitoring claims.",
      },
      {
        q: "What is the reimbursement potential?",
        a: "Reimbursement depends on medical necessity, payer rules, coding, and documentation. Your billing team or coding advisor should confirm coverage and fee schedules for your contracts and patient population.",
      },
    ],
  },
  {
    title: "Supplies and Equipment",
    items: [
      {
        q: "Do practices have to buy equipment?",
        a: "In most programs, practices do not purchase hardware upfront. Your agreement outlines what is included so you can scale monitoring without a capital equipment burden.",
      },
      {
        q: "What supplies are included?",
        a: "Typical kits include monitors, electrodes, and patient instruction materials appropriate to the study type. We confirm the exact contents during onboarding.",
      },
      {
        q: "How many monitors can be provided?",
        a: "Inventory scales with your expected volume and workflow. Our team works with you to right-size device availability so you are not waiting on equipment during busy weeks.",
      },
    ],
  },
  {
    title: "Patient Experience",
    items: [
      {
        q: "Is the monitor comfortable?",
        a: "The S-Patch monitor is designed to be lightweight and low-profile for ambulatory wear, supporting better compliance across multi-day studies.",
      },
      {
        q: "Is it water-resistant?",
        a: "Yes. The device is water-resistant (IP55 rated). Patients receive clear wear-and-care instructions so daily routines match the device specifications.",
      },
      {
        q: "How long does the battery last?",
        a: "Battery life supports extended monitoring—typically a minimum of about 10 days per charge depending on study settings—so patients are not constantly swapping power during the test.",
      },
      {
        q: "How small is the monitor?",
        a: "The monitor is extremely compact—about the weight of a few sheets of paper—with a minimal footprint that many patients barely notice during wear.",
      },
    ],
  },
  {
    title: "Beta Trial",
    items: [
      {
        q: "What is the No-Risk Beta Trial?",
        a: "It is a no-obligation way to try Specialized Medical on a small number of patients with guided onboarding and support—so you can evaluate workflow, reporting, and fit for your practice before committing long term.",
      },
      {
        q: "What happens if it is not the right fit?",
        a: "If it is not the right fit, we take everything back—no hassle, no obligation. We would rather prove our value on your terms than lock you into a program that does not work for your team or your patients.",
      },
    ],
  },
]

const TESTIMONIALS = [
  {
    quote:
      "They immediately transmitted the reports to me and then called me on my cell phone.",
    author: "Michael",
  },
  {
    quote: "I did not even realize I was wearing it",
    author: "R. Gall",
  },
  {
    quote: "I am not sure if this patient would be around today",
    author: "Dr. Catalina R.S.",
  },
]

function Chevron({ open }) {
  return (
    <svg
      className={`faq-item__chevron${open ? " is-open" : ""}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FaqPage() {
  const [openKey, setOpenKey] = React.useState("0-0")

  const toggle = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <main className="faq-page faq-page--figma" data-design="figma-17-396">
      <section className="faq-figma-hero" aria-labelledby="faq-hero-heading">
        <div className="faq-figma-hero__plate">
          <div
            className="faq-figma-hero__bg"
            style={{ backgroundImage: `url(${IMG.hero})` }}
            role="presentation"
          />
          <div className="faq-figma-hero__gradient" aria-hidden="true" />
          <div className="figma-container faq-figma-hero__inner">
            <p className="figma-hero__pill">
              <span className="figma-hero__pill-dot" aria-hidden="true" />
              FAQ
            </p>
            <h1 id="faq-hero-heading" className="faq-figma-hero__title">
              Frequently Asked{" "}
              <span className="faq-figma-hero__title-accent">Questions</span>
            </h1>
            <p className="faq-figma-hero__lead">
              Everything you need to know about Specialized Medical&apos;s cardiac
              monitoring services.
            </p>
          </div>
        </div>
      </section>

      <section className="figma-section faq-accordion" aria-label="FAQ topics">
        <div className="figma-container faq-accordion__inner">
          {FAQ_SECTIONS.map((section, sectionIndex) => (
            <div key={section.title} className="faq-category">
              <h2 className="faq-category__title">{section.title}</h2>
              <div className="faq-category__list">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openKey === key
                  const panelId = `faq-panel-${key}`
                  const triggerId = `faq-trigger-${key}`

                  return (
                    <div
                      key={item.q}
                      className={`faq-item${isOpen ? " is-open" : ""}`}
                    >
                      <button
                        type="button"
                        id={triggerId}
                        className="faq-item__trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(sectionIndex, itemIndex)}
                      >
                        <span className="faq-item__q">{item.q}</span>
                        <Chevron open={isOpen} />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        className="faq-item__panel"
                        hidden={!isOpen}
                      >
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="figma-section faq-testimonials"
        aria-labelledby="testimonials-heading"
      >
        <div className="figma-container">
          <div className="faq-testimonials__layout">
            <div className="faq-testimonials__photo">
              <img
                src={IMG.testimonial}
                alt="Patient during daily activity"
                loading="lazy"
                decoding="async"
                width={305}
                height={426}
              />
              <div className="faq-testimonials__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="faq-testimonials__right">
              <h2 id="testimonials-heading" className="faq-testimonials__title">
                What People Are{" "}
                <span className="faq-testimonials__title-accent">Saying</span>
              </h2>
              <div className="faq-testimonials__cards">
                {TESTIMONIALS.map((t) => (
                  <blockquote key={t.author} className="faq-testimonial-card">
                    <p>{t.quote}</p>
                    <footer>{t.author}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-cta faq-figma-cta"
        aria-labelledby="faq-cta-heading"
      >
        <div className="figma-container">
          <div className="figma-cta__box">
            <h2
              id="faq-cta-heading"
              className="figma-h2 figma-h2--center figma-h2--narrow"
            >
              Start Your No-Risk
              <br />
              <span className="figma-h2__accent">Beta Trial</span>
            </h2>
            <p className="figma-cta__p figma-cta__p--lead">
              See how Specialized Medical can support your practice with:
              live-streaming ECG data; simplified office workflow.
            </p>
            <p className="figma-cta__p">
              No-Risk Beta Trial. Anyone can make promises. We would rather prove
              it. Try Specialized Medical on a few patients. If it is not the
              right fit, we will take everything back - no hassle, no obligation.
              Let us prove our value to you and your patients.
            </p>
            <div className="figma-cta__actions">
              <Link className="figma-btn figma-btn--solid" to="/contact/">
                Start Your No-Risk Beta Trial
              </Link>
              <Link className="figma-cta__talk" to="/contact/">
                Talk to Our Team→
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FaqPage

export function Head() {
  return (
    <>
      <title>FAQ | Specialized Medical</title>
      <meta
        name="description"
        content="Everything you need to know about Specialized Medical's cardiac monitoring services—workflow, reports, billing, supplies, patient experience, and the no-risk beta trial."
      />
    </>
  )
}
