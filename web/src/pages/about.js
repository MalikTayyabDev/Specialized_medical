import * as React from "react"
import { Link } from "gatsby"

const IMG = {
  hero: "/images/figma-about/Rectangle%204%20(1).png",
  whoTeam: "/images/figma-about/who-team.jpg",
  compactDevice: "/images/figma-about/compact-device.jpg",
}

const WHO_PARAS = [
  "Specialized Medical is redefining what cardiac monitoring should look like for today’s medical practices. We partner with physicians, cardiology groups, and cardiovascular programs to provide a smarter, more complete monitoring model built around live-streaming ECG data, operational simplicity, and real clinical support.",
  "Our system is designed to do more than record data. It delivers continuous, real-time ECG visibility through a connected monitoring platform that helps reduce delays, improve clinical awareness, and support faster decision-making. With four tests from one device — Holter, Extended Holter, Event, and Telemetry (MCT) — we make it easier for practices to manage monitoring needs without added complexity.",
  "Specialized Medical also removes much of the workload that typically falls on the practice. From simplified setup and 24/7 monitoring to real-time alerts, EMR-ready reporting, physician review workflow, billing support, and zero-cost equipment, our model is built to support the office from start to finish.",
  "We are not just providing a monitor. We are providing a better way for practices to monitor patients, manage workflow, and gain confidence in the data they receive.",
]

const WHY_CARDS = [
  {
    icon: "/images/figma-about/figma-why-card1-icon.png",
    iconFull: true,
    title: "Complete Turn-Key Cardiac Monitoring",
    body:
      "Physician practices choose Specialized Medical because we provide more than a monitor — we deliver complete turn-key cardiac monitoring built around real-time data, operational support, and a workflow designed for both the office and the patient.",
  },
  {
    icon: "/images/figma-about/figma-why-card2-icon.png",
    titleLines: ["Practice Integration", "Made Easy"],
    body:
      "Final reports are EMR-ready and can be automatically pushed into your system. Reports are typically delivered within 24 to 48 hours after test completion, supporting faster physician review and a more efficient office workflow. Electronically review, interpret, date, and sign final reports. Customized billing templates with all CPT and ICD-10 codes provided. We work directly with your billing staff or third-party biller for seamless claims submission. Our portal tracks device usage and alerts your staff about any inactive or unreturned monitors",
  },
  {
    icon: "/images/figma-about/figma-why-card3-icon.png",
    title: "Accuracy. Speed. Simplicity. Profitability.",
    body:
      "Because our devices transmit in real time, there is no delay in data, no manual uploading, and no gaps in rhythm interpretation. Our reporting is faster, more accurate, and designed to support efficient workflow for your practice.",
  },
  {
    icon: "/images/figma-about/figma-why-card3-icon.png",
    title: "Reduce Friction at Every Step",
    body:
      "Our model is designed to reduce friction at every step. Practices can perform multiple test types from one device, access live-streaming ECG data, receive real-time arrhythmia alerts, and rely on final reports that are clear, actionable, and ready for physician review. This means less delay, less manual work, and greater confidence in the monitoring process.",
  },
]

const COMPACT_BULLETS = [
  "Weighs less than four sheets of paper (0.6 oz)",
  "Simple, minimal form factor",
  "The monitor runs for a minimum of 10 days per battery, supporting longer monitoring periods with less interruption.",
  "Water-resistant (IP55 rated)",
  "Industry-leading ECG clarity",
  "Precise P-wave definition",
]

