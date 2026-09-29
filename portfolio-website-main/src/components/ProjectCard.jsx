import { Link } from 'react-router-dom'
import DeviceMockup from './DeviceMockup.jsx'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.visual}>
        <DeviceMockup
          platform={project.platform}
          seed={project.slug}
          category={project.category}
          title={project.title}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{project.industry.split(/[/,]/)[0].trim()}</span>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <span>{project.platform}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <span className={styles.action}>
          View project
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
