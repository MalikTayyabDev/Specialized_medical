/**
 * Gatsby Node API: keep legacy URLs working.
 *
 * We previously had a parallel static HTML site with *.html routes.
 * Add permanent redirects so external links/bookmarks never break.
 */

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

// Load local env files for dev/preview; avoid pulling dotenv into HTML renderer bundles.
if (!process.env.NETLIFY) {
  // eslint-disable-next-line global-require
  require("dotenv").config({ path: `.env.${activeEnv}` })
}

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  const redirects = [
    // Primary pages (static HTML -> Gatsby routes)
    { fromPath: "/index.html", toPath: "/" },
    { fromPath: "/about.html", toPath: "/about/" },
    { fromPath: "/services.html", toPath: "/services/" },
    { fromPath: "/faq.html", toPath: "/faq/" },
    { fromPath: "/contact.html", toPath: "/contact/" },

    // Nested services page(s)
    { fromPath: "/services/equipment.html", toPath: "/services/equipment/" },

    // If anything ever points at this old folder name, send home.
    { fromPath: "/static-site/*", toPath: "/" },
  ]

  for (const { fromPath, toPath } of redirects) {
    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
      redirectInBrowser: true,
    })
  }
}

