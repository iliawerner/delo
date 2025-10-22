import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { detectRussianVisitor } from '@/lib/detectRussianVisitor.js'
import { HomePage } from '@/pages/HomePage.jsx'
import { RuStatementPage, RU_OPT_OUT_STORAGE_KEY } from '@/pages/RuStatementPage.jsx'

function GeoRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const hasOptedOut = (() => {
      try {
        return window.sessionStorage?.getItem(RU_OPT_OUT_STORAGE_KEY) === 'true'
      } catch {
        return false
      }
    })()

    if (hasOptedOut || location.pathname === '/ru') {
      return undefined
    }

    const controller = new AbortController()
    let cancelled = false

    async function runDetection() {
      const isRussian = await detectRussianVisitor({ signal: controller.signal })
      if (!cancelled && isRussian) {
        navigate('/ru', { replace: true })
      }
    }

    runDetection()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [location.pathname, navigate])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <GeoRedirect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ru" element={<RuStatementPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
