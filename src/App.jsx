import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Mail, Youtube, ExternalLink } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your submission! Ilia will get back to you within a couple of days.')
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <img src="https://static.tildacdn.com/tild3361-3837-4265-a436-383139323065/photo.svg" alt="DELO Logo" className="h-8" />
            </div>
            <div className="col-span-4 text-right">
              <a href="mailto:hello@iliawerner.com" className="inline-flex items-center gap-2 text-sm hover:underline">
                <Mail size={16} />
                hello@iliawerner.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <h2 className="text-6xl font-bold leading-tight mb-8">
                YOUR PRODUCT'S<br />
                GUIDING DESIGN<br />
                PHILOSOPHY
              </h2>
            </div>
            <div className="col-span-4">
              <p className="text-lg leading-relaxed">
                We will create a guide that helps you clearly and cleanly see how you should act. 
                How to communicate, what methods and tools to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <h3 className="text-2xl font-bold mb-6">WHAT WE COVER</h3>
              <div className="space-y-4">
                <div className="border-2 border-black p-4">
                  <p className="font-bold">HISTORY</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">PHILOSOPHY</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">PSYCHOLOGY</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">ANTHROPOLOGY</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">CULTURE</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">SOCIOLOGY</p>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <h3 className="text-2xl font-bold mb-6">WHAT WE RELY ON:</h3>
              <div className="space-y-4 mb-8">
                <div className="border-2 border-black p-4">
                  <p className="font-bold">AUDIENCE</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">PRODUCT</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">VALUES</p>
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-bold">PERSONALITY</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">OUR FOUNDATION</h3>
              <p className="text-sm leading-relaxed">
                Each aspect requires studying historical precedents and their outcomes, 
                as well as scientific articles connected to the areas of perception we explore. 
                We rely both on clear, scientific, and measurable indicators, and at the same time 
                study the philosophy and culture of these solutions and approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts & Pricing */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h3 className="text-4xl font-bold mb-12">ARTIFACTS</h3>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">THE GUIDE</h4>
                  <p className="text-sm mb-6 leading-relaxed">
                    The main artifact is the guide itself. This is the result of the work: 
                    a clear and detailed instruction that will help you make decisions when 
                    "designing" your product in the broad sense.
                  </p>
                  <div className="text-3xl font-bold">$4000</div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">CONCEPTS</h4>
                  <p className="text-sm mb-6 leading-relaxed">
                    Product development strategies. For example, while researching the history 
                    of browsers for huly.io, we came up with the concept of "Flows" instead 
                    of tab groups or workspaces.
                  </p>
                  <div className="text-3xl font-bold">+$2000</div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="border-2 border-black rounded-none h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">MONOGRAPHS</h4>
                  <p className="text-sm mb-6 leading-relaxed">
                    We can also shape all the research materials collected during the study 
                    phase into a monograph written specifically for your product.
                  </p>
                  <div className="text-3xl font-bold">+$1000</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h3 className="text-4xl font-bold mb-12">TESTIMONIALS</h3>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <div className="border-2 border-black p-6">
                <blockquote className="text-sm leading-relaxed mb-4">
                  "Ilia has been a great design partner for Moio, providing sharp, actionable 
                  feedback that's helped us refine both our product and our process. He cuts 
                  through the noise, spots what matters, and backs it up with clear reasoning."
                </blockquote>
                <cite className="font-bold">
                  MATIC PELCL<br />
                  <span className="font-normal text-sm">Founder of Moio (Product of the Day #1 on Product Hunt)</span>
                </cite>
              </div>
            </div>
            <div className="col-span-6">
              <div className="border-2 border-black p-6">
                <blockquote className="text-sm leading-relaxed mb-4">
                  "Ilia has a rare ability to see the essence of things and identify the 
                  fundamental principles that drive growth. He helps separate the essential 
                  from the secondary and builds a clear, working system for communication 
                  and product development."
                </blockquote>
                <cite className="font-bold">
                  WILL TAYLOR<br />
                  <span className="font-normal text-sm">Founder of Workflow</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <h3 className="text-4xl font-bold mb-8">AUTHOR</h3>
              <div className="grid grid-cols-12 gap-8 mb-12 items-start">
                <div className="col-span-4">
                  <img src="https://github.com/iliawerner/iliawerner/raw/fc3ee65c725080ad7d99eb3bb4c59afba1970a3c/podcast.png" alt="Ilia Werner" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="col-span-8">
                  <p className="text-5xl font-bold mb-4">Ilia Werner</p>
                  <p className="text-lg leading-relaxed mb-2">Host and author of the YouTube channel <em>Design Lovers.</em></p>
                  <p className="text-base leading-relaxed mb-6">A design researcher exploring anthropology, philosophy, sociology, and culture.</p>
                </div>
                <div className="col-span-12">
                  <blockquote className="text-xl leading-relaxed border-l-2 border-black pl-4 italic font-serif">
                    "After 20 years of design practice, 3 years of teaching, and 6 years of running 
                    my design studio DELO, I decided to step away from practical implementation and 
                    move toward what I do best — studying the essence of things. The essence of 
                    products and services, how they interact with their audiences, what signals 
                    they send, and how those signals are perceived."
                  </blockquote>
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-8">FEATURED VIDEOS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="https://www.youtube.com/watch?v=YElVQqNwrJ4" target="_blank" rel="noopener noreferrer" className="block aspect-video w-full relative group">
                  <img src="https://i.ytimg.com/vi/YElVQqNwrJ4/hqdefault.jpg" alt="Apple Design: The twenty pixels that changed design forever" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=bU7ehwW4pws" target="_blank" rel="noopener noreferrer" className="block aspect-video w-full relative group">
                  <img src="https://i.ytimg.com/vi/bU7ehwW4pws/hqdefault.jpg" alt="This Simple Box Created a Revolution" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=ek9pXcMaVNA" target="_blank" rel="noopener noreferrer" className="block aspect-video w-full relative group">
                  <img src="https://i.ytimg.com/vi/ek9pXcMaVNA/hqdefault.jpg" alt="Is Perplexity\"s rebranding a game-changer?" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 text-center">
              <h3 className="text-4xl font-bold mb-8">CONTACT US</h3>
              <p className="text-lg leading-relaxed mb-4">
                Describe your product briefly and send it to us at:
              </p>
              <a href="mailto:hello@iliawerner.com" className="text-2xl font-bold text-black hover:underline">
                hello@iliawerner.com
              </a>
              <p className="text-base leading-relaxed mt-4">
                We\'ll get back to you within a couple of days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <p className="text-sm">© 2025 DELO STUDIO LTD. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="col-span-4 text-right">
              <a href="mailto:ilia@iliawerner.com" className="text-sm hover:underline">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