const AboutPage = () => (
  <main className="about-page about-page--figma" data-design="about-393-519">
    <section className="about-figma-hero" aria-labelledby="about-hero-heading">
      <div className="about-figma-hero__plate">
        <div
          className="about-figma-hero__bg"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          role="presentation"
        />
        <div className="about-figma-hero__gradient" aria-hidden="true" />
        <div className="figma-container about-figma-hero__inner">
          <p className="figma-hero__pill">
            <span className="figma-hero__pill-dot" aria-hidden="true" />
            About Us
          </p>
          <h1 id="about-hero-heading" className="about-figma-hero__title">
            A Better Partner for{" "}
            <span className="about-figma-hero__title-accent">Cardiac Monitoring</span>
          </h1>
          <p className="about-figma-hero__lead">
            Specialized Medical provides complete turn-key cardiac monitoring support
            designed specifically for physician practices. We believe doctors deserve
            better — better technology, better workflow, and better support.
          </p>
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-who" aria-labelledby="who-heading">
      <div className="figma-container">
        <div className="about-figma-who__grid">
          <div className="about-figma-who__media">
            <img
              src={IMG.whoTeam}
              alt="Specialized Medical clinical team"
              width={630}
              height={528}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-figma-who__story">
            <h2 id="who-heading" className="about-figma-who__title">
              <span className="about-figma-who__title-w">Who We</span>
              <span className="about-figma-who__title-a"> Are</span>
            </h2>
            {WHO_PARAS.map((text) => (
              <p key={text.slice(0, 48)} className="about-figma-who__p">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section
      className="figma-section about-figma-why about-figma-why--cards"
      aria-labelledby="why-heading"
      data-design="figma-486-724"
    >
      <div className="figma-container">
        <h2 id="why-heading" className="about-figma-why__heading">
          <span className="about-figma-why__heading-w">Why Practices</span>
          <span className="about-figma-why__heading-a"> Choose Us</span>
        </h2>
        <div className="about-figma-why__grid">
          {WHY_CARDS.map((card) => (
            <article
              key={card.title || card.titleLines?.join("-")}
              className="about-figma-why-card"
            >
              <div
                className={
                  card.iconFull
                    ? "about-figma-why-card__icon about-figma-why-card__icon--full"
                    : "about-figma-why-card__icon"
                }
                aria-hidden="true"
              >
                <img
                  src={card.icon}
                  alt=""
                  width={card.iconFull ? 44 : 20}
                  height={card.iconFull ? 44 : 20}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="about-figma-why-card__title">
                {card.titleLines ? (
                  <>
                    {card.titleLines.map((line) => (
                      <span key={line} className="about-figma-why-card__title-line">
                        {line}
                      </span>
                    ))}
                  </>
                ) : (
                  card.title
                )}
              </h3>
              <p className="about-figma-why-card__body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-compact" aria-labelledby="compact-heading">
      <div className="figma-container about-figma-compact__grid">
        <div className="about-figma-compact__media">
          <img
            src={IMG.compactDevice}
            alt="Compact S-Patch cardiac monitor with scale reference"
            width={630}
            height={604}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-figma-compact__copy">
          <h2 id="compact-heading" className="about-figma-compact__title">
            <span className="about-figma-compact__title-line">Compact</span>{" "}
            <span className="about-figma-compact__title-accent">Design</span>
          </h2>
          <p className="about-figma-compact__lead">
            The future of ECG monitoring is small, smart, and simple. Our S-Patch device
            features an incredibly compact design and a lightweight form factor that
            ensures maximum patient compliance.
          </p>
          <ul className="about-figma-compact__list">
            {COMPACT_BULLETS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="figma-section figma-cta about-figma-cta" aria-labelledby="about-cta-heading">
      <div className="figma-container">
        <div className="figma-cta__box">
          <h2
            id="about-cta-heading"
            className="figma-h2 figma-h2--center figma-h2--narrow"
          >
            Start Your No-Risk
            <br />
            <span className="figma-h2__accent">Beta Trial</span>
          </h2>
          <p className="figma-cta__p figma-cta__p--about-italic">
            See how Specialized Medical can support your practice with: live-streaming ECG
            data; simplified office workflow.
          </p>
          <p className="figma-cta__p figma-cta__p--about-italic">
            No-Risk Beta Trial. Anyone can make promises. We would rather prove it. Try
            Specialized Medical on a few patients. If it is not the right fit, we will take
            everything back - no hassle, no obligation. Let us prove our value to you and
            your patients.
          </p>
          <div className="figma-cta__actions about-figma-cta__actions">
            <Link className="figma-btn figma-btn--solid" to="/contact/">
              Start Your No-Risk Beta Trial
            </Link>
            <Link className="figma-cta__talk" to="/contact/">
              Talk to Our Team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default AboutPage

export function Head() {
  return (
    <>
      <title>About Us | Specialized Medical</title>
      <meta
        name="description"
        content="Who we are, why practices choose Specialized Medical, and how our S-Patch monitoring model supports modern physician practices."
      />
    </>
  )
}
