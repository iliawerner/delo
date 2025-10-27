import { AboutSection } from '@/components/AboutSection.jsx'
import { ArtifactsSection } from '@/components/ArtifactsSection.jsx'
import { ContactSection } from '@/components/ContactSection.jsx'
import { HeroSection } from '@/components/HeroSection.jsx'
import { ResearchScopeSection } from '@/components/ResearchScopeSection.jsx'
import { TestimonialsSection } from '@/components/TestimonialsSection.jsx'
import { SiteFooter } from '@/components/SiteFooter.jsx'
import { SiteHeader } from '@/components/Header.jsx'
import { useTextReveal } from '@/hooks/use-text-reveal.js'

export function HomePage() {
  useTextReveal()

  return (
    <div className="app-background relative min-h-screen text-black font-mono">
      <div className="app-background__noise" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">
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
