import { ExternalLink, Youtube } from 'lucide-react'

const videos = [
  {
    id: 'YElVQqNwrJ4',
    title: 'Apple Design: The twenty pixels that changed design forever',
    description:
      "Analysis of the mathematical features of rounded corners that unified Apple's digital and physical design.",
    url: 'https://www.youtube.com/watch?v=YElVQqNwrJ4',
  },
  {
    id: 'bU7ehwW4pws',
    title: 'This Simple Box Created a Revolution',
    description:
      'The history of Box Model technology that changed design as we know it and brought web design closer to old-school poster and book design.',
    url: 'https://www.youtube.com/watch?v=bU7ehwW4pws',
  },
  {
    id: 'ek9pXcMaVNA',
    title: "Is Perplexity's rebranding a game-changer?",
    description:
      "Exploring Perplexity's identity approach that allowed them to create a unique visual language in the AI niche.",
    url: 'https://www.youtube.com/watch?v=ek9pXcMaVNA',
  },
]

export function AboutSection() {
  return (
    <section
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight"
        >
          ILIA WERNER
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start lg:items-stretch">
          <figure className="w-full lg:col-span-4 flex justify-start">
            <img
              src="https://github.com/iliawerner/iliawerner/raw/fc3ee65c725080ad7d99eb3bb4c59afba1970a3c/podcast.png"
              alt="Portrait of Ilia Werner"
              className="w-full max-w-sm lg:max-w-none h-full object-cover rounded-lg"
              width="640"
              height="640"
            />
            <figcaption className="sr-only">Ilia Werner, design researcher and host of Design Lovers</figcaption>
          </figure>
          <div className="w-full lg:col-span-8 flex flex-col gap-6 text-left justify-between">
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                A design researcher exploring anthropology, philosophy, sociology, and culture.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Host and author of the YouTube channel <em>Design Lovers.</em>
              </p>
              <blockquote className="text-base sm:text-lg leading-relaxed italic">
                After 20 years of design practice, 3 years of teaching, and 6 years of running my
                design studio DELO, I decided to step away from practical implementation and move
                toward what I do best — studying the essence of things. The essence of products and
                services, how they interact with their audiences, what signals they send, and how
                those signals are perceived.
              </blockquote>
            </div>
          </div>
        </div>
        <div className="space-y-6 lg:space-y-8">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(({ id, title, description, url }) => (
              <article key={id} className="space-y-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video w-full relative group"
                  aria-label={`Watch ${title} on YouTube`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                    alt={`${title} video thumbnail`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Youtube className="text-white" size={48} aria-hidden="true" />
                  </div>
                </a>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h4>
                  <p className="text-base sm:text-lg leading-relaxed">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  >
                    Watch on YouTube
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
