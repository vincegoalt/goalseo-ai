import { Star, Quote } from 'lucide-react'
import { Location } from '@/data/locations'

interface LocationTestimonialsProps {
  location: Location
}

export default function LocationTestimonials({ location }: LocationTestimonialsProps) {
  // Generate unique testimonials based on location characteristics
  const getLocationTestimonials = () => {
    const baseTestimonials = [
      {
        content: `GoalSEO helped our ${location.city} restaurant go from invisible to fully booked. We're now #1 for 'best restaurant ${location.city}' and our revenue has doubled!`,
        author: "Sarah Martinez",
        business: `Local Restaurant`,
        rating: 5,
        result: '100% Revenue Growth'
      },
      {
        content: "Our law firm went from page 5 to the top 3 for all our target keywords. The ROI has been incredible - we've had to hire more attorneys!",
        author: "Michael Thompson", 
        business: `Legal Services`,
        rating: 5,
        result: '450% ROI Increase'
      },
      {
        content: `As a small business in ${location.city}, we needed affordable SEO that actually worked. GoalSEO delivered results beyond our expectations.`,
        author: "Jennifer Lee",
        business: `Retail Store`,
        rating: 5,
        result: '3x Website Traffic'
      }
    ]

    // Customize testimonials based on location characteristics
    if (location.industries) {
      if (location.industries.includes('Tourism')) {
        baseTestimonials[0] = {
          content: `Our ${location.city} hotel bookings increased 250% after GoalSEO optimized our local search presence. We're now the top choice for visitors to ${location.nickname || location.city}!`,
          author: "Lisa Rodriguez",
          business: "Beach Resort",
          rating: 5,
          result: '250% Booking Increase'
        }
      }
      
      if (location.industries.includes('Technology')) {
        baseTestimonials[1] = {
          content: `GoalSEO understands ${location.city}'s tech scene. They helped our startup become the go-to ${location.industries[0].toLowerCase()} company in the area with strategic local SEO.`,
          author: "David Kim",
          business: "Tech Startup",
          rating: 5,
          result: '380% Lead Growth'
        }
      }

      if (location.industries.includes('Healthcare')) {
        baseTestimonials[2] = {
          content: `Our ${location.city} medical practice doubled patient inquiries in 3 months. GoalSEO's healthcare SEO expertise made all the difference.`,
          author: "Dr. Amanda Foster", 
          business: "Medical Practice",
          rating: 5,
          result: '200% New Patients'
        }
      }

      if (location.industries.includes('Real Estate')) {
        baseTestimonials[1] = {
          content: `In competitive ${location.city} real estate, online visibility is everything. GoalSEO made us the top choice for home buyers and sellers.`,
          author: "Robert Chen",
          business: "Real Estate Agency",
          rating: 5,
          result: '300% Website Leads'
        }
      }

      if (location.industries.includes('Entertainment')) {
        baseTestimonials[0] = {
          content: `${location.city}'s entertainment scene is competitive. GoalSEO helped our venue become the premier destination for events and shows.`,
          author: "Maria Gonzalez",
          business: "Entertainment Venue", 
          rating: 5,
          result: '400% Event Bookings'
        }
      }

      if (location.industries.includes('Finance')) {
        baseTestimonials[2] = {
          content: `Our ${location.city} financial advisory firm tripled client inquiries after working with GoalSEO. Their local expertise is unmatched.`,
          author: "James Wilson",
          business: "Financial Advisory",
          rating: 5,
          result: '300% Client Growth'
        }
      }
    }

    // Add location-specific elements to testimonials
    if (location.landmarks && location.landmarks.length > 0) {
      const landmark = location.landmarks[0]
      baseTestimonials[0].content = baseTestimonials[0].content.replace(
        `${location.city}`,
        `${location.city} near ${landmark}`
      )
    }

    return baseTestimonials
  }

  const testimonials = getLocationTestimonials()

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from {location.city}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses in {location.city} {location.county ? `and ${location.county} County` : ''} have grown with our proven SEO strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary-200" />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.business}, {location.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary-600">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-electric-100 text-primary-700 px-6 py-3 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>4.9/5 Rating • 500+ {location.city} Businesses Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}