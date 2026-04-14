import * as React from "react"
import { Link } from "gatsby"
import { ICON } from "../components/Layout"

const IMG = (file) => `/images/figma-services/${file}`

/** Same asset as static-site/video (Gatsby `static/video/`) — Figma node 27:358 */
const ECG_APP_VIDEO_SRC =
  "/video/WhatsApp%20Video%202026-04-02%20at%2010.32.10%20PM.mp4"

const BREAKDOWN = [
  ["Holter", "24–48 Hours"],
  ["Extended Holter", "Greater than 48 hours up to 7 days"],
  ["Extended Holter", "Greater than 7 days up to 14 days"],
  ["Event Monitoring", "01 to 30 Days"],
  ["MCT (Telemetry)", "1 to 30 days"],
  ["MCT (Telemetry)", "for Post TAVR Patients"],
]

const PRACTICE = [
  "Final reports are EMR-ready and can be automatically pushed into your system",
  "Electronically review, interpret, date, and sign final reports",
  "Customized billing templates with all CPT and ICD-10 codes provided",
  "We work directly with your billing staff or third-party biller for seamless claims submission",
  "Our portal tracks device usage and alerts your staff about any inactive or unreturned monitors",
]

const CASE_STUDIES = [
  {
    key: "1",
    image: "case-01.jpg",
    caption:
      "patient-friendly design, small monitor size, comfort, and ease of wear.",
    tag: "Case Study 01 (S-Patch System)",
    title: "Easy for Patients to Wear",
    body:
      '"I wore the S-Patch Monitor from Specialized Medical all week. It was easy and hassle free. Was not a problem at all. The monitor I wore was very small. I didn\'t even realize I was wearing it. The technology is incredible. I\'m looking forward to seeing the results, since I\'m pretty sure I have occasional Afib. This monitor system is SO MUCH better than the old way!"',
    by: "- R. Gall",
  },
  {
    key: "2",
    image: "case-02.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 02 (S-Patch)",
    title: "The ER Missed It",
    body:
      '"I am so grateful for Specialized Medical and the care I received during my heart monitoring. I wore the monitor for a 15-day test, and on day 12 it detected a serious rhythm issue that needed immediate attention. I truly believe that this monitoring made a life-saving difference for me. What stood out to me just as much as the technology was the people behind it. The customer service team at Specialized Medical was outstanding from beginning to end. They were kind, responsive, patient, and made me feel supported every step of the way.\n\nThe monitor itself was also much easier than I expected. It was simple to use, comfortable to wear, and easy to manage throughout the testing period. That gave me peace of mind and made it possible for me to go about my normal routine while still being monitored. I\'m incredibly thankful that this issue was found when it was. Specialized Medical gave me not only answers, but confidence that someone was looking out for me".',
    by: "— Marguerite C.",
  },
  {
    key: "3",
    image: "case-03.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 03 (S-Patch)",
    title: "The ER Missed It",
    body:
      '"I am so thankful for Specialized Medical. I wore the monitor from March 4 to March 6, 2026, and it found a serious heart problem that I did not know was happening. I truly believe that test may have saved my life. What meant the most to me was how kind and helpful everyone was. The customer service was outstanding. Any time I had a question, someone was there to help me and explain things in a way I could understand. That made a scary situation feel a little easier. The monitor itself was also very easy to use. It was simple, comfortable to wear, and did not make my day harder. I was able to go about my normal routine while feeling better knowing my heart was being watched. I will always be grateful to Specialized Medical for finding something so important and for treating me with so much care and respect. I would recommend them to anyone who needs heart monitoring."',
    by: "— Rhonda B.",
  },
  {
    key: "4",
    image: "case-04.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 04 (Lead Wire System)",
    title: "The ER Missed It",
    body:
      "\"I am a Family Medicine doctor located in Central New York and applied Specialized Medical's Cardiac Holter Monitor to a 60-year-old male patient complaining of cardiac-related issues. The patient wore the Specialized Medical Cardiac Holter Monitor for 24 hours. During this test the Cardiac Monitor picked up 3 Paroxysmal AV blocks between 2:18 p.m. and 2:42 p.m. When Specialized Medical saw these results they immediately transmitted the reports to me and then called me on my cell phone. That day the doctor discussed the results with the patient and then referred him to a Cardiologist. We later found out the patient had been walking up a hill and after about 5 minutes into his walk he experienced the aforementioned cardiac arrhythmia. I highly recommend Specialized Medical for their cardiac monitoring services.\"",
    by: "- Michael",
  },
  {
    key: "5",
    image: "case-05.jpg",
    caption:
      "Example of the detail captured and reported by Specialized Medical.",
    tag: "Case Study 05 (Lead Wire System)",
    title: "A Life-Saving Second Opinion",
    body:
      "\"I am an Internal Medicine doctor located in Brooklyn, NY and applied a Specialized Medical Cardiac Monitor to a female patient complaining of cardiac related issues. The patient wore a Cardiac Event Monitor and on the 5th day into the test at approximately 9:00 a.m., the patient experienced a cardiac episode that caused her to call me. I immediately had the patient go to hospital emergency room where I met her. I removed the monitor as they admitted her and sent the data into Specialized Medical. Shortly thereafter, I received a phone call on my cellular number that Specialized Medical found a significant cardiac arrhythmia. After reviewing the cardiac reports supplied by Specialized Medical, I called the hospital and forwarded the test results to the 'Fellow Cardiologist' who to my surprise was in the process of releasing my patient because they could not find anything wrong. When the cardiologist at the hospital received the test results they determined that the patient required immediate medical care and scheduled the necessary procedures to take place. If it was not for Specialized Medical's technology and service I am not sure if this patient would be around today.\"",
    by: "- Dr. Catalina R.S.",
  },
]

