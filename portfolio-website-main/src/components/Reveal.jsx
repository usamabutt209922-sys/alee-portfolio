import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

// Fades/slides children in once they cross into the viewport. Cheap
// IntersectionObserver, no animation library — see BRIEF.md on avoiding
// dependency bloat. prefers-reduced-motion is handled globally in base.css.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? `${styles.visible} is-visible` : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
