import * as React from "react"
import { Link } from "gatsby"

export const ICON = (p) => `/icons/${p}`

export function BrandLockup() {
  return (
    <div className="site-brand__text">
      <span className="site-brand__name">Specialized Medical</span>
      <img
        className="site-brand__tagline"
        src={ICON("expertcardiacmonitoringservices3525-5iyz.svg")}
        alt=""
        width={197}
        height={12}
      />
    </div>
  )
}

function pathMatch(pathname, to) {
  const p = (pathname || "/").replace(/\/$/, "") || "/"
  const t = to.replace(/\/$/, "") || "/"
  return p === t
}

function SiteHeader({ location }) {
  const [navOpen, setNavOpen] = React.useState(false)
  const path = location?.pathname || "/"

  const linkClass = (to) =>
    pathMatch(path, to) ? "site-nav__link is-active" : "site-nav__link"

  return (
    <header className="site-header">
      <div className="site-header__topbar">
        <div className="container site-header__topbar-inner">
          <a className="site-header__topbar-phone" href="tel:+18557732633">
            <img src={ICON("vector3525-jq8.svg")} alt="" />
            1-855-773-2633
          </a>
          <div className="site-header__social">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <img src={ICON("vector3527-h9kk.svg")} alt="" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`container site-header__inner${navOpen ? " nav-open" : ""}`}
      >
        <Link to="/" className="site-brand">
          <BrandLockup />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          Menu
        </button>

        <nav id="primary-nav" className="site-nav" aria-label="Primary">
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
          <Link className={linkClass("/about")} to="/about/">
            About Us
          </Link>
          <Link className={linkClass("/services")} to="/services/">
            Services
          </Link>
          <Link className={linkClass("/faq")} to="/faq/">
            FAQs
          </Link>
          <Link className={linkClass("/contact")} to="/contact/">
            Contact Us
          </Link>
        </nav>

        <div className="site-header__cta">
          <Link className="btn btn--portal" to="/patient-portal/">
            Patient Portal
          </Link>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="site-brand">
              <BrandLockup />
            </Link>
            <p>
              Complete turn-key cardiac monitoring. Live ECG data. Four tests.
              One device.
            </p>
          </div>
          <div className="site-footer__cols">
            <div className="site-footer__col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/events/">Events</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer__col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/services/">Holter</Link>
                </li>
                <li>
                  <Link to="/services/">Telemetry (MCT)</Link>
                </li>
                <li>
                  <Link to="/services/">Event Monitoring</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer__col">
              <h4>Contact</h4>
              <div className="contact-line">
                <img src={ICON("vector3527-jgyk.svg")} alt="" />
                <span>1-855-SPEC-MED (1-855-773-2633)</span>
              </div>
              <div className="contact-line">
                <img src={ICON("fi62447103527-gtjs.svg")} alt="" />
                <span>info@specialized-med.com</span>
              </div>
              <div className="contact-line">
                <img src={ICON("vector3527-rp3.svg")} alt="" />
                <span>
                  Specialized Medical, LLC
                  <br />
                  34145 Pacific Coast Highway, #700
                  <br />
                  Dana Point, CA 92629
                </span>
              </div>
              <div className="social-row">
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <img src={ICON("vector3527-h9kk.svg")} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Specialized Medical, LLC.</span>
          <div className="site-footer__legal">
            <Link to="/privacy/">Privacy Policy</Link>
            <Link to="/terms/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children, location }) {
  return (
    <div className="site-root">
      <SiteHeader location={location} />
      {children}
      <SiteFooter />
    </div>
  )
}
