import { Card, CardContent } from '@/components/ui/card.jsx'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Mail, Youtube, ExternalLink } from 'lucide-react'
import './App.css'

import { AboutSection } from '@/components/AboutSection.jsx'
import { ArtifactsSection } from '@/components/ArtifactsSection.jsx'
import { ContactSection } from '@/components/ContactSection.jsx'
import { HeroSection } from '@/components/HeroSection.jsx'
import { ResearchScopeSection } from '@/components/ResearchScopeSection.jsx'
import { SiteFooter } from '@/components/SiteFooter.jsx'
import { SiteHeader } from '@/components/Header.jsx'
import { TestimonialsSection } from '@/components/TestimonialsSection.jsx'

function App() {
  const skipToMainClasses = [
    'sr-only',
    'focus:not-sr-only',
    'focus:absolute',
    'focus:left-4',
    'focus:top-4',
    'focus:z-50',
    'focus:rounded',
    'focus:bg-white',
    'focus:px-4',
    'focus:py-2',
    'focus:text-black',
  ].join(' ')

  return (
    <div className="app-background relative min-h-screen text-black font-mono">
      <div className="app-background__noise" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <a
          href="#main-content"
          className={skipToMainClasses}
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main
          id="main-content"
          role="main"
          tabIndex="-1"
          aria-labelledby="hero-heading"
          className="flex-1"
        >
          <HeroSection />
          <ResearchScopeSection />
          <ArtifactsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
