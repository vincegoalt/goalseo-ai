"use client"

import { motion } from 'framer-motion'
import { Star, MapPin, Quote } from 'lucide-react'

export default function LocalTestimonials() {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing",
      location: "Belmont Shore",
      rating: 5,
      text: "GoalSEO took us from page 5 to the top of Google Maps. Now we're booked solid with local calls. Best investment we've made!",
      results: "+287% calls in 60 days"
    },
    {
      name: "Sarah Chen",
      business: "Chen Law Office", 
      location: "Downtown Long Beach",
      rating: 5,
      text: "As a family law attorney, local visibility is everything. GoalSEO understands Long Beach and delivered amazing results.",
      results: "15+ new clients/month"
    },
    {
      name: "Tony Nguyen",
      business: "Pho Saigon Restaurant",
      location: "Cambodia Town",
      rating: 5,
      text: "Our restaurant is packed every night now. They optimized us for 'best pho Long Beach' and we're #1!",
      results: "40% increase in foot traffic"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold">Local Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Long Beach Businesses Love Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real results from real Long Beach businesses. We know your market because we're part of it.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              
              <p className="text-gray-700 mb-6">
                {testimonial.text}
              </p>
              
              <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold mb-6">
                {testimonial.results}
              </div>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}