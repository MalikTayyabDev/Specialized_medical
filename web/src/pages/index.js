import * as React from "react"
import { Link } from "gatsby"
import { ICON, imagesPath } from "../components/Layout"

const HERO_IMG_FALLBACK =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"

/** iOS Safari often shows a black frame until the video decodes; `#t=0.001` nudges a first frame + poster covers idle state */
const IOS_VIDEO_HINT = "#t=0.001"

const VIDEO = {
  overview: `/video/${encodeURIComponent(
    "WhatsApp Video 2026-04-02 at 1.51.27 AM.mp4"
  )}${IOS_VIDEO_HINT}`,
  ecg: `/video/${encodeURIComponent(
    "WhatsApp Video 2026-04-02 at 10.32.10 PM.mp4"
  )}${IOS_VIDEO_HINT}`,
  ai: `/video/${encodeURIComponent(
    "Avatar_Video_Take_14_buttons.mp4"
  )}${IOS_VIDEO_HINT}`,
}

const VIDEO_POSTER = {
  ecg: imagesPath("figma-services/live-streaming-ecg.jpg"),
  ai: imagesPath("figma-services/patient-friendly.jpg"),
}

const ECG_VIDEO_TRIM_END_SEC = 1.5

const IndexPage = () => {
  const overviewFrameRef = React.useRef(null)
  const ecgVideoRef = React.useRef(null)

  React.useEffect(() => {
    const frame = overviewFrameRef.current
    if (!frame) return
    const video = frame.querySelector(".figma-video__media")
    const btn = frame.querySelector("[data-overview-play]")
    const muteBtn = frame.querySelector("[data-overview-mute]")
    if (!video || !btn) return

    function setPlaying(on) {
      frame.classList.toggle("is-playing", on)
      btn.setAttribute(
        "aria-label",
        on ? "Pause overview video" : "Play overview video"
      )
    }

    function syncMuteUi() {
      if (!muteBtn) return
      const muted = video.muted
      muteBtn.classList.toggle("figma-video__mute--muted", muted)
      muteBtn.setAttribute("aria-pressed", muted ? "true" : "false")
      muteBtn.setAttribute(
        "aria-label",
        muted ? "Unmute video" : "Mute video"
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

    const onMuteClick = (e) => {
      e.stopPropagation()
      if (video.muted) {
        video.muted = false
        video.volume = 1
      } else {
        video.muted = true
      }
      syncMuteUi()
    }

    const onVolumeChange = () => syncMuteUi()

    btn.addEventListener("click", onBtnClick)
    video.addEventListener("click", onVideoClick)
    video.addEventListener("playing", onPlaying)
    video.addEventListener("pause", onPause)
    video.addEventListener("volumechange", onVolumeChange)
    if (muteBtn) {
      muteBtn.addEventListener("click", onMuteClick)
      syncMuteUi()
    }

    return () => {
      btn.removeEventListener("click", onBtnClick)
      video.removeEventListener("click", onVideoClick)
      video.removeEventListener("playing", onPlaying)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("volumechange", onVolumeChange)
      if (muteBtn) muteBtn.removeEventListener("click", onMuteClick)
    }
  }, [])

  React.useEffect(() => {
    const v = ecgVideoRef.current
    if (!v) return
    const trim = ECG_VIDEO_TRIM_END_SEC
    const capTime = () => {
      if (!v.duration || Number.isNaN(v.duration)) return
      if (v.duration < trim + 1) return
      const end = v.duration - trim
      if (v.currentTime > end) v.currentTime = end
    }
    const onTimeUpdate = () => {
      if (!v.duration || Number.isNaN(v.duration)) return
      if (v.duration < trim + 1) return
      if (v.currentTime >= v.duration - trim - 0.04) {
        v.pause()
        if (v.loop) {
          v.currentTime = 0
          v.play().catch(() => {})
        }
      }
    }
    const onSeeking = () => capTime()
    v.addEventListener("timeupdate", onTimeUpdate)
    v.addEventListener("seeking", onSeeking)
    v.addEventListener("loadedmetadata", capTime)
    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate)
      v.removeEventListener("seeking", onSeeking)
      v.removeEventListener("loadedmetadata", capTime)
    }
  }, [])

  return (
    <main className="home-page home-page--figma">
      <section className="figma-hero figma-hero--split figma-hero--wide" aria-label="Hero">
        <div className="figma-hero__split-plate">
          <div className="figma-container figma-hero__split-inner">
            <div className="figma-hero__copy">
              <p className="figma-hero__pill">
                <span className="figma-hero__pill-dot" aria-hidden="true" />
                Turnkey cardiac monitoring
              </p>
              <h1 className="figma-hero__title figma-hero__title--deserve">
                Better Cardiac Monitoring for
                <br />
                <span className="figma-hero__title-accent">
                  Modern Physician Practices.
                </span>
              </h1>
              <div className="figma-hero__sub">
                <p className="figma-hero__sub-line figma-hero__sub-line--lg">
                  Live ECG data
                </p>
                <p className="figma-hero__sub-line">
                  Holter / Extended Holter / Event Monitoring / Telemetry (MCT)
                </p>
                <p className="figma-hero__sub-line figma-hero__sub-line--spaced">
                  A turnkey monitoring program built around the{" "}
                  <strong>S-Patch Monitoring System</strong>.
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
              <div className="figma-hero__proof" aria-label="Key proof points">
                <div className="figma-hero__proof-item">Physician-ready reporting</div>
                <div className="figma-hero__proof-item">24/7 monitoring and alerts</div>
                <div className="figma-hero__proof-item">Zero-cost equipment</div>
              </div>
              <p className="figma-hero__talk">
                <Link to="/contact/">Talk to our team →</Link>
              </p>
            </div>
            <div className="figma-hero__visual">
              <p className="figma-hero__chip figma-hero__chip--tl">
                S-Patch is the primary featured system
              </p>
              <p className="figma-hero__chip figma-hero__chip--bl">
                Live-streaming ECG data
              </p>
              <p className="figma-hero__chip figma-hero__chip--mr">
                24/7 monitoring and alerts
              </p>
              <img
                className="figma-hero__photo"
                src={imagesPath("Specialized_Medical_SPatch_Exam_Room_Hero_HiRes.jpg.jpeg")}
                alt="Patient wearing a lightweight cardiac monitor"
                width={1536}
                height={1024}
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
            <button
              type="button"
              className="figma-video__mute figma-video__mute--muted"
              data-overview-mute
              aria-label="Unmute video"
              aria-pressed="true"
            >
              <span className="figma-video__mute-icon figma-video__mute-icon--off" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              </span>
              <span className="figma-video__mute-icon figma-video__mute-icon--on" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </span>
            </button>
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
                Live Streaming, Real-Time Data
              </h3>
              <p className="figma-card__body">
                Our platform is designed for continuous, resilient real-time data
                streaming across a wide range of patient environments, including
                rural areas. This supports uninterrupted data capture, reduces the
                likelihood of incomplete studies, and gives physicians greater
                confidence in every test. Data is sent live to our monitoring
                center—no manual uploading, no data delays.
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
              <h3 className="figma-card__title">
                Four test types, one streamlined workflow
              </h3>
              <p className="figma-card__body">
                Holter, Extended Holter, Event Monitoring, and Telemetry (MCT)
                supported through a consistent, turnkey workflow—built around the
                S-Patch Monitoring System.
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
              <h3 className="figma-card__title">For TAVR Programs</h3>
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
            Turnkey cardiac monitoring support for physician practices.
          </p>
          <div className="figma-services__row">
            <article className="figma-svc">
              <h3 className="figma-svc__title">Holter</h3>
              <p className="figma-svc__meta">24–48 hours</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Extended Holter</h3>
              <p className="figma-svc__meta">48 hours–7 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Extended Holter</h3>
              <p className="figma-svc__meta">8–14 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">Event Monitoring</h3>
              <p className="figma-svc__meta">1–30 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">MCT (Telemetry)</h3>
              <p className="figma-svc__meta">1–30 days</p>
            </article>
            <article className="figma-svc">
              <h3 className="figma-svc__title">MCT (Telemetry)</h3>
              <p className="figma-svc__meta">Post TAVR program</p>
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
            <strong>Enroll in web Portal → Hook Up → Disconnect</strong>{" "}
            <strong className="figma-workflow__highlight">(Under 15 Minutes)</strong>
          </p>
          <div className="figma-workflow__steps">
            <article className="figma-wstep">
              <div className="figma-wstep__head">
                <span className="figma-wstep__badge">01</span>
              </div>
              <h3 className="figma-wstep__title">Enroll in web Portal</h3>
              <p className="figma-wstep__body">
                Enroll the patient in the web portal as part of your standard office
                workflow.
              </p>
            </article>
            <article className="figma-wstep">
              <div className="figma-wstep__head">
                <span className="figma-wstep__badge">02</span>
              </div>
              <h3 className="figma-wstep__title">Hook Up</h3>
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
              ref={ecgVideoRef}
              className="figma-ecg__video"
              src={VIDEO.ecg}
              poster={VIDEO_POSTER.ecg}
              playsInline
              preload="metadata"
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
              <li>
                Physicians see live rhythm data as it is acquired, with digital
                symptom entries tied to the timeline of the study.
              </li>
              <li>
                Reports make symptomatic vs. asymptomatic context clear—without a
                separate handwritten diary.
              </li>
              <li>
                Symptoms are matched to ECG segments on the final report for
                defensible documentation.
              </li>
            </ul>
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
                <strong>S-Patch</strong> weighs 0.6 oz, runs at least 10 days per
                battery, and is water-resistant (IP55), with industry-leading ECG
                clarity—including precise P-wave definition.{" "}
                <strong>Lead-Wire</strong> specifications differ and are shown
                separately on{" "}
                <Link to="/services/equipment/">Monitoring Equipment Options</Link>.
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
                <h3 className="figma-tcard__label">Patient Comfort / Ease of Use</h3>
                <p className="figma-tcard__quote">
                  “I wore the S-Patch Monitor from Specialized Medical all week. It
                  was easy and hassle free. Was not a problem at all. The monitor I
                  wore was very small. I didn't even realize I was wearing it. The
                  technology is incredible. I'm looking forward to seeing the
                  results, since I'm pretty sure I have occasional Afib.”
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
                <p className="figma-tcard__author">— R. Gall</p>
              </div>
            </article>
            <article className="figma-tcard">
              <div className="figma-tcard__contect-container">
                <h3 className="figma-tcard__label">Life-Saving Detection</h3>
                <p className="figma-tcard__quote">
                  “If it was not for Specialized Medical’s technology and service I
                  am not sure if this patient would be around today.”
                </p>
                <Link
                  className="figma-tcard__link"
                  to="/clinical-stories/#cp-5"
                >
                  Read Clinical Story
                </Link>
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
                  Rapid Physician Notification
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

          <div
            className="figma-proof-patient-experience figma-proof-patient-experience--split figma-proof-patient-experience--centered"
            aria-labelledby="figma-patient-experience-heading"
          >
            <div className="figma-proof-patient-experience__content">
              <h2
                id="figma-patient-experience-heading"
                className="figma-h2 figma-h2--left figma-proof-patient-experience__title"
              >
                A Better Patient{" "}
                <span className="figma-h2__accent">Experience</span>
              </h2>
              <p className="figma-proof-patient-experience__support">
                Small, comfortable, and easy to wear—designed to make cardiac
                monitoring simpler for patients and easier for practices.
              </p>
            </div>
            <div className="figma-proof-patient-experience__media">
              <video
                className="figma-ai__video figma-ai__video--proof"
                src={VIDEO.ai}
                poster={VIDEO_POSTER.ai}
                width={520}
                height={906}
                controls
                loop
                playsInline
                preload="metadata"
              />
            </div>
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
              Evaluate Specialized Medical with a small, no-obligation beta trial.
              If it isn’t the right fit, we’ll take everything back—no hassle.
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
