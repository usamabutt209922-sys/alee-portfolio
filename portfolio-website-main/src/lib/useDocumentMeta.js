import { useEffect } from 'react'
import { SITE_URL } from './seo.js'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', `${SITE_URL}${path}`)
}

// Sets per-route <title>, meta description, canonical, and OG/Twitter tags.
// No react-helmet dependency — this is a handful of DOM writes in a
// useEffect, which is all an SPA without SSR needs. Note: link-preview
// bots (Slack, Twitter, iMessage) don't execute JS, so shared links will
// still show the static index.html OG tags, not these per-route ones —
// only JS-executing crawlers (Googlebot) see this. Real per-share previews
// would need prerendering/SSR, which is a bigger change than this pass.
export default function useDocumentMeta({ title, description, path }) {
  useEffect(() => {
    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', path ? `${SITE_URL}${path}` : undefined)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    if (path) setCanonical(path)
  }, [title, description, path])
}
