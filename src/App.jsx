import { Mail } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card.jsx"
import "./App.css"

const contactEmail = "hello@iliawerner.com"

function App() {
  return (
    <div className="app-shell min-h-screen text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://static.tildacdn.com/tild3361-3837-4265-a436-383139323065/photo.svg"
                alt="DELO Logo"
                className="h-8"
              />
            </div>
            <div className="text-left sm:text-right">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Mail size={16} />
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                YOUR PRODUCT'S
                <br />
                GUIDING DESIGN
                <br />
                PHILOSOPHY
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-lg sm:text-xl leading-relaxed">
                We will create a guide that helps you clearly and cleanly see how you should act.
                How to communicate, what methods and tools to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-6">WHAT WE COVER</h3>
              <div className="space-y-4">
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">HISTORY</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">PHILOSOPHY</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">PSYCHOLOGY</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">ANTHROPOLOGY</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">CULTURE</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">SOCIOLOGY</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-6">WHAT WE RELY ON</h3>
              <div className="space-y-4 mb-10">
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">AUDIENCE</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">PRODUCT</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">VALUES</p>
                </div>
                <div className="border-2 border-black bg-white px-6 py-5">
                  <p className="font-bold">PERSONALITY</p>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mt-12 mb-4">OUR FOUNDATION</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Each aspect requires studying historical precedents and their outcomes, as well as scientific articles connected
                to the areas of perception we explore. We rely both on clear, scientific, and measurable indicators, and at the
                same time study the philosophy and culture of these solutions and approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts & Pricing */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-10 lg:mb-14">ARTIFACTS</h3>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="w-full">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">THE GUIDE</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    The main artifact is the guide itself. This is the result of the work: a clear and detailed instruction that
                    will help you make decisions when "designing" your product in the broad sense.
                  </p>
                  <div className="mt-auto text-2xl sm:text-3xl font-bold">$4000</div>
                </CardContent>
              </Card>
            </div>
            <div className="w-full">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">CONCEPTS</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Product development strategies. For example, while researching the history of browsers for huly.io, we came up
                    with the concept of "Flows" instead of tab groups or workspaces.
                  </p>
                  <div className="mt-auto text-2xl sm:text-3xl font-bold">+$2000</div>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:col-span-2 lg:col-span-1">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">MONOGRAPHS</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    We can also shape all the research materials collected during the study phase into a monograph written
                    specifically for your product.
                  </p>
                  <div className="mt-auto text-2xl sm:text-3xl font-bold">+$1000</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-10 lg:mb-14">TESTIMONIALS</h3>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full">
              <div className="border-2 border-black bg-white px-6 py-8">
                <blockquote className="text-base sm:text-lg leading-relaxed mb-4 italic">
                  Ilia has been a great design partner for Moio, providing sharp, actionable feedback that's helped us refine both
                  our product and our process. He cuts through the noise, spots what matters, and backs it up with clear reasoning.
                </blockquote>
                <cite className="font-bold not-italic">
                  MATIC PELCL
                  <br />
                  <span className="font-normal text-sm">Founder of Moio (Product of the Day #1 on Product Hunt)</span>
                </cite>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-black bg-white px-6 py-8">
                <blockquote className="text-base sm:text-lg leading-relaxed mb-4 italic">
                  Ilia has a rare ability to see the essence of things and identify the fundamental principles that drive growth.
                  He helps separate the essential from the secondary and builds a clear, working system for communication and
                  product development.
                </blockquote>
                <cite className="font-bold not-italic">
                  WILL TAYLOR
                  <br />
                  <span className="font-normal text-sm">Founder of Workflow</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="space-y-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">ILIA WERNER</h3>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-stretch">
              <div className="w-full lg:col-span-4 flex justify-start lg:self-stretch">
                <div className="relative w-full max-w-sm lg:max-w-none lg:h-full">
                  <img
                    src="https://github.com/iliawerner/iliawerner/raw/fc3ee65c725080ad7d99eb3bb4c59afba1970a3c/podcast.png"
                    alt="Ilia Werner"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full lg:col-span-8 flex flex-col gap-4 text-left h-full">
                <p className="text-base sm:text-lg leading-relaxed">
                  A design researcher exploring anthropology, philosophy, sociology, and culture.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Host and author of the YouTube channel <em>Design Lovers.</em>
                </p>
                <blockquote className="text-base sm:text-lg leading-relaxed border-l-2 border-black pl-4 lg:pl-6 italic font-serif">
                  After 20 years of design practice, 3 years of teaching, and 6 years of running my design studio DELO, I decided to
                  step away from practical implementation and move toward what I do best — studying the essence of things. The
                  essence of products and services, how they interact with their audiences, what signals they send, and how those
                  signals are perceived.
                </blockquote>
              </div>
            </div>
            <div className="space-y-8 lg:space-y-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">FEATURED VIDEOS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/watch?v=YElVQqNwrJ4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video w-full relative group"
                  >
                    <img
                      src="https://i.ytimg.com/vi/YElVQqNwrJ4/hqdefault.jpg"
                      alt="Apple Design: The twenty pixels that changed design forever"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-play text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </a>
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      Apple Design: The twenty pixels that changed design forever
                    </h4>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Analysis of the mathematical features of rounded corners that unified Apple's digital and physical design.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/watch?v=bU7ehwW4pws"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video w-full relative group"
                  >
                    <img
                      src="https://i.ytimg.com/vi/bU7ehwW4pws/hqdefault.jpg"
                      alt="This Simple Box Created a Revolution"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-play text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </a>
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">This Simple Box Created a Revolution</h4>
                    <p className="text-base sm:text-lg leading-relaxed">
                      The history of Box Model technology that changed design as we know it and brought web design closer to
                      old-school poster and book design.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:col-span-2 lg:col-span-1">
                  <a
                    href="https://www.youtube.com/watch?v=ek9pXcMaVNA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video w-full relative group"
                  >
                    <img
                      src="https://i.ytimg.com/vi/ek9pXcMaVNA/hqdefault.jpg"
                      alt="Is Perplexity's rebranding a game-changer?"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-play text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </a>
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">Is Perplexity's rebranding a game-changer?</h4>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Exploring Perplexity's identity approach that allowed them to create a unique visual language in the AI
                      niche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">CONTACT US</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Describe your product briefly and send it to us at
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 font-bold text-black underline-offset-2 hover:underline"
              >
                {contactEmail}
              </a>
              . We'll get back to you within a couple of days.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Prefer a direct line? Reach Ilia on WhatsApp at
              <a
                className="ml-1 inline-flex items-center gap-1 text-black underline-offset-2 hover:underline"
                href="https://wa.me/447944473843"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7944 473843
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-sm">© 2025 DELO STUDIO LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
