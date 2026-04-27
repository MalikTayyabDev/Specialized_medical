import * as React from "react"
import { Link } from "gatsby"
import { ICON } from "../components/Layout"
import Seo from "../components/Seo"

const IMG = (file) => `/images/figma-services/${file}`

const REPORT_SAMPLE_PDF_URL = "/documents/SAMPLE-04-16-2026-HolterL1-CA-1.pdf"
const REPORT_SAMPLE_PREVIEW = IMG("report-sample.jpg")

function ReportPdfEmbed() {
  return (
    <div className="figma-proof-patient-experience__pdf-wrap">
      <img
        className="figma-proof-patient-experience__pdf-preview"
        src={REPORT_SAMPLE_PREVIEW}
        alt="Sample report preview"
        width={520}
        height={360}
        loading="lazy"
        decoding="async"
      />
      <a
        className="figma-proof-patient-experience__pdf-open"
        href={REPORT_SAMPLE_PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in a New tab
      </a>
    </div>
  )
}

const CASE_STUDIES = [
  {
    key: "cp-1",
    image: "case-01.jpg",
    caption: "Patient-friendly design, small monitor size, comfort, and ease of wear.",
    tag: "Case Study 01 (S-Patch System)",
    title: "Easy for Patients to Wear",
    body:
      `"I wore the S-Patch Monitor from Specialized Medical all week. It was easy and hassle free. Was not a problem at all. The monitor I wore was very small. I didn't even realize I was wearing it. The technology is incredible. I'm looking forward to seeing the results, since I'm pretty sure I have occasional Afib. This monitor system is SO MUCH better than the old way!"`,
    by: "- R. Gall",
  },
  {
    key: "cp-2",
    image: "case-02.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 02 (S-Patch)",
    title: "The ER Missed It",
    body:
      `"I am so grateful for Specialized Medical and the care I received during my heart monitoring. I wore the monitor for a 15-day test, and on day 12 it detected a serious rhythm issue that needed immediate attention. I truly believe that this monitoring made a life-saving difference for me. What stood out to me just as much as the technology was the people behind it. The customer service team at Specialized Medical was outstanding from beginning to end. They were kind, responsive, patient, and made me feel supported every step of the way.\n\nThe monitor itself was also much easier than I expected. It was simple to use, comfortable to wear, and easy to manage throughout the testing period. That gave me peace of mind and made it possible for me to go about my normal routine while still being monitored. I’m incredibly thankful that this issue was found when it was. Specialized Medical gave me not only answers, but confidence that someone was looking out for me”.`,
    by: "— Marguerite C.",
  },
  {
    key: "cp-3",
    image: "case-03.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 03 (S-Patch)",
    title: "The ER Missed It",
    body:
      `"I am so thankful for Specialized Medical. I wore the monitor from March 4 to March 6, 2026, and it found a serious heart problem that I did not know was happening. I truly believe that test may have saved my life. What meant the most to me was how kind and helpful everyone was. The customer service was outstanding. Any time I had a question, someone was there to help me and explain things in a way I could understand. That made a scary situation feel a little easier. The monitor itself was also very easy to use. It was simple, comfortable to wear, and did not make my day harder. I was able to go about my normal routine while feeling better knowing my heart was being watched. I will always be grateful to Specialized Medical for finding something so important and for treating me with so much care and respect. I would recommend them to anyone who needs heart monitoring."`,
    by: "— Rhonda B.",
  },
  {
    key: "cp-4",
    image: "case-04.jpg",
    caption: "Detected, reported, and escalated quickly",
    tag: "Case Study 04 (Lead Wire System)",
    title: "The ER Missed It",
    body:
      `"I am a Family Medicine doctor located in Central New York and applied Specialized Medical's Cardiac Holter Monitor to a 60-year-old male patient complaining of cardiac-related issues. The patient wore the Specialized Medical Cardiac Holter Monitor for 24 hours. During this test the Cardiac Monitor picked up 3 Paroxysmal AV blocks between 2:18 p.m. and 2:42 p.m. When Specialized Medical saw these results they immediately transmitted the reports to me and then called me on my cell phone. That day the doctor discussed the results with the patient and then referred him to a Cardiologist. We later found out the patient had been walking up a hill and after about 5 minutes into his walk he experienced the aforementioned cardiac arrhythmia. I highly recommend Specialized Medical for their cardiac monitoring services."`,
    by: "— Michael R, M.D.",
  },
  {
    key: "cp-5",
    image: "case-05.jpg",
    caption: "Example of the detail captured and reported by Specialized Medical.",
    tag: "Case Study 05 (Lead Wire System)",
    title: "A Life-Saving Second Opinion",
    body:
      `"I am an Internal Medicine doctor located in Brooklyn, NY and applied a Specialized Medical Cardiac Monitor to a female patient complaining of cardiac related issues. The patient wore a Cardiac Event Monitor and on the 5th day into the test at approximately 9:00 a.m., the patient experienced a cardiac episode that caused her to call me. I immediately had the patient go to hospital emergency room where I met her. I removed the monitor as they admitted her and sent the data into Specialized Medical. Shortly thereafter, I received a phone call on my cellular number that Specialized Medical found a significant cardiac arrhythmia. After reviewing the cardiac reports supplied by Specialized Medical, I called the hospital and forwarded the test results to the 'Fellow Cardiologist' who to my surprise was in the process of releasing my patient because they could not find anything wrong. When the cardiologist at the hospital received the test results they determined that the patient required immediate medical care and scheduled the necessary procedures to take place. If it was not for Specialized Medical's technology and service I am not sure if this patient would be around today."`,
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

export default function ClinicalStoriesPage() {
  return (
    <main className="services-page services-page--figma" data-page="clinical-stories">
      <section className="svc-hero" aria-labelledby="clinical-stories-heading">
        <div className="svc-hero__plate">
          <div className="svc-hero__bg" role="presentation" />
          <div className="svc-hero__gradient" aria-hidden />
          <div className="figma-container svc-hero__inner">
            <p className="figma-hero__pill">
              <span className="figma-hero__pill-dot" aria-hidden />
              Clinical Proof
            </p>
            <h1 id="clinical-stories-heading" className="svc-hero__title">
              Clinical <span className="svc-hero__title-accent">Stories</span>
            </h1>
            <p className="svc-hero__sub">
              Short, physician-facing proof points focused on workflow, reporting, and patient experience.
            </p>
            <div className="svc-hero__actions">
              <Link className="figma-btn figma-btn--outline-dark" to="/services/">
                Back to Services
              </Link>
              <Link className="figma-btn figma-btn--solid" to="/contact/">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="figma-section svc-cases" aria-label="Clinical stories list">
        <div className="figma-container">
          <div className="svc-cases__list svc-cases__list--more">
            {CASE_STUDIES.map((c) => (
              <article key={c.key} id={c.key} className="svc-case-card">
                <div>
                  <div className="svc-case-card__media">
                    <img
                      src={IMG(c.image)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="svc-case-card__caption">{c.caption}</p>
                </div>
                <div>
                  <span className="svc-case-card__tag">{c.tag}</span>
                  <h2 className="svc-case-card__title">{c.title}</h2>
                  <p className="svc-case-card__body">{c.body}</p>
                  <CaseStars />
                  <p className="svc-case-card__by">{c.by}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-section" aria-label="Reporting proof">
        <div className="figma-container">
          <div className="figma-proof-patient-experience figma-proof-patient-experience--split figma-proof-patient-experience--centered">
            <div className="figma-proof-patient-experience__content">
              <h2 className="figma-h2 figma-h2--left figma-proof-patient-experience__title">
                Reporting that supports faster{" "}
                <span className="figma-h2__accent">clinical decisions</span>
              </h2>
              <p className="figma-proof-patient-experience__support">
                EMR-ready final reports with a workflow designed for physician
                review, interpretation, dating, and signature.
              </p>
            </div>
            <div className="figma-proof-patient-experience__media figma-proof-patient-experience__media--pdf">
              <ReportPdfEmbed />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function Head() {
  return (
    <Seo
      title="Clinical Stories"
      description="Clinical stories and proof points focused on physician workflow, reporting, and patient experience."
      pathname="/clinical-stories/"
      image="/images/figma-services/case-01.jpg"
    />
  )
}

