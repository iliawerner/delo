const testimonials = [
  {
    quote:
      "Ilia has been a great design partner for Moio, providing sharp, actionable feedback that's helped us refine both our product and our process. He cuts through the noise, spots what matters, and backs it up with clear reasoning.",
    author: 'MATIC PELCL',
    role: 'Founder of Moio (Product of the Day #1 on Product Hunt)',
  },
  {
    quote:
      'Ilia has a rare ability to see the essence of things and identify the fundamental principles that drive growth. He helps separate the essential from the secondary and builds a clear, working system for communication and product development.',
    author: 'WILL TAYLOR',
    role: 'Founder of Workflow',
  },
]

export function TestimonialsSection() {
  return (
    <section
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-10 lg:mb-14"
        >
          TESTIMONIALS
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map(({ quote, author, role }) => (
            <article key={author} className="w-full" aria-labelledby={`${author}-testimonial`}>
              <div className="border-2 border-black bg-white p-8 h-full flex flex-col">
                <blockquote
                  className="text-base sm:text-lg leading-relaxed italic mb-6"
                  id={`${author}-testimonial`}
                >
                  {quote}
                </blockquote>
                <footer className="mt-auto font-bold not-italic">
                  <p>{author}</p>
                  <p className="font-normal text-sm">{role}</p>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
