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
