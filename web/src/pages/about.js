import * as React from "react"
import { Link } from "gatsby"

const IMG = {
  hero: "/images/figma-about/hero-about.jpg",
  who: "/images/figma-about/who-team.jpg",
  compact: "/images/figma-about/compact-device.jpg",
  why1: "/images/figma-about/why-icon-1.png",
  why2: "/images/figma-about/why-icon-2.png",
  why3: "/images/figma-about/why-icon-3.png",
}

const AboutPage = () => (
  <main className="about-page about-page--figma" data-design="figma-16-15">
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
      <div className="figma-container about-figma-who__grid">
        <div className="about-figma-who__media">
          <img
            src={IMG.who}
            alt="Medical professionals collaborating"
            width={630}
            height={528}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-figma-who__copy">
          <h2 id="who-heading" className="about-figma-who__title">
            <span className="about-figma-who__title-w">Who We</span>
            <span className="about-figma-who__title-a"> Are</span>
          </h2>
          <p className="about-figma-who__p">
            Specialized Medical is redefining what cardiac monitoring should look like
            for today’s medical practices. We partner with physicians, cardiology
            groups, and cardiovascular programs to provide a smarter, more complete
            monitoring model built around live-streaming ECG data, operational
            simplicity, and real clinical support.
          </p>
          <p className="about-figma-who__p">
            Our system is designed to do more than record data. It delivers continuous,
            real-time ECG visibility through a connected monitoring platform that helps
            reduce delays, improve clinical awareness, and support faster
            decision-making. With four tests from one device — Holter, Extended Holter,
            Event, and Telemetry (MCT) — we make it easier for practices to manage
            monitoring needs without added complexity.
          </p>
          <p className="about-figma-who__p">
            Specialized Medical also removes much of the workload that typically falls
            on the practice. From simplified setup and 24/7 monitoring to real-time
            alerts, EMR-ready reporting, physician review workflow, billing support, and
            zero-cost equipment, our model is built to support the office from start to
            finish.
          </p>
          <p className="about-figma-who__p">
            We are not just providing a monitor. We are providing a better way for
            practices to monitor patients, manage workflow, and gain confidence in the
            data they receive.
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
          <article className="about-figma-why-card">
            <div className="about-figma-why-card__icon">
              <img src={IMG.why1} alt="" width={44} height={44} decoding="async" />
            </div>
            <h3 className="about-figma-why-card__title">
              Complete Turn-Key Cardiac Monitoring
            </h3>
            <p className="about-figma-why-card__body">
              Physician practices choose Specialized Medical because we provide more
              than a monitor — we deliver complete turn-key cardiac monitoring built
              around real-time data, operational support, and a workflow designed for
              both the office and the patient.
            </p>
          </article>
          <article className="about-figma-why-card">
            <div className="about-figma-why-card__icon about-figma-why-card__icon--tint">
              <img src={IMG.why2} alt="" width={20} height={20} decoding="async" />
            </div>
            <h3 className="about-figma-why-card__title">
              Practice Integration
              <br />
              Made Easy
            </h3>
            <p className="about-figma-why-card__body">
              Final reports are EMR-ready and can be automatically pushed into your
              system. Reports are typically delivered within 24 to 48 hours after test
              completion, supporting faster physician review and a more efficient office
              workflow. Electronically review, interpret, date, and sign final reports.
              Customized billing templates with all CPT and ICD-10 codes provided. We
              work directly with your billing staff or third-party biller for seamless
              claims submission. Our portal tracks device usage and alerts your staff
              about any inactive or unreturned monitors
            </p>
          </article>
          <article className="about-figma-why-card">
            <div className="about-figma-why-card__icon about-figma-why-card__icon--tint">
              <img src={IMG.why3} alt="" width={22} height={22} decoding="async" />
            </div>
            <h3 className="about-figma-why-card__title">
              Accuracy. Speed. Simplicity. Profitability.
            </h3>
            <p className="about-figma-why-card__body">
              Because our devices transmit in real time, there is no delay in data, no
              manual uploading, and no gaps in rhythm interpretation. Our reporting is
              faster, more accurate, and designed to support efficient workflow for your
              practice.
            </p>
          </article>
          <article className="about-figma-why-card">
            <div className="about-figma-why-card__icon about-figma-why-card__icon--tint">
              <img src={IMG.why3} alt="" width={22} height={22} decoding="async" />
            </div>
            <h3 className="about-figma-why-card__title">
              Reduce Friction at Every Step
            </h3>
            <p className="about-figma-why-card__body">
              Our model is designed to reduce friction at every step. Practices can
              perform multiple test types from one device, access live-streaming ECG
              data, receive real-time arrhythmia alerts, and rely on final reports that
              are clear, actionable, and ready for physician review. This means less
              delay, less manual work, and greater confidence in the monitoring process.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="figma-section about-figma-compact" aria-labelledby="compact-heading">
      <div className="figma-container about-figma-compact__grid">
        <div className="about-figma-compact__media">
          <img
            src={IMG.compact}
            alt="S-Patch compact cardiac monitor"
            width={630}
            height={604}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-figma-compact__copy">
          <h2 id="compact-heading" className="about-figma-compact__title">
            Compact <span className="figma-h2__accent">Design</span>
          </h2>
          <p className="about-figma-compact__lead">
            The future of ECG monitoring is small, smart, and simple. Our S-Patch device
            features an incredibly compact design and a lightweight form factor that
            ensures maximum patient compliance.
          </p>
          <ul className="about-figma-compact__list">
            <li>Weighs less than four sheets of paper (0.6 oz)</li>
            <li>Simple, minimal form factor</li>
            <li>
              The monitor runs for a minimum of 10 days per battery, supporting longer
              monitoring periods with less interruption.
            </li>
            <li>Water-resistant (IP55 rated)</li>
            <li>Industry-leading ECG clarity</li>
            <li>Precise P-wave definition</li>
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
          <p className="figma-cta__p figma-cta__p--lead">
            See how Specialized Medical can support your practice with: live-streaming
            ECG data; simplified office workflow.
          </p>
          <p className="figma-cta__p">
            No-Risk Beta Trial. Anyone can make promises. We would rather prove it. Try
            Specialized Medical on a few patients. If it is not the right fit, we will
            take everything back - no hassle, no obligation. Let us prove our value to
            you and your patients.
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
