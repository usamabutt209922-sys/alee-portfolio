import { profile } from '../data/profile.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.mark}>{profile.name}</p>
        <p className={styles.copyright}>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
