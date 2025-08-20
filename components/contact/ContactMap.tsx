import { siteConfig } from '@/config/site'

export default function ContactMap() {
  // Using OpenStreetMap as a free alternative to Google Maps
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-118.20,33.76,-118.18,33.78&layer=mapnik&marker=33.77,-118.19`
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-lg text-gray-600">
            Located in the heart of Long Beach, California
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={mapUrl}
              className="w-full h-full"
              title="GoalSEO Office Location"
            />
          </div>
          
          <div className="p-6 bg-gradient-to-r from-primary-50 to-electric-50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">GoalSEO.ai Headquarters</h3>
                <p className="text-gray-600">
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}