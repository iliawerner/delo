export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 space-y-6 lg:space-y-8">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              YOUR PRODUCT'S
              <br />
              GUIDING DESIGN
              <br />
              PHILOSOPHY
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              We will create a guide that helps you clearly and cleanly see how you should act. How
              to communicate, what methods and tools to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
