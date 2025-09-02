import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Wrench, Droplet, Home } from 'lucide-react'

export const metadata = {
  title: 'SEO for Plumbers in Long Beach, CA | GoalSEO.ai',
  description: 'Get your plumbing business found on Google. Local SEO that makes your phone ring. 387% average ROI for Long Beach plumbers.',
}

export default function SEOForPlumbers() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach, CA Local SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Plumbers in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Make your plumbing business the first one people see when they search "plumber near me" in Long Beach
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Get Your Free SEO Audit
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              See Real Results
            </Link>
          </div>
        </div>
      </section>

      {/* Why Plumbers Care Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Plumbers Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              I got a call once from a plumber in Belmont Shore. He said, "man, I'm great with pipes but Google don't even know I exist." That stuck with me. Cuz it's real. Most plumbers around Long Beach work hard, 12 hours a day, but online they are invisible.
            </p>
            
            <p>
              That's why seo for plumbers matter. If you ain't on Google, the phone don't ring. And when the phone don't ring, no jobs.
            </p>
            
            <p>
              When people in Long Beach got a clogged sink, they ain't flipping thru Yellow Pages no more. They just pull out a phone and type "plumber near me." If you not in those first results, you might as well not even exist.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Real Results:</p>
              <p>
                I seen it. One plumber in Bixby Knolls barely got any calls. After seo for plumbers, he jumped into the 3-pack map spot. Suddenly, he telling me, "I had to hire my cousin just to keep up." That's what good seo do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Plumbers?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              It's simple. It's making Google see your plumbing biz as the best answer when someone search "water heater repair Long Beach" or "emergency plumber near Belmont Heights."
            </p>
            
            <p>
              But it ain't just about stuffing words. Google smart. It knows if you fake it. It looks at reviews, local links, service pages, and even how fast your website load.
            </p>
            
            <p>
              Think about it like plumbing itself. A pipe system gotta flow. Same for seo. Your website, your Google Business Profile, your reviews, your backlinks—they all gotta connect. If one piece blocked, the whole system leaks.
            </p>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Long Beach Focus</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Plumbers don't need customers in New York. You need folks in Long Beach, Signal Hill, Lakewood, maybe even down in Seal Beach. That's why local seo for plumbers is different.
            </p>
            
            <p className="font-semibold">We build pages that say:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Plumber in Belmont Shore"</li>
              <li>"Drain cleaning in Naples Island"</li>
              <li>"Pipe repair near Poly High School"</li>
              <li>"Emergency plumber in Alamitos Beach"</li>
              <li>"Water heater repair near Traffic Circle"</li>
              <li>"Sewer line service in Bixby Knolls"</li>
              <li>"Bathroom plumbing in East Long Beach"</li>
              <li>"Kitchen sink repair near Shoreline Village"</li>
            </ul>
            
            <p>
              Google loves when you mention real neighborhoods. I even saw better rankings when we talked about Shoreline Village or Traffic Circle area. It shows Google you really local, not some out-of-state company pretending.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Pro Tip:</p>
              <p>
                Check out <a href="https://www.longbeach.gov" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">City of Long Beach official site</a> for how locals search for city services. That's the same way they search for plumbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Late Night Emergency Story */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Late-Night Emergency</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              One plumber I worked with got a 2am call from a family in Alamitos Beach. Water everywhere. The only reason they found him was cuz his site showed up first on Google Maps for "24 hour plumber Long Beach." He told me later, "that job paid for my whole month of SEO." That's the power.
            </p>
          </div>
        </div>
      </section>

      {/* We Build AND Rank - New Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Here's What Makes Us Different: We BUILD Your Website Too
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-center text-xl font-semibold text-blue-600 mb-6">
              Other SEO companies try to polish your broken website. We build you a NEW one that actually works.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">The Problem with Most Plumber Websites:</p>
              <ul className="space-y-2">
                <li>• Built by cousin's friend in 2008</li>
                <li>• Takes 30 seconds to load</li>
                <li>• Dont work on phones</li>
                <li>• No way for Google to understand what you do</li>
                <li>• Invisible to voice search and ChatGPT</li>
              </ul>
              
              <p className="font-bold text-gray-900 mt-6 mb-4">What We Do Different:</p>
              <ul className="space-y-2">
                <li>• Build you brand NEW WordPress or Shopify site</li>
                <li>• Lightning fast (loads in 2 seconds)</li>
                <li>• Perfect on every phone</li>
                <li>• Built with AI in mind (voice search ready)</li>
                <li>• THEN we rank it everywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Beyond SEO - Updated */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Complete Digital Solution for Plumbers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Website Development</h3>
              <p className="text-gray-700 mb-4">
                We dont just "fix" your old site - we BUILD you a new one. Custom WordPress for service businesses. Online booking, emergency contact forms, service area maps. Everything a plumber needs. Built right from day one.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                ✓ WordPress Development<br/>
                ✓ Mobile-First Design<br/>
                ✓ AI-Ready Structure<br/>
                ✓ Voice Search Optimized
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Then We Rank It Everywhere</h3>
              <p className="text-gray-700 mb-4">
                Once your new site built, we make sure everyone finds it. Google, voice search ("Hey Siri, find plumber near me"), even ChatGPT recommendations. Complete SEO package included.
              </p>
              <p className="text-sm text-purple-600 font-semibold">
                ✓ Local SEO Domination<br/>
                ✓ Voice Search Ready<br/>
                ✓ ChatGPT Visibility<br/>
                ✓ Google Maps #1
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                I met a plumber in East Long Beach who said, "I don't even know what to ask for." That's normal. We explain everything plain english. Build your site, rank it, manage it. One team, one invoice, real results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting & Maintenance</h3>
              <p className="text-gray-700">
                Your new site hosted on lightning-fast servers. Never goes down during emergencies. Automatic backups. Security updates. We handle all the tech stuff so you can focus on fixing pipes.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 text-center">
            <p className="text-lg font-bold text-gray-900 mb-2">
              Package Deal for Long Beach Plumbers:
            </p>
            <p className="text-3xl font-bold text-blue-600 mb-2">Starting at $499/month</p>
            <p className="text-gray-700">
              New website built + 6 months SEO management + Voice search optimization
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (Most plumbers make this back in first month from new calls)
            </p>
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Reviews Matter in SEO for Plumbers</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Google ain't dumb. It sees reviews as proof. A plumber in Wrigley had only 3 reviews, all old. After we helped him ask happy customers to leave new ones, he went to 35 reviews. Boom—map rankings shot up.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Tip:</p>
              <p>
                Don't copy paste fake reviews. Google catch it. Just ask real customers. Even a short "Mike fixed my sink fast" counts.
              </p>
              <p className="mt-3">
                👉 Use your <a href="https://www.google.com/business/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Business Profile</a> to collect reviews easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opinion Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Opinion: Ads vs SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Some say just run Google Ads. My take? Ads is like renting a house. SEO is like owning one. With ads, you stop paying, you disappear. With seo for plumbers, once you rank, you stay there. You build long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Local Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Links and Community</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              One trick I seen work: sponsor local little league in Long Beach. They put your plumber biz on their website. That's a backlink. Google loves it. Same with <a href="https://business.lbchamber.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Area Chamber of Commerce</a>. Those local links send trust signals.
            </p>
          </div>
        </div>
      </section>

      {/* Events and News */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Events and News Related to SEO for Plumbers</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Did you know? In 2024, Google made a big change in local search. They started pushing more map results for "near me" searches. That hit plumbers hard. If you not optimized in Google Business Profile, you lost calls. That's why now, more than ever, plumbers gotta care about local SEO.
            </p>
          </div>
        </div>
      </section>

      {/* How We Do SEO */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Do SEO for Plumbers</h2>
          
          <div className="space-y-4">
            {[
              'Fix your website so it load fast',
              'Build service pages for every plumbing job',
              'Add local neighborhoods pages',
              'Optimize your Google Business Profile',
              'Help get real reviews',
              'Build local links from Long Beach sites',
              'Track calls so you know what works'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700 mt-8">
            👉 Learn more at <a href="https://www.cslb.ca.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">California State Contractors Board</a> where plumbers get licensed. That info build trust when added to your site.
          </p>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal Note</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              I grew up in a family where every house problem, we called the local plumber. I remember my mom yelling when the sink clogged before Thanksgiving dinner. If she had Google back then, she would have searched "emergency plumber Long Beach." That's why I care about seo for plumbers. It ain't just marketing—it's making sure families get help fast.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Call to Action</h2>
          
          <p className="text-xl text-blue-100 mb-8">
            If you a plumber in Long Beach or nearby and you tired of waiting for referrals, let's talk. SEO for plumbers works. I seen it change businesses. Don't let your competition take all the calls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-all"
            >
              Let's Make Your Phone Ring
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}