# Specialized Medical — Gatsby site

The site lives in **`web/`** (Gatsby 5 + React).

## Local development

From the **repository root** (or from `web/`):

```bash
npm install --prefix web
npm run develop
```

Or:

```bash
cd web
npm install
npm run develop
```

Open [http://localhost:8000](http://localhost:8000) (default). If port **8000** is already in use, Gatsby may ask to use another port—use the URL it prints (often **8001**).

## Production build

```bash
cd web
npm run build
```

Output: `web/public/`.

## Deploy on Netlify

Repository root includes **`netlify.toml`**: base directory **`web`**, publish **`public`**, Node **20**. Connect this repo to Netlify and deploy with the default settings from that file.

## Repository

**https://github.com/MalikTayyabDev/Specialized_medical**
