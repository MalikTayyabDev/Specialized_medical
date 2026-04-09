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
  <title>FAQs | Specialized Medical</title>
  <meta name="description" content="Answers about cardiac monitoring, reports, billing, supplies, patient experience, and the no-risk beta trial.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/faq.css">
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
          <a href="https://www.facebook.com/" aria-label="Facebook">
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
          <a class="site-nav__link" href="services.html">Services</a>
          <a class="site-nav__link is-active" href="faq.html">FAQs</a>
          <a class="site-nav__link" href="contact.html">Contact Us</a>
        </nav>
        <div class="site-header__cta">
          <a class="btn btn--portal" href="#patient-portal">Patient Portal</a>
        </div>
      </div>
    </header>

    <main class="faq-page">
      <section class="faq-hero" aria-labelledby="faq-hero-heading">
        <div class="faq-hero__bg" style="background-image:url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;w=2000&amp;q=80)" role="presentation"></div>
        <div class="faq-hero__overlay"></div>
        <div class="container faq-hero__inner">
          <p class="faq-hero__pill"><span class="faq-hero__pill-dot" aria-hidden></span>FAQs</p>
          <h1 id="faq-hero-heading" class="faq-hero__title">
            <span class="faq-hero__title-line">Frequently Asked</span>
            <span class="faq-hero__title-line faq-hero__title-accent">Questions</span>
          </h1>
          <p class="faq-hero__lead">Find answers about monitoring workflows, reporting, billing, supplies, and the patient experience—organized by topic below.</p>
        </div>
      </section>

      <section class="faq-accordion" aria-label="FAQ topics">
        <div class="container faq-accordion__inner">
${frag}
        </div>
      </section>

      <section class="faq-testimonials" aria-labelledby="testimonials-heading">
        <div class="container">
          <h2 id="testimonials-heading" class="faq-testimonials__title">What People Are <span class="accent">Saying</span></h2>
          <div class="faq-testimonials__grid">
            <div class="faq-testimonials__photo">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Patient wearing a cardiac monitor" loading="lazy" decoding="async" width="480" height="640">
            </div>
            <div class="faq-testimonials__cards">
              <blockquote class="faq-testimonial-card">
                <p>The workflow is straightforward for staff and patients. Reports are clear and easy to review—exactly what we needed.</p>
                <footer>M. Smith</footer>
              </blockquote>
              <blockquote class="faq-testimonial-card">
                <p>We get consistent signal quality and fast answers when questions come up. That reliability matters in a busy practice.</p>
                <footer>Dr. John D.</footer>
              </blockquote>
              <blockquote class="faq-testimonial-card">
                <p>Having one platform for multiple test types simplified training and follow-up. Support has been responsive.</p>
                <footer>Practice Manager</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section class="section-cta faq-cta" aria-labelledby="faq-cta-heading">
        <div class="container">
          <h2 id="faq-cta-heading">Start Your No-Risk <span class="accent">Beta Trial</span></h2>
          <p>Experience turnkey monitoring, live ECG visibility, and reporting built for busy practices—without the operational drag.</p>
          <div class="section-cta__actions faq-cta__actions">
            <a class="btn btn--primary" href="contact.html">Start your no-risk trial</a>
            <a class="faq-cta__link" href="contact.html">Or schedule a demo</a>
          </div>
        </div>
      </section>
    </main>

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
                <a href="https://www.facebook.com/" aria-label="Facebook">
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
</html>
`;

fs.writeFileSync(join(__dirname, "faq.html"), html, "utf8");
console.log("Wrote faq.html");
