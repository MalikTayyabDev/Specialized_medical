/**
 * Generates services/equipment.html (paths relative to that file use ../)
 */
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const IMG_SPATCH =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80";
const IMG_LEAD =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80";

const SPATCH_SPECS = [
  "1–3 lead monitoring",
  "Live-streaming ECG",
  "Rechargeable",
  "Slim disk design (~0.3 oz)",
  "Up to 100-hour battery life",
  "Water resistant (IP22)",
  "Android & iPhone compatible",
];

const SPATCH_HIGHLIGHTS = [
  '"No-touch" provider-friendly service model',
  "Simplified workflow from hook-up through report",
  "Minimalist design for patient comfort",
  "Built-in Wi-Fi for reliable data transmission",
];

const LEAD_SPECS = [
  "Three-lead acquisition system",
  "Water resistant (IP67)",
  "~1.5 oz total weight",
  "Up to 100-hour battery life",
  "Cloud-based analysis and reporting",
];

const p = "..";

const spatchSpecs = SPATCH_SPECS.map((s) => `<li>${s}</li>`).join("");
const spatchHigh = SPATCH_HIGHLIGHTS.map((s) => `<li>${s}</li>`).join("");
const leadSpecs = LEAD_SPECS.map((s) => `<li>${s}</li>`).join("");

const main = `<main class="equipment-page">
    <section class="equipment-hero" aria-labelledby="equipment-heading">
      <div class="container">
        <p class="equipment-hero__crumb">
          <a href="../services.html">Services</a>
          <span class="equipment-hero__crumb-sep" aria-hidden> / </span>
          <span>For our doctors</span>
        </p>
        <h1 id="equipment-heading" class="equipment-hero__title">Monitoring Equipment <span class="equipment-hero__title-accent">Options</span></h1>
        <p class="equipment-hero__rule" aria-hidden></p>
      </div>
    </section>

    <section class="equipment-block" aria-labelledby="spatch-heading">
      <div class="container">
        <div class="equipment-block__grid equipment-block__grid--img-right">
          <div class="equipment-block__copy">
            <h2 id="spatch-heading" class="equipment-block__name">S-Patch Monitoring System</h2>
            <p class="equipment-block__tag">Premium monitoring system</p>
            <p class="equipment-block__text">The S-Patch is designed for discreet, comfortable wear—so patients can move through daily life while your team receives dependable rhythm data. Lightweight hardware and thoughtful ergonomics help improve compliance across longer monitoring windows.</p>
            <p class="equipment-block__text">Real-time streaming keeps your clinical team aligned with what is happening on the rhythm strip, supporting timely decisions when symptoms and events need context.</p>
            <p class="equipment-block__text">When signal quality and patient experience both matter, the S-Patch delivers a premium monitoring experience without adding complexity to your office workflow.</p>
          </div>
          <div class="equipment-block__media">
            <img src="${IMG_SPATCH}" alt="Patient wearing the S-Patch monitoring device" loading="eager" decoding="async" width="640" height="720">
          </div>
        </div>
        <div class="equipment-spec-grid">
          <div class="equipment-spec-box">
            <h3 class="equipment-spec-box__title">Specifications</h3>
            <ul class="equipment-list equipment-list--diamond">${spatchSpecs}</ul>
          </div>
          <div class="equipment-spec-box">
            <h3 class="equipment-spec-box__title">Feature highlights</h3>
            <ul class="equipment-list equipment-list--diamond">${spatchHigh}</ul>
          </div>
        </div>
      </div>
    </section>

    <section class="equipment-block equipment-block--alt" aria-labelledby="lead-heading">
      <div class="container">
        <div class="equipment-block__grid equipment-block__grid--img-left">
          <div class="equipment-block__media">
            <img src="${IMG_LEAD}" alt="Patient wearing the lead-wire monitoring system" loading="lazy" decoding="async" width="640" height="720">
          </div>
          <div class="equipment-block__copy">
            <h2 id="lead-heading" class="equipment-block__name">Lead-Wire Monitoring System</h2>
            <p class="equipment-block__tag">Secondary monitoring option</p>
            <p class="equipment-block__text">For patients who may not be ideal candidates for patch-based wear or when your protocol calls for a traditional wired setup, our lead-wire system provides a dependable alternative—without sacrificing the clarity your team expects from ambulatory monitoring.</p>
          </div>
        </div>
        <div class="equipment-spec-box equipment-spec-box--full">
          <h3 class="equipment-spec-box__title">Specifications</h3>
          <ul class="equipment-list equipment-list--diamond equipment-list--columns">${leadSpecs}</ul>
        </div>
      </div>
    </section>

    <section class="section-cta equipment-page-cta" aria-labelledby="equipment-cta-heading">
      <div class="container">
        <h2 id="equipment-cta-heading">Start Your No-Risk <span class="accent">Beta Trial</span></h2>
        <p>See how our monitoring programs can support your practice—schedule time with our team or start a no-obligation trial to evaluate workflows, reporting, and patient experience.</p>
        <div class="section-cta__actions equipment-page-cta__actions">
          <a class="btn btn--primary" href="../contact.html">Start Your No-Risk Beta Trial</a>
          <a class="equipment-page-cta__link" href="../contact.html">Talk to Our Team<span aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  </main>`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Monitoring Equipment Options | Specialized Medical Services</title>
  <meta name="description" content="S-Patch and lead-wire monitoring systems—specifications, features, and options for physician practices.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${p}/css/global.css">
  <link rel="stylesheet" href="${p}/css/home.css">
  <link rel="stylesheet" href="${p}/css/services.css">
  <link rel="stylesheet" href="${p}/css/equipment.css">
