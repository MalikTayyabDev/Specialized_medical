/**
 * Gatsby Node API: keep legacy URLs working.
 *
 * We previously had a parallel static HTML site with *.html routes.
 * Add permanent redirects so external links/bookmarks never break.
 */

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

