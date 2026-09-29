// Categories derived from the project spreadsheet, normalized and merged
// where raw sheet categories were too thin to stand alone (see BRIEF.md).
export const categories = [
  { slug: 'fintech', name: 'Fintech' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'real-estate', name: 'Real Estate' },
  { slug: 'saas-enterprise', name: 'SaaS & Enterprise' },
  { slug: 'logistics', name: 'Logistics & Transportation' },
  { slug: 'hospitality', name: 'Hospitality & Tourism' },
  { slug: 'insurance', name: 'Insurance & Compliance' },
  { slug: 'ecommerce', name: 'E-commerce' },
  { slug: 'sports-fitness', name: 'Sports & Fitness' },
  { slug: 'websites', name: 'Websites' },
  { slug: 'gaming', name: 'Gaming & Entertainment' },
]

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]))
