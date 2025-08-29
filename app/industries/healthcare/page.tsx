import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Heart, Shield, Users, Award, TrendingUp, MapPin,
  CheckCircle, ArrowRight, Star, Clock, Phone, Calendar,
  Stethoscope, Building, UserCheck, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare SEO Services | Medical Practice Marketing | GoalSEO.ai',
  description: 'HIPAA-compliant healthcare SEO for hospitals, clinics, and medical practices. E-E-A-T optimization, local SEO, and patient acquisition strategies.',
}

export default function HealthcareIndustryPage() {
  const challenges = [
    "YMYL (Your Money or Your Life) compliance requirements",
    "Building E-E-A-T signals for medical content",
    "HIPAA compliance in marketing",
    "High competition for local searches",
    "Patient trust and credibility",
    "Managing online reputation",
    "Complex medical terminology",
    "Multiple location management"
  ]

  const services = [
    {
      title: "Medical E-E-A-T Optimization",
      description: "Build authority with Google's medical content guidelines",
      icon: Shield
    },
    {
      title: "Local Healthcare SEO",
      description: "Dominate local searches for every practice location",
      icon: MapPin
    },
    {
      title: "Patient Review Management",
      description: "Build trust with authentic patient testimonials",
      icon: Star
    },
    {
      title: "Medical Content Authority",
      description: "Doctor-reviewed content that ranks and converts",
      icon: Stethoscope
    },
    {
      title: "Appointment Optimization",
      description: "Convert searches into booked appointments",
      icon: Calendar
    },
    {
      title: "Healthcare Schema Markup",
      description: "Rich snippets for medical services and practitioners",
      icon: UserCheck
    }
  ]

  const specialties = [
    "Primary Care", "Dental", "Urgent Care", "Specialty Clinics",
    "Mental Health", "Physical Therapy", "Pediatrics", "Cardiology"
  ]

  const results = [
    { metric: "New Patient Increase", value: "+320%", timeframe: "6 months" },
    { metric: "Appointment Bookings", value: "+445%", timeframe: "4 months" },
    { metric: "Local Pack Rankings", value: "Top 3", timeframe: "3 months" },
    { metric: "Patient Value", value: "$3,400", timeframe: "Average" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 via-white to-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-5 w-5" />
              <span>Healthcare SEO Specialists</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Healthcare SEO That{' '}
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Attracts Patients
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              HIPAA-compliant SEO strategies for medical practices, hospitals, and healthcare systems. 
              Build trust, attract patients, and dominate local healthcare searches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl group"
              >
                <Heart className="h-5 w-5" />
                Get Your Healthcare SEO Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-white text-teal-600 border-2 border-teal-200 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all"
              >
                <Award className="h-5 w-5" />
                View Healthcare Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span>76 Healthcare Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span>E-E-A-T Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Specialties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SEO for Every Medical Specialty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized strategies for your specific healthcare vertical
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all text-center">
                <span className="text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare SEO Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Healthcare-Specific SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compliant, ethical, and effective SEO for medical practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Healthcare SEO Results</h2>
              <p className="text-xl text-white/90">Average results across our healthcare clients</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{result.value}</div>
                  <div className="text-white/90 mb-1">{result.metric}</div>
                  <div className="text-sm text-white/70">in {result.timeframe}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free healthcare SEO audit and start attracting more patients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all shadow-lg group"
            >
              <Sparkles className="h-5 w-5" />
              Get Your Free Healthcare Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 border-2 border-teal-200 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all"
            >
              <Phone className="h-5 w-5" />
              Talk to a Healthcare SEO Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}