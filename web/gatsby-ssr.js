import * as React from "react"
import "./src/styles/global.css"
import "./src/styles/home.css"
import "./src/styles/services.css"
import "./src/styles/about.css"
import "./src/styles/faq.css"
import "./src/styles/contact.css"
import "./src/styles/equipment.css"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

/** Global fonts for all routes (avoid duplicating in every page Head) */
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link key="favicon-svg" rel="icon" href="/favicon.svg" type="image/svg+xml" />,
    <link
      key="preconnect-gfonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="fonts-inter"
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
      rel="stylesheet"
    />,
  ])
}
