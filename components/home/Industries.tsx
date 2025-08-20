export default function Industries() {
  const industries = [
    { name: 'E-commerce', icon: '🛒', count: '150+' },
    { name: 'Healthcare', icon: '🏥', count: '80+' },
    { name: 'Real Estate', icon: '🏠', count: '120+' },
    { name: 'Legal', icon: '⚖️', count: '60+' },
    { name: 'Restaurants', icon: '🍽️', count: '200+' },
    { name: 'SaaS', icon: '☁️', count: '90+' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized SEO strategies for every industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.count} clients</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}