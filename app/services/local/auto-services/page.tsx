import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Car, Wrench, Battery, Gauge, Shield } from 'lucide-react'

export const metadata = {
  title: 'SEO for Auto Services in Long Beach, CA | GoalSEO.ai',
  description: 'Get more cars in your shop. Local SEO for auto repair, mechanics, and car services in Long Beach.',
}

export default function SEOForAutoServices() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Auto Shop SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Auto Services in{' '}
              <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When cars break down, be the mechanic they trust. Get found first on Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all shadow-xl"
            >
              <Car className="h-5 w-5" />
              Get Your Free Auto Shop SEO Audit
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-600 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              See Service Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Auto Services Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Auto Shops Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Mechanic on Atlantic told me he losing customers to dealerships. Not cuz they better - cuz they show up first on Google. We got him ranking for "Honda repair Long Beach" and "Toyota service near me." Now he busier than dealership and charging less. Win-win for everyone.
            </p>
            
            <p>
              When car breaks down, people panic searching. "Mechanic open now," "emergency towing Long Beach," "car wont start help." If you aint showing up for these crisis searches, you missing desperate customers who pay premium for fast service.
            </p>
            
            <p>
              Helped this transmission shop near Signal Hill. Super specialized, best in town, but only old timers knew bout them. Got them ranking for "transmission repair Long Beach" and "clutch replacement near me." Went from 5 cars a week to 5 cars a day. Specialization + SEO = money.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Fleet Service Goldmine:</p>
              <p>
                Auto shop near Airport discovered "fleet maintenance Long Beach" barely had competition. All them delivery companies, uber drivers, rental cars need regular service. Got contracts with 3 companies, each worth $10k/month. B2B SEO for auto shops is wide open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Auto Services?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someone's check engine light comes on, tire goes flat, or needs oil change, YOUR shop shows up first. Not Jiffy Lube. Not the dealership. Your local shop that actually cares bout their car.
            </p>
            
            <p>
              Auto SEO gotta cover makes, models, AND services. "BMW repair Long Beach" different than "oil change near me." European cars different than Japanese. Classic cars different than Tesla. Each needs own strategy.
            </p>
            
            <p>
              Think of Google like AAA dispatch. You proving you got the tools, expertise, certifications to fix their specific problem. ASE certified? Show it. Specialize in hybrids? Rank for it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Auto Services That Need SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got every type of car issue. Beach cars with rust problems. Port trucks need heavy duty work. Downtown got Teslas and hybrids. Each neighborhood different automotive needs.
            </p>
            
            <p className="font-semibold">Service pages that bring customers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Oil change Belmont Shore" - basic service, high volume</li>
              <li>"Tesla repair Long Beach" - specialized EV service</li>
              <li>"Transmission shop Signal Hill" - expensive repairs</li>
              <li>"German auto repair Naples" - BMW, Mercedes, Audi</li>
              <li>"Smog check Downtown Long Beach" - required service</li>
              <li>"Mobile mechanic Bixby Knolls" - convenience service</li>
              <li>"Classic car restoration Los Altos" - specialty market</li>
              <li>"Fleet maintenance Airport area" - B2B opportunity</li>
              <li>"24 hour towing Cambodia Town" - emergency service</li>
            </ul>
            
            <p>
              Get certified everywhere. <a href="https://www.ase.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">ASE certification</a> builds trust. <a href="https://www.aaa.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">AAA approved</a> brings customers. <a href="https://www.bbb.org/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">BBB accredited</a> shows legitimacy.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 EV Service Opportunity:</p>
              <p>
                With Long Beach pushing green initiatives, EVs everywhere. Shop on PCH started ranking for "EV charging station repair" and "hybrid battery replacement." Only shop in area certified for Tesla. Charging $200/hour and booked solid. Future is electric, SEO for it now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Story */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: From Shady to Trusted</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This mechanic had bad reputation from previous owner. Good work but people still suspicious. We focused SEO on transparency - "honest mechanic Long Beach," created pages showing actual repair costs, posted videos explaining common scams to avoid.
            </p>
            
            <p>
              Built trust through education. Now when people search "mechanic I can trust Long Beach," he shows up with all this helpful content. Went from struggling to stay open to opening second location. Sometimes SEO bout changing perception, not just ranking.
            </p>
          </div>
        </div>
      </section>

      {/* Services Beyond SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Services Beyond SEO</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Agency</h3>
              <p className="text-gray-700">
                Auto shops need complete marketing. As marketing agency, we handle Google Ads for emergency searches, Facebook for community presence, email for service reminders. But SEO brings steady flow of regular maintenance customers - oil changes, tune-ups, inspections.
              </p>
              <p className="text-gray-600 mt-3">
                👉 List on <a href="https://www.repairpal.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">RepairPal</a> and <a href="https://www.carfax.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">Carfax</a> service shops.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Mechanics fix cars, not marketing problems. As marketing consultant, I explain customer lifetime value, service package pricing, warranty marketing. Why "free inspection" brings more than "10% off." How to turn oil changes into transmission jobs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Auto shop websites usually terrible or non-existent. We design sites with online appointment booking, service pricing, mechanic certifications, real customer reviews. Live chat for quotes. Mobile-first cuz people searching from roadside.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://www.shopmonkey.io/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">Shop Monkey</a> for shop management.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                When cars break, people need help NOW. Site cant be down. As web hosting company, we provide reliable hosting, fast loading, secure customer data. Your website as dependable as your repairs should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews Build or Break Auto Shops</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People dont trust mechanics. One bad review bout overcharging or unnecessary repairs can destroy you. But good reviews from real customers talking bout honest service and fair prices? Thats marketing gold you cant buy.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Video Strategy:</p>
              <p>
                Shop in Peninsula started recording customer testimonials right after service. "Just saved me $500 vs dealership quote!" Posted on Google, YouTube, website. Video reviews 10x more powerful than text. Went from 3.5 stars to 4.8 stars. Each star worth thousands in new business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Auto Community</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Get involved with car culture. <a href="https://www.grandprixlb.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Grand Prix</a> brings car enthusiasts. <a href="https://business.lbchamber.com/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">Chamber of Commerce</a> for business connections. Local <a href="https://www.meetup.com/topics/cars/us/ca/long_beach/" className="text-slate-600 underline" target="_blank" rel="noopener noreferrer">car meetups</a> build community.
            </p>
            
            <p>
              Partner with related businesses. <a href="/services/local/attorneys" className="text-slate-600 underline">Attorneys</a> need accident reports. Insurance companies need approved shops. Used car dealers need inspection services. Build network, everyone benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/attorneys" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Attorneys</h3>
              <p className="text-gray-600 text-sm">Accident attorneys need repair estimates.</p>
            </Link>
            
            <Link href="/services/local/real-estate" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Real Estate</h3>
              <p className="text-gray-600 text-sm">Home buyers need mechanic inspections.</p>
            </Link>
            
            <Link href="/services/local/restaurants" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Restaurants</h3>
              <p className="text-gray-600 text-sm">Waiting room customers need food nearby.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Keep Your Bays Full</h2>
          
          <p className="text-xl text-slate-100 mb-8">
            Stop waiting for cars to roll in. Get found by customers actively searching for auto repair. Build a thriving shop with consistent business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl"
            >
              <Car className="h-5 w-5" />
              Get Your Free Auto Shop SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-slate-200 mt-6">
            ASE certified marketing strategies. Honest SEO for honest mechanics.
          </p>
        </div>
      </section>
    </div>
  )
}