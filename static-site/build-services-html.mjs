/**
 * Generates services.html from the same content structure as web/src/pages/services.js
 */
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const HERO_BG =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80";
const HERO_PATIENT =
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80";

const IMG = {
  fourTests:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  ecgStrip:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80",
  mctWoman:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f62b?auto=format&fit=crop&w=1000&q=80",
  holterMan:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
  reporting:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  ecgApp:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  sensor:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
  productA:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
  productB:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
  productC:
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
};

const CAPABILITIES = [
  ["vector3526-3i69.svg", "Holter Monitoring"],
  ["vector3526-633n.svg", "Cardiac Event Monitoring"],
  ["vector3526-fv7g.svg", "Mobile Cardiac Telemetry"],
  ["vector3526-owz9.svg", "Extended Holter"],
  ["fi151927003526-1meh.svg", "Home Sleep Testing"],
  ["fi68134193542-mcs9.svg", "Pacemaker / ICD Monitoring"],
];

const WIRELESS = [
  [
    "vector3525-f3b.svg",
    "Continuous connectivity",
    "Wireless transmission keeps data flowing from the patient to our monitoring center without manual uploads or gaps that slow care.",
  ],
  [
    "vector3525-kmvj.svg",
    "Comfortable wear",
    "Lightweight, patient-friendly designs help improve compliance so studies finish with complete, actionable data.",
  ],
  [
    "vector3525-wjr6.svg",
    "Rapid awareness",
    "Timely visibility into rhythm changes supports faster clinical decisions when every minute matters.",
  ],
  [
    "fi18181343526-83wj.svg",
    "Streamlined workflow",
    "Enrollment, hook-up, and reporting fit into your office routine with support from our team.",
  ],
];

const ADVANTAGE = [
  "One platform for Holter, Extended Holter, Event, and Telemetry (MCT) testing.",
  "Live ECG streaming with industry-leading waveform clarity.",
  "Digital symptom capture tied to ECG segments on the final report.",
  "24/7 monitoring with alerts by phone, text, or email.",
  "Reports designed for clear clinical review and faster follow-up.",
];

