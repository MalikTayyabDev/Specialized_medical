import * as React from "react"
import { Link } from "gatsby"
import { ICON } from "../components/Layout"

const IMG = (file) => `/images/figma-services/${file}`

const REPORT_SAMPLE_PDF_URL = "/documents/SAMPLE-04-16-2026-HolterL1-CA-1.pdf"

const CASE_STUDIES = [
  {
    key: "cp-1",
    image: "case-01.jpg",
    caption: "Example: an alert that prompted faster clinical action.",
    tag: "S-Patch",
    title: "Earlier visibility, cleaner decisions",
    body:
      "\"Specialized Medical gave us live-streaming data and clear alerts. The report quality and portal workflow made it easy to review, interpret, and sign without delays.\"",
    by: "- Physician practice feedback",
  },
  {
    key: "cp-2",
    image: "case-02.jpg",
    caption: "Example of report clarity and symptom correlation.",
    tag: "S-Patch",
    title: "Symptom-to-ECG clarity without extra work",
    body:
      "\"Symptoms were captured digitally and tied directly to ECG strips on the final report. It reduced uncertainty and saved our team time.\"",
    by: "- Office staff feedback",
  },
  {
    key: "cp-3",
    image: "case-03.jpg",
    caption: "Example of patient wearability and adherence.",
    tag: "S-Patch",
    title: "Wearability that improves compliance",
    body:
      "\"Patients tolerated the monitor well and data quality stayed strong. That made studies more reliable without adding burden to the office.\"",
    by: "- Practice operations feedback",
  },
  {
    key: "cp-4",
    image: "case-04.jpg",
    caption: "Example of escalation workflow and response.",
    tag: "Monitoring + Alerts",
    title: "Escalation that feels operationally mature",
    body:
      "\"Real-time alerts and a clear escalation process helped us act quickly, with fewer back-and-forth steps.\"",
    by: "- Clinical operations feedback",
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
          <div className="figma-proof-patient-experience figma-proof-patient-experience--split">
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
            <div className="figma-proof-patient-experience__media">
              <iframe
                className="figma-proof-patient-experience__pdf"
                title="Sample cardiac monitoring report"
                src={REPORT_SAMPLE_PDF_URL}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function Head() {
  return (
    <>
      <title>Clinical Stories | Specialized Medical</title>
      <meta
        name="description"
        content="Clinical stories and proof points focused on physician workflow, reporting, and patient experience."
      />
    </>
  )
}

