import styles from './DeviceMockup.module.css'
import { getSceneBlocks } from './mockupScenes.js'
import { getMockupImage } from '../data/mockupImages.js'
import {
  StatChips,
  Chart,
  ListRows,
  RingGauge,
  ImageCards,
  MapScene,
  ProgressBars,
  HeroBlock,
  LogoRow,
} from './mockupParts.jsx'

// Content-aware mockup: the frame shape (phone/browser/dashboard) comes from
// the project's platform, but what's inside comes from its category — or,
// for the 5 flagship case studies, a bespoke recipe built from their actual
// spreadsheet detail. See mockupScenes.js for the recipes. Still abstract
// (no fabricated screenshots — see BRIEF.md), but shaped like the real
// product instead of one generic template everywhere.
function hueFromSeed(seed) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  return hash % 360
}

function Block({ block }) {
  switch (block.type) {
    case 'statChips':
      return <StatChips {...block.props} />
    case 'chart':
      return <Chart {...block.props} />
    case 'listRows':
      return <ListRows {...block.props} />
    case 'ringGauge':
      return <RingGauge {...block.props} />
    case 'imageCards':
      return <ImageCards {...block.props} />
    case 'mapScene':
      return <MapScene {...block.props} />
    case 'progressBars':
      return <ProgressBars {...block.props} />
    case 'heroBlock':
      return <HeroBlock />
    case 'logoRow':
      return <LogoRow {...block.props} />
    default:
      return null
  }
}

function Scene({ slug, category }) {
  const blocks = getSceneBlocks({ slug, category })
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  )
}

export default function DeviceMockup({ platform, seed, category, title = '', variant = 'card' }) {
  const mockupImage = getMockupImage(seed, variant)

  if (mockupImage) {
    return (
      <div className={styles.imageFrame}>
        <img
          src={mockupImage}
          alt={`${title || seed} interface mockup`}
          className={styles.projectImage}
          loading={variant === 'detail' ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    )
  }

  const hue = hueFromSeed(seed)
  const style = {
    '--mockup-hue': hue,
    '--frame-ratio': variant === 'detail' ? '2 / 1' : '4 / 3',
  }

  if (platform === 'mobile') {
    return (
      <div className={styles.frameMobile} style={style} aria-hidden="true">
        <div className={`${styles.phone} mockup-frame`}>
          <div className={styles.notch} />
          <div className={styles.phoneScreen}>
            <Scene slug={seed} category={category} />
          </div>
        </div>
      </div>
    )
  }

  if (platform === 'dashboard') {
    return (
      <div className={styles.frameBrowser} style={style} aria-hidden="true">
        <div className={`${styles.browser} mockup-frame`}>
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.dashboardBody}>
            <div className={styles.sidebar}>
              <div className={styles.sideItem} />
              <div className={styles.sideItem} />
              <div className={styles.sideItem} />
            </div>
            <div className={styles.dashMain}>
              <Scene slug={seed} category={category} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 'web' and 'website'
  return (
    <div className={styles.frameBrowser} style={style} aria-hidden="true">
      <div className={`${styles.browser} mockup-frame`}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.webBody}>
          <Scene slug={seed} category={category} />
        </div>
      </div>
    </div>
  )
}
