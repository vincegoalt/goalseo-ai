export default function TrustSignals() {
  const partners = [
    { name: 'Google Partner', logo: '🏆' },
    { name: 'Shopify Plus', logo: '🛍️' },
    { name: 'Meta Partner', logo: '📱' },
    { name: 'HubSpot', logo: '🚀' },
    { name: 'Semrush', logo: '📊' },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="text-2xl">{partner.logo}</span>
              <span className="font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}