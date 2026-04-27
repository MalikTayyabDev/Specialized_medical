/**
 * Netlify build step: mirror Gatsby output (web/public) into static-site/.
 * This keeps the live "static-site" deploy identical to Gatsby without
 * committing build artifacts to git.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const staticRoot = path.resolve(__dirname, "..") // .../static-site
const repoRoot = path.resolve(staticRoot, "..")
const gatsbyPublic = path.join(repoRoot, "web", "public")

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function rmDirContents(dir, { keepNames = [] } = {}) {
  if (!fs.existsSync(dir)) return
  const keep = new Set(keepNames)
  for (const name of fs.readdirSync(dir)) {
    if (keep.has(name)) continue
    fs.rmSync(path.join(dir, name), { recursive: true, force: true })
  }
}

function copyDirRecursive(from, to) {
  ensureDir(to)
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name)
    const dest = path.join(to, entry.name)
    if (entry.isDirectory()) {
      copyDirRecursive(src, dest)
    } else {
      ensureDir(path.dirname(dest))
      fs.copyFileSync(src, dest)
    }
  }
}

if (!fs.existsSync(gatsbyPublic)) {
  console.error(`sync-from-gatsby-public: missing ${gatsbyPublic}`)
  process.exit(1)
}

// Preserve our build scripts inside static-site/scripts/
rmDirContents(staticRoot, { keepNames: ["scripts", "package.json"] })
copyDirRecursive(gatsbyPublic, staticRoot)

console.log("sync-from-gatsby-public: mirrored web/public -> static-site")

