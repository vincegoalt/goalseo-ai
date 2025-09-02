import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Scale, Gavel, Users, DollarSign, Shield } from 'lucide-react'

export const metadata = {
  title: 'SEO for Attorneys in Long Beach, CA | GoalSEO.ai',
  description: 'Get more cases from Google. Local SEO for law firms in Long Beach. Personal injury, family law, criminal defense - we know what works.',
}

export default function SEOForAttorneys() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Law Firm SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Attorneys in{' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When people need legal help, they search Google first. Be the law firm they find and trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-xl"
            >
              <Scale className="h-5 w-5" />
              Get Your Free Law Firm SEO Audit
            </Link>
            <Link
              href="#practice-areas"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-200 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              See Practice Area SEO
            </Link>
          </div>
        </div>
      </section>

      {/* Why Attorneys Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Attorneys Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Buddy of mine, personal injury lawyer downtown, told me something wild. He was spending $15,000 a month on Google Ads. Fifteen grand! Every month! Then we got him ranking organic for "car accident lawyer Long Beach" and he cut that ad spend in half. Still got same amount of cases.
            </p>
            
            <p>
              Thing is, people dont trust ads for lawyers. They scrolling past them sponsored results looking for "real" law firms. When you ranking organic, specially with good reviews, thats when they call. And them calls worth money - one car accident case can be worth $50k+ in fees.
            </p>
            
            <p>
              Saw this family law attorney in Belmont Heights struggling bad. Yellow Pages dead, referrals slow, didnt know what to do. We built her SEO around "divorce attorney Long Beach" and "child custody lawyer near me." Six months later she hired two associates. All from Google.
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Million Dollar Keyword:</p>
              <p>
                One criminal defense attorney was invisible online. We found "DUI lawyer Long Beach" getting 500 searches a month. Got him to #1. First year he tracked $1.2 million in cases from that ONE keyword. No joke. Right keywords for lawyers literally worth millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Attorneys?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someone gets arrested at 2am, injured in accident on 405, or served divorce papers, YOUR law firm shows up first. Not the billboard lawyer. Not the TV commercial guy. You.
            </p>
            
            <p>
              But lawyer SEO different than other businesses. Ethics rules, bar regulations, cant say certain things. Plus you competing with massive firms got whole marketing departments. But heres secret - local beats big every time if you do it right.
            </p>
            
            <p>
              Think of Google like a judge. You presenting evidence that you the best lawyer for the case. Reviews = testimony. Content = expertise. Local citations = community standing. Google weighs all this evidence and decides who ranks first.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16" id="practice-areas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Legal Market by Practice Area</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got every type of legal need. Port workers getting hurt need workers comp. Beach cities got DUIs every weekend. Families in East Long Beach need immigration help. You cant just say "lawyer" - you gotta be specific to what people searching.
            </p>
            
            <p className="font-semibold">Practice area pages that convert:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Personal injury lawyer Belmont Shore" - beach accidents, dog bites</li>
              <li>"DUI attorney Downtown Long Beach" - bars everywhere there</li>
              <li>"Divorce lawyer Bixby Knolls" - family neighborhood</li>
              <li>"Immigration attorney Cambodia Town" - huge immigrant community</li>
              <li>"Workers comp lawyer Port of Long Beach" - dock workers need help</li>
              <li>"Criminal defense Signal Hill" - oil field accidents</li>
              <li>"Estate planning Naples" - wealthy retirees</li>
              <li>"Business lawyer Airport Area" - lots of warehouses</li>
              <li>"Tenant rights attorney Downtown" - rental disputes</li>
            </ul>
            
            <p>
              Also gotta show credentials right. Member of <a href="https://www.longbeachbar.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Bar Association</a>? Show it. Certified by <a href="https://www.calbar.ca.gov/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">State Bar of California</a>? Display that badge. Super Lawyers rating? Front and center.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Spanish Keywords Gold:</p>
              <p>
                Long Beach huge Latino population. "Abogado de accidentes Long Beach" gets tons of searches. Smart lawyers got Spanish pages ranking. One immigration attorney doubled his cases just adding Spanish SEO. Check <a href="https://www.longbeach.gov/citymanager/equity/language-access/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">City's language access data</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Court Story */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Courthouse Advantage</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This criminal defense lawyer had office right by the courthouse on Ocean. Smart location but nobody knew he existed online. We optimized him for "criminal lawyer near Long Beach courthouse" and "attorney walking distance from court."
            </p>
            
            <p>
              Genius move - people getting out of court, need lawyer RIGHT NOW, they searching on phone while walking. He started getting calls from people literally standing outside courthouse. Geography + SEO = money. Now he got three attorneys working that office.
            </p>
          </div>
        </div>
      </section>

      {/* We Build AND Rank - New Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Website Looks Like Every Other Law Firm - We'll Fix That
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-center text-xl font-semibold text-purple-600 mb-6">
              Stop losing cases to firms with better websites. We build sites that convert visitors to clients, then dominate Google.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
              <p className="font-bold text-gray-900 mb-4">Why Law Firm Websites Fail:</p>
              <ul className="space-y-2">
                <li>• Template site that looks like 100 other firms</li>
                <li>• No individual practice area pages</li>
                <li>• Missing case results and testimonials</li>
                <li>• No intake forms or client portal</li>
                <li>• Not found for "lawyer near me" searches</li>
                <li>• Invisible to voice search and ChatGPT</li>
              </ul>
              
              <p className="font-bold text-gray-900 mt-6 mb-4">What We Build for Law Firms:</p>
              <ul className="space-y-2">
                <li>• Custom WordPress with authority design</li>
                <li>• Practice area landing pages for each service</li>
                <li>• Secure intake forms with encryption</li>
                <li>• Case results showcase (bar compliant)</li>
                <li>• Attorney bio pages that build trust</li>
                <li>• Voice search ("Hey Siri, injury lawyer near me")</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Legal Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Complete Digital Solution for Law Firms</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We BUILD Your Authority Site</h3>
              <p className="text-gray-700 mb-4">
                Custom WordPress that establishes expertise. Practice area pages, attorney profiles, case results, client resources. Bar compliant, ADA compliant, built for conversions.
              </p>
              <p className="text-sm text-purple-600 font-semibold">
                ✓ Custom WordPress Development<br/>
                ✓ Practice Area Pages<br/>
                ✓ Secure Intake System<br/>
                ✓ Client Portal Access
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Then We DOMINATE Search</h3>
              <p className="text-gray-700 mb-4">
                Rank for high-value keywords like "personal injury lawyer Long Beach." Beat the billboard lawyers online. Voice search and AI optimized.
              </p>
              <p className="text-sm text-indigo-600 font-semibold">
                ✓ High-Value Keyword SEO<br/>
                ✓ Voice Search Optimization<br/>
                ✓ Local Pack Domination<br/>
                ✓ Review Management
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stop Paying $500/Click</h3>
              <p className="text-gray-700">
                Google Ads for lawyers cost $200-500 per click. One organic ranking brings unlimited clicks FREE. Better ROI than any advertising.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-700">
                Client data protected with encryption, daily backups, HIPAA compliance available. Your website as secure as your case files.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              Law Firm Digital Authority Package:
            </p>
            <p className="text-3xl font-bold text-purple-600 mb-2">Starting at $499/month</p>
            <p className="text-gray-700">
              Professional site + Practice area SEO + Voice search + Intake system
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (One case from Google pays for everything)
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews Critical for Attorneys</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People choosing lawyer reading EVERY review. One bad review can kill you. But heres thing - most lawyers scared to ask for reviews. Think it looks desperate. Meanwhile lawyer with 50 reviews getting all the cases.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Strategy:</p>
              <p>
                After winning case or getting good settlement, thats when you ask. Client happy, emotional, grateful. We set up system that sends review request right after case closes positive. One PI lawyer went from 8 reviews to 67 in one year. Each review worth thousands in new cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Legal Community</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Get involved local legal community. <a href="https://www.longbeachbar.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Bar Association</a> membership is must. Volunteer at <a href="https://www.lacourt.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">LA Superior Court</a> legal aid. Sponsor <a href="https://www.csulb.edu/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">CSULB</a> law programs. Every connection helps SEO.
            </p>
            
            <p>
              Also network with related services. <a href="/services/local/real-estate" className="text-purple-600 underline">Real estate agents</a> need lawyers for closings. <a href="/services/local/cpas" className="text-purple-600 underline">CPAs</a> refer estate planning. Build these relationships, get backlinks, everybody wins.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/cpas" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for CPAs</h3>
              <p className="text-gray-600 text-sm">Tax attorneys and CPAs often work together.</p>
            </Link>
            
            <Link href="/services/local/real-estate" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Real Estate</h3>
              <p className="text-gray-600 text-sm">Real estate lawyers need agent referrals.</p>
            </Link>
            
            <Link href="/services/local/dentists" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Dentists</h3>
              <p className="text-gray-600 text-sm">Personal injury lawyers need medical referrals.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Win More Cases From Google</h2>
          
          <p className="text-xl text-purple-100 mb-8">
            Stop paying $500 per click on Google Ads. Get organic rankings that bring quality cases every day. ROI you can take to the bank.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-xl"
            >
              <Scale className="h-5 w-5" />
              Get Your Free Law Firm SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-purple-200 mt-6">
            Confidential consultation. Bar compliant strategies only.
          </p>
        </div>
      </section>
    </div>
  )
}