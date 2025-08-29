import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Coffee, MapPin, Star, Users, Clock, Calendar,
  CheckCircle, ArrowRight, Phone, TrendingUp, Camera,
  Utensils, Wine, ChefHat, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant SEO Services | Local Restaurant Marketing | GoalSEO.ai',
  description: 'Specialized SEO for restaurants, cafes, and food service businesses. Local SEO, review management, and strategies that fill tables.',
}

export default function RestaurantIndustryPage() {
  const services = [
    {
      title: "Local Restaurant SEO",
      description: "Dominate 'near me' searches and local pack",
      icon: MapPin
    },
    {
      title: "Review Generation & Management",
      description: "Build 5-star reputation across all platforms",
      icon: Star
    },
    {
      title: "Menu Optimization",
      description: "Make your menu searchable and discoverable",
      icon: Utensils
    },
    {
      title: "Food Photography SEO",
      description: "Optimize images that make mouths water",
      icon: Camera
    },
    {
      title: "Online Ordering Integration",
      description: "SEO for delivery and takeout searches",
      icon: Phone
    },
    {
      title: "Event & Catering SEO",
      description: "Capture special events and catering searches",
      icon: Calendar
    }
  ]

  const cuisineTypes = [
    "Italian", "Mexican", "Asian", "American",
    "Mediterranean", "Fast Casual", "Fine Dining", "Cafes & Bakeries"
  ]

  const results = [
    { metric: "Table Reservations", value: "+523%", timeframe: "5 months" },
    { metric: "Walk-in Traffic", value: "+180/day", timeframe: "increased" },
    { metric: "Local Pack Position", value: "#1", timeframe: "achieved" },
    { metric: "Google Reviews", value: "247", timeframe: "generated" }
  ]

  const successMetrics = [
    "Fully booked weekends",
    "45-minute wait times",
    "4.9 star average rating",
    "$298K monthly revenue increase"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Coffee className="h-5 w-5" />
              <span>Restaurant SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Restaurant SEO That{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Fills Tables
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From local cafes to restaurant chains, we help food businesses dominate local searches, 
              manage reviews, and turn online searches into seated customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Utensils className="h-5 w-5" />
                Get Your Restaurant SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-amber-600 border-2 border-amber-200 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all"
              >
                <Star className="h-5 w-5" />
                View Restaurant Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-amber-500" />
                <span>45 Restaurant Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-amber-500" />
                <span>10,000+ Reviews Generated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-amber-500" />
                <span>Local SEO Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO for Every Cuisine Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized strategies for your restaurant concept
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cuisineTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all text-center">
                <span className="text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Restaurant SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your restaurant needs to dominate local searches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            }}}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ChefHat className="h-6 w-6" />
                  <span className="font-semibold">Featured Success Story</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Coastal Kitchen</h2>
                <p className="text-white/90 mb-6">
                  "Our restaurant went from empty Tuesday nights to a 45-minute wait. 
                  GoalSEO's local strategy put us on the map literally and figuratively."
                </p>
                <p className="text-sm text-white/80">— Chef Michael Torres, Owner</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Results in 5 Months:</h3>
                <div className="space-y-3">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white/80 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Restaurant SEO Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Average results across our restaurant clients
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{result.value}</div>
                <div className="text-gray-700 mb-1">{result.metric}</div>
                <div className="text-sm text-gray-500">{result.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Fill Every Table?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free restaurant SEO audit and start attracting more hungry customers.
          </p>
          
          <div className="bg-amber-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-amber-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Free Restaurant Audit Includes:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Local search visibility analysis",
                "Google My Business audit",
                "Review platform assessment",
                "Competitor comparison",
                "Menu optimization review",
                "Mobile experience check",
                "Social media integration",
                "90-day growth plan"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free Restaurant Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-amber-600 border-2 border-amber-200 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Talk to a Restaurant SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}