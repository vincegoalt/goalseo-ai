import { Location } from '@/data/locations'

interface LocationTestimonialsProps {
  location: Location
}

export default function LocationTestimonials({ location }: LocationTestimonialsProps) {
  const testimonials = [
    {
      content: `GoalSEO helped our ${location.city} restaurant go from invisible to fully booked. We're now #1 for 'best restaurant ${location.city}' and our revenue has doubled!`,
      author: "Sarah Martinez",
      business: `Local Restaurant, ${location.city}`,
      rating: 5
    },
    {
      content: "Our law firm went from page 5 to the top 3 for all our target keywords. The ROI has been incredible - we've had to hire more attorneys!",
      author: "Michael Thompson",
      business: `Law Firm, ${location.city}`,
      rating: 5
    },
    {
      content: `As a small business in ${location.city}, we needed affordable SEO that actually worked. GoalSEO delivered results beyond our expectations.`,
      author: "Jennifer Lee",
      business: `Retail Store, ${location.city}`,
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {location.city} Businesses Love Our Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what local businesses are saying about our SEO services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}