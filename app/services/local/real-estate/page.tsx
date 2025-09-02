import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Home, DollarSign, TrendingUp, Users, Building } from 'lucide-react'

export const metadata = {
  title: 'SEO for Real Estate Agents in Long Beach, CA | GoalSEO.ai',
  description: 'Dominate Long Beach real estate searches. Get more listings, more buyers, more commissions. Local SEO that sells homes.',
}

export default function SEOForRealEstate() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Real Estate SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Real Estate Agents in{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When buyers search "homes for sale in Belmont Shore," be the agent they call
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl"
            >
              <Home className="h-5 w-5" />
              Get Your Free Real Estate SEO Audit
            </Link>
            <Link
              href="#neighborhoods"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all"
            >
              See Neighborhood Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Real Estate Agents Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Real Estate Agents Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This agent in Naples told me she spending $3,000 a month on Zillow Premier Agent. Three grand! Every month! And half them leads was trash - people just browsing, not serious. Meanwhile, agent down the street getting organic Google leads for free. Quality leads too - people actually ready to buy.
            </p>
            
            <p>
              Real estate different now. Buyers start online way before they call an agent. They searching "homes for sale Belmont Shore" or "condos Downtown Long Beach" at midnight. If your website dont show up, they calling whoever does.
            </p>
            
            <p>
              Helped this new agent in Bixby Knolls. Zero listings, competing against teams been there 20 years. Got her ranking for "first time home buyer Long Beach" and "FHA loans Bixby Knolls." Six months later she had 8 transactions. All from being findable for what she specialized in.
            </p>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Listing Presentation Game-Changer:</p>
              <p>
                Agent in Alamitos Heights was losing listing presentations. We got him ranking #1 for "sell my home Alamitos Heights." Now when sellers Google him before meeting, they see him dominating search. He went from 30% conversion on listing appointments to 70%. SEO builds trust before you even meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Real Estate Agents?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its being the answer when someone types "real estate agent near me" or "homes for sale [neighborhood]." Not just on Google, but YouTube for property tours, Instagram for lifestyle content, everything.
            </p>
            
            <p>
              Real estate SEO gotta cover both sides - buyers AND sellers. "Homes for sale" different than "sell my house fast." First-time buyers different than investors. Beach properties different than inland. You need strategy for each.
            </p>
            
            <p>
              Think of it like MLS listings. You dont just say "house for sale" - you got details, photos, descriptions. Same with SEO. Every neighborhood, every property type, every price range needs its own approach.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16" id="neighborhoods">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Real Estate by Neighborhood</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach real estate market crazy diverse. Naples got million-dollar waterfront homes. North Long Beach got affordable starter homes. Downtown got new luxury condos. You cant be everything to everybody - gotta pick your spots.
            </p>
            
            <p className="font-semibold">Neighborhood pages that generate leads:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Homes for sale Belmont Shore" - beach lifestyle seekers</li>
              <li>"Naples Island real estate" - luxury waterfront buyers</li>
              <li>"Condos Downtown Long Beach" - urban professionals</li>
              <li>"Bixby Knolls homes" - families wanting good schools</li>
              <li>"Cal Heights historic homes" - character property lovers</li>
              <li>"Rose Park starter homes" - first-time buyers</li>
              <li>"Alamitos Beach condos" - investors and beach lovers</li>
              <li>"Los Altos real estate" - established families</li>
              <li>"El Dorado Park estates" - luxury inland properties</li>
            </ul>
            
            <p>
              Connect with local everything. <a href="https://www.car.org/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">California Association of Realtors</a>. <a href="https://www.psar.org/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">Pacific Southwest Association</a>. <a href="https://business.lbchamber.com/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Chamber</a>. Every connection helps rankings.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 School District Gold:</p>
              <p>
                Parents search "homes near Lowell Elementary" or "Wilson High School district homes." Create pages for every school. One agent specialized in <a href="https://www.lbschools.net/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">LBUSD</a> school zones. Gets 5 buyer leads a week just from school searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open House Story */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Open House Revolution</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This agent was doing open houses every weekend in Belmont Heights. Getting maybe 5 people through. We created "Open Houses This Weekend Belmont Shore" page, updated every Thursday. Started ranking #1.
            </p>
            
            <p>
              Now she getting 20-30 people per open house. But heres the smart part - we captured everyone searching for open houses, not just her listing. She becoming THE open house agent for the area. Other agents now paying her to host their opens. SEO created whole new income stream.
            </p>
          </div>
        </div>
      </section>

      {/* We Build AND Rank - New Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Stop Paying $3,000/Month to Zillow - Build Your OWN Lead Machine
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-center text-xl font-semibold text-indigo-600 mb-6">
              We build real estate websites that generate YOUR leads, not Zillow's. Then rank you everywhere.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200">
              <p className="font-bold text-gray-900 mb-4">Why Agent Websites Fail:</p>
              <ul className="space-y-2">
                <li>• Generic brokerage template everyone uses</li>
                <li>• No IDX/MLS property search</li>
                <li>• Missing neighborhood landing pages</li>
                <li>• No lead capture system</li>
                <li>• Can't compete with Zillow/Realtor.com</li>
                <li>• Invisible to "homes near me" searches</li>
              </ul>
              
              <p className="font-bold text-gray-900 mt-6 mb-4">What We Build for You:</p>
              <ul className="space-y-2">
                <li>• Custom WordPress with FULL IDX integration</li>
                <li>• Neighborhood specialist pages (Belmont Shore expert)</li>
                <li>• Advanced property search that rivals Zillow</li>
                <li>• Smart lead capture forms</li>
                <li>• Seller valuation tools</li>
                <li>• Voice search ("Hey Siri, homes for sale near me")</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Real Estate Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Complete Digital Solution for Real Estate Agents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We BUILD Your Lead Gen Site</h3>
              <p className="text-gray-700 mb-4">
                Stop paying Zillow! Custom WordPress with full IDX/MLS integration. Property search, neighborhood pages, school data, market reports. Your own lead generation machine.
              </p>
              <p className="text-sm text-indigo-600 font-semibold">
                ✓ IDX/MLS Integration<br/>
                ✓ Property Search Tool<br/>
                ✓ Lead Capture System<br/>
                ✓ CRM Integration
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Then We RANK It</h3>
              <p className="text-gray-700 mb-4">
                Dominate "homes for sale [neighborhood]" searches. Show up for buyers AND sellers. Voice search optimized. Even get recommended by ChatGPT.
              </p>
              <p className="text-sm text-purple-600 font-semibold">
                ✓ Neighborhood SEO<br/>
                ✓ Buyer & Seller Keywords<br/>
                ✓ Voice Search Ready<br/>
                ✓ Google Maps Visibility
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Save $36,000/Year</h3>
              <p className="text-gray-700">
                Zillow Premier Agent costs $3,000/month. That's $36,000/year for trash leads. Our system generates better leads for a one-time investment. Do the math.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Presence</h3>
              <p className="text-gray-700">
                When sellers Google you before listing appointment, they see YOU dominating search, not relying on Zillow. Instant credibility. Higher conversion rates.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              Real Estate Digital Domination Package:
            </p>
            <p className="text-3xl font-bold text-indigo-600 mb-2">$7,500 - $12,000</p>
            <p className="text-gray-700">
              Custom site with IDX + Lead generation + Neighborhood SEO + Voice search
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (One extra closing pays for everything - then pure profit)
            </p>
          </div>
        </div>
      </section>

      {/* Commission Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Commission Math</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Average Long Beach home price bout $850,000. You get 2.5% commission, thats $21,250 per transaction. Our SEO costs $499/month. If you get ONE extra deal per year from SEO, thats 4,200% ROI. Most agents getting 2-3 extra deals per month once rankings kick in.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">ROI Reality:</p>
              <p>
                Agent in Peninsula was skeptical. "Why pay for SEO when I can buy Zillow leads?" Three months later: "I just closed 3 deals from Google, saved $9,000 in Zillow fees, and the leads keep coming." Now she telling every agent she knows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/attorneys" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Attorneys</h3>
              <p className="text-gray-600 text-sm">Real estate attorneys need agent referrals.</p>
            </Link>
            
            <Link href="/services/local/cpas" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for CPAs</h3>
              <p className="text-gray-600 text-sm">Tax implications of home sales need experts.</p>
            </Link>
            
            <Link href="/services/local/roofing" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Roofing</h3>
              <p className="text-gray-600 text-sm">Home inspections always find roof issues.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stop Paying for Expensive Leads</h2>
          
          <p className="text-xl text-indigo-100 mb-8">
            Own your market on Google. Get sellers calling you. Build your brand, not Zillow's. Real estate SEO that actually closes deals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all shadow-xl"
            >
              <Home className="h-5 w-5" />
              Get Your Free Real Estate SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-indigo-200 mt-6">
            We only work with 3 agents per area. Exclusive territories available.
          </p>
        </div>
      </section>
    </div>
  )
}