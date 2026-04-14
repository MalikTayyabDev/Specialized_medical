import fs from "fs";
import path from "path";

const here = path.dirname(new URL(import.meta.url).pathname);
const webRoot = path.resolve(here, "..");
const repoRoot = path.resolve(webRoot, "..");

const sources = [
  { from: path.join(repoRoot, "static-site", "images"), to: path.join(webRoot, "static", "images") },
  { from: path.join(repoRoot, "static-site", "icons"), to: path.join(webRoot, "static", "icons") },
  { from: path.join(repoRoot, "static-site", "video"), to: path.join(webRoot, "static", "video") },
];

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.cpSync(from, to, { recursive: true, force: true });
}

for (const { from, to } of sources) {
  copyDir(from, to);
}

console.log("Synced static-site assets into web/static.");

