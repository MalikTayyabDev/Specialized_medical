# Specialized Medical — Gatsby site

The site lives in **`web/`** (Gatsby 5 + React).

## Local development

```bash
cd web
npm install
npm run develop
```

Open [http://localhost:8000](http://localhost:8000).

## Production build

```bash
cd web
npm run build
```

Output: `web/public/`.

## Deploy on Netlify

Repository root includes **`netlify.toml`**: base directory **`web`**, publish **`public`**, Node **20**. Connect this repo to Netlify and deploy with the default settings from that file.

## GitHub (first push)

From the **repository root** (this folder, not `web/`):

```bash
git init
git add .
git commit -m "Initial commit: Specialized Medical Gatsby site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace the remote URL with your GitHub repository.
