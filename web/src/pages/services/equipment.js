import * as React from "react"
import { Link } from "gatsby"

const IMG = (file) => `/images/figma-services/${file}`

/* Copy aligned with Figma node 21:1200 */
const SPATCH_SPECS = [
  "4-in-1 monitoring system",
  "Supports Holter, Extended Holter, Event, and Telemetry (MCT)",
  "Live-streaming, real-time ECG data. Continuous, resilient real-time data streaming even in rural areas",
  "No manual uploading",
  "No data delays",
  "Dual-disk design: Disk 1 = 1.57 in diameter × 0.40 in thickness; Disk 2 = 1.41 in diameter × 0.24 in thickness",
  "Weight: 0.6 oz",
  "Battery lasts a minimum of 10 days",
  "Up to 30-day wear duration",
  "Water-resistant (IP55)",
  "Strong ECG clarity",
  "Precise P-Wave clarity",
  "Full Disclosure Holter Reports",
  "Advanced arrhythmia detection",
  "Encrypted data and secure reporting",
  "24/7 multilingual patient support",
  "Auto-generated billing templates",
  "Exclusive S-Patch reporting workflow: electronically review, interpret, date, and sign final reports",
  "Patient-friendly design",
]

const FEATURE_HIGHLIGHTS = [
  "Supports Holter, Extended Holter, Event Monitoring, and Telemetry (MCT)",
  "Simplified office workflow",
  "Designed for strong patient comfort and wearability",
  "Very small, lightweight dual-disk design—many patients forget they are wearing it",
  "Symptomatic vs. asymptomatic event clarity on reports",
  "No data delays",
  "Ideal for TAVR monitoring support",
  "Built for uninterrupted live-streaming performance across a wide range of patient environments, including rural areas",
]

const LEAD_SPECS = [
  "4-in-1 live-streaming monitoring system",
  "Supports Holter, Extended Holter, Event, and Telemetry (MCT)",
  "Live-streaming monitoring capability",
  "No manual uploading",
  "Dimensions: 4.2 in × 2.6 in × 0.8 in",
  "Weight: 4 oz (113 g)",
  "Battery must be changed every 2 days",
  "Up to 30-day wear duration",
  "Strong ECG clarity",
  "Precise P-Wave clarity",
  "Full Disclosure Holter Reports",
  "Advanced arrhythmia detection",
  "Encrypted data and secure reporting",
  "24/7 multilingual patient support",
  "Auto-generated billing templates",
]

