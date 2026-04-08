import * as React from "react"
import { Link } from "gatsby"

const HERO_BG =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
const IMG_TESTIMONIAL =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"

const FAQ_SECTIONS = [
  {
    title: "How It Works",
    items: [
      {
        q: "Why should I choose Specialized Medical?",
        a: "We deliver true turn-key cardiac monitoring—enrollment, device logistics, 24/7 monitoring, and physician-ready reporting—so your practice gets live ECG clarity without adding operational burden. Our team is built around responsiveness, signal quality, and reports designed for fast clinical review.",
      },
      {
        q: "How long is the setup process?",
        a: "Most practices are up and running quickly. We provide training materials, hook-up guidance, and a dedicated onboarding path so your staff knows exactly what to expect from day one. Timelines can vary based on workflow preferences and volume.",
      },
      {
        q: "What if my patient has clinical issues during monitoring?",
        a: "Our monitoring center is staffed to support timely review and escalation pathways aligned with your practice’s protocols. Alerts can be delivered by phone, text, or email—so concerning patterns get in front of the right clinician faster.",
      },
      {
        q: "Is there technical support?",
        a: "Yes. Practices and patients can reach support for device questions, connectivity issues, and logistics. We focus on resolving issues quickly so studies stay on track and data stays complete.",
      },
    ],
  },
  {
    title: "Reports And Data",
    items: [
      {
        q: "How soon will I get results?",
        a: "Report timing depends on study type, duration, and event volume. Our workflows prioritize timely processing and clear delivery into your preferred workflow so you can act on results without chasing files.",
      },
      {
        q: "Can I customize my reports or delivery preferences?",
        a: "We work with practices to align report formatting and delivery methods where supported. Tell us your preferences during onboarding and we’ll map the best available options for your team.",
      },
      {
        q: "How do I access reports and study status?",
        a: "Depending on your configuration, reports and status updates are available through the channels we set up with your practice—designed to keep your team informed without extra steps.",
      },
      {
        q: "Is patient data secure?",
        a: "We take privacy and security seriously and follow industry-appropriate safeguards for protected health information. If you need specific compliance documentation, our team can provide details during onboarding.",
      },
    ],
  },
  {
    title: "Billing And Reimbursement",
    items: [
      {
        q: "Are CPT codes (93224–93227) applicable to these services?",
        a: "Coding and billing depend on medical necessity, payer rules, and documentation. We recommend confirming coverage and coding guidance with your billing team or coding advisor for your patient population and contracts.",
      },
      {
        q: "What is the billing process for monitoring services?",
        a: "Billing workflows vary by arrangement. Our team can walk you through how monitoring services are typically billed in partnership models and what documentation supports clean claims.",
      },
      {
        q: "What insurance plans are currently accepted?",
        a: "Accepted plans can change. Contact us for the most current information relevant to your region and practice, and we’ll help you understand options available to your patients.",
      },
    ],
  },
  {
    title: "Supplies And Equipment",
    items: [
      {
        q: "Do I need to buy any equipment?",
        a: "In most programs, practices receive what they need to run monitoring without purchasing hardware upfront. Details depend on your service arrangement—our team will outline exactly what is included.",
      },
      {
        q: "What supplies are included?",
        a: "Typical supplies include monitors, electrodes, and patient instruction materials as applicable to the study type. We’ll confirm the exact kit for each workflow during onboarding.",
      },
      {
        q: "How do I order more supplies?",
        a: "Practices can reorder through the process we establish with your office—designed to be simple so you’re never stuck waiting on basics during patient volume spikes.",
      },
    ],
  },
  {
    title: "Patient Experience",
    items: [
      {
        q: "Is the monitor comfortable?",
        a: "The device is designed for ambulatory wear with patient comfort in mind. Lightweight profiles and flexible wear options help improve compliance across multi-day studies.",
      },
      {
        q: "Can patients shower?",
        a: "Many devices support daily activity within published wear and water-resistance guidelines. We provide clear patient instructions so expectations match the device specifications.",
      },
      {
        q: "How long is the monitoring period?",
        a: "Duration depends on the clinical test ordered—Holter, extended Holter, event, or telemetry (MCT). Your team selects the study length that matches the clinical question.",
      },
      {
        q: "How do patients return the monitor?",
        a: "Return logistics are included as part of the turn-key workflow. Patients receive simple packaging and instructions to send equipment back promptly after the study ends.",
      },
    ],
  },
  {
    title: "Beta Trial",
    items: [
      {
        q: "What is the “No-Risk Beta Trial”?",
        a: "It’s a structured way for practices to experience our monitoring workflow with guided onboarding and support—so you can evaluate fit for your office before making a long-term commitment. Terms vary; ask our team for current availability.",
      },
      {
        q: "What’s included in the Beta Trial?",
        a: "Typically includes onboarding support, equipment logistics, monitoring services, and reporting aligned to your trial scope. We’ll provide a clear checklist up front so there are no surprises.",
      },
    ],
  },
]

const TESTIMONIALS = [
  {
    quote:
      "The workflow is straightforward for staff and patients. Reports are clear and easy to review—exactly what we needed.",
    author: "M. Smith",
  },
  {
    quote:
      "We get consistent signal quality and fast answers when questions come up. That reliability matters in a busy practice.",
    author: "Dr. John D.",
  },
  {
    quote:
      "Having one platform for multiple test types simplified training and follow-up. Support has been responsive.",
    author: "Practice Manager",
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
    <main className="faq-page">
      <section className="faq-hero" aria-labelledby="faq-hero-heading">
        <div
          className="faq-hero__bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          role="presentation"
        />
        <div className="faq-hero__overlay" />
        <div className="container faq-hero__inner">
          <p className="faq-hero__pill">
            <span className="faq-hero__pill-dot" aria-hidden />
            FAQs
          </p>
          <h1 id="faq-hero-heading" className="faq-hero__title">
            <span className="faq-hero__title-line">Frequently Asked</span>
            <span className="faq-hero__title-line faq-hero__title-accent">
              Questions
            </span>
          </h1>
          <p className="faq-hero__lead">
            Find answers about monitoring workflows, reporting, billing, supplies,
            and the patient experience—organized by topic below.
          </p>
        </div>
      </section>

      <section className="faq-accordion" aria-label="FAQ topics">
        <div className="container faq-accordion__inner">
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
        className="faq-testimonials"
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <h2 id="testimonials-heading" className="faq-testimonials__title">
            What People Are <span className="accent">Saying</span>
          </h2>
          <div className="faq-testimonials__grid">
            <div className="faq-testimonials__photo">
              <img
                src={IMG_TESTIMONIAL}
                alt="Patient wearing a cardiac monitor"
                loading="lazy"
                decoding="async"
                width={480}
                height={640}
              />
            </div>
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
      </section>

      <section
        className="section-cta faq-cta"
        aria-labelledby="faq-cta-heading"
      >
        <div className="container">
          <h2 id="faq-cta-heading">
            Start Your No-Risk <span className="accent">Beta Trial</span>
          </h2>
          <p>
            Experience turnkey monitoring, live ECG visibility, and reporting
            built for busy practices—without the operational drag.
          </p>
          <div className="section-cta__actions faq-cta__actions">
            <Link className="btn btn--primary" to="/contact/">
              Start your no-risk trial
            </Link>
            <Link className="faq-cta__link" to="/contact/">
              Or schedule a demo
            </Link>
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
      <title>FAQs | Specialized Medical</title>
      <meta
        name="description"
        content="Answers about cardiac monitoring, reports, billing, supplies, patient experience, and the no-risk beta trial."
      />
    </>
  )
}
