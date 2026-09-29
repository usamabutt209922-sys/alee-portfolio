import { useParams, Link } from 'react-router-dom'
import { projectBySlug, projectsByCategory } from '../data/projects.js'
import { categoryBySlug } from '../data/categories.js'
import DeviceMockup from '../components/DeviceMockup.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import useDocumentMeta from '../lib/useDocumentMeta.js'
import NotFound from './NotFound.jsx'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectBySlug[slug]

  useDocumentMeta({
    title: project ? `${project.title} | Alee M` : undefined,
    description: project?.description,
    path: project ? `/projects/${slug}` : undefined,
  })

  if (!project) return <NotFound />

  const category = categoryBySlug[project.category]
  const related = projectsByCategory(project.category)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)

  return (
    <main className={styles.page} key={slug}>
      <ScrollProgress />
      <header className={`container ${styles.header} ${styles.headerIn}`}>
        <Link to="/projects" className={styles.back}>
          ← All work
        </Link>
        <p className={styles.eyebrow}>
          <Link to={`/projects/category/${category.slug}`} className={styles.categoryLink}>
            {category.name}
          </Link>
          {project.caseStudy && <span className={styles.caseStudyBadge}>Case study</span>}
        </p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
      </header>

      <div className={`container ${styles.heroVisual} ${styles.heroVisualIn}`}>
        <DeviceMockup
          platform={project.platform}
          seed={project.slug}
          category={project.category}
          title={project.title}
          variant="detail"
        />
      </div>

      <div className={`container ${styles.body}`}>
        <div className={styles.mainCol}>
          <Reveal as="section">
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.paragraph}>{project.description}</p>
          </Reveal>

          {project.caseStudy && (
            <>
              <Reveal as="section" delay={60}>
                <h2 className={styles.sectionTitle}>Key user flows</h2>
                <ul className={styles.bulletList}>
                  {project.keyFlows.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal as="section" delay={60}>
                <h2 className={styles.sectionTitle}>Modules & features</h2>
                <ul className={styles.bulletList}>
                  {project.modules.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal as="section" delay={60}>
                <h2 className={styles.sectionTitle}>User roles</h2>
                <ul className={styles.bulletList}>
                  {project.userRoles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal as="section" delay={60}>
                <h2 className={styles.sectionTitle}>Scope & responsiveness</h2>
                <p className={styles.paragraph}>{project.scope}</p>
                <p className={styles.paragraph}>{project.responsiveness}</p>
              </Reveal>
            </>
          )}
        </div>

        <aside className={styles.sideCol}>
          <dl className={styles.factList}>
            {project.role && (
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            <div>
              <dt>Industry</dt>
              <dd>{project.industry}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.medium}</dd>
            </div>
          </dl>

          <div className={styles.linkActions}>
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noreferrer" className={styles.primaryLink}>
                View design in Figma ↗
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
                View live site ↗
              </a>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <Reveal as="section" className={`container ${styles.related}`}>
          <h2 className={styles.sectionTitle}>More in {category.name}</h2>
          <div className={styles.relatedGrid}>
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Reveal>
      )}

      <section className={`container ${styles.ctaBand}`}>
        <p>Planning a similar product?</p>
        <Link to="/contact">Get in touch →</Link>
      </section>
    </main>
  )
}