const EquipmentPage = () => (
  <main className="equipment-page equipment-page--figma" data-design="figma-21-1200">
    <section className="eq-hero" aria-labelledby="eq-hero-heading">
      <div className="figma-container">
        <Link className="eq-hero__back" to="/services/">
          <span className="eq-hero__back-dot" aria-hidden />
          Our Services
        </Link>
        <h1 id="eq-hero-heading" className="eq-hero__title">
          Monitoring Equipment
          <span className="eq-hero__title-accent">Options</span>
        </h1>
        <hr className="eq-hero__line" aria-hidden />
      </div>
    </section>

    <section className="eq-compare" aria-labelledby="eq-compare-heading">
      <div className="figma-container">
        <h2 id="eq-compare-heading" className="eq-compare__title">
          Compare monitoring systems
        </h2>
        <p className="eq-compare__sub">
          S-Patch is the <strong>primary featured system</strong>. Lead-Wire is available as a{" "}
          <strong>secondary / legacy option</strong>. Specifications differ and are shown separately below.
        </p>
        <div className="eq-compare__table" role="table" aria-label="Monitoring systems comparison">
          <div className="eq-compare__row eq-compare__row--head" role="row">
            <div className="eq-compare__cell eq-compare__cell--feature" role="columnheader" />
            <div className="eq-compare__cell" role="columnheader">
              S-Patch
            </div>
            <div className="eq-compare__cell" role="columnheader">
              Lead-Wire
            </div>
          </div>

          {[
            ["Weight", "0.6 oz", "4 oz (113 g)"],
            ["Battery", "Minimum 10 days", "Change every 2 days"],
            ["Water resistance", "IP55", "Varies (see device specs)"],
            ["Workflow", "Enroll in web Portal → Hook Up → Disconnect", "Enroll in web Portal → Hook Up → Disconnect"],
            ["Positioning", "Primary featured system", "Secondary / legacy option"],
          ].map(([feature, sp, lw]) => (
            <div key={feature} className="eq-compare__row" role="row">
              <div className="eq-compare__cell eq-compare__cell--feature" role="rowheader">
                {feature}
              </div>
              <div className="eq-compare__cell" role="cell">
                {sp}
              </div>
              <div className="eq-compare__cell" role="cell">
                {lw}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="eq-section" aria-labelledby="eq-spatch-heading">
      <div className="figma-container">
        <div className="eq-panel">
          <div className="eq-panel__split">
            <div className="eq-panel__copy">
              <h2 id="eq-spatch-heading" className="eq-panel__h2">
                S-Patch
                <span className="eq-panel__h2-accent">Monitoring System</span>
              </h2>
              <p className="eq-panel__tag">Primary Featured System</p>
              <p className="eq-panel__text">
                The S-Patch Monitoring System is Specialized Medical’s primary featured monitoring solution. It supports Holter, Extended Holter, Event Monitoring, and Telemetry (MCT) while delivering live-streaming, real-time ECG data through a compact, patient-friendly design.
              </p>
              <p className="eq-panel__text">
                Our platform is designed for continuous, resilient real-time data streaming across a wide range of patient environments, including rural areas. Data is sent live to our monitoring center—no manual uploading and no data delays.
              </p>
              <p className="eq-panel__text">
                A major advantage of the S-Patch Monitoring System is patient comfort and wearability. Its compact, lightweight dual-disk design is intended to make the monitor easier for patients to wear during normal daily life.
              </p>
            </div>
            <div className="eq-panel__media">
              <img
                src={IMG("s-patch.jpg")}
                alt="Patient wearing the S-Patch monitoring system"
                width={522}
                height={727}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <hr className="eq-divider--red" aria-hidden />
        <div className="eq-cards">
          <div className="eq-card eq-card--spec">
            <h3 className="eq-card__title">Specifications</h3>
            <hr className="eq-card__rule" aria-hidden />
            <ul className="eq-list">
              {SPATCH_SPECS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="eq-card eq-card--feat">
            <h3 className="eq-card__title">Feature Highlights</h3>
            <hr className="eq-card__rule" aria-hidden />
            <ul className="eq-list">
              {FEATURE_HIGHLIGHTS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="eq-section eq-section--lead" aria-labelledby="eq-lead-heading">
      <div className="figma-container">
        <div className="eq-panel">
          <div className="eq-panel__split eq-panel__split--lead">
            <div className="eq-panel__media">
              <img
                src={IMG("lead-wire.jpg")}
                alt="Patient wearing the lead-wire monitoring system"
                width={522}
                height={748}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="eq-panel__copy">
              <h2 id="eq-lead-heading" className="eq-panel__h2">
                Lead-Wire
                <span className="eq-panel__h2-accent">Monitoring System</span>
              </h2>
              <p className="eq-panel__tag">Secondary / Legacy Monitoring Option</p>
              <p className="eq-panel__text">
                Lead-Wire remains available as an older secondary monitoring option where appropriate. It is shown separately so practices understand it is not the primary system being promoted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="eq-section eq-section--lead-spec" aria-labelledby="eq-lead-spec-heading">
      <div className="figma-container">
        <div className="eq-card eq-card--lead">
          <h3 id="eq-lead-spec-heading" className="eq-card__title">
            Lead-Wire Monitoring System Specifications
          </h3>
          <hr className="eq-card__rule" aria-hidden />
          <ul className="eq-list">
            {LEAD_SPECS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="figma-section figma-cta svc-figma-cta" aria-labelledby="eq-cta-heading">
      <div className="figma-container">
        <div className="figma-cta__box">
          <h2
            id="eq-cta-heading"
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
            Evaluate Specialized Medical with a small, no-obligation beta trial. If it isn’t
            the right fit, we’ll take everything back—no hassle.
          </p>
          <div className="figma-cta__actions">
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

export default EquipmentPage

export function Head() {
  return (
    <>
      <title>Monitoring Equipment Options | Specialized Medical</title>
      <meta
        name="description"
        content="S-Patch (primary) and Lead-Wire (secondary) monitoring systems—specifications, feature highlights, and equipment options for physician practices."
      />
    </>
  )
}
