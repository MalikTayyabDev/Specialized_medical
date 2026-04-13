import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const frag = fs.readFileSync(join(__dirname, "faq-accordion-fragment.html"), "utf8");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FAQ | Specialized Medical</title>
  <meta name="description" content="Everything you need to know about Specialized Medical's cardiac monitoring services—workflow, reports, billing, supplies, patient experience, and the no-risk beta trial.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/faq.css">
</head>
<body>
  <div class="site-root">
    <header class="site-header site-header--figma">
      <div class="figma-container figma-header__inner site-header__inner">
        <a href="index.html" class="figma-brand" aria-label="Specialized Medical home">
          <img class="figma-brand__mark" src="images/figma-assets/Group 1261157085.svg" alt="" width="236" height="52" decoding="async">
        </a>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav id="primary-nav" class="figma-nav" aria-label="Primary">
          <a class="figma-nav__link" href="index.html">Home</a>
          <a class="figma-nav__link" href="about.html">About Us</a>
          <a class="figma-nav__link" href="services.html">Services</a>
          <a class="figma-nav__link is-active" href="faq.html">FAQ’s</a>
          <a class="figma-nav__link" href="contact.html">Contact</a>
        </nav>
        <div class="figma-header__cta">
          <a class="figma-phone" href="tel:+18557732633">
            <img class="figma-phone__icon" src="icons/vector3527-jgyk.svg" alt="" width="14" height="14" decoding="async">
            <span class="figma-phone__num">1-855-773-2633</span>
          </a>
          <a class="figma-btn figma-btn--outline-dark" href="contact.html">Request a Demo</a>
          <a class="figma-header__portal" href="https://www.specialized-med.com/patient-portal/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
        </div>
      </div>
    </header>

    <main class="faq-page faq-page--figma" data-design="figma-17-396">
      <section class="faq-figma-hero" aria-labelledby="faq-hero-heading">
        <div class="faq-figma-hero__plate">
          <div class="faq-figma-hero__bg" role="presentation"></div>
          <div class="faq-figma-hero__gradient" aria-hidden="true"></div>
          <div class="figma-container faq-figma-hero__inner">
            <p class="figma-hero__pill">
              <span class="figma-hero__pill-dot" aria-hidden="true"></span>
              FAQ
            </p>
            <h1 id="faq-hero-heading" class="faq-figma-hero__title">
              Frequently Asked <span class="faq-figma-hero__title-accent">Questions</span>
            </h1>
            <p class="faq-figma-hero__lead">Everything you need to know about Specialized Medical's cardiac monitoring services.</p>
          </div>
        </div>
      </section>

      <section class="figma-section faq-accordion" aria-label="FAQ topics">
        <div class="figma-container faq-accordion__inner">
