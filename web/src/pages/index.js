import * as React from "react"
import { ICON } from "../components/Layout"

const HERO_BANNER = "/images/hero-banner.jpg"
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"

const IMG = {
  video:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  ecgApp:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  aiTestimonial:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
}

function StarRow() {
  const src = ICON("star13663-lr4m.svg")
  return (
    <div className="stars" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <img key={i} src={src} alt="" width={22} height={22} />
      ))}
    </div>
  )
}

const IndexPage = () => {
  React.useEffect(() => {
    const el = document.querySelector(".hero.hero--reference")
    if (!el) return
    const probe = new Image()
    probe.onerror = () => {
      el.style.backgroundImage = `url(${HERO_FALLBACK})`
      el.style.backgroundSize = "cover"
      el.style.backgroundPosition = "70% center"
    }
    probe.src = HERO_BANNER
  }, [])

  return (
    <main className="home-page">
        {/* ================================================================ */}
        {/* Hero — headline, supporting copy, primary actions, hero visual   */}
        {/* ================================================================ */}
        <section className="hero hero--reference" aria-label="Hero banner">
          <div className="hero--reference__grid">
            <div className="hero--reference__copy">
              <p className="hero__pill">
                <span className="hero__pill-dot" aria-hidden />
                A complete cardiac monitoring solution
              </p>
              <h1 className="hero__title">
                <span className="hero__title-line hero__title--sans">
                  Doctors Deserve
                </span>
                <span className="hero__title-line hero__title--display">
                  Better.
                </span>
              </h1>
              <p className="hero--reference__tagline">
                <strong>LIVE ECG DATA.</strong> Real-time monitoring from the
                palm of your hand.
              </p>
              <div className="hero__actions">
                <a className="btn btn--video" href="#video-overview">
                  Watch Video
                </a>
                <a className="btn btn--primary" href="/contact/">
                  Get Started Now
                </a>
              </div>
            </div>
            <div
              className="hero--reference__visual"
              aria-hidden="true"
              role="presentation"
            />
          </div>
        </section>

        {/* ================================================================ */}
        {/* Video overview — title + video thumbnail with play control        */}
        {/* ================================================================ */}
        <section
          className="section-video"
          id="video-overview"
          aria-labelledby="video-heading"
        >
          <div className="container video-band">
            <h2 id="video-heading" className="video-band__title">
              Watch The Specialized
              <br />
              <span className="accent">Medical Overview</span>
            </h2>
            <div className="video-frame">
              <img
                src={IMG.video}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <a
                className="video-frame__play"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Play Specialized Medical overview video (add your video URL)"
              >
                <span className="video-frame__play-btn">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* What sets us apart — 2×2 feature cards                           */}
        {/* ================================================================ */}
        <section
          className="section-apart"
          aria-labelledby="apart-heading"
        >
          <div className="container">
            <h2 id="apart-heading" className="section-title">
              What Sets
              <br />
              <span className="accent">Specialized Medical Apart</span>
            </h2>
            <div className="grid-apart">
              <article className="card-apart">
                <div className="card-apart__icon">
                  <img src={ICON("vector3525-f3b.svg")} alt="" />
                </div>
                <h3>No Leasing, No Hassle</h3>
                <p>
                  Our platform is designed for continuous, resilient real-time
                  data streaming across patient environments, including rural
                  areas—so studies stay complete and physicians can trust every
                  test. Data streams live to our monitoring center with no manual
                  uploads and no unnecessary delays.
                </p>
              </article>
              <article className="card-apart">
                <div className="card-apart__icon">
                  <img src={ICON("vector3525-kmvj.svg")} alt="" />
                </div>
                <h3>Real-Time Data</h3>
                <p>
                  Perform Holter, Extended Holter, Event, and Telemetry (MCT)
                  tests—individually or in sequence—with one monitor and rapid
                  visibility into what matters for patient care.
                </p>
              </article>
              <article className="card-apart">
                <div className="card-apart__icon">
                  <img src={ICON("vector3525-wjr6.svg")} alt="" />
                </div>
                <h3>Symptomatic vs. Asymptomatic Clarity</h3>
                <p>
                  Symptoms are captured digitally during the test and appear on
                  the final report with the related ECG strips—so it is clear
                  whether an event was symptomatic or asymptomatic, with no
                  separate paper diary.
                </p>
              </article>
              <article className="card-apart">
                <div className="card-apart__icon">
                  <img src={ICON("fi18181343526-83wj.svg")} alt="" />
                </div>
                <h3>Flexible Staff Programs</h3>
                <p>
                  Continuous live-streaming ECG supports closer post-procedure
                  monitoring and faster awareness of concerning rhythm
                  changes—aligned with how your team works.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Services summary — horizontal service cards                      */}
        {/* ================================================================ */}
        <section className="section-services" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading" className="section-title">
              Services <span className="accent">Summary</span>
            </h2>
            <div className="services-row">
              {[
                ["Holter", "24–48 hours"],
                ["Event / MCT", "1 – 30 days"],
                ["Extended Holter", "48h – 14 days"],
                ["Clinic Monitoring", "On-site support"],
                ["MCT (Relationship)", "Partnership programs"],
                ["MCT (Patient-pay)", "Flexible options"],
              ].map(([title, sub]) => (
                <article key={title + sub} className="card-service">
                  <h3>{title}</h3>
                  <p className="card-service__meta">{sub}</p>
                  <a href="/services/">Learn More</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Workflow — 3 steps + 2×2 benefit grid                             */}
        {/* ================================================================ */}
        <section
          className="section-workflow"
          id="workflow"
          aria-labelledby="workflow-heading"
        >
          <div className="container">
            <h2 id="workflow-heading" className="section-title">
              Streamlined Workflow{" "}
              <span className="accent">For Your Office</span>
            </h2>
            <div className="workflow-steps">
              <div className="workflow-step">
                <div className="workflow-step__num">01</div>
                <h3>Enroll</h3>
                <p>
                  Register the patient in our system with a quick digital
                  enrollment.
                </p>
              </div>
              <div className="workflow-step">
                <div className="workflow-step__num">02</div>
                <h3>Monitor</h3>
                <p>
                  Live ECG streams to our team with alerts and review while the
                  patient goes about daily life.
                </p>
              </div>
              <div className="workflow-step">
                <div className="workflow-step__num">03</div>
                <h3>Document</h3>
                <p>
                  Reports and summaries are delivered into your workflow—clear,
                  timely, and ready for clinical action.
                </p>
              </div>
            </div>
            <div className="check-grid">
              <div className="check-cell">
                24/7 live monitoring across Holter, Extended Holter, Event, and
                Telemetry (MCT).
              </div>
              <div className="check-cell">
                Real-time arrhythmia alerts delivered by email, text, or phone
                call.
              </div>
              <div className="check-cell">
                Automatic generation and delivery of final reports to your
                workflow.
              </div>
              <div className="check-cell">
                Multilingual patient support through our 24/7 call center.
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Live ECG & symptom logging — device visual + bullets               */}
        {/* ================================================================ */}
        <section className="section-ecg" aria-labelledby="ecg-heading">
          <div className="container ecg-band">
            <div className="ecg-band__visual">
              <img
                src={IMG.ecgApp}
                alt="Mobile app interface showing live ECG monitoring"
                loading="lazy"
              />
            </div>
            <div className="ecg-band__copy">
              <h2 id="ecg-heading">
                Live ECG &amp;{" "}
                <span className="accent">Symptom Logging</span>
              </h2>
              <p>
                Our platform streams ECG data in real time so physicians can
                monitor patients remotely with confidence. Symptoms are captured
                digitally and reflected on the final report for clear
                symptomatic vs. asymptomatic context.
              </p>
              <ul className="ecg-list">
                <li>Real-time data visibility for your clinical team</li>
                <li>Digital symptom logging tied to ECG segments</li>
                <li>Clear reporting for symptomatic vs. asymptomatic events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Turnkey package — 3 benefit cards on soft pink background         */}
        {/* ================================================================ */}
        <section className="section-turnkey" aria-labelledby="turnkey-heading">
          <div className="container">
            <h2 id="turnkey-heading" className="section-title">
              The Complete <span className="accent">Turnkey Package</span>
            </h2>
            <div className="grid-turnkey">
              <article className="card-turnkey">
                <div className="card-turnkey__icon">
                  <img src={ICON("vector3526-owz9.svg")} alt="" />
                </div>
                <h3>Advanced Monitoring Devices</h3>
                <p>
                  A discreet monitor that fits real life—designed for comfort and
                  durability while delivering dependable signal quality for
                  confident reads.
                </p>
              </article>
              <article className="card-turnkey">
                <div className="card-turnkey__icon">
                  <img src={ICON("vector3526-3i69.svg")} alt="" />
                </div>
                <h3>Superior Support Team</h3>
                <p>
                  Around-the-clock monitoring and responsive support so your team
                  is never alone when timing matters for patient outcomes.
                </p>
              </article>
              <article className="card-turnkey">
                <div className="card-turnkey__icon">
                  <img src={ICON("fi151927003526-1meh.svg")} alt="" />
                </div>
                <h3>Patient-Friendly Design</h3>
                <p>
                  Lightweight monitors, multi-day battery life, water
                  resistance, and industry-leading ECG clarity—including precise
                  P-wave definition when it matters most.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Testimonials — three cards + pager dots                           */}
        {/* ================================================================ */}
        <section
          className="section-testimonials"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <h2 id="testimonials-heading" className="section-title">
              Real Experiences With{" "}
              <span className="accent">Specialized Medical</span>
            </h2>
            <div className="testimonial-grid">
              <article className="card-testimonial">
                <p className="card-testimonial__label">
                  Patient comfort / ease of use
                </p>
                <p>
                  “I wore the S-Patch monitor from Specialized Medical all week.
                  It was easy and hassle free—the device was so small I barely
                  noticed it.”
                </p>
                <StarRow />
                <span className="card-testimonial__author">R. Gall</span>
              </article>
              <article className="card-testimonial">
                <p className="card-testimonial__label">Life-saving detection</p>
                <p>
                  “If it was not for Specialized Medical&apos;s technology and
                  service I am not sure this patient would be around today.”
                </p>
                <StarRow />
                <span className="card-testimonial__author">
                  — Dr. Catalina R.S.
                </span>
              </article>
              <article className="card-testimonial">
                <p className="card-testimonial__label">
                  Rapid physician notification
                </p>
                <p>
                  “When Specialized Medical saw these results they immediately
                  transmitted the reports to me and then called me on my cell
                  phone.”
                </p>
                <StarRow />
                <span className="card-testimonial__author">— Michael</span>
              </article>
            </div>
            <div className="testimonial-dots" aria-hidden>
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* AI-generated testimonial — headline + portrait media              */}
        {/* ================================================================ */}
        <section className="section-ai" aria-labelledby="ai-heading">
          <div className="container ai-band ai-band--split">
            <h2 id="ai-heading" className="ai-band__title">
              AI-Generated Testimonial: What It&apos;s Like Wearing the{" "}
              <span className="accent">S-Patch Monitor</span>
            </h2>
            <div className="ai-band__media">
              <img
                src={IMG.aiTestimonial}
                alt="Patient wearing a lightweight cardiac monitor"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Final CTA — beta trial                                              */}
        {/* ================================================================ */}
        <section className="section-cta" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="section-title">
              Start Your No-Risk <span className="accent">Beta Trial</span>
            </h2>
            <p>
              See how Specialized Medical can support your practice with live
              streaming ECG data and a simplified office workflow. Try it on a
              few patients—if it isn&apos;t the right fit, we&apos;ll take
              everything back. No hassle. No obligation.
            </p>
            <div className="section-cta__actions">
              <a className="btn btn--primary" href="/contact/">
                Get Started Now
              </a>
              <a className="btn btn--ghost" href="/contact/">
                Talk to an Expert →
              </a>
            </div>
          </div>
        </section>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Specialized Medical | Cardiac Monitoring</title>
    <meta
      name="description"
      content="Complete turn-key cardiac monitoring. Live ECG data. Four tests. One device."
    />
  </>
)
