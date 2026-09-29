# CLAUDE.md

Senior UI/UX designer portfolio for Alee M. Content is real: sourced from the resume and `Portfolio projects.xlsx`. Never invent bios, project names, metrics, testimonials, or work history.

## Stack

React + Vite + React Router. Not Next.js, not vanilla JS — migrated from an earlier vanilla scaffold early on, explicit user choice.

## Conventions

- Design tokens (color/type/spacing) live in `src/styles/tokens.css`. Before adding a new `--space-N`/`--fs-N` reference in a component, check it's actually defined there — an undefined CSS custom property silently drops the whole declaration to its initial value (this caused a real bug: `--space-5`/`--space-10` were used but never defined, zeroing out several paddings/margins/gaps).
- One CSS Module per component/page, colocated (`Foo.jsx` + `Foo.module.css`).
- Project data lives in `src/data/projects.js` (curated ~48 of 109 real spreadsheet rows), `src/data/profile.js` (resume), `src/data/categories.js`. Reasoning for the curation is in `BRIEF.md`.
- Cross-stylesheet targeting of a dynamic state (e.g. `Reveal`'s visible state, `DeviceMockup`'s frame) needs a literal global class name, not a CSS-Modules hashed one — `:global(.foo)` only matches an actual `foo` token in the DOM, not a hashed class that happens to contain "foo" as a substring. This has caused two real bugs already (`mockup-frame`, timeline fill line) — check for the pattern before adding another cross-module `:global()` selector.
- Page structure: Home is one long page (`#about #projects #case-studies #experience #contact` anchors) plus `/work` (full filterable archive) and `/work/:slug` (project detail; richer template when `project.caseStudy` is true).
- Contact info (email/phone) renders in exactly one place: the homepage Contact section. Don't add it to nav, footer, or project pages.
- Footer is copyright-only by design. Don't add nav/links/contact back into it without being asked.
- Respect `prefers-reduced-motion` for any animation work (enforced globally in `base.css`).

## Goal

The site should read as built by/for someone with 7+ years of UI/UX experience: restrained visual design, real case-study depth (problem → process → outcome, not just pretty screenshots), credible specifics over generic claims.
