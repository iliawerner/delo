import { Card, CardContent } from '@/components/ui/card.jsx'

const artifacts = [
  {
    title: 'THE GUIDE',
    description:
      'The main artifact is the guide itself. This is the result of the work: a clear and detailed instruction that will help you make decisions when “designing” your product in the broad sense.',
    price: '$4000',
  },
  {
    title: 'CONCEPTS',
    description:
      'Product development strategies. For example, while researching the history of browsers for huly.io, we came up with the concept of “Flows” instead of tab groups or workspaces.',
    price: '+$2000',
  },
  {
    title: 'MONOGRAPHS',
    description:
      'We can also shape all the research materials collected during the study phase into a monograph written specifically for your product.',
    price: '+$1000',
  },
]

export function ArtifactsSection() {
  return (
    <section
      id="artifacts"
      className="border-b-2 border-black py-16 sm:py-20 lg:py-24"
      aria-labelledby="artifacts-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="artifacts-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-10 lg:mb-14"
        >
          ARTIFACTS
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {artifacts.map(({ title, description, price }) => (
            <div key={title} className="w-full">
              <Card className="border-2 border-black rounded-none h-full bg-white" aria-labelledby={`${title}-title`}>
                <CardContent className="flex h-full flex-col gap-6 p-8">
                  <h3 id={`${title}-title`} className="text-2xl font-bold uppercase tracking-tight">
                    {title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed">{description}</p>
                  <div className="mt-auto text-2xl sm:text-3xl font-bold" aria-label={`Price ${price}`}>
                    {price}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
