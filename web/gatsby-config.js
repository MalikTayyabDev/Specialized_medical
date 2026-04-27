/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Specialized Medical",
    tagline: "Expert Cardiac Monitoring Services",
    description: "Expert Cardiac Monitoring Services",
    // Used for absolute OG/Twitter image URLs in shares.
    // Override via environment variable when building if needed.
    siteUrl: process.env.SITE_URL || `https://www.specialized-med.com`,
  },
  plugins: [],
}
