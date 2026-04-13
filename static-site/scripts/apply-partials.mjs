/**
 * Injects static-site/partials/header.html and footer.html into each HTML page.
 * Edit those two files (or site-config.mjs for portal URL), then run:
 *   npm run static:partials
 */
import { readFileSync, writeFileSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import { renderHeader, renderFooter } from "../partials/render-layout.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const STATIC_ROOT = join(__dirname, "..")

/** faq.html is assembled by merge-faq-html.mjs (uses the same partials). */
const PAGES = [
  { file: "index.html", base: "", active: "home" },
  { file: "about.html", base: "", active: "about" },
  { file: "contact.html", base: "", active: "contact" },
  { file: "services.html", base: "", active: "services" },
  { file: "services/equipment.html", base: "../", active: "services" },
]

const HEADER_RE =
  /\s*<header class="site-header site-header--figma">[\s\S]*?<\/header>/
const FOOTER_RE =
  /\s*<footer class="site-footer site-footer--figma">[\s\S]*?<\/footer>/

for (const { file, base, active } of PAGES) {
  const path = join(STATIC_ROOT, file)
  let html = readFileSync(path, "utf8")
  const header = renderHeader({ base, active })
  const footer = renderFooter({ base })
  if (!HEADER_RE.test(html)) {
    console.warn(`skip header (no figma header match): ${file}`)
  } else {
    html = html.replace(HEADER_RE, `\n${header.trimEnd()}\n`)
  }
  if (!FOOTER_RE.test(html)) {
    console.warn(`skip footer (no figma footer match): ${file}`)
  } else {
    html = html.replace(FOOTER_RE, `\n${footer.trimEnd()}\n`)
  }
  writeFileSync(path, html, "utf8")
  console.log("updated", file)
}
