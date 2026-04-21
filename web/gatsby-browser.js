import "./src/styles/global.css"
import "./src/styles/home.css"
import "./src/styles/services.css"
import "./src/styles/about.css"
import "./src/styles/faq.css"
import "./src/styles/contact.css"
import "./src/styles/equipment.css"
import * as React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onRouteUpdate = ({ location }) => {
  if (typeof document === "undefined" || !location.hash || location.hash.length <= 1) {
    return
  }
  const id = decodeURIComponent(location.hash.slice(1))
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      const instant =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
      el.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "start" })
    })
  })
}
