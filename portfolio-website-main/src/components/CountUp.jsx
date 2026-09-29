import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Animates an integer from 0 to `value` once visible. `suffix` (e.g. "+")
// is appended after counting finishes.
export default function CountUp({ value, suffix = '', duration = 1100 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)
        const start = performance.now()
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
