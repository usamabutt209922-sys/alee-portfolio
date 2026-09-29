import { Link } from 'react-router-dom'
import useDocumentMeta from '../lib/useDocumentMeta.js'
import styles from './NotFound.module.css'

export default function NotFound() {
  useDocumentMeta({ title: 'Page not found | Alee M' })

  return (
    <main className={`container ${styles.page}`}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The page you're looking for doesn't exist, or the project link may be outdated.
      </p>
      <Link to="/projects" className={styles.cta}>
        Browse the work archive →
      </Link>
    </main>
  )
}
