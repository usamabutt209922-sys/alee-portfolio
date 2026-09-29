# Portfolio Brief — Alee M, Senior UI/UX & Product Designer

## Role

Act as a senior product designer, creative director, frontend engineer, and
technical SEO/performance/accessibility specialist combined. Goal: a premium,
personalized portfolio that reads as built *for Alee specifically* — not a
template with his name swapped in. Test for every page: "would this still
make sense with another designer's name on it?" If yes, it's not
personalized enough yet.

## Ground rules (non-negotiable)

1. **Source of truth only.** Every professional claim — employer, dates,
   client, industry, metric, outcome, team size, award, testimonial — must
   come from Alee's actual files (resume, spreadsheet, assets). Never
   invent one. If something's missing: omit it, write around it without
   claiming it, or clearly present it as non-verified. Accuracy beats
   completeness.
2. **Missing critical info (email/phone) → an obvious placeholder in the
   data layer**, never a fabricated value.
3. **Geographic framing.** When presenting work experience, lead with and
   prioritize US / UK / China experience where the resume actually supports
   it. Don't suppress other experience if it's needed for a project to make
   sense, and don't assign a country that isn't backed by source material.
4. **Never expose** private spreadsheet content, local file paths, internal
   notes, or confidential client data. Only ship what's meant to be public.
   For Figma links: only surface ones that look shareable/public; use
   uncertain ones for your own understanding, not as public CTAs.

## Phase 1 — Discovery (do this before designing anything)

Inspect the whole project folder. Currently present: `Usama Butt Resume.pdf`,
`profile.jpg`. Still needed for the full brief: a spreadsheet/database of
the 100+ projects (name, description, industry, platform, client, Figma URL,
etc.) and any existing screenshots/UI exports/logos. Build an internal
information architecture from what actually exists before writing a line of
copy — don't backfill with generic content while waiting for the rest.

Extract from the resume: title, years of experience, product/UX specialties
(SaaS, mobile, dashboards, fintech, AI, enterprise, design systems),
prototyping/handoff/leadership experience, and which countries/markets are
actually documented.

## Content architecture

**Project dataset** — one structured source (not hardcoded markup) with
fields adapted from what the spreadsheet actually has, roughly:
`title, slug, category, description, figmaUrl, platform, industry,
thumbnail, featured, caseStudy, tags`.

**Categories** — derive them from what's actually in the spreadsheet (don't
pre-impose a fixed list); merge sparse categories; keep the nav simple.
Filter client-side, no reload, smooth transitions; add search only if it
genuinely helps at this volume.

**Featured vs. archive** — homepage shows ~6–10 strongest projects (scored
on visual quality, product complexity, industry range, UX depth — not just
"first in the sheet"), pulling from more than one industry if the resume
supports breadth. Full archive lives on a dedicated work page with category
filtering and pagination/load-more if needed.

**Case studies** — 3–6 of the strongest projects, not all of them.
Structure: overview → context → role (confirmed only) → challenge (only
where source-supported) → UX thinking (flows, IA, decisions) → UI system
(type, color, components) → key screens → responsive behavior → outcome
(only if real metrics exist — otherwise describe what was delivered, not
invented impact). Select the set to show range (e.g. SaaS + fintech +
mobile + AI/enterprise), only where actually backed by material.

**Mockup presentation** — match the frame to the product (mobile frames for
mobile fintech, browser/dashboard compositions for SaaS, etc.), vary the
composition across projects, use real UI assets wherever they exist, never
fabricate an interface. Avoid dropping every project into the same device
mockup.

## Information architecture

Nav: Home / Work / Case Studies / About / Experience / Contact — no more.
Homepage flow (adjust order if the actual content tells a better story):
nav → hero → featured work → credibility strip → selected case studies →
capabilities → experience → about → link to full archive → contact CTA →
footer.

**Hero**: senior positioning, not "Hi, I'm Alee, I design digital
experiences." Communicate years of experience, product+UX focus,
industries, international scope — concisely. CTA options: "View Selected
Work," "Explore 100+ Projects," "Let's Work Together."

**About**: philosophy + industries + seniority + product thinking, not a
generic bio.

**Experience**: refined timeline, confirmed roles/companies/dates only,
rewritten for web (not pasted resume bullets), country/market noted only
when confirmed.

**Skills**: grouped (Product Design / UI Design / Design Systems / Product
Collaboration), not a badge wall — only skills the resume actually
supports.

