import * as React from "react"
import { Link } from "gatsby"
import { ICON } from "../components/Layout"

const HERO_BG =
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=80"
const IMG_TEAM =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
const IMG_COMPACT =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"

const WHY_CARDS = [
  {
    icon: "vector3525-f3b.svg",
    title: "Complete Turn-Key Cardiac Monitoring",
    text: "Enrollment, hook-up, live monitoring, and reporting—handled end-to-end so your team can stay focused on patients, not paperwork.",
  },
  {
    icon: "vector3525-wjr6.svg",
    title: "Live-Streaming ECG Data",
    text: "Industry-leading waveform clarity with real-time visibility into rhythm data—supporting confident clinical decisions.",
  },
  {
    icon: "vector3525-kmvj.svg",
    title: "One Device, Four Tests",
    text: "Holter, extended Holter, event, and telemetry (MCT) from a single platform—standardizing workflows across your practice.",
  },
  {
    icon: "fi18181343526-83wj.svg",
    title: "24/7 Monitoring & Alerts",
    text: "Around-the-clock review with alerts by phone, text, or email when timing matters for patient care.",
  },
]

const COMPACT_BULLETS = [
  "Weighs less than four sheets of paper for comfortable, long-term wear.",
  "Water resistant (IP55 rated) for real-world daily activity.",
  "Wireless design reduces cable clutter and hook-up time.",
  "Long battery life supports multi-day studies without interruption.",
  "Designed for clear signal quality across common ambulatory scenarios.",
]

const AboutPage = () => (
  <main className="about-page">
    <section className="about-hero" aria-labelledby="about-hero-heading">
      <div
        className="about-hero__bg"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="presentation"
      />
      <div className="about-hero__overlay" />
      <div className="container about-hero__inner">
        <p className="about-hero__pill">
          <span className="about-hero__pill-dot" aria-hidden />
          About Us
        </p>
        <h1 id="about-hero-heading" className="about-hero__title">
          <span className="about-hero__title-line">
            A Better Partner For{" "}
            <span className="accent">Cardiac Monitoring</span>
          </span>
        </h1>
        <p className="about-hero__lead">
          Specialized Medical delivers complete turn-key cardiac monitoring for
          physician practices—combining live ECG streaming, responsive support,
          and streamlined reporting so you can deliver excellent care without
          operational drag.
        </p>
      </div>
    </section>

    <section className="about-who" aria-labelledby="who-heading">
      <div className="container about-who__grid">
        <div className="about-who__media">
          <img
            src={IMG_TEAM}
            alt="Medical team collaborating in a clinical setting"
            loading="lazy"
            decoding="async"
            width={640}
            height={480}
          />
        </div>
        <div className="about-who__copy">
          <h2 id="who-heading" className="about-who__title">
            Who We <span className="accent">Are</span>
          </h2>
          <p className="about-who__text">
            We believe cardiac monitoring should be simple for practices and
            reassuring for patients. Our team partners with clinics nationwide
            to deliver dependable service, clear communication, and technology
            built around real clinical workflows.
          </p>
          <p className="about-who__text">
            From enrollment through final report delivery, we focus on
            operational simplicity—so your staff spends less time chasing data
            and more time with patients.
          </p>
          <p className="about-who__text">
            Live-streaming ECG data, industry-leading waveform clarity, and
            responsive support are the foundation of how we help practices
            modernize monitoring without adding complexity.
          </p>
        </div>
      </div>
    </section>

    <section className="about-why" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="about-why__title">
          Why Practices <span className="accent">Choose Us</span>
        </h2>
        <div className="about-why__grid">
          {WHY_CARDS.map(({ icon, title, text }) => (
            <article key={title} className="about-why__card">
              <div className="about-why__icon">
                <img src={ICON(icon)} alt="" width={22} height={22} />
              </div>
              <h3 className="about-why__card-title">{title}</h3>
              <p className="about-why__card-text">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="about-compact" aria-labelledby="compact-heading">
      <div className="container about-compact__grid">
        <div className="about-compact__media">
          <img
            src={IMG_COMPACT}
            alt="Compact cardiac monitoring device worn by a patient"
            loading="lazy"
            decoding="async"
            width={640}
            height={480}
          />
        </div>
        <div className="about-compact__copy">
          <h2 id="compact-heading" className="about-compact__title">
            Compact <span className="accent">Design</span>
          </h2>
          <p className="about-compact__lead">
            Our S-Patch style monitor is engineered for comfort and signal
            quality—so patients stay compliant and your team receives reliable
            data across the full monitoring window.
          </p>
          <ul className="about-compact__list">
            {COMPACT_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section
      className="section-cta about-cta"
      aria-labelledby="about-cta-heading"
    >
      <div className="container">
        <h2 id="about-cta-heading">
          Start Your No-Risk <span className="accent">Beta Trial</span>
        </h2>
        <p>
          See how Specialized Medical can support your practice with turnkey
          monitoring, live ECG visibility, and reporting your team can trust.
        </p>
        <p>
          Request a demo or connect with our team—we&apos;ll walk you through
          enrollment, device logistics, and what to expect day one.
        </p>
        <div className="section-cta__actions about-cta__actions">
          <Link className="btn btn--primary" to="/contact/">
            Start Your No-Risk Beta Trial
          </Link>
          <Link className="about-cta__link" to="/contact/">
            Talk to Our Team<span aria-hidden>→</span>
          </Link>
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
        content="Learn about Specialized Medical—turn-key cardiac monitoring, live ECG streaming, and a partner focused on physician practices."
      />
    </>
  )
}
