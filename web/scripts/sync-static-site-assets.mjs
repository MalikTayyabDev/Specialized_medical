/**
 * Merges media from ../static-site into web/static so Gatsby always has the same
 * images/icons/videos as the static HTML site. Safe to run when static-site is absent (no-op).
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const webRoot = path.resolve(__dirname, "..")
const repoRoot = path.resolve(webRoot, "..")

const sources = [
  { from: path.join(repoRoot, "static-site", "images"), to: path.join(webRoot, "static", "images") },
  { from: path.join(repoRoot, "static-site", "icons"), to: path.join(webRoot, "static", "icons") },
  { from: path.join(repoRoot, "static-site", "video"), to: path.join(webRoot, "static", "video") },
]

function copyDir(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`sync-static-site-assets: skip missing ${from}`)
    return
  }
  fs.mkdirSync(to, { recursive: true })
  fs.cpSync(from, to, { recursive: true, force: true })
}

for (const { from, to } of sources) {
  copyDir(from, to)
}

console.log("Synced static-site assets into web/static.")