function CaseStars() {
  const src = ICON("star13663-lr4m.svg")
  return (
    <div className="svc-case-card__stars" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <img key={i} src={src} alt="" width={24} height={24} />
      ))}
    </div>
  )
}

const ServicesPage = () => (
  <main className="services-page services-page--figma" data-design="figma-27-13">
    <section className="svc-hero" aria-labelledby="svc-hero-heading">
      <div className="svc-hero__plate">
        <div className="svc-hero__bg" role="presentation" />
        <div className="svc-hero__gradient" aria-hidden />
        <div className="figma-container svc-hero__inner">
          <p className="figma-hero__pill">
            <span className="figma-hero__pill-dot" aria-hidden />
            Our Services
          </p>
          <h1 id="svc-hero-heading" className="svc-hero__title">
            <span className="svc-hero__title-line">Services built for</span>
            <br />
            <span className="svc-hero__title-accent">modern physician practices</span>
          </h1>
          <p className="svc-hero__lead">
            Live ECG data, streamlined workflow, and turnkey monitoring support.
          </p>
          <div className="svc-hero__actions">
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

    <section className="figma-section svc-breakdown" aria-labelledby="svc-breakdown-heading">
      <div className="figma-container">
        <h2 id="svc-breakdown-heading" className="svc-breakdown__heading">
          Full Test <span className="svc-breakdown__heading-accent">Breakdown</span>
        </h2>
        <div className="svc-breakdown__grid">
          {BREAKDOWN.map(([title, meta]) => (
            <article key={`${title}-${meta}`} className="svc-breakdown-card">
              <h3 className="svc-breakdown-card__title">{title}</h3>
              <p className="svc-breakdown-card__meta">{meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="figma-section svc-split" aria-labelledby="svc-four-heading">
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="svc-split__copy">
            <h2 id="svc-four-heading" className="svc-split__title">
              Four test types,
              <br />
              <span className="svc-split__title-accent">one consistent workflow</span>
            </h2>
            <p className="svc-split__text">
              Support Holter, Extended Holter, Event Monitoring, and Telemetry (MCT)
              through a turnkey monitoring program built around the S-Patch Monitoring
              System.
            </p>
          </div>
          <div className="svc-split__media">
            <img
              src={IMG("four-tests-device.jpg")}
              alt="Patient with cardiac monitoring device"
              width={522}
              height={662}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="figma-section svc-split svc-split--muted svc-split--live"
      aria-labelledby="svc-live-heading"
    >
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="svc-split__media svc-split__media--live-ecg">
            <div className="svc-live-ecg-card">
              <p className="svc-live-ecg-card__label">Live ECG Signal</p>
              <div className="svc-live-ecg-card__frame">
                <img
                  src={IMG("live-streaming-ecg.jpg")}
                  alt="Live ECG waveform display"
                  width={522}
                  height={390}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div className="svc-split__copy">
            <h2 id="svc-live-heading" className="svc-split__title">
              Live Streaming,
              <br />
              <span className="svc-split__title-accent">Real-Time Data</span>
            </h2>
            <p className="svc-split__text">
              Our platform is designed for continuous, resilient real-time data
              streaming across a wide range of patient environments, including rural
              areas. This supports uninterrupted data capture, reduces the
              likelihood of incomplete studies, and gives physicians greater
              confidence in every test. Data is sent live to our monitoring center
              no manual uploading, no data delays.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="figma-section svc-split" aria-labelledby="svc-spatch-heading">
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="svc-split__copy">
            <Link className="svc-split__eyebrow" to="/services/equipment/">
              <span className="svc-split__eyebrow-dot" aria-hidden />
              Monitoring Equipment options
            </Link>
            <h2 id="svc-spatch-heading" className="svc-split__title">
              The S-Patch <span className="svc-split__title-accent">Monitoring System</span>
            </h2>
            <p className="svc-split__text">
              <strong>Primary Featured System.</strong> The S-Patch Monitoring System is
              Specialized Medical’s primary featured monitoring solution. It supports
              Holter, Extended Holter, Event Monitoring, and Telemetry (MCT) while
              delivering live-streaming, real-time ECG data through a compact,
              patient-friendly design.
            </p>
            <p className="svc-split__text">
              Our platform is designed for continuous, resilient real-time data streaming
              across a wide range of patient environments, including rural areas. Data is
              sent live to our monitoring center—no manual uploading and no data delays.
            </p>
            <ul className="svc-split__list">
              <li>Primary featured system for Specialized Medical</li>
              <li>Supports Holter, Extended Holter, Event Monitoring, and Telemetry (MCT)</li>
              <li>Live-streaming, real-time ECG data</li>
              <li>No manual uploading</li>
            </ul>
            <Link className="figma-btn figma-btn--solid" to="/services/equipment/">
              See More
            </Link>
          </div>
          <div className="svc-split__media">
            <img
              src={IMG("s-patch.jpg")}
              alt="S-Patch monitoring system in use"
              width={522}
              height={727}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="figma-section svc-split svc-split--muted svc-split--lead"
      aria-labelledby="svc-lead-heading"
    >
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="svc-split__media">
            <img
              src={IMG("lead-wire.jpg")}
              alt="Lead-wire monitoring system"
              width={522}
              height={748}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="svc-split__copy">
            <h2 id="svc-lead-heading" className="svc-split__title">
              <span className="svc-split__title-line">Lead-Wire</span>
              <br />
              <span className="svc-split__title-accent">Monitoring System</span>
            </h2>
            <p className="svc-split__text">
              <strong>Secondary / legacy monitoring option.</strong> Lead-Wire remains
              available as an older secondary monitoring option where appropriate. It is
              shown separately so practices understand it is not the primary system
              being promoted.
            </p>
            <ul className="svc-split__list">
              <li>Secondary option where needed</li>
              <li>Separate system from S-Patch</li>
            </ul>
            <Link className="figma-btn figma-btn--solid" to="/services/equipment/">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="figma-section svc-workflow" aria-labelledby="svc-workflow-heading">
      <div className="figma-container">
        <h2 id="svc-workflow-heading" className="svc-workflow__heading">
          Streamlined Workflow
          <br />
          <span className="svc-workflow__heading-accent">for Your Office</span>
        </h2>
        <p className="svc-workflow__sub">
          Your medical assistant completes a simple 3-step process: Hook-Up -&gt;
          Enroll -&gt; Disconnect (Under 15 Minutes)
        </p>
        <div className="svc-workflow__panel">
          <p>Once the patient leaves, we take over the rest:</p>
          <div className="svc-workflow__grid">
            <div className="svc-workflow__cell">
              <span className="svc-workflow__dot" aria-hidden />
              24/7 live monitoring across all test types
            </div>
            <div className="svc-workflow__cell">
              <span className="svc-workflow__dot" aria-hidden />
              Real-time arrhythmia alerts by email, text, or phone call
            </div>
            <div className="svc-workflow__cell">
              <span className="svc-workflow__dot" aria-hidden />
              Automatic generation and delivery of final reports
            </div>
            <div className="svc-workflow__cell">
              <span className="svc-workflow__dot" aria-hidden />
              Patient support through our 24/7 multilingual call center
            </div>
          </div>
          <p className="svc-workflow__footer">
            When the patient returns the device, it is ready for the next patient.
          </p>
        </div>
      </div>
    </section>

    <section className="figma-section svc-practice" aria-labelledby="svc-practice-heading">
      <div className="figma-container">
        <h2 id="svc-practice-heading" className="svc-practice__heading">
          Practice Integration
          <br />
          <span className="svc-practice__heading-accent">Made Easy</span>
        </h2>
        <ul className="svc-practice__list">
          {PRACTICE.map((line) => (
            <li key={line} className="svc-practice__item">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="figma-section svc-reporting" aria-labelledby="svc-reporting-heading">
      <div className="figma-container">
        <h2 id="svc-reporting-heading" className="svc-reporting__heading">
          Detailed Reporting That{" "}
          <span className="svc-reporting__heading-accent">
            Supports Faster Clinical Decisions.
          </span>
        </h2>
        <div className="svc-reporting__inner">
          <div className="svc-reporting__blocks">
            <div className="svc-reporting__block">
              <h3>Symptomatic vs. Asymptomatic Clarity</h3>
              <p>
                Patient symptoms are entered digitally during the test and
                automatically populate on the final report above the corresponding ECG
                strips, making it immediately clear whether an event was symptomatic
                or asymptomatic - with no separate handwritten symptom diary required.
              </p>
            </div>
            <div className="svc-reporting__block">
              <h3>ECG strip detail</h3>
              <p>
                Experience industry-leading ECG clarity, including precise P-wave
                definition. Our reports provide the granular detail necessary for
                accurate rhythm interpretation.
              </p>
            </div>
            <div className="svc-reporting__block">
              <h3>EMR-Ready Final Reports</h3>
              <p>
                Stop wasting time with manual data entry. Final reports are EMR-ready
                and can be pushed automatically into your existing system for a
                seamless digital record.
              </p>
            </div>
            <div className="svc-reporting__block">
              <h3>Streamlined Physician Interpretation Workflow</h3>
              <p>
                We have simplified the professional review process to fit into your
                busy schedule. Through our secure provider portal, you can manage the
                entire interpretation cycle in one place:
              </p>
              <ul className="svc-reporting__sublist">
                <li>
                  <span className="svc-reporting__label">Electronic Review :</span>{" "}
                  Access comprehensive data and full-disclosure strips from any secure
                  device.
                </li>
                <li>
                  <span className="svc-reporting__label">
                    Professional Interpretation :
                  </span>{" "}
                  Document your findings directly within the digital report interface.
                </li>
                <li>
                  <span className="svc-reporting__label">
                    Digital Authentication :
                  </span>{" "}
                  Finalize reports with an electronic signature, date, and time
                  stamp—ready for billing and clinical filing.
                </li>
              </ul>
            </div>
          </div>
          <div className="svc-reporting__shot">
            <img
              src={IMG("report-sample.jpg")}
              alt="Sample cardiac monitoring report"
              width={630}
              height={925}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="figma-section svc-cases" aria-labelledby="svc-cases-heading">
      <div className="figma-container">
        <h2 id="svc-cases-heading" className="svc-cases__heading">
          Clinical <span className="svc-cases__heading-accent">Proof</span>
        </h2>
        <div className="svc-cases__list">
          {CASE_STUDIES.map((c) => (
            <article key={c.key} className="svc-case-card">
              <div>
                <div className="svc-case-card__media">
                  <img
                    src={IMG(c.image)}
                    alt=""
                    width={305}
                    height={394}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="svc-case-card__caption">{c.caption}</p>
              </div>
              <div>
                <span className="svc-case-card__tag">{c.tag}</span>
                <h3 className="svc-case-card__title">{c.title}</h3>
                <p className="svc-case-card__body">{c.body}</p>
                <CaseStars />
                <p className="svc-case-card__by">{c.by}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section
      className="figma-section svc-split svc-split--symptom"
      aria-labelledby="svc-symptom-heading"
    >
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="figma-ecg__visual">
            <video
              className="figma-ecg__video"
              src={ECG_APP_VIDEO_SRC}
              controls
              loop
              playsInline
              preload="metadata"
              aria-label="S-Patch app: live ECG and symptom logging"
            />
          </div>
          <div className="svc-split__copy">
            <h2 id="svc-symptom-heading" className="svc-split__title">
              See Live ECG &amp;
              <br />
              <span className="svc-split__title-accent">Symptom Logging</span>
            </h2>
            <p className="svc-split__text">
              Our platform streams ECG data in real-time, allowing physicians to
              monitor patients remotely with confidence. Patient symptoms are entered
              digitally and automatically populate on the final report, making it
              immediately clear whether an event was symptomatic or asymptomatic.
            </p>
            <ul className="svc-split__list">
              <li>Live ECG streaming for remote monitoring workflows</li>
              <li>Digital symptom logging tied to ECG events</li>
              <li>Clear symptomatic vs. asymptomatic labeling on the final report</li>
            </ul>
            <p className="svc-split__text svc-split__text--symptom-footer">
              Symptoms are logged digitally and matched directly to ECG events on the
              final report.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="figma-section svc-patient svc-split" aria-labelledby="svc-patient-heading">
      <div className="figma-container">
        <div className="svc-split__inner">
          <div className="svc-split__copy">
            <h2 id="svc-patient-heading" className="svc-split__title">
              Patient-Friendly
              <br />
              <span className="svc-split__title-accent">Design</span>
            </h2>
            <p className="svc-split__text">
              Each monitor weighs less than four sheets of paper (0.6 oz). The monitor
              runs for a minimum of 10 days per battery, supporting longer monitoring
              periods with less interruption, is water-resistant (IP55), and offers
              industry-leading ECG clarity, including precise P-wave definition.
            </p>
          </div>
          <div className="svc-split__media" style={{ borderRadius: 30 }}>
            <img
              src={IMG("patient-friendly.jpg")}
              alt="Hand holding compact cardiac monitor"
              width={630}
              height={604}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="figma-section svc-tavr" aria-labelledby="svc-tavr-heading">
      <div className="figma-container">
        <h2 id="svc-tavr-heading" className="svc-tavr__heading">
          Ideal for <span className="svc-tavr__heading-accent">TAVR Programs</span>
        </h2>
        <p className="svc-tavr__sub">Post-TAVR Monitoring, Built for Continuity</p>
        <p className="svc-tavr__text">
          Patients recovering from TAVR remain at risk for delayed conduction
          abnormalities and other clinically significant rhythm changes, making
          reliable post-procedure monitoring essential. Our monitoring system
          combines the S-Patch ECG monitor with an adaptive, multi-path cellular
          transmission platform designed for continuous, real-time ECG streaming.
          The differentiator is not simply the monitor itself, but the resilient
          connectivity infrastructure behind it, which helps maintain transmission
          across changing environments, including rural and lower-coverage areas.
          This supports more consistent ECG data capture and faster awareness of
          actionable rhythm changes to inform timely clinical decision-making.
        </p>
      </div>
    </section>

    <section className="figma-section figma-cta svc-figma-cta" aria-labelledby="svc-cta-heading">
      <div className="figma-container">
        <div className="figma-cta__box">
          <h2
            id="svc-cta-heading"
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
            Evaluate Specialized Medical with a small, no-obligation beta trial. If it
            isn’t the right fit, we’ll take everything back—no hassle.
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

export default ServicesPage

export function Head() {
  return (
    <>
      <title>Services | Specialized Medical</title>
      <meta
        name="description"
        content="Holter, extended Holter, event monitoring, and MCT with live-streaming ECG data, streamlined workflow, and zero-cost equipment—built around the S-Patch Monitoring System."
      />
    </>
  )
}
