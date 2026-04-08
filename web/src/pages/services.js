import * as React from "react"
import { Link } from "gatsby"
import { ICON } from "../components/Layout"

const HERO_BG =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80"
const HERO_PATIENT =
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80"

const IMG = {
  fourTests:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  ecgStrip:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80",
  mctWoman:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f62b?auto=format&fit=crop&w=1000&q=80",
  holterMan:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
  reporting:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  ecgApp:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  sensor:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
  productA:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
  productB:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
  productC:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
}

const CAPABILITIES = [
  ["vector3526-3i69.svg", "Holter Monitoring"],
  ["vector3526-633n.svg", "Cardiac Event Monitoring"],
  ["vector3526-fv7g.svg", "Mobile Cardiac Telemetry"],
  ["vector3526-owz9.svg", "Extended Holter"],
  ["fi151927003526-1meh.svg", "Home Sleep Testing"],
  ["fi68134193542-mcs9.svg", "Pacemaker / ICD Monitoring"],
]

const WIRELESS = [
  [
    "vector3525-f3b.svg",
    "Continuous connectivity",
    "Wireless transmission keeps data flowing from the patient to our monitoring center without manual uploads or gaps that slow care.",
  ],
  [
    "vector3525-kmvj.svg",
    "Comfortable wear",
    "Lightweight, patient-friendly designs help improve compliance so studies finish with complete, actionable data.",
  ],
  [
    "vector3525-wjr6.svg",
    "Rapid awareness",
    "Timely visibility into rhythm changes supports faster clinical decisions when every minute matters.",
  ],
  [
    "fi18181343526-83wj.svg",
    "Streamlined workflow",
    "Enrollment, hook-up, and reporting fit into your office routine with support from our team.",
  ],
]

const ADVANTAGE = [
  "One platform for Holter, Extended Holter, Event, and Telemetry (MCT) testing.",
  "Live ECG streaming with industry-leading waveform clarity.",
  "Digital symptom capture tied to ECG segments on the final report.",
  "24/7 monitoring with alerts by phone, text, or email.",
  "Reports designed for clear clinical review and faster follow-up.",
]

function CheckIcon() {
  return (
    <svg
      className="services-advantage__check"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarRow() {
  const src = ICON("star13663-lr4m.svg")
  return (
    <div className="stars" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <img key={i} src={src} alt="" width={18} height={18} />
      ))}
    </div>
  )
}

