import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categories, categoryBySlug } from '../data/categories.js'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import useDocumentMeta from '../lib/useDocumentMeta.js'
import styles from './Work.module.css'

export default function Work() {
  const { categorySlug } = useParams()
  const active = categorySlug && categoryBySlug[categorySlug] ? categorySlug : 'all'
  const activeCategory = categoryBySlug[active]

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  useDocumentMeta({
    title: activeCategory ? `${activeCategory.name} Projects | Alee M` : 'Projects | Alee M',
    description: activeCategory
      ? `${visible.length} ${activeCategory.name} UI/UX and product design projects by Alee M.`
      : `${projects.length} UI/UX and product design projects across ${categories.length} industries, from B2B SaaS to fintech, healthcare, and mobile.`,
    path: activeCategory ? `/projects/category/${activeCategory.slug}` : '/projects',
  })

  return (
    <main className={`container ${styles.page}`}>
      <header className={`${styles.header} ${styles.headerIn}`}>
        <p className={styles.eyebrow}>Full archive</p>
        <h1 className={styles.title}>{activeCategory ? activeCategory.name : 'Projects'}</h1>
        <p className={styles.description}>
          {activeCategory
            ? `${visible.length} ${activeCategory.name} projects, part of a broader archive of ${projects.length} across ${categories.length} industries.`
            : `${projects.length} projects across ${categories.length} industries, drawn from 100+ SaaS, enterprise, fintech, and mobile engagements.`}
        </p>
      </header>

      <nav className={`${styles.filters} ${styles.filtersIn}`} aria-label="Filter by category">
        <Link
          to="/projects"
          className={`${styles.filterBtn} ${active === 'all' ? styles.filterActive : ''}`}
          aria-current={active === 'all' ? 'page' : undefined}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/projects/category/${cat.slug}`}
            className={`${styles.filterBtn} ${active === cat.slug ? styles.filterActive : ''}`}
            aria-current={active === cat.slug ? 'page' : undefined}
          >
            {cat.name}
          </Link>
        ))}
      </nav>

      <div className={styles.grid} key={active}>
        {visible.map((project, i) => (
          <div
            key={project.slug}
            className={styles.gridItem}
            style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className={styles.empty}>No projects in this category yet.</p>
      )}
    </main>
  )
}
