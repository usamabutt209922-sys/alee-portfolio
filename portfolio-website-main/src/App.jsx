import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AmbientBackground from './components/AmbientBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import NotFound from './pages/NotFound.jsx'

const sectionByPath = {
  '/about': 'about',
  '/case-studies': 'case-studies',
  '/experience': 'experience',
  '/contact': 'contact',
}

function ScrollToLocation() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const sectionId = hash.slice(1) || sectionByPath[pathname]

    if (sectionId) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ block: 'start' })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0 })
    return undefined
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToLocation />
      <AmbientBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/case-studies" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/projects/category/:categorySlug" element={<Work />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Backward-compatible aliases for previously shared URLs. */}
        <Route path="/work" element={<Work />} />
        <Route path="/work/category/:categorySlug" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
