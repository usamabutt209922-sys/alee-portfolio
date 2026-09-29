import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  const isActive = (href) =>
    location.pathname === href ||
    (href === '/projects' && (location.pathname.startsWith('/projects/') || location.pathname.startsWith('/work')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={close}>
          {profile.name}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className={styles.mobileLink} onClick={close}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
