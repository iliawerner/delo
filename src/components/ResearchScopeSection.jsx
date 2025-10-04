const coverageTopics = [
  'HISTORY',
  'PHILOSOPHY',
  'PSYCHOLOGY',
  'ANTHROPOLOGY',
  'CULTURE',
  'SOCIOLOGY',
]

const foundations = ['AUDIENCE', 'PRODUCT', 'VALUES', 'PERSONALITY']

export function ResearchScopeSection() {
  return (
    <section
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="scope-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-8">
            <h2 id="scope-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              WHAT WE COVER
            </h2>
            <ul className="space-y-4" aria-label="Research topics">
              {coverageTopics.map((topic) => (
                <li key={topic} className="border-2 border-black bg-white p-6">
                  <span className="font-bold tracking-widest">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 space-y-8">
            <h2
              id="foundation-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight"
            >
              WHAT WE RELY ON
            </h2>
            <ul className="space-y-4" aria-labelledby="foundation-heading">
              {foundations.map((item) => (
                <li key={item} className="border-2 border-black bg-white p-6">
                  <span className="font-bold tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-16 text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              OUR FOUNDATION
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Each aspect requires studying historical precedents and their outcomes, as well as
              scientific articles connected to the areas of perception we explore. We rely both on
              clear, scientific, and measurable indicators, and at the same time study the philosophy
              and culture of these solutions and approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
