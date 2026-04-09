import * as React from "react"
import { Link } from "gatsby"

const IMG_SPATCH =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
const IMG_LEAD =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"

const SPATCH_SPECS = [
  "1–3 lead monitoring",
  "Live-streaming ECG",
  "Rechargeable",
  "Slim disk design (~0.3 oz)",
  "Up to 100-hour battery life",
  "Water resistant (IP22)",
  "Android & iPhone compatible",
]

const SPATCH_HIGHLIGHTS = [
  '"No-touch" provider-friendly service model',
  "Simplified workflow from hook-up through report",
  "Minimalist design for patient comfort",
  "Built-in Wi-Fi for reliable data transmission",
]

const LEAD_SPECS = [
  "Three-lead acquisition system",
  "Water resistant (IP67)",
  "~1.5 oz total weight",
  "Up to 100-hour battery life",
  "Cloud-based analysis and reporting",
]

const EquipmentPage = () => (
  <main className="equipment-page">
    <section className="equipment-hero" aria-labelledby="equipment-heading">
      <div className="container">
        <p className="equipment-hero__crumb">
          <Link to="/services/">Services</Link>
          <span className="equipment-hero__crumb-sep" aria-hidden>
            /
          </span>
          <span>For our doctors</span>
        </p>
        <h1 id="equipment-heading" className="equipment-hero__title">
          Monitoring Equipment{" "}
          <span className="equipment-hero__title-accent">Options</span>
        </h1>
        <p className="equipment-hero__rule" aria-hidden />
      </div>
    </section>

    <section className="equipment-block" aria-labelledby="spatch-heading">
      <div className="container">
        <div className="equipment-block__grid equipment-block__grid--img-right">
          <div className="equipment-block__copy">
            <h2 id="spatch-heading" className="equipment-block__name">
              S-Patch Monitoring System
            </h2>
            <p className="equipment-block__tag">Premium monitoring system</p>
            <p className="equipment-block__text">
              The S-Patch is designed for discreet, comfortable wear—so patients
              can move through daily life while your team receives dependable
              rhythm data. Lightweight hardware and thoughtful ergonomics help
              improve compliance across longer monitoring windows.
            </p>
            <p className="equipment-block__text">
              Real-time streaming keeps your clinical team aligned with what is
              happening on the rhythm strip, supporting timely decisions when
              symptoms and events need context.
            </p>
            <p className="equipment-block__text">
              When signal quality and patient experience both matter, the S-Patch
              delivers a premium monitoring experience without adding complexity
              to your office workflow.
            </p>
          </div>
          <div className="equipment-block__media">
            <img
              src={IMG_SPATCH}
              alt="Patient wearing the S-Patch monitoring device"
              loading="eager"
              decoding="async"
              width={640}
              height={720}
            />
          </div>
        </div>

        <div className="equipment-spec-grid">
          <div className="equipment-spec-box">
            <h3 className="equipment-spec-box__title">Specifications</h3>
            <ul className="equipment-list equipment-list--diamond">
              {SPATCH_SPECS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="equipment-spec-box">
            <h3 className="equipment-spec-box__title">Feature highlights</h3>
            <ul className="equipment-list equipment-list--diamond">
              {SPATCH_HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      className="equipment-block equipment-block--alt"
      aria-labelledby="lead-heading"
    >
      <div className="container">
        <div className="equipment-block__grid equipment-block__grid--img-left">
          <div className="equipment-block__media">
            <img
              src={IMG_LEAD}
              alt="Patient wearing the lead-wire monitoring system"
              loading="lazy"
              decoding="async"
              width={640}
              height={720}
            />
          </div>
          <div className="equipment-block__copy">
            <h2 id="lead-heading" className="equipment-block__name">
              Lead-Wire Monitoring System
            </h2>
            <p className="equipment-block__tag">Secondary monitoring option</p>
            <p className="equipment-block__text">
              For patients who may not be ideal candidates for patch-based wear
              or when your protocol calls for a traditional wired setup, our
              lead-wire system provides a dependable alternative—without
              sacrificing the clarity your team expects from ambulatory monitoring.
            </p>
          </div>
        </div>

        <div className="equipment-spec-box equipment-spec-box--full">
          <h3 className="equipment-spec-box__title">Specifications</h3>
          <ul className="equipment-list equipment-list--diamond equipment-list--columns">
            {LEAD_SPECS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section
      className="section-cta equipment-page-cta"
      aria-labelledby="equipment-cta-heading"
    >
      <div className="container">
        <h2 id="equipment-cta-heading">
          Start Your No-Risk <span className="accent">Beta Trial</span>
        </h2>
        <p>
          See how our monitoring programs can support your practice—schedule time
          with our team or start a no-obligation trial to evaluate workflows,
          reporting, and patient experience.
        </p>
        <div className="section-cta__actions equipment-page-cta__actions">
          <Link className="btn btn--primary" to="/contact/">
            Start Your No-Risk Beta Trial
          </Link>
          <Link className="equipment-page-cta__link" to="/contact/">
            Talk to Our Team<span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default EquipmentPage

export function Head() {
  return (
    <>
      <title>Monitoring Equipment Options | Specialized Medical Services</title>
      <meta
        name="description"
        content="S-Patch and lead-wire monitoring systems—specifications, features, and options for physician practices."
      />
    </>
  )
}
