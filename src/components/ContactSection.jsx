export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight"
        >
          CONTACT
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Describe your product briefly and send it to us at{' '}
          <a href="mailto:hello@iliawerner.com" className="font-bold text-black underline underline-offset-4">
            hello@iliawerner.com
          </a>
          . We'll get back to you within a couple of days.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          Prefer a direct line? Reach Ilia on{' '}
          <a
            href="https://wa.me/447944473843"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            WhatsApp
          </a>{' '}
          at +44 7944 473843.
        </p>
      </div>
    </section>
  )
}
