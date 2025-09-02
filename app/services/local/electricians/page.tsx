import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Zap, AlertTriangle, Home, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'SEO for Electricians in Long Beach, CA | GoalSEO.ai',
  description: 'Electricians in Long Beach need emergency calls and regular jobs. Local SEO that makes your phone ring when the lights go out.',
}

export default function SEOForElectricians() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Electrical Contractor SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Electricians in{' '}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When lights flicker or breakers trip, be the first electrician they call
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-700 transition-all shadow-xl"
            >
              <Zap className="h-5 w-5" />
              Get Your Free Electrician SEO Audit
            </Link>
            <Link
              href="/services/local/hvac"
              className="inline-flex items-center justify-center gap-2 bg-white text-yellow-600 border-2 border-yellow-200 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all"
            >
              Also Do HVAC?
            </Link>
          </div>
        </div>
      </section>

      {/* Why Electricians Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Electricians Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Met this electrician at a supply house on Cherry Ave. He goes "I'm the best sparky in Long Beach but I'm getting beat by guys who dont know code from a hole in the wall." Truth is, them other guys know Google code, and that's what matters online.
            </p>
            
            <p>
              People dont call electricians for fun. Power goes out, outlet sparking, need a Tesla charger installed - they searching RIGHT NOW. If you aint showing up for "electrician near me" or "emergency electrician Long Beach," you losing money every single day.
            </p>
            
            <p>
              Saw one electrical contractor in California Heights go from doing residential service calls to wiring whole apartment buildings. How? We got him ranking for "commercial electrician Long Beach" and suddenly property managers was calling. One good SEO keyword changed his whole business.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Power Outage Gold Rush:</p>
              <p>
                Remember that transformer blow out near CSULB last year? One of my electrician clients got 23 calls in 3 hours. All from ranking #1 for "power restoration Long Beach." His competition? Still waiting for repeat customers to call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Electricians?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its like having your truck parked on every corner in Long Beach, but digital. When someone types "panel upgrade Belmont Shore" or "EV charger installation Naples," your business pops up first.
            </p>
            
            <p>
              But electrician SEO got its own tricks. You dealing with emergency searches AND planned projects. Someone searching "electrician near me" at midnight different than someone searching "kitchen remodel electrical" on Sunday morning. You need both.
            </p>
            
            <p>
              Think bout it like your electrical panel. Every circuit gotta be connected right or nothing works. Same with SEO - your Google Business Profile, website, reviews, local citations - all gotta flow together or you getting no juice from Google.
            </p>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Electrical Market</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got unique electrical problems. Them old Craftsman homes in Belmont Heights still got knob and tube wiring. Downtown got all new high-rises needing commercial work. Beach areas got corrosion issues. Port area needs industrial electricians. You cant just say "electrician" - you gotta be specific.
            </p>
            
            <p className="font-semibold">Local pages that work for electricians:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Panel upgrade Belmont Heights" - them old houses need 200 amp service</li>
              <li>"EV charger installation Naples" - Teslas everywhere there</li>
              <li>"Commercial electrician Downtown Long Beach" - all them new buildings</li>
              <li>"Pool electrical Alamitos Heights" - rich folks with pools</li>
              <li>"Rewiring contractor Bixby Knolls" - 1920s homes need updates</li>
              <li>"Industrial electrician Port of Long Beach" - big money jobs</li>
              <li>"Lighting retrofit Signal Hill" - businesses saving energy</li>
              <li>"Generator installation Peninsula" - power outages by the water</li>
            </ul>
            
            <p>
              Plus you gotta connect with local stuff. Member of <a href="https://www.ibew11.org/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">IBEW Local 11</a>? Show it. Work with <a href="https://www.socalgas.com/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">SoCal Edison rebate programs</a>? That's content gold.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 EV Charger Boom:</p>
              <p>
                Long Beach pushing electric vehicles hard. Got rebates from <a href="https://www.longbeach.gov/energyresources/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">LB Energy Resources</a>. Smart electricians ranking for "Tesla charger installation Long Beach" making bank. One guy told me he's booked 6 weeks out just doing EV chargers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Violation Story */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Flip House Disaster</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This house flipper in Rose Park called me panicking. City inspector red-tagged his whole flip cuz the electrical was a mess. Previous "electrician" wasnt licensed, did everything wrong. Now he needed someone fast to fix it all and pass inspection.
            </p>
            
            <p>
              He found my client searching "code correction electrician Long Beach." Not just "electrician" but specific to his problem. We had pages for every electrical issue - code violations, failed inspections, permit problems. That one ranking saved his flip and got my client a $30k rewire job.
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
                Electricians used to get work from contractor referrals. That still works but its slow. As a marketing agency, we get you direct customers. Google Ads for emergency calls, Facebook for residential work, LinkedIn for commercial projects. But SEO is foundation cuz once you rank, them calls keep coming without paying per click.
              </p>
              <p className="text-gray-600 mt-3">
                👉 See <a href="https://www.neca-ibew.org/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">NECA-IBEW standards</a> - we highlight your certifications.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Had an electrician say "I know watts and volts, not websites and Google." I get it. As a marketing consultant, I translate. Why your Google reviews matter more than BBB rating. Why before/after photos of panel upgrades get clicks. Why you need separate pages for residential and commercial. Plain English, no marketing BS.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Most electrician websites look scary - dark colors, lightning bolts, complicated navigation. We design sites that build trust. Clean, professional, easy to find what you need. Big "24/7 EMERGENCY" button. Service area map. License number prominent (builds trust). Fast loading cuz nobody waiting when lights are out.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Add <a href="https://www.cslb.ca.gov/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">CSLB license verification</a> - instant credibility.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                Your nephew hosting your site on cheap hosting? That's why it goes down during storms when everyone searching for emergency electricians. As a web hosting company, we keep you online when it matters. CDN for speed, backups for safety, SSL for security. Your electrical work is reliable, your website should be too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews Different for Electricians</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People scared of electricians more than other trades. Electricity kills. Bad wiring burns houses. So they read every review careful. One electrician in Lakewood had just 15 reviews but all mentioned "licensed," "safe," "to code." Started outranking guys with 100+ reviews.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Hack:</p>
              <p>
                After big jobs, ask customers to mention specific things in reviews - "passed inspection first time," "fixed what other electrician messed up," "explained everything." These keywords help SEO and build trust. Way better than generic "great service" reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opinion Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Opinion: License vs Marketing</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Lot of great electricians think their C-10 license enough. "I'm licensed, insured, been doing this 20 years." Cool, but the unlicensed hack with good SEO getting more calls than you. Fair? No. Reality? Yes.
            </p>
            
            <p>
              Also, electricians always fighting on price but thats cuz they all look the same online. Good SEO lets you show WHY you cost more. Master electrician, not journeyman. Pull permits, not bootleg. Fix it right first time, not come back three times. But if Google dont know this, customers dont know this.
            </p>
          </div>
        </div>
      </section>

      {/* Local Connections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Electrical Community</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Get connected local. Join <a href="https://business.lbchamber.com/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Chamber</a>. Sponsor something at <a href="https://www.portoflongbeach.org/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">Port of Long Beach</a> (they always need electrical contractors). Every connection is a potential backlink.
            </p>
            
            <p>
              Work with local solar companies? Great for SEO. Partner with <a href="/services/local/hvac" className="text-yellow-600 underline">HVAC companies</a> for heat pump installs? Cross-referral goldmine. Even supplying contractors at <a href="https://www.homedepot.com/" className="text-yellow-600 underline" target="_blank" rel="noopener noreferrer">Home Depot on Carson</a> can be local SEO boost.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/hvac" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for HVAC</h3>
              <p className="text-gray-600 text-sm">HVAC and electrical often work together. Double your reach.</p>
            </Link>
            
            <Link href="/services/local/plumbers" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Plumbers</h3>
              <p className="text-gray-600 text-sm">Many contractors do both trades. Expand visibility.</p>
            </Link>
            
            <Link href="/services/local/roofing" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Roofing</h3>
              <p className="text-gray-600 text-sm">Solar installations need electricians. Great partnership.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Light Up Your Business Online</h2>
          
          <p className="text-xl text-yellow-100 mb-8">
            Stop losing emergency calls to unlicensed hacks with better Google rankings. Get your electrical business where it belongs - at the top.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all shadow-xl"
            >
              <Zap className="h-5 w-5" />
              Get Your Free Electrician SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-yellow-200 mt-6">
            Licensed contractors only. We dont work with handymen.
          </p>
        </div>
      </section>
    </div>
  )
}