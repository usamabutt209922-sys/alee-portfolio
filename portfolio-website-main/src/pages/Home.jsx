import { Link, useLocation } from 'react-router-dom'
import { profile, experience } from '../data/profile.js'
import { featuredProjects, caseStudies } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import useDocumentMeta from '../lib/useDocumentMeta.js'
import styles from './Home.module.css'

const homeFeatured = featuredProjects.slice(0, 6)
const countryCount = new Set(experience.map((role) => role.country)).size

const stats = [
  { value: 7, suffix: '+', label: 'Years experience' },
  { value: 100, suffix: '+', label: 'Projects' },
  { value: 5, suffix: '', label: 'Countries' },
  { value: 11, suffix: '', label: 'Industries' },
]

const pageMeta = {
  '/about': {
    title: 'About | Alee M, Senior Product Designer',
    description: 'About Alee M, a Senior Product and UI/UX Designer focused on complex B2B SaaS, enterprise, fintech, and mobile products.',
  },
  '/case-studies': {
    title: 'Product Design Case Studies | Alee M',
    description: 'Detailed product design case studies covering fintech, B2B SaaS, business platforms, and mobile experiences.',
  },
  '/experience': {
    title: 'Experience | Alee M, Senior Product Designer',
    description: "Alee M's professional experience: senior product and UX design roles across B2B SaaS, fintech, and eCommerce companies in the US, UK, China, Canada, and the Netherlands.",
  },
  '/contact': {
    title: 'Contact Alee M | Senior Product Designer',
    description: 'Contact Alee M about senior product design, UI/UX roles, and selected consulting engagements.',
  },
}

export default function Home() {
  const { pathname } = useLocation()
  const meta = pageMeta[pathname]

  useDocumentMeta({
    title: meta?.title || 'Alee M | Senior Product & UI/UX Designer',
    description: meta?.description ||
      'Alee M is a Senior Product Designer and UI/UX Designer with 7+ years designing B2B SaaS, enterprise, fintech, and mobile products.',
    path: meta ? pathname : '/',
  })

  return (
    <main>
      {/* Hero */}
      <section className={`container ${styles.hero}`}>
        <p className={`${styles.heroEyebrow} ${styles.heroIn1}`}>{profile.focus}</p>
        <h1 className={`${styles.heroTitle} ${styles.heroIn2}`}>
          Senior product design for complex, data-heavy software.
        </h1>
        <p className={`${styles.heroSub} ${styles.heroIn3}`}>
          {profile.yearsExperience} years designing B2B SaaS, enterprise, fintech, and mobile
          products, from discovery and information architecture through high-fidelity UI, design
          systems, and developer handoff.
        </p>
        <div className={`${styles.heroActions} ${styles.heroIn4}`}>
          <Link to="/projects" className={styles.primaryCta}>
            View projects
          </Link>
          <Link to="/contact" className={styles.secondaryCta}>
            Contact
          </Link>
        </div>
      </section>

      {/* About */}
      <section className={`container ${styles.section}`} id="about">
        <Reveal>
          <SectionHeading eyebrow="About" title={profile.name} />
        </Reveal>
        <div className={styles.aboutGrid}>
          <Reveal delay={80} className={styles.aboutBody}>
            <p>{profile.summary}</p>
            <p>{profile.summarySecondary}</p>
          </Reveal>
          <Reveal delay={140} className={styles.statList}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNumber}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className={`container ${styles.section}`} id="projects">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected product work"
            description="Drawn from a broader archive of 100+ SaaS, fintech, healthcare, and mobile engagements."
          />
        </Reveal>
        <div className={styles.grid}>
          {homeFeatured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.moreLink}>
          <Link to="/projects">View all projects →</Link>
        </Reveal>
      </section>

      {/* Case studies */}
      <section className={`container ${styles.section}`} id="case-studies">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="In depth"
            description="Five projects named directly in Alee's professional experience, as lead designer end to end."
          />
        </Reveal>
        <div className={styles.caseStudyList}>
          {caseStudies.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70} as="div">
              <Link to={`/projects/${project.slug}`} className={styles.caseStudyRow}>
                <div>
                  <p className={styles.caseStudyIndustry}>
                    {project.industry.split(/[/,]/)[0].trim()}
                  </p>
                  <h3 className={styles.caseStudyTitle}>{project.title}</h3>
                  <p className={styles.caseStudyTagline}>{project.tagline}</p>
                </div>
                <span className={styles.caseStudyArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className={`container ${styles.section}`} id="experience">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title={`${profile.yearsExperience} years across ${countryCount} countries`}
            description="Senior product and UX design roles across five companies and three continents."
          />
        </Reveal>
        <Reveal as="ol" className={styles.timeline}>
          {experience.map((role, i) => (
            <Reveal
              key={role.company}
              as="li"
              delay={i * 80}
              className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <span
                className={`${styles.timelineDot} ${role.highlight ? styles.timelineDotFilled : ''}`}
                aria-hidden="true"
              />
              <div className={styles.timelineContent}>
                <p className={styles.timelineDates}>{role.period}</p>
                <h3 className={styles.timelineCompany}>{role.company}</h3>
                <p className={styles.timelineRole}>
                  {role.role} · {role.location}
                </p>
                <p className={styles.timelineSummary}>{role.summary}</p>
              </div>
            </Reveal>
          ))}
        </Reveal>
      </section>

      {/* Contact */}
      <section className={`container ${styles.section} ${styles.contact}`} id="contact">
        <Reveal>
          <p className={styles.contactEyebrow}>Contact</p>
          <h2 className={styles.contactTitle}>Have a product that needs thoughtful design?</h2>
          <p className={styles.contactSub}>
            Open to senior product design and UI/UX roles, and select consulting engagements.
          </p>
          <div className={styles.contactActions}>
            <a href={`mailto:${profile.email}`} className={styles.primaryCta}>
              {profile.email}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
