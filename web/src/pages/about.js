import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const IMG = {
  hero: "/images/figma-about/Group%201261157513.png",
  whoTeam: "/images/figma-about/who-team.jpg",
  compactDevice: "/images/figma-about/compact-device.jpg",
}

const WHO_PARAS = [
  "Specialized Medical is redefining what cardiac monitoring should look like for today’s medical practices. We partner with physicians, cardiology groups, and cardiovascular programs to provide a smarter, more complete monitoring model built around live-streaming ECG data, operational simplicity, and real clinical support.",
  "Our primary featured monitor is the S-Patch Monitoring System. We also maintain Lead-Wire as a secondary monitoring option where appropriate. This keeps the lineup clear while supporting a range of practice needs.",
  "Specialized Medical also removes much of the workload that typically falls on the practice. From simplified setup and 24/7 monitoring to real-time alerts, EMR-ready reporting, physician review workflow, billing support, and zero-cost equipment, our model is built to support the office from start to finish.",
  "We are not just providing a monitor. We are providing a better way for practices to monitor patients, manage workflow, and gain confidence in the data they receive.",
]

const WHY_CARDS = [
  {
    icon: "/images/figma-about/Vector.png",
    title: "Complete Turn-Key Cardiac Monitoring",
    body:
      "Physician practices choose Specialized Medical because we provide more than a monitor — we deliver complete turn-key cardiac monitoring built around real-time data, operational support, and a workflow designed for both the office and the patient.",
  },
  {
    icon: "/images/figma-about/Group.png",
    titleLines: ["Practice Integration", "Made Easy"],
    body:
      "Final reports are EMR-ready and can be pushed into your system. Review, interpret, date, and sign reports through our secure provider portal. Billing templates (CPT and ICD-10) and operational support help your team stay efficient.",
  },
  {
    icon: "/images/figma-about/Group 1261157411.png",
    title: "Accuracy. Speed. Simplicity. Profitability.",
    body:
      "Because our devices transmit in real time, there is no delay in data, no manual uploading, and no gaps in rhythm interpretation. Our reporting is faster, more accurate, and designed to support efficient workflow for your practice.",
  },
  {
    icon: "/images/figma-about/image%20(1)%201.png",
    iconWidth: 20,
    iconHeight: 24,
    title: "Reduce Friction at Every Step",
    body:
      "Our model is designed to reduce friction at every step. Practices can support Holter, Extended Holter, Event Monitoring, and Telemetry (MCT), access live-streaming ECG data, receive real-time arrhythmia alerts, and rely on final reports that are clear, actionable, and ready for physician review. This means less delay, less manual work, and greater confidence in the monitoring process.",
  },
]

const COMPACT_BULLETS = [
  "S-Patch weighs 0.6 oz—less than four sheets of paper",
  "Simple, minimal form factor (S-Patch)",
  "S-Patch runs at least 10 days per battery, supporting longer monitoring periods with less interruption",
  "S-Patch is water-resistant (IP55) for everyday wear",
  "Industry-leading ECG clarity on S-Patch",
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
            Specialized Medical provides turnkey cardiac monitoring support designed for
            physician practices that need faster visibility, simplified workflow, and
            dependable reporting.
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
        <ul className="about-figma-why__bullets">
          <li>Physician-ready reports and secure portal workflow</li>
          <li>24/7 monitoring and real-time arrhythmia alerts</li>
          <li>Zero-cost equipment and practice-ready onboarding</li>
          <li>24/7 multilingual patient support</li>
        </ul>
        <div className="about-figma-why__grid">
          {WHY_CARDS.map((card) => (
            <article
              key={card.title || card.titleLines?.join("-")}
              className={
                card.iconSize
                  ? "about-figma-why-card about-figma-why-card--large-icon"
                  : "about-figma-why-card"
              }
            >
              <div className="about-figma-why-card__icon" aria-hidden="true">
                <img
                  src={card.icon}
                  alt=""
                  width={card.iconWidth ?? card.iconSize ?? 20}
                  height={card.iconHeight ?? card.iconSize ?? 20}
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
            Evaluate Specialized Medical with no long-term commitment.
          </p>
          <div className="figma-cta__actions about-figma-cta__actions">
            <Link className="figma-btn figma-btn--solid" to="/contact/">
              Start Your No-Risk Beta Trial
            </Link>
            <Link className="figma-cta__talk" to="/contact/">
              Talk to our team →
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
    <Seo
      title="About Us"
      description="Who we are, why practices choose Specialized Medical, and how our S-Patch monitoring model supports modern physician practices."
      pathname="/about/"
      image="/images/figma-about/hero-about.jpg"
    />
  )
}
