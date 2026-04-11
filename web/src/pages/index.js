import * as React from "react"
import { Link } from "gatsby"
import { ICON, imagesPath } from "../components/Layout"

const HERO_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"

const VIDEO = {
  overview: `/video/${encodeURIComponent(
    "WhatsApp Video 2026-04-02 at 1.51.27 AM.mp4"
  )}`,
  ecg: `/video/${encodeURIComponent(
    "WhatsApp Video 2026-04-02 at 10.32.10 PM.mp4"
  )}`,
  ai: `/video/${encodeURIComponent("Avatar_Video_Take_14_buttons.mp4")}`,
}

const IndexPage = () => {
  const overviewFrameRef = React.useRef(null)

  React.useEffect(() => {
    const frame = overviewFrameRef.current
    if (!frame) return
    const video = frame.querySelector(".figma-video__media")
    const btn = frame.querySelector("[data-overview-play]")
    if (!video || !btn) return

    function setPlaying(on) {
      frame.classList.toggle("is-playing", on)
      btn.setAttribute(
        "aria-label",
        on ? "Pause overview video" : "Play overview video"
      )
    }

    const onBtnClick = (e) => {
      e.stopPropagation()
      if (video.paused) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    }
    const onVideoClick = () => {
      if (!video.paused) video.pause()
    }
    const onPlaying = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    btn.addEventListener("click", onBtnClick)
    video.addEventListener("click", onVideoClick)
    video.addEventListener("playing", onPlaying)
    video.addEventListener("pause", onPause)

    return () => {
      btn.removeEventListener("click", onBtnClick)
      video.removeEventListener("click", onVideoClick)
      video.removeEventListener("playing", onPlaying)
      video.removeEventListener("pause", onPause)
    }
  }, [])

  return (
    <main className="home-page home-page--figma">
      <section className="figma-hero figma-hero--split" aria-label="Hero">
        <div className="figma-hero__split-plate">
          <div className="figma-container figma-hero__split-inner">
            <div className="figma-hero__copy">
              <p className="figma-hero__pill">
                <span className="figma-hero__pill-dot" aria-hidden="true" />
                Complete Turn-Key Cardiac Monitoring
              </p>
              <h1 className="figma-hero__title">
                <span className="figma-hero__lc">DOCTORS DESERVE</span>
                <span className="figma-hero__title-accent">Better.</span>
              </h1>
              <div className="figma-hero__sub">
                <p className="figma-hero__sub-line figma-hero__sub-line--lg">
                  LIVE ECG DATA
                </p>
                <p className="figma-hero__sub-line">
                  Holter - Extended Holter - Event - Telemetry (MCT)
                </p>
                <p className="figma-hero__sub-line figma-hero__sub-line--spaced">
                  <span className="figma-hero__allcaps">ALL FROM ONE DEVICE</span>
                </p>
                <p className="figma-hero__sub-line">
                  Industry-Leading ECG / P-Wave Clarity
                </p>
              </div>
              <div className="figma-hero__actions">
                <Link
                  className="figma-btn figma-btn--outline-dark"
                  to="/contact/"
                >
                  Request a Demo
                </Link>
                <Link className="figma-btn figma-btn--solid" to="/contact/">
                  Start Your No-Risk Beta Trial
                </Link>
              </div>
              <p className="figma-hero__talk">
                <Link to="/contact/">Talk to Our Team→</Link>
              </p>
            </div>
            <div className="figma-hero__visual">
              <p className="figma-hero__chip figma-hero__chip--tl">
                Four tests from one device
              </p>
              <p className="figma-hero__chip figma-hero__chip--bl">
                Live-streaming ECG data
              </p>
              <p className="figma-hero__chip figma-hero__chip--mr">
                24/7 monitoring and alerts
              </p>
              <img
                className="figma-hero__photo"
                src={imagesPath("figma-assets/hero-split-photo.jpg")}
                alt="Patient wearing a lightweight cardiac monitor"
                width={631}
                height={745}
                decoding="async"
                onError={(e) => {
                  const el = e.currentTarget
                  el.onerror = null
                  el.src = HERO_IMG_FALLBACK
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-video"
        id="video-overview"
        aria-labelledby="figma-video-heading"
      >
        <div className="figma-container figma-video__grid">
          <div className="figma-video__copy">
            <h2 id="figma-video-heading" className="figma-h2">
              Watch the Specialized
              <br />
              <span className="figma-h2__accent">Medical Overview</span>
            </h2>
          </div>
          <div
            className="figma-video__frame"
            data-overview-video
            ref={overviewFrameRef}
          >
            <video
              className="figma-video__media"
              id="overview-video"
              poster={imagesPath("figma-assets/Rectangle 34.png")}
              playsInline
              preload="metadata"
              width={738}
              height={442}
            >
              <source src={VIDEO.overview} type="video/mp4" />
            </video>
            <div className="figma-video__overlay" data-overview-overlay>
              <div className="figma-video__shade" aria-hidden="true" />
              <button
                type="button"
                className="figma-video__play"
                data-overview-play
                aria-label="Play overview video"
              >
                <span className="figma-video__play-circle">
                  <img
                    src={ICON("Group.svg")}
                    alt=""
                    width={87}
                    height={87}
                    decoding="async"
                  />
                </span>
              </button>
              <p className="figma-video__caption">
                See how Specialized Medical works in under 60 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-apart"
        aria-labelledby="figma-apart-heading"
      >
        <div className="figma-container">
          <h2 id="figma-apart-heading" className="figma-h2 figma-h2--center">
            What Sets
            <br />
            <span className="figma-h2__accent">Specialized</span>{" "}
            <span className="figma-h2__accent">Medical Apart</span>
          </h2>
          <div className="figma-grid-apart">
            <article className="figma-card figma-card--apart">
              <div className="figma-card__icon">
                <img
                  src={ICON("vector3525-f3b.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">
                Live Streaming , Real-Time Data
              </h3>
              <p className="figma-card__body">
                Our platform is designed for continuous, resilient real-time data
                streaming across a wide range of patient environments, including
                rural areas. This supports uninterrupted data capture, reduces the
                likelihood of incomplete studies, and gives physicians greater
                confidence in every test. Data is sent live to our monitoring
                center no manual uploading, no data delays.
              </p>
            </article>
            <article className="figma-card figma-card--apart">
              <div className="figma-card__icon">
                <img
                  src={ICON("vector3525-kmvj.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">Four Tests, One Device</h3>
              <p className="figma-card__body">
                Perform Holter, Extended Holter, Event, and Telemetry (MCT) tests
                — individually or in sequence — using a single monitor.
              </p>
            </article>
            <article className="figma-card figma-card--apart">
              <div className="figma-card__icon">
                <img
                  src={ICON("fi_3022315.png")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">
                Symptomatic vs. Asymptomatic Clarity
              </h3>
              <p className="figma-card__body">
                Patient symptoms are entered digitally during the test and
                automatically populate on the final report above the corresponding
                ECG strips, making it immediately clear whether an event was
                symptomatic or asymptomatic - with no separate handwritten symptom
                diary required.
              </p>
            </article>
            <article className="figma-card figma-card--apart">
              <div className="figma-card__icon">
                <img
                  src={ICON("fi18181343526-83wj.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">Ideal for TAVR Programs</h3>
              <p className="figma-card__body">
                Continuous live-streaming ECG data supports closer post-procedure
                monitoring and faster awareness of concerning rhythm changes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-services"
        aria-labelledby="figma-services-heading"
      >
        <div className="figma-container">
          <h2 id="figma-services-heading" className="figma-h2 figma-h2--left">
            Services <span className="figma-h2__accent">Summary</span>
          </h2>
          <p className="figma-services__eyebrow">
            one system, multiple monitoring options.
          </p>
          <div className="figma-services__row">
            <article className="figma-svc">
              <h3 className="figma-svc__title">Holter</h3>
              <p className="figma-svc__meta">24–48 Hours</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Extended Holter</h3>
              <p className="figma-svc__meta">Greater than 48 hours up to 7 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Extended Holter</h3>
              <p className="figma-svc__meta">Greater than 7 days up to 14 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Event Monitoring</h3>
              <p className="figma-svc__meta">01 to 30 Days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">MCT (Telemetry)</h3>
              <p className="figma-svc__meta">1 to 30 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">MCT (Telemetry)</h3>
              <p className="figma-svc__meta">for Post TAVR Patients</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-workflow"
        id="workflow"
        aria-labelledby="figma-workflow-heading"
      >
        <div className="figma-container">
          <h2 id="figma-workflow-heading" className="figma-h2 figma-h2--center">
            Streamlined Workflow
            <br />
            <span className="figma-h2__accent">for Your Office</span>
          </h2>
          <p className="figma-workflow__intro">
            Your medical assistant completes a simple 3-step process:{" "}
            <strong className="figma-workflow__highlight">(Under 15 Minutes)</strong>
          </p>
          <div className="figma-workflow__steps">
            <article className="figma-wstep">
              <div className="figma-wstep__head">
                <span className="figma-wstep__badge">01</span>
              </div>
              <h3 className="figma-wstep__title">Enroll</h3>
              <p className="figma-wstep__body">
                Register the patient in our system with a quick digital enrollment.
              </p>
            </article>
            <article className="figma-wstep">
              <div className="figma-wstep__head">
                <span className="figma-wstep__badge">02</span>
              </div>
              <h3 className="figma-wstep__title">Hook-Up</h3>
              <p className="figma-wstep__body">
                Attach electrodes and the monitor to the patient in your office.
              </p>
            </article>
            <article className="figma-wstep">
              <div className="figma-wstep__head">
                <span className="figma-wstep__badge">03</span>
              </div>
              <h3 className="figma-wstep__title">Disconnect</h3>
              <p className="figma-wstep__body">
                Send the patient home. We take over the monitoring from here.
              </p>
            </article>
          </div>

          <div className="figma-workflow__panel">
            <p className="figma-workflow__panel-lead">
              Once the patient leaves, we take over the rest:
            </p>
            <div className="figma-workflow__checks">
              <div className="figma-workflow__check">
                <span className="figma-dot" aria-hidden="true" /> 24/7 live
                monitoring across all test types
              </div>
              <div className="figma-workflow__check">
                <span className="figma-dot" aria-hidden="true" /> Real-time
                arrhythmia alerts by email, text, or phone call
              </div>
              <div className="figma-workflow__check">
                <span className="figma-dot" aria-hidden="true" /> Automatic
                generation and delivery of final reports
              </div>
              <div className="figma-workflow__check">
                <span className="figma-dot" aria-hidden="true" /> Patient support
                through our 24/7 multilingual call center
              </div>
            </div>
            <p className="figma-workflow__footnote">
              When the patient returns the device, it is ready for the next patient
            </p>
          </div>
        </div>
      </section>

      <section className="figma-section figma-ecg" aria-labelledby="figma-ecg-heading">
        <div className="figma-container figma-ecg__grid">
          <div className="figma-ecg__visual">
            <video
              className="figma-ecg__video"
              src={VIDEO.ecg}
              controls
              loop
            />
          </div>
          <div className="figma-ecg__copy">
            <h2
              id="figma-ecg-heading"
              className="figma-h2 figma-h2--left figma-h2--tight"
            >
              Live ECG &amp;
              <br />
              <span className="figma-h2__accent">Symptom Logging</span>
            </h2>
            <p className="figma-ecg__lead">
              Our platform streams ECG data in real-time, allowing physicians to
              monitor patients remotely with confidence. Patient symptoms are
              entered digitally and automatically populate on the final report,
              making it immediately clear whether an event was symptomatic or
              asymptomatic.
            </p>
            <ul className="figma-ecg__list">
              <li>Physicians see live rhythm data as it is acquired.</li>
              <li>Patients log symptoms digitally during the study.</li>
              <li className="figma-ecg__emph">
                Symptoms are logged digitally and matched directly to ECG events on
                the final report.
              </li>
            </ul>
            <p
              className="figma-ecg__lead"
              style={{ color: "#231F1E", fontSize: 16, fontWeight: 500 }}
            >
              Symptoms are logged digitally and matched directly to ECG events on
              the final report.
            </p>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-turnkey"
        aria-labelledby="figma-turnkey-heading"
      >
        <div className="figma-container">
          <p className="figma-turnkey__eyebrow">
            Everything needed from start to finish.
          </p>
          <h2 id="figma-turnkey-heading" className="figma-h2 figma-h2--center">
            The Complete
            <br />
            <span className="figma-h2__accent">Turnkey Package</span>
          </h2>
          <div className="figma-grid-turnkey">
            <article className="figma-card figma-card--turnkey">
              <div className="figma-card__icon">
                <img
                  src={ICON("Group (1).svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">
                Significant Reimbursement Potential
              </h3>
              <p className="figma-card__body">
                Practices routinely receive gross reimbursements exceeding $875.00
                for a Holter test followed by a Telemetry test, based on current
                Medicare rates.
              </p>
            </article>
            <article className="figma-card figma-card--turnkey">
              <div className="figma-card__icon">
                <img
                  src={ICON("fi_6895300.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">Zero Cost Equipment Program</h3>
              <p className="figma-card__body">
                We provide as many monitors as your patient volume requires, along
                with all necessary supplies: electrodes, batteries, razors, alcohol
                wipes, and more. There is no equipment to buy - ever.
              </p>
            </article>
            <article className="figma-card figma-card--turnkey">
              <div className="figma-card__icon">
                <img
                  src={ICON("fi151927003526-1meh.svg")}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="figma-card__title">Patient-Friendly Design</h3>
              <p className="figma-card__body">
                Each monitor weighs less than four sheets of paper (0.6 oz), runs
                up to 10 days per battery, is waterresistant (IP55), and offers
                industry-leading ECG clarity, including precise P-wave definition.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="figma-section figma-testimonials"
        aria-labelledby="figma-testimonials-heading"
      >
        <div className="figma-container">
          <h2
            id="figma-testimonials-heading"
            className="figma-h2 figma-h2--center"
          >
            Real Experiences with
            <br />
            <span className="figma-h2__accent">Specialized Medical</span>
          </h2>
          <div className="figma-deco-line" aria-hidden="true" />
          <div className="figma-testimonial-grid">
            <article className="figma-tcard">
              <div className="figma-tcard__contect-container">
                <h3 className="figma-tcard__label">Patient comfort / ease of use</h3>
                <p className="figma-tcard__quote">
                  “I wore the S-Patch Monitor from Specialized Medical all week. It
                  was easy and hassle free. Was not a problem at all. The monitor I
                  wore was very small. I didn’t even realize I was wearing it...”{" "}
                  <a
                    className="figma-tcard__more"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    see more
                  </a>
                </p>
              </div>
              <div className="figma-tcard__stars-container">
                <img
                  className="figma-tcard__stars"
                  src={imagesPath("figma-assets/stars-row.png")}
                  alt=""
                  width={136}
                  height={24}
                  decoding="async"
                />
                <p className="figma-tcard__author">R. Gall</p>
              </div>
            </article>
            <article className="figma-tcard">
              <div className="figma-tcard__contect-container">
                <h3 className="figma-tcard__label">Life-saving detection</h3>
                <p className="figma-tcard__quote">
                  “If it was not for Specialized Medical’s technology and service I
                  am not sureif this patient would be around today.”
                </p>
                <a
                  className="figma-tcard__link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  View Full Case Study→
                </a>
              </div>
              <div className="figma-tcard__stars-container">
                <img
                  className="figma-tcard__stars"
                  src={imagesPath("figma-assets/stars-row.png")}
                  alt=""
                  width={136}
                  height={24}
                  decoding="async"
                />
                <p className="figma-tcard__author">— Dr. Catalina R.S.</p>
              </div>
            </article>
            <article className="figma-tcard">
              <div className="figma-tcard__contect-container">
                <h3 className="figma-tcard__label">
                  Rapid physician notification
                </h3>
                <p className="figma-tcard__quote">
                  “When Specialized Medical saw these results they immediately
                  transmitted the reports to me and then called me on my cell
                  phone.”
                </p>
              </div>
              <div className="figma-tcard__stars-container">
                <img
                  className="figma-tcard__stars"
                  src={imagesPath("figma-assets/stars-row.png")}
                  alt=""
                  width={136}
                  height={24}
                  decoding="async"
                />
                <p className="figma-tcard__author">— Michael</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="figma-section figma-ai" aria-labelledby="figma-ai-heading">
        <div className="figma-container figma-ai__grid">
          <div className="figma-ai__copy">
            <h2 id="figma-ai-heading" className="figma-h2 figma-h2--left">
              AI-Generated Testimonial: What It’s Like Wearing the
              <br />
              <span className="figma-h2__accent figma-h2__accent--bold">
                S-Patch Monitor
              </span>
            </h2>
          </div>
          <div className="figma-ai__media">
            <video
              className="figma-ai__video"
              src={VIDEO.ai}
              width={520}
              height={906}
              controls
              loop
            />
          </div>
        </div>
      </section>

      <section className="figma-section figma-cta" aria-labelledby="figma-cta-heading">
        <div className="figma-container">
          <div className="figma-cta__box">
            <h2
              id="figma-cta-heading"
              className="figma-h2 figma-h2--center figma-h2--narrow"
            >
              Start Your No-Risk
              <br />
              <span className="figma-h2__accent">Beta Trial</span>
            </h2>
            <p className="figma-cta__p figma-cta__p--lead">
              See how Specialized Medical can support your practice with:
              live-streaming ECG data; simplified office workflow.
            </p>
            <p className="figma-cta__p">
              No-Risk Beta Trial. Anyone can make promises. We would rather prove
              it. Try Specialized Medical on a few patients. If it is not the right
              fit, we will take everything back - no hassle, no obligation. Let us
              prove our value to you and your patients.
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
}

export default IndexPage

export const Head = () => (
  <>
    <title>Specialized Medical | Cardiac Monitoring</title>
    <meta
      name="description"
      content="Live ECG and remote cardiac monitoring for your practice. Holter, extended studies, event and MCT—no upfront costs, streamlined workflow, 24/7 support."
    />
  </>
)
