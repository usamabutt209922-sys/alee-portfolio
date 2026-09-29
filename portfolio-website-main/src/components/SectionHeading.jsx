import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
