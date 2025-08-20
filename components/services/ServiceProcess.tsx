export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We analyze your current SEO performance and identify opportunities"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your specific goals and market"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute optimizations across technical, content, and link building"
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description: "Track performance and continuously refine for maximum results"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach that delivers consistent results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}