import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

function absUrl(siteUrl, path) {
  const base = String(siteUrl || "").replace(/\/+$/, "")
  const p = String(path || "")
  if (!base) return p
  if (!p) return base
  return `${base}${p.startsWith("/") ? "" : "/"}${p}`
}

function ensurePath(p) {
  if (!p) return ""
  return p.startsWith("/") ? p : `/${p}`
}

export default function Seo({
  title,
  description,
  pathname,
  image,
  lang = "en",
}) {
  const data = useStaticQuery(graphql`
    query SiteMetaForSeo {
      site {
        siteMetadata {
          title
          tagline
          description
          siteUrl
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata || {}
  const siteTitle = meta.title || "Specialized Medical"
  const siteTagline = meta.tagline || meta.description || ""
  const pageTitle = title || siteTitle
  const metaDescription = description || meta.description || siteTagline

  const path = ensurePath(pathname || "/")
  const canonical = absUrl(meta.siteUrl, path)

  const imagePath = ensurePath(image || "/images/figma-services/hero.jpg")
  const imageAbs = absUrl(meta.siteUrl, imagePath)

  // Prefer a consistent, branded share title without pipes (iMessage often truncates around "|").
  const shareTitle =
    title && title !== siteTitle ? `${title} — ${siteTitle}` : `${siteTitle} — ${siteTagline}`.trim()

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      {metaDescription ? <meta name="description" content={metaDescription} /> : null}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={shareTitle} />
      {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
      <meta property="og:image" content={imageAbs} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={shareTitle} />
      {metaDescription ? <meta name="twitter:description" content={metaDescription} /> : null}
      <meta name="twitter:image" content={imageAbs} />
    </>
  )
}