</head>
<body>
  <div class="site-root">
    <header class="site-header">
      <div class="container site-header__topbar">
        <a class="site-header__topbar-phone" href="tel:+18557732633">
          <img src="${p}/icons/vector3525-jq8.svg" alt="">
          1-855-773-2633
        </a>
        <div class="site-header__social">
          <a href="https://www.facebook.com/specializedmedical" aria-label="Facebook">
            <img src="${p}/icons/vector3527-h9kk.svg" alt="" width="20" height="20">
          </a>
        </div>
      </div>
      <div class="container site-header__inner">
        <a href="${p}/index.html" class="site-brand">
          <img class="site-brand__logo" src="${p}/icons/brand-logo.svg" alt="Specialized Medical — Expert Cardiac Monitoring Services" width="236" height="71">
        </a>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav id="primary-nav" class="site-nav" aria-label="Primary">
          <a class="site-nav__link" href="${p}/index.html">Home</a>
          <a class="site-nav__link" href="${p}/about.html">About Us</a>
          <a class="site-nav__link is-active" href="${p}/services.html">Services</a>
          <a class="site-nav__link" href="${p}/faq.html">FAQs</a>
          <a class="site-nav__link" href="${p}/contact.html">Contact Us</a>
        </nav>
        <div class="site-header__cta">
          <a class="btn btn--portal" href="https://sft.specialized-med-business.com/specMed/">Physician Portal</a>
        </div>
      </div>
    </header>

    ${main}

    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__top">
          <div class="site-footer__brand">
            <a href="${p}/index.html" class="site-brand">
              <img class="site-brand__logo" src="${p}/icons/brand-logo.svg" alt="Specialized Medical — Expert Cardiac Monitoring Services" width="236" height="71">
            </a>
            <p>Complete turn-key cardiac monitoring. Live ECG data. Four tests. One device.</p>
          </div>
          <div class="site-footer__cols">
            <div class="site-footer__col">
              <h4>Company</h4>
              <ul>
                <li><a href="${p}/about.html">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="${p}/contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h4>Services</h4>
              <ul>
                <li><a href="${p}/services.html">Holter</a></li>
                <li><a href="${p}/services.html">Telemetry (MCT)</a></li>
                <li><a href="${p}/services.html">Event Monitoring</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h4>Contact</h4>
              <div class="contact-line">
                <img src="${p}/icons/vector3527-jgyk.svg" alt="">
                <span>1-855-SPEC-MED (1-855-773-2633)</span>
              </div>
              <div class="contact-line">
                <img src="${p}/icons/fi62447103527-gtjs.svg" alt="">
                <span>info@specialized-med.com</span>
              </div>
              <div class="contact-line">
                <img src="${p}/icons/vector3527-rp3.svg" alt="">
                <span>Specialized Medical, LLC<br>34145 Pacific Coast Highway, #700<br>Dana Point, CA 92629</span>
              </div>
              <div class="social-row">
                <a href="https://www.facebook.com/specializedmedical" aria-label="Facebook">
                  <img src="${p}/icons/vector3527-h9kk.svg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <span>© <span id="footer-year">2026</span> Specialized Medical, LLC.</span>
          <div class="site-footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <script src="${p}/js/main.js" defer></script>
</body>
</html>`;

const outDir = join(__dirname, "services");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(join(outDir, "equipment.html"), html, "utf8");
console.log("Wrote services/equipment.html");
