import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Calculator, FileText, TrendingUp, DollarSign, PiggyBank } from 'lucide-react'

export const metadata = {
  title: 'SEO for CPAs in Long Beach, CA | GoalSEO.ai',
  description: 'Tax season or not, get clients finding you on Google. Local SEO for CPAs and accounting firms in Long Beach.',
}

export default function SEOForCPAs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach CPA SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for CPAs in{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              April 15th shouldn't be your only busy day. Get tax clients year-round from Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              Get Your Free CPA Firm SEO Audit
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 border-2 border-emerald-200 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all"
            >
              See Tax Service SEO
            </Link>
          </div>
        </div>
      </section>

      {/* Why CPAs Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why CPAs Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              CPA buddy near Downtown told me something crazy. March and April, he turning away clients. Rest of the year? Cricket sounds. Problem was everybody finding him during tax season but nobody knew he did bookkeeping, payroll, business consulting year-round.
            </p>
            
            <p>
              See, people think CPAs just for taxes. But you doing CFO services, estate planning, business valuations, all kinds of stuff. If you only ranking for "tax preparation Long Beach," you missing 75% of potential revenue. Smart CPAs rank for everything they do.
            </p>
            
            <p>
              Helped this young CPA in Bixby Knolls. Fresh outta USC, no clients. We got her ranking for "small business accountant Long Beach" and "QuickBooks ProAdvisor near me." Now she got 30 monthly clients paying recurring fees. Steady income beats tax season rush.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Cannabis Gold Rush:</p>
              <p>
                CPA in Signal Hill started ranking for "cannabis business CPA Long Beach." These dispensaries need specialized accounting - 280E tax issues, cash management, compliance. He charging premium rates, only takes 5 cannabis clients, making more than his whole traditional practice. Niche SEO = big money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for CPAs?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someone gets IRS letter, needs bookkeeper, or starting business, YOUR accounting firm pops up first. Not H&R Block. Not TurboTax ads. You - the local expert who actually understands California taxes.
            </p>
            
            <p>
              CPA SEO gotta cover both emergency ("IRS audit help") and planning ("estate tax planning Long Beach"). Business owners search different than individuals. "Business tax accountant" vs "personal tax preparer." Each needs own approach.
            </p>
            
            <p>
              Think bout it like tax forms. You dont use same form for everyone - W2s, 1099s, Schedule C, all different. Same with SEO. Every service, every client type needs specific strategy to rank.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach CPA Services That Need SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got every type of tax situation. Port workers with union issues. Small businesses in Belmont Shore. Real estate investors in Naples. Cannabis dispensaries. Each searching for different help.
            </p>
            
            <p className="font-semibold">Service pages that bring clients:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Small business CPA Bixby Knolls" - tons of small shops</li>
              <li>"Real estate tax accountant Naples" - property investors</li>
              <li>"Cannabis CPA Long Beach" - growing industry</li>
              <li>"Nonprofit accountant Downtown" - many nonprofits there</li>
              <li>"QuickBooks consultant Signal Hill" - businesses need help</li>
              <li>"Estate planning CPA Los Altos" - wealthy retirees</li>
              <li>"IRS problem solver Long Beach" - always in demand</li>
              <li>"Bookkeeping services Belmont Shore" - restaurants need this</li>
              <li>"Payroll services Cambodia Town" - small businesses</li>
            </ul>
            
            <p>
              Get certified and show it. <a href="https://www.calcpa.org/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">CalCPA member</a>? Display it. <a href="https://quickbooks.intuit.com/accountants/proadvisor/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">QuickBooks ProAdvisor</a>? Show that badge. <a href="https://www.irs.gov/tax-professionals/enrolled-agents" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Enrolled Agent</a>? Even better.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Industry Specialization Win:</p>
              <p>
                CPA near Airport area specialized in logistics companies. All them trucking companies, freight forwarders, warehouses. Created pages for "transportation CPA Long Beach" and "logistics tax accountant." Now he THE guy for that industry. Charges double what generalists charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Year-Round Story */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: Breaking the Tax Season Cycle</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This CPA was dying slow death. Crazy busy January through April, dead rest of year. We built SEO strategy around monthly services - bookkeeping, payroll, CFO services. Created content bout "year-round tax planning saves money."
            </p>
            
            <p>
              Within 6 months, she had 25 monthly bookkeeping clients at $500/month each. Thats $12,500 monthly recurring revenue. No more feast or famine. She actually takes vacation in April now cuz her business steady all year. SEO literally changed her life.
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
                CPAs need sophisticated marketing. As marketing agency, we handle LinkedIn for B2B connections, email campaigns for tax deadlines, webinars for new tax laws. But SEO brings the consistent leads - business owners searching for help dont stop just cuz tax season over.
              </p>
              <p className="text-gray-600 mt-3">
                👉 List on <a href="https://www.expertise.com/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Expertise.com</a> and <a href="https://www.thumbtack.com/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Thumbtack</a> for leads.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                CPAs understand numbers, not marketing. As marketing consultant, I translate. Why "tax prep" too competitive but "enrolled agent Long Beach" is opportunity. How to market without giving tax advice online. Building trust through education content. Real strategies for accounting firms.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                CPA websites usually boring or intimidating. We design sites that feel approachable but professional. Client portal integration, tax calculators, document upload systems, appointment scheduling. Clear service descriptions with pricing (yes, show prices - builds trust).
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://www.taxdome.com/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">TaxDome</a> for client management.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                Tax data is sensitive. As web hosting company, we provide bank-level security, encrypted file transfers, SOC 2 compliance. Your hosting as secure as your client files. Fast loading during tax season rush when everyone hitting your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trust is Everything for CPAs</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People trusting you with their money, their business, their financial secrets. One bad review bout mistakes or poor communication can destroy your practice. But good reviews from business owners worth gold.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Strategy:</p>
              <p>
                After getting client big refund or saving them on audit, thats when you ask for review. We set up system that sends request after positive outcomes. One CPA went from 6 reviews to 89 in 18 months. Each review mentions specific service - "saved me $15k on taxes" or "fixed my QuickBooks mess." Specific reviews rank better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Business Community</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Get involved everywhere. <a href="https://business.lbchamber.com/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Chamber</a> for business connections. <a href="https://www.dlba.org/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">Downtown Long Beach Alliance</a> for local visibility. <a href="https://www.scorelb.org/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">SCORE Long Beach</a> mentoring builds relationships.
            </p>
            
            <p>
              Partner with related services. <a href="/services/local/attorneys" className="text-emerald-600 underline">Attorneys</a> need tax advice for clients. <a href="/services/local/real-estate" className="text-emerald-600 underline">Real estate agents</a> have clients with tax questions. Build network, get referrals, everyone wins.
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
              <p className="text-gray-600 text-sm">Tax attorneys and CPAs work together.</p>
            </Link>
            
            <Link href="/services/local/real-estate" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Real Estate</h3>
              <p className="text-gray-600 text-sm">Property tax and investment advice.</p>
            </Link>
            
            <Link href="/services/local/restaurants" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Restaurants</h3>
              <p className="text-gray-600 text-sm">Restaurants need bookkeeping help.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build Year-Round Revenue</h2>
          
          <p className="text-xl text-emerald-100 mb-8">
            Stop depending on tax season. Get bookkeeping clients, business consulting, CFO services all year. SEO brings steady growth, not seasonal stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              Get Your Free CPA SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-emerald-200 mt-6">
            IRS Circular 230 compliant. Ethical marketing only.
          </p>
        </div>
      </section>
    </div>
  )
}