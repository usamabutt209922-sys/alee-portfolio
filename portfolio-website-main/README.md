# Portfolio Website

Senior UI/UX portfolio site. Content and design direction pending.

## Stack

- [Vite](https://vite.dev/) + vanilla JS/CSS — no framework, fast dev loop, simple deploy.

## Getting started

```bash
npm install
npm run dev
```

- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

## Structure

```
index.html              section skeleton (hero, about, work, process, testimonials, contact)
src/main.js              entry point, wires up styles + section JS modules
src/styles/tokens.css    design tokens (color, type, spacing) — edit here first
src/styles/base.css      reset + base element styles
src/styles/main.css      imports tokens/base + future per-section stylesheets
src/js/                  section behavior modules (nav, animations, etc.)
src/assets/images        image assets
src/assets/fonts         self-hosted font files
public/                  static files served as-is (favicon, etc.)
```

## Status

Environment scaffolded. Real content, case studies, and final visual direction to be added next.
