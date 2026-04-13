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
        a: "Your medical assistant completes a simple 3-step process: Enroll in Web Portal → Hook-Up → Disconnect (Under 15 Minutes). The workflow is designed to be straightforward for office staff and easy to repeat across patients. Once the patient is enrolled and leaves the office, Specialized Medical takes over the rest with continuous monitoring, real-time alerts, report generation, and patient support.",
      },
      {
        q: "How long does setup take?",
        a: "In most cases, setup takes under 15 minutes. The process is designed to fit into normal office workflow without adding unnecessary burden to staff.",
      },
      {
        q: "What happens after the patient leaves?",
        a: "Once the patient leaves, Specialized Medical manages the active monitoring process for you. That includes 24/7 live monitoring across all test types, real-time arrhythmia alerts by email, text, or phone call, automatic generation and delivery of final reports, and patient support through our 24/7 multilingual call center.",
      },
      {
        q: "How are alerts delivered?",
        a: "Real-time arrhythmia alerts are delivered by email, text, or phone call, helping practices receive important findings quickly and respond appropriately.",
      },
    ],
  },
  {
    title: "Reports and Data",
    items: [
      {
        q: "Are reports EMR-ready?",
        a: "Yes. Final reports are EMR-ready and can be automatically pushed into your system. Reports are typically delivered within 24 to 48 hours after test completion, supporting faster physician review and a more efficient office workflow.",
      },
      {
        q: "Can physicians electronically review, interpret, date, and sign reports?",
        a: "Yes. Our workflow supports electronic physician review, interpretation, dating, and signature of final reports.",
      },
      {
        q: "How are symptomatic vs. asymptomatic events shown?",
        a: "Symptoms are entered digitally during the test and automatically appear on the final report above the matching ECG strips, making symptomatic vs. asymptomatic events immediately clear.",
      },
      {
        q: "Is data live, or is it uploaded later?",
        a: "Data is transmitted live to our monitoring center with no manual uploading and no data delays.",
      },
    ],
  },
  {
    title: "Billing and Reimbursement",
    items: [
      {
        q: "Are CPT and ICD-10 billing templates provided?",
        a: "Yes. Customized billing templates with CPT and ICD-10 codes are provided to support efficient billing workflow.",
      },
      {
        q: "Do you work with billing staff or third-party billers?",
        a: "Yes. We work directly with your billing staff or third-party biller to support seamless claims submission.",
      },
      {
        q: "What is the reimbursement potential?",
        a: "Practices routinely receive gross reimbursements exceeding $875.00 for a Holter test followed by a Telemetry test, based on current Medicare rates.",
      },
    ],
  },
  {
    title: "Supplies and Equipment",
    items: [
      {
        q: "Do practices have to buy equipment?",
        a: "No. Specialized Medical provides the equipment needed to support your program, with no equipment purchase required.",
      },
      {
        q: "What supplies are included?",
        a: "Supplies include electrodes, batteries, razors, alcohol wipes, and other essentials needed for monitoring.",
      },
      {
        q: "How many monitors can be provided?",
        a: "We provide as many monitors as your patient volume requires.",
      },
    ],
  },
  {
    title: "Patient Experience",
    items: [
      {
        q: "Is the monitor comfortable?",
        a: "Yes. The monitor is designed to be lightweight, easy to wear, and simple for patients to manage throughout the test. Comfort and ease of wear are a key part of our Patient-Friendly Design approach.",
      },
      {
        q: "Is it water-resistant?",
        a: "Yes. The monitor is water-resistant (IP55) to better support everyday wear.",
      },
      {
        q: "How long does the battery last?",
        a: "The monitor runs for a minimum of 10 days per battery, supporting longer monitoring periods with less interruption.",
      },
      {
        q: "How small is the monitor?",
        a: "Each monitor weighs just 0.6 oz, or less than four sheets of paper, making it compact, lightweight, and easier for patients to wear.",
      },
    ],
  },
  {
    title: "Beta Trial",
    items: [
      {
        q: "What is the No-Risk Beta Trial?",
        a: "The No-Risk Beta Trial allows your practice to try Specialized Medical on a few patients and experience the value of our system firsthand, including live-streaming ECG data and a simplified office workflow.",
      },
      {
        q: "What happens if it is not the right fit?",
        a: "If Specialized Medical is not the right fit for your practice, we will take everything back — no hassle, no obligation.",
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
