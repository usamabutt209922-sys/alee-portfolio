import styles from './AmbientBackground.module.css'

// Slow, restrained drifting gradient wash — fixed behind all page content.
// Signals craft without competing with the content: low opacity, large
// soft shapes, 30s+ loops. Freezes to a static wash under
// prefers-reduced-motion (handled globally in base.css).
export default function AmbientBackground() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={styles.grain} />
    </div>
  )
}