**Contact**: real email (`mailto:`) and phone (`tel:`) from source files
only, plus a genuine CTA. Resume gets a "View/Download Resume" CTA only if
it's the current, public-appropriate file.

**Footer**: name, title, email, nav, socials if available, year. Keep it
tight.

## Design system

Sophisticated neutral base + one accent color, WCAG-compliant contrast.
Editorial, premium, restrained — explicitly avoid: gradient templates,
bento-grid-everywhere, glassmorphism, neon, fake-AI imagery, blobs, generic
"About Me" template layouts, stock illustration filler.

Tokens for color, type (display/h1–h3/body/caption/label/nav/button scales,
fluid but not oversized on mobile), spacing, radius, shadow, breakpoints,
motion timing/easing — all centralized, not scattered magic numbers.

Reusable components: Button, ProjectCard, ProjectGrid, ProjectFilter,
CaseStudyHero, SectionHeading, Navbar, Footer, ExperienceItem, SkillGroup,
ContactCTA, DeviceMockup, Tag, Badge.

## Motion

Premium but purposeful: reveal/stagger entrances, hover image scale, subtle
parallax, sticky case-study sections, scroll progress, animated filters,
refined micro-interactions. No scroll-hijacking, no motion that delays
content, no gratuitous 3D. Respect `prefers-reduced-motion` everywhere with
real alternatives, not just disabled animation.

## Tech & architecture

Inspect the existing codebase first (already Vite + vanilla JS/CSS per this
project's scaffold) — don't replace a stack that already fits without
reason. If the project's scope now genuinely needs component
architecture/routing/TypeScript that vanilla JS can't reasonably deliver,
that's a stack conversation to have explicitly, not a silent swap.

Content and project data live separately from markup (`/data/projects` or
similar) so adding a project later is a data change, not a new page of
code. Keep components small and single-purpose; no giant page files.

## SEO & technical

Unique title + meta description (~140–160 chars, human-first) per page,
semantic HTML with one H1 per page, JSON-LD (Person/WebSite/ProfilePage/
CreativeWork — accurate fields only, no invented ratings), Open
Graph/Twitter cards, sitemap.xml, robots.txt, canonical URLs, clean URLs
(`/work/project-name`, not `?id=328`), descriptive (not stuffed) image alt
text, internal linking between home → featured → case studies → related
projects.

## Performance & accessibility

Target Lighthouse ~90+ performance, 95+ accessibility/best-practices,
95–100 SEO. WebP/AVIF images, responsive sizes, lazy-load below the fold
(never the LCP hero image), minimal font weights with `font-display: swap`.
Full keyboard navigation, visible focus states, sufficient contrast, no
hover-only critical information, logical tab order, proper labels/ARIA only
where actually needed.

## QA before calling it done

Responsive at ~1440/1280/1024/768/430/390/375px and the gaps between.
No dead links (nav, filters, contact, Figma, resume, case studies). No
console errors, no layout shift, no Lorem Ipsum, no leftover AI-cliché copy
("crafting digital experiences that inspire and delight," "pixel-perfect,"
etc.). `npm run build` succeeds clean.

Run it as a set of focused passes rather than one pass trying to catch
everything: visual/UI, UX & discoverability, motion, mobile, SEO,
performance, accessibility, and a final content-accuracy cross-check against
the resume/spreadsheet.

## Definition of done

Source files inspected and used as ground truth · project dataset built and
categorized · homepage curated (6–10 featured) · full archive filterable ·
3–6 case studies with real depth · contact links functional · responsive
and accessible · motion premium but restrained · SEO/structured data/sitemap
in place · production build clean, no console errors · zero fabricated
claims, zero placeholder text · the site reads as built for a specific
senior designer, not generated for "a designer."

## Execution order

1. Inspect folder (resume, spreadsheet, assets, existing site if any)
2. Extract resume data
3. Normalize the project spreadsheet into structured data
4. Review available assets / accessible Figma links
5. Define categories + pick featured work
6. Pick case-study candidates
7. Lock information architecture
8. Lock design system + motion language
9. Build
10. Populate with real content
11. Build project presentation/mockups from real material
12. Responsive + motion pass
13. Technical SEO pass
14. Review passes (visual, UX, mobile, a11y, SEO, performance)
15. Production build, fix errors
16. Final senior-design critique, refine weak spots

Work through implementation and self-review autonomously once the source
material answers a question — don't stall on decisions the files already
settle. Only surface genuinely missing critical information.
