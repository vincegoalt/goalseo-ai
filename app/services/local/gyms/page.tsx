import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Dumbbell, Activity, Users, Heart, Trophy } from 'lucide-react'

export const metadata = {
  title: 'SEO for Gyms in Long Beach, CA | GoalSEO.ai',
  description: 'January isn\'t your only month. Get new members year-round from Google. Local SEO for gyms and fitness studios in Long Beach.',
}

export default function SEOForGyms() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Gym SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Gyms in{' '}
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When people search "gym near me" or "CrossFit Long Beach," make sure they find you first
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-all shadow-xl"
            >
              <Dumbbell className="h-5 w-5" />
              Get Your Free Gym SEO Audit
            </Link>
            <Link
              href="#neighborhoods"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 border-2 border-pink-200 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-all"
            >
              See Neighborhood Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Gyms Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Gyms Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Gym owner in Belmont Shore told me he spending $2,000 a month on Facebook ads. Getting maybe 10 signups. Meanwhile, boutique fitness studio down the street getting 30+ members monthly from Google searches alone. Difference? They ranking #1 for "pilates Belmont Shore."
            </p>
            
            <p>
              January everybody searching for gyms. But what bout rest of year? Smart gyms ranking for "summer body workout Long Beach" in March, "beach body bootcamp" in May, "holiday weight loss" in October. Year-round strategy beats New Years rush.
            </p>
            
            <p>
              Helped this CrossFit box near Signal Hill. They were invisible online, surviving on word-of-mouth. Got them ranking for "CrossFit Long Beach" and "Olympic lifting gym." Went from 60 members to 180 in 8 months. Had to expand to bigger space. Thats what good SEO does.
            </p>
            
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Class Pack Goldmine:</p>
              <p>
                Yoga studio in East Village was struggling. We found "drop in yoga class Long Beach" getting tons of searches from tourists and business travelers. Created specific pages for class packs and day passes. Now making extra $3k/month from drop-ins who became members later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Gyms?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someone ready to change their life, get fit, lose weight, YOUR gym shows up first. Not LA Fitness. Not Planet Fitness. Your local gym that actually cares bout their members.
            </p>
            
            <p>
              Gym SEO different though. You competing with big chains got massive marketing budgets. But you got advantage - you LOCAL. People want gym close to home or work. "Gym near Downtown Long Beach" beats generic "gym" every time.
            </p>
            
            <p>
              Think of Google like a personal trainer for searches. You showing Google you got the equipment, classes, trainers, location that searchers want. More specific you are, better you rank.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16" id="neighborhoods">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Fitness Market by Neighborhood</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Each Long Beach neighborhood wants different fitness. Belmont Shore wants boutique studios. Downtown wants 24-hour access. Bixby Knolls wants family-friendly. You cant be everything to everybody - pick your niche and own it.
            </p>
            
            <p className="font-semibold">Neighborhood pages that convert:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Gym Belmont Shore" - beach body focus</li>
              <li>"24 hour gym Downtown Long Beach" - young professionals</li>
              <li>"CrossFit Signal Hill" - intense training crowd</li>
              <li>"Yoga studio Naples" - upscale wellness seekers</li>
              <li>"Boxing gym Cambodia Town" - authentic training</li>
              <li>"Family gym Bixby Knolls" - childcare included</li>
              <li>"Bootcamp Alamitos Beach" - outdoor fitness</li>
              <li>"Personal training Los Altos" - one-on-one focus</li>
              <li>"Spin class 4th Street" - Retro Row cyclists</li>
            </ul>
            
            <p>
              Connect with fitness community. Partner with <a href="https://www.runlongbeach.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Long Beach Marathon</a> for training programs. Join <a href="https://www.meetup.com/topics/fitness/us/ca/long_beach/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Long Beach fitness meetups</a>. Sponsor <a href="https://www.longbeachparks.org/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Parks & Rec</a> events.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Corporate Wellness Win:</p>
              <p>
                Gym near Airport area started ranking for "corporate gym memberships Long Beach." All them warehouses and offices looking for employee perks. Landing one corporate account worth 50+ individual memberships. He got Boeing, FedEx, bunch of others. Corporate SEO = steady revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: The Pandemic Pivot</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              2020 almost killed this gym in Peninsula. Shut down, members canceling, owner bout to lose everything. We pivoted hard - "outdoor fitness Long Beach," "virtual personal training," "home gym equipment rental." Ranked for everything people searching during lockdown.
            </p>
            
            <p>
              Not only survived but grew. Members loved outdoor classes, kept them even after reopening. Virtual training brought clients from all over LA. Equipment rental became whole new revenue stream. Sometimes crisis forces innovation. Now he got 3 revenue streams instead of one.
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
                Gyms need visual marketing - transformation photos, class videos, member testimonials. As marketing agency, we handle Instagram for daily motivation, Facebook for community building, TikTok for viral workouts. But SEO brings people actively looking to join, not just browsing.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Get listed on <a href="https://www.classpass.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">ClassPass</a> and <a href="https://www.mindbodyonline.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">MindBody</a>.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Gym owners know fitness, not marketing. As marketing consultant, I explain retention strategies, referral programs, seasonal campaigns. Why "free trial" converts better than "discount." How class schedules affect SEO. Real gym marketing, not generic advice.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Gym websites gotta inspire action. We design sites with class schedules, trainer bios, virtual tours, easy signup. Before/after galleries that load fast. Mobile-first cuz everyone checking gym websites on phone. Integrated booking for classes and training.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://www.zenplanner.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Zen Planner</a> for member management.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                January 1st, everyone hitting gym websites. Yours better not crash. As web hosting company, we provide reliable hosting that handles traffic spikes. Fast loading for video content. Secure member portals. Your site as strong as your members gonna be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Retention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">SEO + Retention = Success</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Getting members is one thing. Keeping them is another. Good SEO brings right people - ones actually ready to commit. "Cheap gym Long Beach" brings price shoppers who quit. "Powerlifting gym Long Beach" brings serious lifters who stay for years.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Community Building:</p>
              <p>
                F45 studio in Alamitos Beach created pages for every challenge and event. "8 Week Challenge Long Beach," "Saturday bootcamp beach workout." Members share these pages, brings their friends. SEO + community = unstoppable growth. They got waitlist now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Fitness */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Fitness SEO Opportunities</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach loves specialty fitness. <a href="https://www.orangetheory.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Orange Theory</a>, <a href="https://www.soulcycle.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">SoulCycle</a>, <a href="https://www.f45training.com/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">F45</a> all killing it. But boutique studios can compete by being ultra-specific. "Prenatal yoga Long Beach," "Senior fitness Belmont Shore," "Teen strength training." Specific beats general every time.
            </p>
            
            <p>
              Also seasonal opportunities. "Beach body bootcamp" in spring. "Marathon training" for Long Beach Marathon. "Holiday survival workout" in November. Plan your SEO calendar around what people searching when.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Local SEO Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/local/salons" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Salons</h3>
              <p className="text-gray-600 text-sm">Post-workout beauty services nearby.</p>
            </Link>
            
            <Link href="/services/local/restaurants" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Restaurants</h3>
              <p className="text-gray-600 text-sm">Healthy food spots near gyms thrive.</p>
            </Link>
            
            <Link href="/services/local/dentists" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Dentists</h3>
              <p className="text-gray-600 text-sm">Mouthguards for boxing and sports.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fill Your Gym Year-Round</h2>
          
          <p className="text-xl text-pink-100 mb-8">
            Stop depending on January. Get new members every month from people actively searching for fitness solutions. Build a thriving gym community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-all shadow-xl"
            >
              <Dumbbell className="h-5 w-5" />
              Get Your Free Gym SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-pink-200 mt-6">
            We work with one gym per specialty per area. Claim your territory.
          </p>
        </div>
      </section>
    </div>
  )
}