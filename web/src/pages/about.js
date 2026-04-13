import * as React from "react"
import { Link } from "gatsby"

const IMG = {
  hero: "/images/figma-about/hero-about.jpg",
  spatchInHand: "/images/figma-services/patient-friendly.jpg",
}

const WHO_PARAS = [
  "Specialized Medical is redefining what cardiac monitoring should look like for today’s medical practices. We partner with physicians, cardiology groups, and cardiovascular programs to provide a smarter, more complete monitoring model built around live-streaming ECG data, operational simplicity, and real clinical support.",
  "Our system is designed to do more than record data. It delivers continuous, real-time ECG visibility through a connected monitoring platform that helps reduce delays, improve clinical awareness, and support faster decision-making. With four tests from one device — Holter, Extended Holter, Event, and Telemetry (MCT) — we make it easier for practices to manage monitoring needs without added complexity.",
  "Specialized Medical also removes much of the workload that typically falls on the practice. From simplified setup and 24/7 monitoring to real-time alerts, EMR-ready reporting, physician review workflow, billing support, and zero-cost equipment, our model is built to support the office from start to finish.",
  "We are not just providing a monitor. We are providing a better way for practices to monitor patients, manage workflow, and gain confidence in the data they receive.",
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
          {WHO_PARAS.map((text) => (
            <p key={text.slice(0, 48)} className="about-figma-who__p">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-why about-figma-why--prose" aria-labelledby="why-heading">
      <div className="figma-container">
        <h2 id="why-heading" className="about-figma-why__heading">
          <span className="about-figma-why__heading-w">Why Practices</span>
          <span className="about-figma-why__heading-a"> Choose Us</span>
        </h2>
        <div className="about-figma-why__story">
          <p className="about-figma-why__p">
            Physician practices choose Specialized Medical because we provide more
            than a monitor — we provide{" "}
            <strong>complete turn-key cardiac monitoring</strong> built around
            real-time data, operational support, and a workflow that is easier for
            both the office and the patient.
          </p>
          <p className="about-figma-why__p">
            Our model is designed to reduce friction at every step. Practices can
            perform multiple test types from one device, access live-streaming ECG
            data, receive real-time arrhythmia alerts, and count on final reports
            that are clear, actionable, and ready for physician review. This means
            less delay, less manual work, and more confidence in the monitoring
            process.
          </p>
          <p className="about-figma-why__p">
            We also make <strong>Practice Integration Made Easy</strong>. Final
            reports are EMR-ready and can be automatically pushed into your system.
            Reports are typically delivered within 24 to 48 hours after test
            completion, supporting faster physician review and a more efficient
            office workflow. From electronic physician interpretation workflow to
            billing support, customized templates, and device tracking, our system
            is built to fit into the way modern practices actually operate.
          </p>
          <p className="about-figma-why__p">
            At the end of the day, the value is simple:{" "}
            <strong>Accuracy. Speed. Simplicity. Profitability.</strong> Specialized
            Medical helps practices monitor more effectively, respond more quickly, and
            manage cardiac monitoring with greater efficiency from start to finish.
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
            The S-Patch Monitoring System is designed to make advanced cardiac
            monitoring easier for both practices and patients. Its very small,
            lightweight dual-disk design supports comfortable everyday wear while
            helping practices deliver real-time ECG monitoring through a simple,
            patient-friendly form factor.
          </p>
          <ul className="about-figma-compact__list">
            {DEVICE_FEATURES.map((line) => (
              <li key={line}>
                <strong>{line}</strong>
              </li>
            ))}
          </ul>
          <p className="about-figma-compact__foot">
            Designed for comfort, simplicity, and dependable wear throughout the
            monitoring period.
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
            Request a demo or start a no-risk beta trial — we will help you evaluate
            fit, workflow, and outcomes with your team.
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
