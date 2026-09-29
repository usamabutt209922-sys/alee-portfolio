// Maps a project's category (and, for the 5 flagship case studies, its
// exact slug) to a small recipe of content blocks — so the mockup actually
// looks like the kind of product it is, not one generic template reused
// everywhere. Rendered by <Scene> in DeviceMockup.jsx via mockupParts.jsx.

const categoryScenes = {
  fintech: [
    { type: 'statChips', props: { count: 2 } },
    { type: 'chart', props: { variant: 'line' } },
    { type: 'listRows', props: { rows: 3, marker: 'dot', trailing: 'amount' } },
  ],
  healthcare: [
    { type: 'statChips', props: { count: 3 } },
    { type: 'listRows', props: { rows: 3, marker: 'avatar', trailing: 'pill' } },
  ],
  'real-estate': [
    { type: 'imageCards', props: { count: 2, layout: 'row', withPrice: true } },
    { type: 'listRows', props: { rows: 2, marker: 'dot', trailing: 'pill' } },
  ],
  'saas-enterprise': [
    { type: 'statChips', props: { count: 3 } },
    { type: 'chart', props: { variant: 'bars' } },
  ],
  logistics: [
    { type: 'mapScene', props: { mode: 'route' } },
    { type: 'listRows', props: { rows: 2, marker: 'dot', trailing: 'pill' } },
  ],
  hospitality: [
    { type: 'imageCards', props: { count: 2, layout: 'row', withRating: true } },
    { type: 'listRows', props: { rows: 1, marker: 'dot', trailing: 'pill' } },
  ],
  insurance: [
    { type: 'ringGauge', props: { rings: 1, tone: 'risk' } },
    { type: 'listRows', props: { rows: 3, marker: 'dot', trailing: 'pill' } },
  ],
  ecommerce: [
    { type: 'imageCards', props: { count: 4, layout: 'grid', withPrice: true } },
  ],
  'sports-fitness': [
    { type: 'ringGauge', props: { rings: 3, tone: 'accent' } },
    { type: 'listRows', props: { rows: 2, marker: 'dot', trailing: 'amount' } },
  ],
  websites: [
    { type: 'heroBlock' },
    { type: 'logoRow', props: { count: 4 } },
  ],
  gaming: [
    { type: 'imageCards', props: { count: 4, layout: 'grid' } },
    { type: 'listRows', props: { rows: 3, marker: 'rank', trailing: 'amount' } },
  ],
}

const flagshipScenes = {
  'kena-finance': [
    { type: 'statChips', props: { count: 2 } },
    { type: 'ringGauge', props: { rings: 1, tone: 'accent' } },
    { type: 'listRows', props: { rows: 3, marker: 'dot', trailing: 'amount' } },
  ],
  onlygenius: [
    { type: 'imageCards', props: { count: 3, layout: 'row' } },
    { type: 'chart', props: { variant: 'bars' } },
    { type: 'statChips', props: { count: 2 } },
  ],
  kaduu: [
    { type: 'ringGauge', props: { rings: 1, tone: 'risk' } },
    { type: 'mapScene', props: { mode: 'scatter' } },
    { type: 'listRows', props: { rows: 2, marker: 'dot', trailing: 'pill' } },
  ],
  sohcahtoa: [
    { type: 'listRows', props: { rows: 3, marker: 'avatar', trailing: 'pill' } },
    { type: 'progressBars', props: { count: 3 } },
  ],
  riderush: [
    { type: 'mapScene', props: { mode: 'route' } },
    { type: 'listRows', props: { rows: 1, marker: 'avatar', trailing: 'amount' } },
    { type: 'listRows', props: { rows: 2, marker: 'dot', trailing: 'amount', totalLast: true } },
  ],
}

export function getSceneBlocks({ slug, category }) {
  return flagshipScenes[slug] || categoryScenes[category] || categoryScenes['saas-enterprise']
}
