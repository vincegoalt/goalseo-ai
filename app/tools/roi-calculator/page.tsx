import { Metadata } from 'next'
import ROICalculator from '@/components/tools/ROICalculator'

export const metadata: Metadata = {
  title: 'SEO ROI Calculator | Calculate Your Return on Investment',
  description: 'Calculate your potential ROI from SEO services. See how much revenue you could generate with improved search rankings.',
}

export default function ROICalculatorPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SEO{' '}
              <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">
                ROI Calculator
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your potential return on investment from SEO. 
              See exactly how much revenue you could generate with improved search rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why SEO Has the Best ROI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SEO provides long-term, compounding returns unlike any other marketing channel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">387%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Average ROI</h3>
              <p className="text-gray-600">
                Our clients see an average 387% return on their SEO investment within 12 months.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-success-600 mb-2">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Always Working</h3>
              <p className="text-gray-600">
                Unlike paid ads, SEO works around the clock bringing you traffic and leads.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-electric-600 mb-2">∞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compounding Returns</h3>
              <p className="text-gray-600">
                SEO results compound over time, growing stronger with each passing month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}