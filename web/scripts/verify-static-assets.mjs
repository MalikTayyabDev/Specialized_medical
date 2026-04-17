/**
 * Fails with exit 1 if any path under web/static is missing.
 * Run after sync-static-site-assets.mjs (e.g. before gatsby build).
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const webRoot = path.resolve(__dirname, "..")
const staticRoot = path.join(webRoot, "static")

/** Paths referenced by Gatsby source (img src, CSS url(), video). Keep in sync with code. */
const REQUIRED = [
  "images/figma-home-reference.png",
  "images/hero-banner.jpg",
  "images/hero-panel-bg.png",
  "images/figma-assets/hero-split-photo.jpg",
  "images/figma-assets/Rectangle 34.png",
  "images/figma-assets/stars-row.png",
  "images/figma-about/Vector.png",
  "images/figma-about/Group.png",
  "images/figma-about/Group 1261157411.png",
  "images/figma-about/image.png",
  "images/figma-about/Rectangle 4 (1).png",
  "images/figma-services/hero.jpg",
  "images/figma-contact/contact-hero.jpg",
  "images/figma-faq/faq-hero.jpg",
  "video/WhatsApp Video 2026-04-02 at 1.51.27 AM.mp4",
  "video/WhatsApp Video 2026-04-02 at 10.32.10 PM.mp4",
  "video/Avatar_Video_Take_14_buttons.mp4",
  "icons/Group.svg",
  "icons/Group (1).svg",
]

const missing = []
for (const rel of REQUIRED) {
  const full = path.join(staticRoot, rel)
  if (!fs.existsSync(full)) missing.push(rel)
}

if (missing.length) {
  console.error("verify-static-assets: missing files under web/static/:\n  " + missing.join("\n  "))
  process.exit(1)
}

console.log(`verify-static-assets: OK (${REQUIRED.length} paths).`)