const CHECK = `<svg class="services-advantage__check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function starRow() {
  const src = "icons/star13663-lr4m.svg";
  return `<div class="stars" aria-hidden>${Array(5)
    .fill(0)
    .map(
      () =>
        `<img src="${src}" alt="" width="18" height="18">`
    )
    .join("")}</div>`;
}

const capGrid = CAPABILITIES.map(
  ([icon, label]) => `
          <div class="services-cap__item">
            <div class="services-cap__icon">
              <img src="icons/${icon}" alt="" width="48" height="48">
            </div>
            <p class="services-cap__label">${label}</p>
          </div>`
).join("");

const wirelessGrid = WIRELESS.map(
  ([icon, title, body]) => `
          <article class="services-wireless__card">
            <div class="services-wireless__card-icon">
              <img src="icons/${icon}" alt="" width="40" height="40">
            </div>
            <h3>${title}</h3>
            <p>${body}</p>
          </article>`
).join("");

const advList = ADVANTAGE.map(
  (line) => `
          <li>${CHECK}<span>${line}</span></li>`
).join("");

const main = `<main class="services-page">
    <section class="services-hero" aria-label="Services hero">
      <div class="services-hero__bg" style="background-image:url(${HERO_BG})" role="presentation"></div>
      <div class="services-hero__overlay"></div>
      <div class="container">
        <div class="services-hero__grid">
          <div class="services-hero__copy">
            <h1 class="services-hero__title">Your Tests. <span class="accent">One Device.</span></h1>
            <p class="services-hero__lead">The future of cardiac monitoring is here.</p>
            <div class="services-hero__actions">
              <a class="btn btn--primary" href="contact.html">Get Started</a>
              <a class="btn btn--outline" href="#capabilities">Learn More</a>
            </div>
          </div>
          <div class="services-hero__photo">
            <img src="${HERO_PATIENT}" alt="Patient resting while connected to monitoring equipment" loading="eager" decoding="async" width="640" height="480">
          </div>
        </div>
      </div>
    </section>

    <section class="services-subpage-banner" aria-label="Equipment detail">
      <div class="container">
        <a class="services-subpage-banner__link" href="services/equipment.html">
          Monitoring equipment options<span class="services-subpage-banner__arrow" aria-hidden> →</span>
        </a>
      </div>
    </section>

    <section class="services-cap" id="capabilities" aria-labelledby="cap-heading">
      <div class="container">
        <h2 id="cap-heading" class="services-cap__title">Our Test Capabilities</h2>
        <div class="services-cap__grid">${capGrid}
        </div>
      </div>
    </section>

    <section class="services-split" aria-labelledby="split-a">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__copy">
            <h2 id="split-a" class="services-split__title"><span class="accent">Four Tests.</span> One Device.</h2>
            <p class="services-split__text">Perform Holter, Extended Holter, Cardiac Event, and Mobile Cardiac Telemetry from a single monitor—so your team can standardize workflows while patients benefit from one familiar device.</p>
            <p class="services-split__text">Flexible test sequencing supports evolving clinical questions without swapping hardware or re-training staff on multiple systems.</p>
          </div>
          <div class="services-split__media">
            <img src="${IMG.fourTests}" alt="Patient wearing cardiac monitoring sensors" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>

    <section class="services-split services-split--alt services-split--reverse" aria-labelledby="split-b">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__media">
            <img src="${IMG.ecgStrip}" alt="ECG rhythm strip example" loading="lazy" decoding="async">
          </div>
          <div class="services-split__copy">
            <h2 id="split-b" class="services-split__title">The <span class="accent">3-Lead ECG</span> Advantage</h2>
            <p class="services-split__text">Three-lead acquisition delivers robust rhythm assessment with clarity physicians can trust—supporting confident reads across common arrhythmias and capture scenarios.</p>
            <p class="services-split__text">Consistent lead placement and high-quality signal processing help reduce noise and ambiguity in long-term recordings.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-split" aria-labelledby="split-c">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__copy">
            <h2 id="split-c" class="services-split__title"><span class="accent">Mobile Cardiac</span> Monitoring System</h2>
            <ul class="services-split__list">
              <li>Real-time transmission during daily activities</li>
              <li>Symptom correlation with rhythm data</li>
              <li>Designed for longer monitoring windows when indicated</li>
            </ul>
            <a class="btn btn--primary" href="contact.html">Learn More</a>
          </div>
          <div class="services-split__media">
            <img src="${IMG.mctWoman}" alt="Patient wearing mobile cardiac telemetry device" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>

    <section class="services-split services-split--alt services-split--reverse" aria-labelledby="split-d">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__media">
            <img src="${IMG.holterMan}" alt="Patient holding Holter recording device" loading="lazy" decoding="async">
          </div>
          <div class="services-split__copy">
            <h2 id="split-d" class="services-split__title"><span class="accent">24 / 48 / 72 / 96 Hour</span> Holter Monitoring System</h2>
            <ul class="services-split__list">
              <li>Flexible duration options to match the clinical question</li>
              <li>High-quality Holter acquisition and reporting</li>
              <li>Support from enrollment through final report delivery</li>
            </ul>
            <a class="btn btn--primary" href="contact.html">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="services-wireless" aria-labelledby="wireless-heading">
      <div class="container">
        <h2 id="wireless-heading" class="services-wireless__title">Benefit From <span class="accent">Wireless Technology</span></h2>
        <div class="services-wireless__grid">${wirelessGrid}
        </div>
      </div>
    </section>

    <section class="services-advantage" aria-labelledby="adv-heading">
      <div class="container">
        <h2 id="adv-heading" class="services-advantage__title">The <span class="accent">Specialized Medical</span> Advantage</h2>
        <ul class="services-advantage__list">${advList}
        </ul>
      </div>
    </section>

    <section class="services-reporting" aria-labelledby="report-heading">
      <div class="container">
        <div class="services-reporting__inner">
          <div>
            <h2 id="report-heading" class="services-reporting__title"><span class="accent">Detailed Reporting</span> That Supports Better Clinical Decisions</h2>
            <p class="services-reporting__text">Comprehensive reports combine rhythm summaries, representative strips, and symptom context—presented for efficient review so you can move from data to decision with confidence.</p>
          </div>
          <div class="services-reporting__shot">
            <img src="${IMG.reporting}" alt="Sample monitoring report with charts and ECG strips" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>

    <section class="services-products" aria-labelledby="products-heading">
      <div class="container">
        <h2 id="products-heading" class="services-products__title">Our <span class="accent">Products</span></h2>
        <div class="services-products__list">
          <article class="services-product-card">
            <div class="services-product-card__thumb"><img src="${IMG.productA}" alt="" loading="lazy"></div>
            <div class="services-product-card__body">
              <h3>Cardiac Event Monitor</h3>
              <p>Capture transient symptoms with patient-friendly event logging and clear ECG correlation on the final report.</p>
              <div class="services-product-card__meta">${starRow()}<a class="services-product-card__link" href="#split-b">Read More</a></div>
            </div>
          </article>
          <article class="services-product-card">
            <div class="services-product-card__thumb"><img src="${IMG.productB}" alt="" loading="lazy"></div>
            <div class="services-product-card__body">
              <h3>Mobile Cardiac Telemetry</h3>
              <p>Extended real-time monitoring with alerts and clinical review from our monitoring center.</p>
              <div class="services-product-card__meta"><a class="services-product-card__link" href="#split-c">Read More</a></div>
            </div>
          </article>
          <article class="services-product-card">
            <div class="services-product-card__thumb"><img src="${IMG.productC}" alt="" loading="lazy"></div>
            <div class="services-product-card__body">
              <h3>Holter &amp; Extended Holter</h3>
              <p>From 24-hour studies through multi-day extended Holter—one platform and consistent reporting.</p>
              <div class="services-product-card__meta">${starRow()}<a class="services-product-card__link" href="#split-d">Read More</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="services-split services-split--reverse" aria-labelledby="split-e">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__media">
            <img src="${IMG.ecgApp}" alt="Smartphone showing ECG monitoring application" loading="lazy" decoding="async">
          </div>
          <div class="services-split__copy">
            <h2 id="split-e" class="services-split__title"><span class="accent">Real-time ECG</span> &amp; Arrhythmia Analysis</h2>
            <ul class="services-split__list">
              <li>Live rhythm visibility for your clinical team</li>
              <li>Designed for timely awareness of concerning patterns</li>
              <li>Digital tools that support patient engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="services-split services-split--alt" aria-labelledby="split-f">
      <div class="container">
        <div class="services-split__inner">
          <div class="services-split__copy">
            <h2 id="split-f" class="services-split__title"><span class="accent">Faster,</span> Reliable Insights</h2>
            <p class="services-split__text">Our workflows prioritize signal quality, timely review, and delivery of reports into your practice—so you spend less time chasing data and more time with patients.</p>
          </div>
          <div class="services-split__media">
            <img src="${IMG.sensor}" alt="Clinical sensor and monitoring equipment" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>

    <section class="services-trust" aria-labelledby="trust-heading">
      <div class="container">
        <h2 id="trust-heading" class="services-trust__title"><span class="accent">Trust</span> the Expert Reports</h2>
        <p class="services-trust__text">Experienced technicians and clinical staff review recordings with attention to detail—so your team receives reports that are clear, complete, and ready for clinical action.</p>
      </div>
    </section>

    <section class="services-cta" aria-labelledby="cta-heading">
      <div class="container">
        <h2 id="cta-heading" class="services-cta__title"><span class="accent">Don't Wait!</span> Contact Us Today!</h2>
        <p class="services-cta__lead">Speak with our team about enrollment, monitoring options, and how Specialized Medical can support your practice.</p>
        <div class="services-cta__actions">
          <a class="btn btn--primary" href="contact.html">Contact Us</a>
          <a class="btn btn--outline" href="tel:+18557732633">Call Us</a>
        </div>
      </div>
    </section>
  </main>`;

const shell = (body) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Services | Specialized Medical Services</title>
  <meta name="description" content="Holter, event, MCT, and extended monitoring from one device—wireless technology, detailed reporting, and 24/7 support.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/services.css">
</head>
<body>
  <div class="site-root">
    <header class="site-header">
      <div class="container site-header__topbar">
        <a class="site-header__topbar-phone" href="tel:+18557732633">
          <img src="icons/vector3525-jq8.svg" alt="">
          1-855-773-2633
        </a>
        <div class="site-header__social">
          <a href="https://www.facebook.com/specializedmedical" aria-label="Facebook">
            <img src="icons/vector3527-h9kk.svg" alt="" width="20" height="20">
          </a>
        </div>
      </div>
      <div class="container site-header__inner">
        <a href="index.html" class="site-brand">
          <img class="site-brand__logo" src="icons/brand-logo.svg" alt="Specialized Medical — Expert Cardiac Monitoring Services" width="236" height="71">
        </a>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>
        <nav id="primary-nav" class="site-nav" aria-label="Primary">
          <a class="site-nav__link" href="index.html">Home</a>
          <a class="site-nav__link" href="about.html">About Us</a>
          <a class="site-nav__link is-active" href="services.html">Services</a>
          <a class="site-nav__link" href="faq.html">FAQs</a>
          <a class="site-nav__link" href="contact.html">Contact Us</a>
        </nav>
        <div class="site-header__cta">
          <a class="btn btn--portal" href="https://sft.specialized-med-business.com/specMed/">Physician Portal</a>
        </div>
      </div>
    </header>

    ${body}

    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__top">
          <div class="site-footer__brand">
            <a href="index.html" class="site-brand">
              <img class="site-brand__logo" src="icons/brand-logo.svg" alt="Specialized Medical — Expert Cardiac Monitoring Services" width="236" height="71">
            </a>
            <p>Complete turn-key cardiac monitoring. Live ECG data. Four tests. One device.</p>
          </div>
          <div class="site-footer__cols">
            <div class="site-footer__col">
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h4>Services</h4>
              <ul>
                <li><a href="services.html">Holter</a></li>
                <li><a href="services.html">Telemetry (MCT)</a></li>
                <li><a href="services.html">Event Monitoring</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h4>Contact</h4>
              <div class="contact-line">
                <img src="icons/vector3527-jgyk.svg" alt="">
                <span>1-855-SPEC-MED (1-855-773-2633)</span>
              </div>
              <div class="contact-line">
                <img src="icons/fi62447103527-gtjs.svg" alt="">
                <span>info@specialized-med.com</span>
              </div>
              <div class="contact-line">
                <img src="icons/vector3527-rp3.svg" alt="">
                <span>Specialized Medical, LLC<br>34145 Pacific Coast Highway, #700<br>Dana Point, CA 92629</span>
              </div>
              <div class="social-row">
                <a href="https://www.facebook.com/specializedmedical" aria-label="Facebook">
                  <img src="icons/vector3527-h9kk.svg" alt="">
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
  <script src="js/main.js" defer></script>
</body>
</html>`;

fs.writeFileSync(join(__dirname, "services.html"), shell(main), "utf8");
console.log("Wrote services.html");
