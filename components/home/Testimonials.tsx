export default function Testimonials() {
  const testimonials = [
    {
      content: "GoalSEO transformed our online presence. We went from page 5 to #1 for our main keywords in just 3 months!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      rating: 5,
    },
    {
      content: "The ROI we've seen from their SEO services is incredible. Our organic traffic increased by 400% in 6 months.",
      author: "Michael Chen",
      role: "Marketing Director, E-Shop Pro",
      rating: 5,
    },
    {
      content: "Professional, data-driven, and results-focused. GoalSEO is the best SEO agency we've worked with.",
      author: "Emily Rodriguez",
      role: "Founder, Local Biz Solutions",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses
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
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}