/**
 * Mirrors web/src/pages/services.js reporting carousel (scroll + slide advance).
 */
;(function () {
  const REPORT_SCROLL_SPEED_PX_PER_SEC = 52
  const REPORT_SCROLL_DELAY_MS = 450
  const REPORT_PAUSE_AFTER_ANIM_MS = 1200
  const REPORT_STATIC_SLIDE_MS = 6500

  function getSiteRootPath() {
    // We deploy sometimes under a subfolder (e.g. /specialized-medical/static-site/).
    // Derive the site "root" from this script tag URL so asset paths always resolve.
    const scripts = Array.from(document.scripts || [])
    const script = scripts.find((s) =>
      (s.getAttribute("src") || "").includes("services-report-carousel.js")
    )
    const src = script?.src
    if (!src) return ""

    try {
      const u = new URL(src, window.location.href)
      const p = u.pathname || ""
      const idx = p.lastIndexOf("/js/services-report-carousel.js")
      return idx >= 0 ? p.slice(0, idx) : ""
    } catch {
      return ""
    }
  }

  const SITE_ROOT = getSiteRootPath()

  const SLIDES = [
    {
      src: `${SITE_ROOT}/images/figma-services/report-sample.jpg`,
      alt: "Sample cardiac monitoring report",
    },
    {
      src: `${SITE_ROOT}/images/figma-services/${encodeURIComponent("image 381.webp")}`,
      alt: "Sample cardiac monitoring report (page 2)",
    },
  ]

  const frame = document.getElementById("svc-report-frame")
  const imgEl = document.getElementById("svc-report-img")
  if (!frame || !imgEl || SLIDES.length === 0) return

  let reportIdx = 0
  let reportPaused = false
  let reportAdvanceTimer = null

  function clearAdvance() {
    if (reportAdvanceTimer != null) {
      window.clearTimeout(reportAdvanceTimer)
      reportAdvanceTimer = null
    }
  }

  function scheduleReportAdvance(delayMs) {
    clearAdvance()
    reportAdvanceTimer = window.setTimeout(() => {
      reportAdvanceTimer = null
      if (reportPaused) return
      reportIdx = (reportIdx + 1) % SLIDES.length
      applySlide()
    }, delayMs)
  }

  function setDotActive(i) {
    frame.querySelectorAll("[data-report-dot]").forEach((btn, j) => {
      btn.classList.toggle("is-active", j === i)
    })
  }

  function applySlide() {
    clearAdvance()
    imgEl.getAnimations?.().forEach((a) => a.cancel())
    imgEl.style.transform = "translateY(0px)"
    const slide = SLIDES[reportIdx]
    imgEl.removeAttribute("src")
    imgEl.alt = slide.alt
    imgEl.src = slide.src
    setDotActive(reportIdx)
  }

  function startReportScroll() {
    const img = imgEl
    if (!img) return

    clearAdvance()
    img.getAnimations?.().forEach((a) => a.cancel())
    img.style.transform = "translateY(0px)"

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      scheduleReportAdvance(REPORT_STATIC_SLIDE_MS)
      return
    }

    const frameH = frame.clientHeight
    const frameW = frame.clientWidth
    const nw = img.naturalWidth || 0
    const nh = img.naturalHeight || 0
    if (!frameH || !frameW || !nw || !nh) return

    const displayedH = frameW * (nh / nw)
    const maxScroll = Math.max(0, Math.round(displayedH - frameH))
    if (maxScroll < 4) {
      scheduleReportAdvance(REPORT_STATIC_SLIDE_MS)
      return
    }

    const duration = Math.round(
      (maxScroll / REPORT_SCROLL_SPEED_PX_PER_SEC) * 1000
    )
    const anim = img.animate(
      [
        { transform: "translateY(0px)" },
        { transform: `translateY(-${maxScroll}px)` },
      ],
      {
        duration,
        easing: "linear",
        fill: "forwards",
        delay: REPORT_SCROLL_DELAY_MS,
      }
    )

    anim.finished
      .then(() => {
        if (reportPaused) return
        scheduleReportAdvance(REPORT_PAUSE_AFTER_ANIM_MS)
      })
      .catch(() => {})
  }

  frame.addEventListener("pointerenter", () => {
    reportPaused = true
  })
  frame.addEventListener("pointerleave", () => {
    reportPaused = false
  })

  imgEl.addEventListener("load", () => {
    startReportScroll()
  })

  frame.querySelectorAll("[data-report-dot]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-report-dot"))
      if (Number.isNaN(i)) return
      reportIdx = i
      applySlide()
    })
  })

  applySlide()
})()
