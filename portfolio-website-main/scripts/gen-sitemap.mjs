// Regenerates public/sitemap.xml from the real project data.
// Run manually after adding/removing projects: node scripts/gen-sitemap.mjs
import { writeFileSync } from 'node:fs'
import { projects } from '../src/data/projects.js'
import { categories } from '../src/data/categories.js'
import { SITE_URL } from '../src/lib/seo.js'

const staticRoutes = ['/', '/about', '/projects', '/case-studies', '/contact']
const categoryRoutes = categories.map((c) => `/projects/category/${c.slug}`)
const projectRoutes = projects.map((p) => `/projects/${p.slug}`)
const routes = [...staticRoutes, ...categoryRoutes, ...projectRoutes]

function priorityFor(route) {
  if (route === '/') return '1.0'
  if (route === '/projects') return '0.8'
  if (route.startsWith('/projects/category/')) return '0.7'
  return '0.6'
}

const urlset = routes
  .map((route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <priority>${priorityFor(route)}</priority>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`Wrote public/sitemap.xml with ${routes.length} routes.`)
