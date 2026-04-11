import * as React from "react"
import { Link } from "gatsby"

export const ICON = (p) => `/icons/${encodeURIComponent(p)}`

export function imagesPath(rel) {
  return `/images/${rel.split("/").filter(Boolean).map(encodeURIComponent).join("/")}`
}

function pathMatch(pathname, to, { prefix } = {}) {
  const p = (pathname || "/").replace(/\/$/, "") || "/"
  const t = to.replace(/\/$/, "") || "/"
  if (prefix) {
    return p === t || p.startsWith(`${t}/`)
  }
  return p === t
}

function SiteHeader({ location }) {
  const [navOpen, setNavOpen] = React.useState(false)
  const path = location?.pathname || "/"

  const navClass = (to, options) =>
    pathMatch(path, to, options)
      ? "figma-nav__link is-active"
      : "figma-nav__link"

  return (
    <header className="site-header site-header--figma">
      <div
        className={`figma-container figma-header__inner site-header__inner${
          navOpen ? " nav-open" : ""
        }`}
      >
        <Link
          to="/"
          className="figma-brand"
          aria-label="Specialized Medical home"
          onClick={() => setNavOpen(false)}
        >
          <img
            className="figma-brand__mark"
            src={imagesPath("figma-assets/Group 1261157085.svg")}
            alt=""
            width={236}
            height={52}
            decoding="async"
          />
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
        <nav id="primary-nav" className="figma-nav" aria-label="Primary">
          <Link className={navClass("/")} to="/" onClick={() => setNavOpen(false)}>
            Home
          </Link>
          <Link
            className={navClass("/about")}
            to="/about/"
            onClick={() => setNavOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={navClass("/services", { prefix: true })}
            to="/services/"
            onClick={() => setNavOpen(false)}
          >
            Services
          </Link>
          <Link
            className={navClass("/faq")}
            to="/faq/"
            onClick={() => setNavOpen(false)}
          >
            FAQ’s
          </Link>
          <Link
            className={navClass("/contact")}
            to="/contact/"
            onClick={() => setNavOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="figma-header__cta">
          <a className="figma-phone" href="tel:+18557732633">
            <img
              className="figma-phone__icon"
              src={ICON("vector3527-jgyk.svg")}
              alt=""
              width={14}
              height={14}
              decoding="async"
            />
            <span className="figma-phone__num">1-855-773-2633</span>
          </a>
          <Link
            className="figma-btn figma-btn--outline-dark"
            to="/contact/"
            onClick={() => setNavOpen(false)}
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer site-footer--figma">
      <div className="figma-container">
        <div className="figma-footer__hr" aria-hidden="true" />
        <div className="figma-footer__main">
          <div className="figma-footer__brand">
            <Link to="/" className="figma-brand figma-brand--footer">
              <img
                className="figma-brand__mark"
                src={imagesPath("figma-assets/Group 1261157085.svg")}
                alt=""
                width={412}
                height={90}
                decoding="async"
              />
            </Link>
            <p className="figma-footer__tagline">
              Complete turn-key cardiac monitoring. Live ECG data. Four tests. One
              device.
            </p>
          </div>
          <div className="figma-footer__contact">
            <nav className="figma-footer__nav" aria-label="Footer">
              <Link to="/">Home</Link>
              <Link to="/about/">About Us</Link>
              <Link to="/services/">Services</Link>
              <Link to="/faq/">FAQ’s</Link>
              <Link to="/contact/">Contact</Link>
            </nav>
            <div className="figma-footer__line">
              <span
                className="figma-footer__icon figma-footer__icon--phone"
                aria-hidden="true"
              >
                <img
                  src={ICON("vector3527-jgyk.svg")}
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  decoding="async"
                />
              </span>
              <p>
                <span className="figma-footer__muted">1-855-SPEC-MED</span>{" "}
                <span className="figma-footer__strong">(1-855-773-2633)</span>
              </p>
            </div>
            <div className="figma-footer__line">
              <img
                src={ICON("fi62447103527-gtjs.svg")}
                alt=""
                width={20}
                height={20}
                decoding="async"
              />
              <a href="mailto:info@specialized-med.com">info@specialized-med.com</a>
            </div>
            <div className="figma-footer__line">
              <img
                src={imagesPath("figma-assets/location_icon.png")}
                alt=""
                width={20}
                height={20}
                decoding="async"
              />
              <p className="figma-footer__address">
                Specialized Medical, LLC 34145 Pacific Coast Highway, #700 Dana
                Point, CA 92629
              </p>
            </div>
          </div>
        </div>
        <div className="figma-footer__triple">
          <span>Mobile Cardiac Telemetry</span>
          <span>Holter Monitoring</span>
          <span>Event Monitoring</span>
        </div>
        <div className="figma-footer__hr" aria-hidden="true" />
        <div className="figma-footer__bottom">
          <p className="figma-footer__copy">
            © {year} Specialized Medical, LLC. All rights reserved.
          </p>
          <div className="figma-footer__social">
            <img
              src={imagesPath("figma-assets/hipaa-badge.png")}
              alt="HIPAA"
              width={69}
              height={20}
              className="figma-footer__hipaa"
              loading="lazy"
              decoding="async"
            />
            <a
              href="https://www.facebook.com/"
              className="figma-footer__fb"
              aria-label="Facebook"
            >
              Facebook
            </a>
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
