import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Smile, Sparkles, Users, DollarSign, Heart } from 'lucide-react'

export const metadata = {
  title: 'SEO for Dentists in Long Beach, CA | GoalSEO.ai',
  description: 'Get more patients from Google. Local SEO for dental practices in Long Beach. Stop paying fortune for leads - own your market.',
}

export default function SEOForDentists() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Dental SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Dentists in{' '}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When someone's tooth hurts at 2am, be the dentist they find first on Google
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all shadow-xl"
            >
              <Smile className="h-5 w-5" />
              Get Your Free Dental SEO Audit
            </Link>
            <Link
              href="#neighborhoods"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 border-2 border-teal-200 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all"
            >
              See Neighborhood Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dentists Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Dentists Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Dentist friend in Belmont Shore was paying $250 per patient from Facebook ads. Two hundred fifty dollars! For ONE patient! Meanwhile, his competitor down on 2nd Street getting patients free from Google. My buddy almost closed his practice till we fixed his SEO.
            </p>
            
            <p>
              People dont choose dentists from billboards no more. They in pain, searching "emergency dentist near me" at midnight. Or they looking for "pediatric dentist Bixby Knolls" for their kids. If you aint showing up in that map pack, you losing patients every day.
            </p>
            
            <p>
              This new dentist opened near Cal State Long Beach. Great modern office, latest equipment, but empty chairs. We got her ranking for "dentist near CSULB" and "student dental discounts." Now she booked solid with college kids. Location dont matter if nobody can find you online.
            </p>
            
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Insurance Game-Changer:</p>
              <p>
                Dentist in Downtown was struggling. We discovered "Delta Dental dentist Long Beach" getting 300 searches a month. Got him ranking for every insurance provider. Now patients calling specifically cuz he takes their insurance. SEO turned his practice around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Dentists?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someones tooth killing them or kid needs braces, YOUR dental practice shows up first. Not just Google - Google Maps specially important for dentists cuz people want someone close when they in pain.
            </p>
            
            <p>
              Dental SEO different though. You got emergency searches ("tooth pain relief now"), routine searches ("teeth cleaning Long Beach"), and specialized searches ("Invisalign provider"). Each type needs different strategy.
            </p>
            
            <p>
              Think of Google like dental insurance directory but smarter. You showing Google you got the credentials, reviews, location, hours, everything patients looking for. More evidence you provide, higher you rank.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16" id="neighborhoods">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Dental Market by Neighborhood</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Each Long Beach neighborhood different for dental. Naples got families wanting cosmetic dentistry. Cambodia Town needs affordable care. Downtown got young professionals wanting Invisalign. You gotta know your area and what they searching.
            </p>
            
            <p className="font-semibold">Neighborhood-specific pages that convert:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Dentist Belmont Shore" - beach crowd, cosmetic focus</li>
              <li>"Family dentist Bixby Knolls" - lots of kids there</li>
              <li>"Affordable dentist Cambodia Town" - price-sensitive</li>
              <li>"Cosmetic dentist Naples" - veneers and whitening</li>
              <li>"Emergency dentist Downtown Long Beach" - 24/7 needs</li>
              <li>"Pediatric dentist Los Altos" - school district families</li>
              <li>"Dentist near CSULB" - student market</li>
              <li>"Implant dentist Signal Hill" - older population</li>
              <li>"Orthodontist East Long Beach" - teen braces</li>
            </ul>
            
            <p>
              Get connected with dental community. <a href="https://www.cda.org/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">California Dental Association</a> membership helps credibility. List with <a href="https://www.deltadentalins.com/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">Delta Dental</a> provider directory. Join <a href="https://www.hcdslb.org/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">Harbor Community Dental</a> for local connections.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 School Partnership Gold:</p>
              <p>
                Smart dentist partnered with <a href="https://www.lbschools.net/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">Long Beach schools</a> for dental screenings. Created pages for each school - "dentist near Lowell Elementary." Parents search by school all the time. He getting 20+ new families a month just from school searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Emergency Story */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Weekend Emergency Win</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This dentist near Airport area was closed weekends like most dentists. But we noticed "emergency dentist Saturday Long Beach" getting hundreds of searches. He started opening Saturday mornings just for emergencies.
            </p>
            
            <p>
              We optimized everything for weekend emergency searches. Within 3 months, he was seeing 15-20 emergency patients every Saturday at premium rates. Those emergency patients became regular patients. His practice grew 40% just from being findable on weekends. Sometimes opportunity hiding in plain sight.
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
                Dental practices need full marketing. As marketing agency, we handle Instagram for before/after photos, Facebook for patient testimonials, Google Ads for immediate needs. But SEO foundation brings consistent new patients without paying per click. One dentist said 70% of new patients now finding him through organic search.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Get verified on <a href="https://www.healthgrades.com/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">Healthgrades</a> and <a href="https://www.zocdoc.com/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">ZocDoc</a>.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Dentists went to dental school, not marketing school. As marketing consultant, I explain why "teeth whitening" too competitive but "zoom whitening Long Beach" is goldmine. How patient reviews affect rankings. Why you need separate pages for each insurance provider. Real dental marketing advice, not generic stuff.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Most dental websites look dated or too medical. We design sites that feel welcoming, not scary. Online appointment booking, insurance checker, virtual office tour, patient portal. Before/after galleries that load fast. Mobile-first cuz everyone searching on phones.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://www.patientfusion.com/" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">Patient Fusion</a> for scheduling.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                Patient data needs serious security. As web hosting company, we provide HIPAA-compliant hosting, SSL certificates, daily backups. Your site fast and secure. When someone searching for emergency dentist, your site loads instantly. No crashes during busy times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews Make or Break Dentists</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People more scared of dentists than any other doctor. They reading every review before choosing. One bad review about pain or rough treatment can kill your practice. But good news - happy patients love leaving reviews if you ask right.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Collection Hack:</p>
              <p>
                Dentist in Peninsula started taking selfies with patients after procedures (with permission). Sends photo with review request. People love sharing their new smile photos with reviews. Went from 15 reviews to 127 in one year. Those visual reviews worth gold for SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Insurance Provider SEO Strategy</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Biggest missed opportunity for dentists - insurance searches. People literally searching "Cigna dentist Long Beach" or "dentist that takes Medi-Cal." Create page for every insurance you accept. List all plans clearly. These pages convert like crazy cuz people already know you take their insurance.
            </p>
            
            <p>
              Also target "no insurance dentist Long Beach" and "dental payment plans." Lots of people without insurance still need dental care. One dentist offers in-house membership plan - gets tons of patients from these searches.
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
              <p className="text-gray-600 text-sm">Personal injury lawyers need dental records.</p>
            </Link>
            
            <Link href="/services/local/cpas" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for CPAs</h3>
              <p className="text-gray-600 text-sm">Dental practices need tax help.</p>
            </Link>
            
            <Link href="/services/local/restaurants" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Restaurants</h3>
              <p className="text-gray-600 text-sm">Soft food spots near oral surgeons.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fill Your Schedule With Quality Patients</h2>
          
          <p className="text-xl text-teal-100 mb-8">
            Stop paying hundreds per patient for ads. Get found organically by people actively searching for dentists in Long Beach. Better patients, better ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all shadow-xl"
            >
              <Smile className="h-5 w-5" />
              Get Your Free Dental SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-teal-200 mt-6">
            HIPAA compliant strategies. ADA accessible websites.
          </p>
        </div>
      </section>
    </div>
  )
}