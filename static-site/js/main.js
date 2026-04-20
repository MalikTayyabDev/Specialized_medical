/**
 * Specialized Medical — static site behaviors (nav, FAQ, contact form, hero CSS bg fallback).
 */
(function () {
  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function initNav() {
    var toggle = qs(".nav-toggle");
    var inner = qs(".site-header__inner");
    if (!toggle || !inner) return;

    function setOpen(open) {
      inner.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    }

    toggle.addEventListener("click", function () {
      setOpen(!inner.classList.contains("nav-open"));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && inner.classList.contains("nav-open")) {
        setOpen(false);
      }
    });

    qsa(".site-nav a, .figma-nav a", inner).forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initHeroVisualFallback() {
    var img = qs(".figma-hero__photo");
    if (img) {
      var fallback =
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85";
      img.addEventListener("error", function onHeroImgErr() {
        img.removeEventListener("error", onHeroImgErr);
        img.src = fallback;
      });
      return;
    }
    var el = qs(".hero.hero--reference");
    if (!el) return;
    var local = "images/hero-banner.jpg";
    var fallback =
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85";
    var probe = new Image();
    probe.onerror = function () {
      el.style.backgroundImage = "url(" + fallback + ")";
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "70% center";
    };
    probe.src = local;
  }

  function initFaqAccordion() {
    var root = qs(".faq-accordion");
    if (!root) return;

    qsa(".faq-item__trigger", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        if (!item) return;
        var wasOpen = item.classList.contains("is-open");

        qsa(".faq-item", root).forEach(function (other) {
          other.classList.remove("is-open");
          var p = other.querySelector(".faq-item__panel");
          var t = other.querySelector(".faq-item__trigger");
          if (p) p.hidden = true;
          if (t) t.setAttribute("aria-expanded", "false");
          var ch = other.querySelector(".faq-item__chevron");
          if (ch) ch.classList.remove("is-open");
        });

        if (!wasOpen) {
          item.classList.add("is-open");
          var panel = item.querySelector(".faq-item__panel");
          if (panel) panel.hidden = false;
          btn.setAttribute("aria-expanded", "true");
          var chev = btn.querySelector(".faq-item__chevron");
          if (chev) chev.classList.add("is-open");
        }
      });
    });
  }

  function initFaqTestimonialsCarousel() {
    var photoWrap = qs(".faq-testimonials__photo");
    if (!photoWrap) return;
    var img = qs("img", photoWrap);
    if (!img) return;

    var dotsWrap = qs(".faq-testimonials__dots", photoWrap);
    var slides = [
      {
        src: "images/figma-faq/faq-testimonial-portrait.jpg",
        alt: "Patient during daily activity",
      },
      {
        src: "images/figma-services/case-01.jpg",
        alt: "Patient-friendly design and wear experience",
      },
      {
        src: "images/figma-services/four-tests-device.jpg",
        alt: "Cardiac monitoring device for four test types",
      },
    ];

    var idx = 0;
    var paused = false;

    function syncDots() {
      if (!dotsWrap) return;
      var dots = qsa(".faq-testimonials__dot", dotsWrap);
      dots.forEach(function (d, di) {
        d.classList.toggle("is-active", di === idx);
      });
    }

    function setSlide(i) {
      idx = (i + slides.length) % slides.length;
      img.src = slides[idx].src;
      img.alt = slides[idx].alt;
      syncDots();
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach(function (_, i) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "faq-testimonials__dot" + (i === 0 ? " is-active" : "");
        btn.setAttribute("aria-label", "Show image " + String(i + 1));
        btn.addEventListener("click", function () {
          setSlide(i);
        });
        dotsWrap.appendChild(btn);
      });
    }

    photoWrap.addEventListener("pointerenter", function () {
      paused = true;
    });
    photoWrap.addEventListener("pointerleave", function () {
      paused = false;
    });

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.setInterval(function () {
      if (paused) return;
      setSlide(idx + 1);
    }, 3500);
  }

  function initContactPage() {
    var form = qs(".contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var first = String(fd.get("firstName") || "").trim();
      var last = String(fd.get("lastName") || "").trim();
      var email = String(fd.get("email") || "").trim();
      var phone = String(fd.get("phone") || "").trim();
      var interest = String(fd.get("interest") || "").trim();
      var message = String(fd.get("message") || "").trim();

      var subject = encodeURIComponent("Contact form — Specialized Medical");
      var body = encodeURIComponent(
        [
          "Name: " + first + " " + last,
          "Email: " + email,
          "Phone: " + phone,
          "Interest: " + (interest || "(not selected)"),
          "",
          message,
        ].join("\n")
      );
      window.location.href =
        "mailto:info@specialized-med.com?subject=" + subject + "&body=" + body;
    });

    qsa(".contact-action-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var hash = card.getAttribute("data-interest") || "";
        var wrap = qs(".contact-main__form-wrap");
        if (wrap) {
          wrap.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (hash && form) {
          var select = form.querySelector('select[name="interest"]');
          if (select) select.value = hash;
        }
      });
    });
  }

  function initVideoPlayStub() {
    qsa(".video-frame__play").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });
  }

  function initEcgVideoEndTrim() {
    var v = qs(".figma-ecg__video");
    if (!v) return;
    var trim = 1.5;
    function capTime() {
      if (!v.duration || isNaN(v.duration)) return;
      if (v.duration < trim + 1) return;
      var end = v.duration - trim;
      if (v.currentTime > end) v.currentTime = end;
    }
    function onTimeUpdate() {
      if (!v.duration || isNaN(v.duration)) return;
      if (v.duration < trim + 1) return;
      if (v.currentTime >= v.duration - trim - 0.04) {
        v.pause();
        if (v.loop) {
          v.currentTime = 0;
          v.play().catch(function () {});
        }
      }
    }
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("seeking", capTime);
    v.addEventListener("loadedmetadata", capTime);
  }

  function initOverviewVideo() {
    var frame = qs("[data-overview-video]");
    var video = frame ? frame.querySelector(".figma-video__media") : null;
    var overlay = qs("[data-overview-overlay]");
    var btn = qs("[data-overview-play]");
    var muteBtn = frame ? frame.querySelector("[data-overview-mute]") : null;
    if (!frame || !video || !overlay || !btn) return;

    function setPlaying(on) {
      frame.classList.toggle("is-playing", on);
      btn.setAttribute("aria-label", on ? "Pause overview video" : "Play overview video");
    }

    function syncMuteUi() {
      if (!muteBtn) return;
      var muted = video.muted;
      muteBtn.classList.toggle("figma-video__mute--muted", muted);
      muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
      muteBtn.setAttribute("aria-label", muted ? "Unmute video" : "Mute video");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (video.paused) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });

    if (muteBtn) {
      muteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (video.muted) {
          video.muted = false;
          video.volume = 1;
        } else {
          video.muted = true;
        }
        syncMuteUi();
      });
      video.addEventListener("volumechange", syncMuteUi);
      syncMuteUi();
    }

    video.addEventListener("click", function () {
      if (!video.paused) {
        video.pause();
      }
    });

    video.addEventListener("playing", function () {
      setPlaying(true);
    });

    video.addEventListener("pause", function () {
      setPlaying(false);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initFooterYear();
    initHeroVisualFallback();
    initFaqAccordion();
    initFaqTestimonialsCarousel();
    initContactPage();
    initVideoPlayStub();
    initOverviewVideo();
    initEcgVideoEndTrim();
  });
})();
