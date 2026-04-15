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

function sleepSync(ms) {
  const sab = new SharedArrayBuffer(4)
  const ia = new Int32Array(sab)
  Atomics.wait(ia, 0, 0, ms)
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`sync-static-site-assets: skip missing ${from}`)
    return
  }
  fs.mkdirSync(to, { recursive: true })
  const maxAttempts = 5
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      fs.cpSync(from, to, { recursive: true, force: true })
      return
    } catch (e) {
      const code = e?.code
      // Windows can temporarily lock files (EBUSY/EPERM) while Gatsby is reading/writing.
      // Retry a few times; on final failure, warn and continue so dev server can still start.
      if ((code === "EBUSY" || code === "EPERM") && attempt < maxAttempts) {
        sleepSync(250 * attempt)
        continue
      }
      console.warn(`sync-static-site-assets: failed to copy ${from} -> ${to} (${code || "ERR"})`)
      return
    }
  }
}

for (const { from, to } of sources) {
  copyDir(from, to)
}

console.log("Synced static-site assets into web/static.")
