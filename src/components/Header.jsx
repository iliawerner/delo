import { Mail } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="border-b-2 border-black" role="banner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="/photo.svg"
              alt="DELO Studio logo"
              className="h-8"
              width="128"
              height="32"
            />
          </div>
          <div className="text-left sm:text-right">
            <a
              href="mailto:hello@iliawerner.com"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <Mail size={16} aria-hidden="true" />
              <span className="font-semibold">hello@iliawerner.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
