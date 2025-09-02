import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Utensils, Coffee, Pizza, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'SEO for Restaurants in Long Beach, CA | GoalSEO.ai',
  description: 'Pack your restaurant every night with local SEO. From Belmont Shore to Downtown, we know how hungry people search for food.',
}

export default function SEOForRestaurants() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Restaurant SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Restaurants in{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When people search "best tacos near me" or "pizza delivery Long Beach," your restaurant better show up
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-xl"
            >
              <Utensils className="h-5 w-5" />
              Get Your Free Restaurant SEO Audit
            </Link>
            <Link
              href="#neighborhoods"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 border-2 border-orange-200 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all"
            >
              See Neighborhood Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Restaurants Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Restaurants Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Friend owns a taco shop on 4th Street. Great food, been there 15 years, but was getting killed by new places. Why? They wasnt on Google Maps. People literally walking past his shop to go somewhere they found online. Crazy right?
            </p>
            
            <p>
              See, nobody uses phonebooks for restaurants no more. They search "Mexican food near me" or "best burger Long Beach" on their phone. If you aint in that map pack showing top 3 results, you invisible. Dont matter how good your food is if nobody knows you exist.
            </p>
            
            <p>
              Helped this Vietnamese place in Cambodia Town. They had amazing pho but only locals knew bout it. Got them ranking for "pho near me" and "Vietnamese restaurant Long Beach." Now they got lines out the door on weekends. All from people finding them on Google.
            </p>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Delivery App Problem:</p>
              <p>
                Restaurant owner on Pine told me DoorDash taking 30% of every order. Thirty percent! We got him ranking #1 for "pizza delivery Downtown Long Beach" and now 60% of delivery orders come direct through his website. Saved him thousands every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Restaurants?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure hungry people find YOUR restaurant first. Not just on Google, but Google Maps, Apple Maps, Yelp, all of it. When someone searching "lunch near me" at noon, you wanna be right there.
            </p>
            
            <p>
              Restaurant SEO different though. People search weird for food. "Open now," "cheap eats," "date night," "dog friendly patio." You gotta rank for how people actually search, not just "Italian restaurant."
            </p>
            
            <p>
              Think of it like your menu. You dont just say "food" - you describe every dish. Same with SEO. Every cuisine type, every dish, every special thing about your place needs its own strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16" id="neighborhoods">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Food Scene by Neighborhood</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach food scene crazy diverse. Each neighborhood got its own vibe, different customers, different searches. Belmont Shore people searching "brunch spots" while Cambodia Town searching "authentic Khmer food." You gotta know your area.
            </p>
            
            <p className="font-semibold">Neighborhood-specific pages that kill it:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Seafood restaurant Belmont Shore" - tourists and beach crowd</li>
              <li>"Brunch Downtown Long Beach" - weekend warriors</li>
              <li>"Pho Cambodia Town" - authentic Vietnamese seekers</li>
              <li>"Pizza delivery Bixby Knolls" - family neighborhood</li>
              <li>"Tacos 4th Street" - Retro Row hipsters</li>
              <li>"Coffee shop East Village" - artists and students</li>
              <li>"Sushi Naples" - upscale date nights</li>
              <li>"BBQ Signal Hill" - working class lunch crowd</li>
              <li>"Breakfast Alamitos Beach" - morning joggers</li>
            </ul>
            
            <p>
              Also gotta be in local directories. <a href="https://www.visitlongbeach.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Visit Long Beach</a> restaurant guide. <a href="https://dlba.org/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Downtown Long Beach Alliance</a> dining directory. <a href="https://www.presstelegram.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Press-Telegram</a> food section. Every local mention helps.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Instagram + SEO Combo:</p>
              <p>
                Long Beach super Instagram-heavy for food. Tag your location, use neighborhood hashtags (#BelmontShore #DTLB #RetroRow). Google sees social signals. One burger joint went viral on IG and their Google rankings shot up too. Everything connected now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Truck Story */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: From Food Truck to Restaurant</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This Korean BBQ food truck used to post up at different spots - Bixby Park, CSULB, Downtown. Had great following but wanted brick and mortar. Problem was, nobody knew they opened a restaurant on Atlantic.
            </p>
            
            <p>
              We kept all their food truck SEO (people still searching "Korean BBQ truck Long Beach") but added restaurant keywords. Smart move - we made pages for each old truck location pointing to new restaurant. "Missing the Korean BBQ truck at Bixby Park? Find us at our new location!" Boom. Packed from day one.
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
                Restaurants need whole package. As marketing agency, we handle Instagram cuz food is visual. Facebook for events and specials. Email for loyalty programs. But SEO brings consistent foot traffic. One Mexican place said 70% of first-time customers found them through Google.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Get listed on <a href="https://www.opentable.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">OpenTable</a> and <a href="https://www.yelp.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Yelp</a> - we optimize those too.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Restaurant owners busy cooking, not marketing. As marketing consultant, I make it simple. Which keywords bring dinner rush vs lunch crowd. Why your Google hours MUST be accurate. How menu photos affect click-through rates. Real advice, not theory.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Restaurant websites usually terrible. PDF menus nobody can read on phone. No prices. Cant find hours or location. We build sites that convert lookers to diners. Mobile-first (everyone browsing on phone), online ordering integrated, reservation system, clear menus with prices. Beautiful food photos that load fast.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://www.toasttab.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Toast</a> or <a href="https://squareup.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Square</a> for online ordering.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                Friday night, everyone searching where to eat. Your site crashes. You just lost hundreds of customers. As web hosting company, we keep you online during rush times. Fast servers, image optimization (food photos are huge files), reliable uptime. Your kitchen dont close randomly, neither should your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews Make or Break Restaurants</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              One bad review can kill a restaurant. But heres secret - its not about perfect 5 stars. Place with 4.3 stars and 200 reviews beats place with 5 stars and 10 reviews every time. People dont trust perfect. They trust real.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Review Response Strategy:</p>
              <p>
                Thai place on Anaheim had some bad reviews about wait times. Owner started responding to EVERY review, good and bad. Explained they make everything fresh, thanked people for patience. Those responses showed they care. Reviews went from 3.8 to 4.4 stars. More importantly, Google loves when you respond to reviews. Rankings went up too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Events */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Food Events = SEO Gold</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got food events all year. <a href="https://www.longbeachjazzfestival.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Jazz Festival</a>, <a href="https://www.longbeachpride.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Pride Festival</a>, <a href="https://www.grandprixlb.com/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Grand Prix</a>. Smart restaurants create event pages. "Grand Prix weekend specials," "Pride brunch menu." People search for food during events. Be there.
            </p>
            
            <p>
              Also farmers markets. <a href="https://www.longbeach.gov/park/business-operations/farmers-markets/" className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">Bixby Park</a>, Marina, Downtown. If you source local, talk about it. "Farm to table Long Beach" getting searches. One restaurant posts their farmers market haul every week. Google loves fresh content, customers love transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/gyms" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Gyms</h3>
              <p className="text-gray-600 text-sm">Healthy food restaurants near gyms do great.</p>
            </Link>
            
            <Link href="/services/local/salons" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Salons</h3>
              <p className="text-gray-600 text-sm">Brunch spots near salons get Saturday traffic.</p>
            </Link>
            
            <Link href="/services/local/dentists" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Dentists</h3>
              <p className="text-gray-600 text-sm">Soft food restaurants for post-dental work.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fill Your Tables Every Night</h2>
          
          <p className="text-xl text-orange-100 mb-8">
            Stop paying 30% to delivery apps. Get customers finding you directly on Google. More profit, loyal customers, packed restaurant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-xl"
            >
              <Utensils className="h-5 w-5" />
              Get Your Free Restaurant SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-orange-200 mt-6">
            We only work with 2 restaurants per cuisine type per area. First come, first served.
          </p>
        </div>
      </section>
    </div>
  )
}