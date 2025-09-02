import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle, Star, Scissors, Sparkles, Users, Heart, Palette } from 'lucide-react'

export const metadata = {
  title: 'SEO for Salons in Long Beach, CA | GoalSEO.ai',
  description: 'Get more clients booking online. Local SEO for hair salons, nail salons, and beauty services in Long Beach.',
}

export default function SEOForSalons() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Long Beach Salon SEO</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO for Salons in{' '}
              <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                Long Beach, CA
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When someone searches "hair salon near me" or "nails Belmont Shore," be fully booked
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-700 transition-all shadow-xl"
            >
              <Scissors className="h-5 w-5" />
              Get Your Free Salon SEO Audit
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 border-2 border-rose-200 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all"
            >
              See Service Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Why Salons Need SEO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Salons Care About SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Hair salon owner on 2nd Street was bout to close. Instagram pretty but wasn't bringing clients. Yelp reviews good but expensive ads. Then we got her ranking for "balayage Belmont Shore" and "blonde specialist Long Beach." Now she booked 3 weeks out, raised prices twice.
            </p>
            
            <p>
              Thing is, beauty is emergency business sometimes. "Hair salon open now," "last minute nails," "wedding hair tomorrow." If you aint showing up for these panic searches, you missing easy money. Plus regular searches like "Brazilian blowout near me" that bring high-ticket clients.
            </p>
            
            <p>
              Helped this nail salon in Cambodia Town. They amazing at nail art but nobody knew they existed. Got them ranking for "Japanese nail art Long Beach" and "gel extensions." Went from empty chairs to hiring 3 more techs. All from being findable for what they specialize in.
            </p>
            
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">The Instagram + SEO Power Move:</p>
              <p>
                Salon in Naples was killing it on Instagram but not getting clients. We synced their IG with SEO - every popular hairstyle post became a page on website. "Lived-in blonde Long Beach," "Beach waves Naples." Now Instagram followers can actually FIND them on Google. Double win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is SEO for Salons?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Its making sure when someone needs their roots done, wants new nails, or searching for wedding hair, YOUR salon shows up first. Not SuperCuts. Not some chain. Your salon where they gonna get personalized service.
            </p>
            
            <p>
              Salon SEO gotta cover services AND styles. "Haircut" too general. But "curtain bangs Long Beach" or "mens fade Belmont Shore" - thats money. People search for specific looks they saw on TikTok or Pinterest.
            </p>
            
            <p>
              Think of Google like a beauty magazine. You showing Google you got the skills, portfolio, reviews to deliver what clients want. Every before/after photo, every 5-star review, every service page builds your case.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Beauty Services That Need SEO</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach beauty scene diverse as hell. You got high-end salons in Naples, affordable spots in Cambodia Town, trendy places on 4th Street. Each area different clientele, different searches.
            </p>
            
            <p className="font-semibold">Service pages that book appointments:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Balayage Belmont Shore" - beach blonde specialists</li>
              <li>"Japanese straightening Downtown Long Beach" - specific technique</li>
              <li>"Microblading Naples" - high-end beauty service</li>
              <li>"Braids Cambodia Town" - cultural specialty</li>
              <li>"Mens barber Bixby Knolls" - neighborhood barbershop</li>
              <li>"Bridal hair Los Altos" - wedding market</li>
              <li>"Acrylic nails 4th Street" - Retro Row style</li>
              <li>"Lash extensions Signal Hill" - beauty treatment</li>
              <li>"Kids haircuts East Long Beach" - family market</li>
            </ul>
            
            <p>
              Get on all beauty platforms. <a href="https://www.vagaro.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Vagaro</a> for bookings. <a href="https://www.styleseat.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">StyleSeat</a> for discovery. <a href="https://www.glossgenius.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">GlossGenius</a> for management. But your own SEO brings clients direct - no commission.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">👉 Trendy Searches Gold:</p>
              <p>
                Smart salon owner tracks TikTok and Pinterest trends. "Wolf cut," "butterfly cut," "hush cut" - whatever going viral, she creates pages for it immediately. "Wolf cut Long Beach" ranked before other salons even knew what it was. First mover advantage huge in beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Story: From Chair Renter to Salon Owner</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              This hairstylist was renting chair at salon in Alamitos Beach. Good at her job but struggling to build clientele. We built her personal brand SEO - "blonde specialist Stacy Long Beach," focused on her specialties.
            </p>
            
            <p>
              Within year, she was so booked she opened her own salon. Took half the clients with her. Now she got 4 stylists working for her. All started with ranking for her name and specialty. Personal branding + SEO = business ownership.
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
                Salons NEED Instagram - its visual portfolio. As marketing agency, we handle social media, email campaigns for rebooking, SMS reminders. But SEO brings new clients who never heard of you. One salon said 60% of new clients find them through Google, not social.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Get featured on <a href="https://www.allure.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Allure Best of Beauty</a> lists.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Consultant</h3>
              <p className="text-gray-700">
                Stylists are artists, not marketers. As marketing consultant, I explain pricing psychology, rebooking strategies, retail sales techniques. Why "color correction specialist" can charge 3x more than "hair colorist." How to turn one-time clients into monthly memberships.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Designer</h3>
              <p className="text-gray-700">
                Salon websites gotta be gorgeous AND functional. We design sites with online booking, service menus with pricing, stylist portfolios, before/after galleries. Instagram feed integration. Fast loading cuz clients browsing on phones between appointments.
              </p>
              <p className="text-gray-600 mt-3">
                👉 Integrate with <a href="https://squareup.com/appointments" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Square Appointments</a> for easy booking.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Hosting Company</h3>
              <p className="text-gray-700">
                Saturday your busiest day. Website crashes, you losing bookings. As web hosting company, we provide reliable hosting that handles traffic. Image optimization for all them before/after photos. SSL security for payment processing. Keep your site beautiful and fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reviews + Photos = Bookings</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              People choosing salons based on reviews AND photos. They wanna see your work, not just read bout it. One bad review bout damaged hair can kill you. But good reviews with transformation photos? Thats marketing gold.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="font-semibold text-gray-900 mb-2">Photo Review Hack:</p>
              <p>
                Salon in Downtown started taking before/after photos for EVERY client (with permission). Sends photos with review request. Clients love sharing their new look. Went from 20 reviews to 200+ with photos. Google loves media-rich reviews. Rankings shot up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Strategy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long Beach Beauty Calendar</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Long Beach got events all year. <a href="https://www.longbeachpride.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Pride parade</a> - rainbow hair. <a href="https://www.grandprixlb.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Grand Prix</a> - glam looks. <a href="https://www.musicaltheatrewest.com/" className="text-rose-600 underline" target="_blank" rel="noopener noreferrer">Musical Theatre West</a> shows - formal styling. Beach season - sun protection treatments. Plan your SEO around local calendar.
            </p>
            
            <p>
              Also prom season huge for Long Beach high schools. "Prom hair Wilson High School," "Poly High prom nails." Parents searching by school. One salon does 50+ prom appointments just from school-specific pages.
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
              <p className="text-gray-600 text-sm">Post-workout beauty services combo.</p>
            </Link>
            
            <Link href="/services/local/restaurants" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Restaurants</h3>
              <p className="text-gray-600 text-sm">Brunch before salon appointments.</p>
            </Link>
            
            <Link href="/services/local/dentists" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">SEO for Dentists</h3>
              <p className="text-gray-600 text-sm">Complete beauty includes smile.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Book Your Salon Solid</h2>
          
          <p className="text-xl text-rose-100 mb-8">
            Stop relying on walk-ins and Instagram. Get clients booking appointments from Google searches. Build a thriving beauty business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all shadow-xl"
            >
              <Scissors className="h-5 w-5" />
              Get Your Free Salon SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-400 transition-all"
            >
              Call (562) 682-9403
            </Link>
          </div>
          
          <p className="text-sm text-rose-200 mt-6">
            We work with 2 salons per specialty per area. Limited spots.
          </p>
        </div>
      </section>
    </div>
  )
}