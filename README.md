# htphuc1994.github.io

Personal CV / portfolio site for **Phuc (Levi) Huynh**, built with [Astro](https://astro.build) and deployed via GitHub Pages.

Live at: <https://htphuc1994.github.io>

## Stack

- **Astro 5** — static site generator
- **Vanilla CSS** with custom properties (light/dark theme)
- **GitHub Actions** → **GitHub Pages** for deployment

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Content

All CV content lives in [src/data/cv.ts](src/data/cv.ts). Edit that file to update the site.

The downloadable PDF is at [public/cv/PhucHuynh_CV.pdf](public/cv/PhucHuynh_CV.pdf) — regenerate from the LaTeX source whenever the CV changes:

```bash
cd Phuc_Huynh_CV
xelatex cv_new_format.tex                  # produces cv_new_format.pdf
cp cv_new_format.pdf ../public/cv/PhucHuynh_CV.pdf
```

The `.tex` file uses the `moderncv` document class plus `fontawesome5`, `arydshln`, and `academicons` — install via `tlmgr --usermode install moderncv fontawesome5 arydshln academicons` if missing.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the Astro site and publishes it to GitHub Pages.

For the workflow to publish, in the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