const ServicesPage = () => (
  <main className="services-page">
    <section className="services-hero" aria-label="Services hero">
      <div
        className="services-hero__bg"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="presentation"
      />
      <div className="services-hero__overlay" />
      <div className="container">
        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <h1 className="services-hero__title">
              Your Tests. <span className="accent">One Device.</span>
            </h1>
            <p className="services-hero__lead">
              The future of cardiac monitoring is here.
            </p>
            <div className="services-hero__actions">
              <Link className="btn btn--primary" to="/contact/">
                Get Started
              </Link>
              <a className="btn btn--outline" href="#capabilities">
                Learn More
              </a>
            </div>
          </div>
          <div className="services-hero__photo">
            <img
              src={HERO_PATIENT}
              alt="Patient resting while connected to monitoring equipment"
              loading="eager"
              decoding="async"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="services-cap"
      id="capabilities"
      aria-labelledby="cap-heading"
    >
      <div className="container">
        <h2 id="cap-heading" className="services-cap__title">
          Our Test Capabilities
        </h2>
        <div className="services-cap__grid">
          {CAPABILITIES.map(([icon, label]) => (
            <div key={label} className="services-cap__item">
              <div className="services-cap__icon">
                <img src={ICON(icon)} alt="" width={48} height={48} />
              </div>
              <p className="services-cap__label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="services-split" aria-labelledby="split-a">
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__copy">
            <h2 id="split-a" className="services-split__title">
              <span className="accent">Four Tests.</span> One Device.
            </h2>
            <p className="services-split__text">
              Perform Holter, Extended Holter, Cardiac Event, and Mobile Cardiac
              Telemetry from a single monitor—so your team can standardize
              workflows while patients benefit from one familiar device.
            </p>
            <p className="services-split__text">
              Flexible test sequencing supports evolving clinical questions
              without swapping hardware or re-training staff on multiple systems.
            </p>
          </div>
          <div className="services-split__media">
            <img
              src={IMG.fourTests}
              alt="Patient wearing cardiac monitoring sensors"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="services-split services-split--alt services-split--reverse"
      aria-labelledby="split-b"
    >
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__media">
            <img
              src={IMG.ecgStrip}
              alt="ECG rhythm strip example"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="services-split__copy">
            <h2 id="split-b" className="services-split__title">
              The <span className="accent">3-Lead ECG</span> Advantage
            </h2>
            <p className="services-split__text">
              Three-lead acquisition delivers robust rhythm assessment with
              clarity physicians can trust—supporting confident reads across
              common arrhythmias and capture scenarios.
            </p>
            <p className="services-split__text">
              Consistent lead placement and high-quality signal processing help
              reduce noise and ambiguity in long-term recordings.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="services-split" aria-labelledby="split-c">
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__copy">
            <h2 id="split-c" className="services-split__title">
              <span className="accent">Mobile Cardiac</span> Monitoring System
            </h2>
            <ul className="services-split__list">
              <li>Real-time transmission during daily activities</li>
              <li>Symptom correlation with rhythm data</li>
              <li>Designed for longer monitoring windows when indicated</li>
            </ul>
            <Link className="btn btn--primary" to="/contact/">
              Learn More
            </Link>
          </div>
          <div className="services-split__media">
            <img
              src={IMG.mctWoman}
              alt="Patient wearing mobile cardiac telemetry device"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="services-split services-split--alt services-split--reverse"
      aria-labelledby="split-d"
    >
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__media">
            <img
              src={IMG.holterMan}
              alt="Patient holding Holter recording device"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="services-split__copy">
            <h2 id="split-d" className="services-split__title">
              <span className="accent">24 / 48 / 72 / 96 Hour</span> Holter
              Monitoring System
            </h2>
            <ul className="services-split__list">
              <li>Flexible duration options to match the clinical question</li>
              <li>High-quality Holter acquisition and reporting</li>
              <li>Support from enrollment through final report delivery</li>
            </ul>
            <Link className="btn btn--primary" to="/contact/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="services-wireless" aria-labelledby="wireless-heading">
      <div className="container">
        <h2 id="wireless-heading" className="services-wireless__title">
          Benefit From <span className="accent">Wireless Technology</span>
        </h2>
        <div className="services-wireless__grid">
          {WIRELESS.map(([icon, title, body]) => (
            <article key={title} className="services-wireless__card">
              <div className="services-wireless__card-icon">
                <img src={ICON(icon)} alt="" width={40} height={40} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="services-advantage" aria-labelledby="adv-heading">
      <div className="container">
        <h2 id="adv-heading" className="services-advantage__title">
          The <span className="accent">Specialized Medical</span> Advantage
        </h2>
        <ul className="services-advantage__list">
          {ADVANTAGE.map((line) => (
            <li key={line}>
              <CheckIcon />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="services-reporting" aria-labelledby="report-heading">
      <div className="container">
        <div className="services-reporting__inner">
          <div>
            <h2 id="report-heading" className="services-reporting__title">
              <span className="accent">Detailed Reporting</span> That Supports
              Better Clinical Decisions
            </h2>
            <p className="services-reporting__text">
              Comprehensive reports combine rhythm summaries, representative
              strips, and symptom context—presented for efficient review so you
              can move from data to decision with confidence.
            </p>
          </div>
          <div className="services-reporting__shot">
            <img
              src={IMG.reporting}
              alt="Sample monitoring report with charts and ECG strips"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="services-products" aria-labelledby="products-heading">
      <div className="container">
        <h2 id="products-heading" className="services-products__title">
          Our <span className="accent">Products</span>
        </h2>
        <div className="services-products__list">
          <article className="services-product-card">
            <div className="services-product-card__thumb">
              <img src={IMG.productA} alt="" loading="lazy" />
            </div>
            <div className="services-product-card__body">
              <h3>Cardiac Event Monitor</h3>
              <p>
                Capture transient symptoms with patient-friendly event logging
                and clear ECG correlation on the final report.
              </p>
              <div className="services-product-card__meta">
                <StarRow />
                <a className="services-product-card__link" href="#split-b">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article className="services-product-card">
            <div className="services-product-card__thumb">
              <img src={IMG.productB} alt="" loading="lazy" />
            </div>
            <div className="services-product-card__body">
              <h3>Mobile Cardiac Telemetry</h3>
              <p>
                Extended real-time monitoring with alerts and clinical review
                from our monitoring center.
              </p>
              <div className="services-product-card__meta">
                <a className="services-product-card__link" href="#split-c">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article className="services-product-card">
            <div className="services-product-card__thumb">
              <img src={IMG.productC} alt="" loading="lazy" />
            </div>
            <div className="services-product-card__body">
              <h3>Holter &amp; Extended Holter</h3>
              <p>
                From 24-hour studies through multi-day extended Holter—one
                platform and consistent reporting.
              </p>
              <div className="services-product-card__meta">
                <StarRow />
                <a className="services-product-card__link" href="#split-d">
                  Read More
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      className="services-split services-split--reverse"
      aria-labelledby="split-e"
    >
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__media">
            <img
              src={IMG.ecgApp}
              alt="Smartphone showing ECG monitoring application"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="services-split__copy">
            <h2 id="split-e" className="services-split__title">
              <span className="accent">Real-time ECG</span> &amp; Arrhythmia
              Analysis
            </h2>
            <ul className="services-split__list">
              <li>Live rhythm visibility for your clinical team</li>
              <li>Designed for timely awareness of concerning patterns</li>
              <li>Digital tools that support patient engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="services-split services-split--alt" aria-labelledby="split-f">
      <div className="container">
        <div className="services-split__inner">
          <div className="services-split__copy">
            <h2 id="split-f" className="services-split__title">
              <span className="accent">Faster,</span> Reliable Insights
            </h2>
            <p className="services-split__text">
              Our workflows prioritize signal quality, timely review, and delivery
              of reports into your practice—so you spend less time chasing data
              and more time with patients.
            </p>
          </div>
          <div className="services-split__media">
            <img
              src={IMG.sensor}
              alt="Clinical sensor and monitoring equipment"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="services-trust" aria-labelledby="trust-heading">
      <div className="container">
        <h2 id="trust-heading" className="services-trust__title">
          <span className="accent">Trust</span> the Expert Reports
        </h2>
        <p className="services-trust__text">
          Experienced technicians and clinical staff review recordings with
          attention to detail—so your team receives reports that are clear,
          complete, and ready for clinical action.
        </p>
      </div>
    </section>

    <section className="services-cta" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading" className="services-cta__title">
          <span className="accent">Don&apos;t Wait!</span> Contact Us Today!
        </h2>
        <p className="services-cta__lead">
          Speak with our team about enrollment, monitoring options, and how
          Specialized Medical can support your practice.
        </p>
        <div className="services-cta__actions">
          <Link className="btn btn--primary" to="/contact/">
            Contact Us
          </Link>
          <a className="btn btn--outline" href="tel:+18557732633">
            Call Us
          </a>
        </div>
      </div>
    </section>
  </main>
)

export default ServicesPage

export function Head() {
  return (
    <>
      <title>Services | Specialized Medical Services</title>
      <meta
        name="description"
        content="Holter, event, MCT, and extended monitoring from one device—wireless technology, detailed reporting, and 24/7 support."
      />
    </>
  )
}
