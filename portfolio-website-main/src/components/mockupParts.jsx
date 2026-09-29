import styles from './mockupParts.module.css'

// Small, composable "UI silhouette" primitives used to build a distinct,
// content-aware mockup per project (see mockupScenes.js for the recipes).
// Still abstract — no fabricated screenshots — but shaped like the actual
// kind of interface each product is, not one generic template.

export function StatChips({ count = 3 }) {
  return (
    <div className={styles.statRow}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.statChip}>
          <span className={styles.statChipBar} style={{ width: `${50 + ((i * 17) % 35)}%` }} />
          <span className={styles.statChipBarSm} />
        </div>
      ))}
    </div>
  )
}

export function Chart({ variant = 'bars' }) {
  if (variant === 'line') {
    return (
      <svg className={styles.sparkline} viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,32 15,26 30,30 45,14 60,20 75,8 90,16 105,6 120,12"
          fill="none"
          className={styles.sparklinePath}
        />
      </svg>
    )
  }
  const heights = [40, 65, 45, 90, 60, 75, 35]
  return (
    <div className={styles.barChart}>
      {heights.map((h, i) => (
        <span key={i} className={styles.barChartCol} style={{ height: `${h}%` }} />
      ))}
    </div>
  )
}

export function ListRows({ rows = 3, marker = 'dot', trailing = 'bar', totalLast = false }) {
  return (
    <div className={styles.list}>
      {Array.from({ length: rows }).map((_, i) => {
        const isTotal = totalLast && i === rows - 1
        return (
          <div key={i} className={`${styles.listRow} ${isTotal ? styles.listRowTotal : ''}`}>
            {marker === 'dot' && <span className={styles.dotMarker} />}
            {marker === 'avatar' && <span className={styles.avatarMarker} />}
            {marker === 'rank' && <span className={styles.rankMarker}>{i + 1}</span>}
            <span className={styles.listBars}>
              <span className={styles.barMdInline} style={{ width: `${60 - i * 8}%` }} />
              <span className={styles.barSmInline} style={{ width: `${35 - i * 4}%` }} />
            </span>
            {trailing === 'pill' && <span className={styles.trailingPill} />}
            {trailing === 'amount' && (
              <span className={styles.trailingAmount} style={{ width: isTotal ? '34px' : '24px' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export function RingGauge({ rings = 1, tone = 'accent' }) {
  return (
    <div className={styles.ringWrap}>
      {Array.from({ length: rings }).map((_, i) => (
        <div
          key={i}
          className={`${styles.ring} ${tone === 'risk' ? styles.ringRisk : ''}`}
          style={{
            width: `${72 - i * 20}px`,
            height: `${72 - i * 20}px`,
            '--ring-progress': `${60 + i * 15}%`,
          }}
        />
      ))}
    </div>
  )
}

export function ImageCards({ count = 2, layout = 'row', withPrice = false, withRating = false }) {
  return (
    <div className={`${styles.cards} ${layout === 'grid' ? styles.cardsGrid : styles.cardsRow}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.imageCard}>
          <span className={styles.imageCardArt} />
          {withPrice && <span className={styles.barSmInline} style={{ width: '55%' }} />}
          {withRating && (
            <span className={styles.starRow}>
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className={styles.star} data-filled={s < 4} />
              ))}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export function MapScene({ mode = 'route' }) {
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapGrid} />
      {mode === 'route' ? (
        <>
          <svg className={styles.mapRoute} viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M20,80 C60,20 120,90 180,20" fill="none" className={styles.mapRoutePath} />
          </svg>
          <span className={styles.mapPin} style={{ left: '9%', top: '76%' }} />
          <span className={styles.mapPin} style={{ left: '88%', top: '16%' }} />
        </>
      ) : (
        Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className={styles.mapDot}
            style={{ left: `${8 + ((i * 37) % 88)}%`, top: `${10 + ((i * 53) % 80)}%` }}
          />
        ))
      )}
    </div>
  )
}

export function ProgressBars({ count = 3 }) {
  return (
    <div className={styles.progressList}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.progressTrack}>
          <span className={styles.progressFill} style={{ width: `${45 + ((i * 23) % 50)}%` }} />
        </div>
      ))}
    </div>
  )
}

export function HeroBlock() {
  return (
    <div className={styles.heroBlockCentered}>
      <span className={styles.barLgInline} style={{ width: '70%' }} />
      <span className={styles.barMdInline} style={{ width: '50%' }} />
      <span className={styles.ctaPill} />
    </div>
  )
}

export function LogoRow({ count = 4 }) {
  return (
    <div className={styles.logoRow}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.logoChip} />
      ))}
    </div>
  )
}