${frag}
        </div>
      </section>

      <section class="figma-section faq-testimonials" aria-labelledby="testimonials-heading">
        <div class="figma-container">
          <div class="faq-testimonials__layout">
            <div class="faq-testimonials__photo">
              <img src="images/figma-faq/faq-testimonial-portrait.jpg" alt="Patient during daily activity" width="305" height="426" loading="lazy" decoding="async">
              <div class="faq-testimonials__dots" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="faq-testimonials__right">
              <h2 id="testimonials-heading" class="faq-testimonials__title">
                What People Are <span class="faq-testimonials__title-accent">Saying</span>
              </h2>
              <div class="faq-testimonials__cards">
                <blockquote class="faq-testimonial-card">
                  <p>They immediately transmitted the reports to me and then called me on my cell phone.</p>
                  <footer>Michael</footer>
                </blockquote>
                <blockquote class="faq-testimonial-card">
                  <p>I did not even realize I was wearing it</p>
                  <footer>R. Gall</footer>
                </blockquote>
                <blockquote class="faq-testimonial-card">
                  <p>I am not sure if this patient would be around today</p>
                  <footer>Dr. Catalina R.S.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="figma-section figma-cta faq-figma-cta" aria-labelledby="faq-cta-heading">
        <div class="figma-container">
          <div class="figma-cta__box">
            <h2 id="faq-cta-heading" class="figma-h2 figma-h2--center figma-h2--narrow">
              Start Your No-Risk<br>
              <span class="figma-h2__accent">Beta Trial</span>
            </h2>
            <p class="figma-cta__p figma-cta__p--lead">See how Specialized Medical can support your practice with: live-streaming ECG data; simplified office workflow.</p>
            <p class="figma-cta__p">No-Risk Beta Trial. Anyone can make promises. We would rather prove it. Try Specialized Medical on a few patients. If it is not the right fit, we will take everything back - no hassle, no obligation. Let us prove our value to you and your patients.</p>
            <div class="figma-cta__actions">
              <a class="figma-btn figma-btn--solid" href="contact.html">Start Your No-Risk Beta Trial</a>
              <a class="figma-cta__talk" href="contact.html">Talk to Our Team→</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer site-footer--figma">
      <div class="figma-container">
        <div class="figma-footer__hr" aria-hidden="true"></div>
        <div class="figma-footer__main">
          <div class="figma-footer__brand">
            <a href="index.html" class="figma-brand figma-brand--footer">
              <img class="figma-brand__mark" src="images/figma-assets/Group 1261157085.svg" alt="" width="412" height="90" decoding="async">
            </a>
            <p class="figma-footer__tagline">Complete turn-key cardiac monitoring. Live ECG data. Four tests. One device.</p>
          </div>
          <div class="figma-footer__contact">
            <nav class="figma-footer__nav" aria-label="Footer">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="services.html">Services</a>
              <a href="faq.html">FAQ’s</a>
              <a href="contact.html">Contact</a>
              <a href="https://www.specialized-med.com/patient-portal/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
            </nav>
            <div class="figma-footer__line">
              <span class="figma-footer__icon figma-footer__icon--phone" aria-hidden="true">
                <img src="icons/vector3527-jgyk.svg" alt="Phone Icon" width="20" height="20" decoding="async">
              </span>
              <p><span class="figma-footer__muted">1-855-SPEC-MED</span> <span class="figma-footer__strong">(1-855-773-2633)</span></p>
            </div>
            <div class="figma-footer__line">
              <img src="icons/fi62447103527-gtjs.svg" alt="" width="20" height="20" decoding="async">
              <a href="mailto:info@specialized-med.com">info@specialized-med.com</a>
            </div>
            <div class="figma-footer__line">
              <img src="images/figma-assets/location_icon.png" alt="" width="20" height="20" decoding="async">
              <p class="figma-footer__address">Specialized Medical, LLC 34145 Pacific Coast Highway, #700 Dana Point, CA 92629</p>
            </div>
          </div>
        </div>
        <div class="figma-footer__triple">
          <span>Mobile Cardiac Telemetry</span>
          <span>Holter Monitoring</span>
          <span>Event Monitoring</span>
        </div>
        <div class="figma-footer__hr" aria-hidden="true"></div>
        <div class="figma-footer__bottom">
          <p class="figma-footer__copy">© <span id="footer-year">2026</span> Specialized Medical, LLC. All rights reserved.</p>
          <div class="figma-footer__social">
            <img src="images/figma-assets/hipaa-badge.png" alt="HIPAA" width="69" height="20" class="figma-footer__hipaa" loading="lazy" decoding="async">
            <a href="https://www.facebook.com/" class="figma-footer__fb" aria-label="Facebook"><img src="icons/vector3527-h9kk.svg" alt="" width="20" height="20" class="figma-footer__fb-icon" loading="lazy" decoding="async"><span>Facebook</span></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <script src="js/main.js" defer></script>
</body>
</html>
`;

fs.writeFileSync(join(__dirname, "faq.html"), html, "utf8");
console.log("Wrote faq.html");
