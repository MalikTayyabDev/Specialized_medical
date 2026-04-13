import * as React from "react"
import { Link } from "gatsby"

const IMG = {
  hero: "/images/figma-about/hero-about.jpg",
  /** S-Patch in hand — Section 4 */
  spatchInHand: "/images/figma-services/patient-friendly.jpg",
}

const WHY_CARDS = [
  {
    key: "turnkey",
    title: "Complete Turn-Key Cardiac Monitoring",
    body:
      "Physician practices choose Specialized Medical because we provide more than a monitor — we deliver complete turn-key cardiac monitoring built around real-time data, operational support, and a workflow designed for both the office and the patient.",
  },
  {
    key: "friction",
    title: "Reduce Friction at Every Step",
    body:
      "Our model is designed to reduce friction at every step. Practices can perform multiple test types from one device, access live-streaming ECG data, receive real-time arrhythmia alerts, and rely on final reports that are clear, actionable, and ready for physician review. This means less delay, less manual work, and greater confidence in the monitoring process.",
  },
  {
    key: "integration",
    title: "Practice Integration Made Easy",
    body:
      "We make practice integration simple. From EMR-ready reporting and electronic physician interpretation workflows to billing support, customized templates, and device tracking, our system is built to fit seamlessly into how modern practices operate.",
  },
]

const DEVICE_FEATURES = [
  "Very small, lightweight dual-disk design",
  "Weight: 0.6 oz",
  "Minimum of 10 days per battery",
  "Water-resistant (IP55)",
  "Precise P-wave definition",
  "Industry-leading ECG clarity",
]

const AboutPage = () => (
  <main className="about-page about-page--figma" data-design="about-sections-2-4">
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

    <section className="figma-section about-figma-who about-figma-who--text" aria-labelledby="who-heading">
      <div className="figma-container">
        <div className="about-figma-who__story">
          <h2 id="who-heading" className="about-figma-who__title">
            <span className="about-figma-who__title-w">Who We</span>
            <span className="about-figma-who__title-a"> Are</span>
          </h2>
          <p className="about-figma-who__p">
            Specialized Medical is a cardiac monitoring partner built for modern physician
            practices. We help cardiology groups, cardiovascular programs, and medical
            offices deliver better monitoring through a more complete, more connected
            system.
          </p>
          <p className="about-figma-who__p">
            Our model combines the S-Patch ECG monitor with live-streaming, real-time
            monitoring and reporting support, helping practices gain faster visibility
            into rhythm activity without the delays, gaps, or workflow burden associated
            with traditional monitoring models. We support multiple monitoring needs from
            one device while making the process simpler for both the practice and the
            patient.
          </p>
          <p className="about-figma-who__p">
            What defines Specialized Medical is not just the monitor itself, but the full
            operational support behind it. From real-time monitoring and alerts to report
            delivery, physician interpretation workflow, billing support, and patient
            support, our system is designed to help practices monitor more efficiently
            and operate with greater confidence. That includes resilient live-streaming
            performance across a wide range of patient environments, including rural
            areas, to support uninterrupted data capture and stronger confidence in every
            test.
          </p>
          <p className="about-figma-who__tagline">
            More than a monitor. A better partner for cardiac monitoring.
          </p>
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-why" aria-labelledby="why-heading">
      <div className="figma-container">
        <h2 id="why-heading" className="about-figma-why__heading">
          <span className="about-figma-why__heading-w">Why Practices</span>
          <span className="about-figma-why__heading-a"> Choose Us</span>
        </h2>
        <div className="about-figma-why__grid">
          {WHY_CARDS.map((c) => (
            <article key={c.key} className="about-figma-why-card">
              <h3 className="about-figma-why-card__title">{c.title}</h3>
              <p className="about-figma-why-card__body">{c.body}</p>
            </article>
          ))}
        </div>
        <div className="about-figma-why__kicker">
          <p className="about-figma-why__kicker-lead">
            Accuracy. Speed. Simplicity. Profitability.
          </p>
          <p className="about-figma-why__kicker-text">
            Specialized Medical helps practices monitor more effectively, respond faster,
            and manage cardiac monitoring with greater efficiency from start to finish.
          </p>
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-compact" aria-labelledby="compact-heading">
      <div className="figma-container about-figma-compact__grid">
        <div className="about-figma-compact__media">
          <img
            src={IMG.spatchInHand}
            alt="S-Patch monitoring device held in hand"
            width={630}
            height={604}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-figma-compact__copy">
          <h2 id="compact-heading" className="about-figma-compact__title">
            <span className="about-figma-compact__title-line">Device Simplicity</span>{" "}
            <span className="about-figma-compact__title-sep">/</span>{" "}
            <span className="about-figma-compact__title-accent">Compact Design</span>
          </h2>
          <p className="about-figma-compact__lead">
            The S-Patch Monitoring System is designed to make advanced cardiac monitoring
            easier for both practices and patients. Its very small, lightweight dual-disk
            design supports comfortable everyday wear while helping practices deliver
            real-time ECG monitoring through a simple, patient-friendly form factor.
          </p>
          <ul className="about-figma-compact__list">
            {DEVICE_FEATURES.map((line) => (
              <li key={line}>
                <strong>{line}</strong>
              </li>
            ))}
          </ul>
          <p className="about-figma-compact__foot">
            Designed for comfort, simplicity, and dependable wear throughout the monitoring
            period.
          </p>
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
            Ready to See Specialized Medical
            <br />
            <span className="figma-h2__accent">In Your Practice?</span>
          </h2>
          <p className="figma-cta__p figma-cta__p--lead">
            Request a demo or start a no-risk beta trial — we will help you evaluate fit,
            workflow, and outcomes with your team.
          </p>
          <div className="figma-cta__actions about-figma-cta__actions">
            <Link className="figma-btn figma-btn--outline-dark" to="/contact/">
              Request a Demo
            </Link>
            <Link className="figma-btn figma-btn--solid" to="/contact/">
              Start Your No-Risk Beta Trial
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
