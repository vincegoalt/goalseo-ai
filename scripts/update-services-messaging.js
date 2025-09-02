// Script to add consistent "We Build AND Rank" messaging to all service pages

const buildAndRankSections = {
  electricians: {
    title: "We Don't Just SEO Your Old Site - We BUILD You a New One",
    subtitle: "Other SEO companies try to rank your broken website. We build you a NEW one that works, then dominate Google.",
    problems: [
      "• DIY website from 2010 that barely works",
      "• No mobile version for on-the-go searches", 
      "• Can't handle emergency service requests",
      "• No EV charger installation pages",
      "• Invisible to voice search",
      "• ChatGPT doesn't know you exist"
    ],
    solutions: [
      "• Brand NEW WordPress site built for electricians",
      "• 24/7 emergency contact system",
      "• EV charger installation calculator",
      "• Service area pages for every neighborhood",
      "• Voice search optimized (\"Hey Siri, electrician near me\")",
      "• AI-ready architecture for future"
    ],
    package: "$6,000 - $10,000",
    description: "New WordPress site + Local SEO + EV market targeting + Voice search"
  },
  
  attorneys: {
    title: "Your Website Is Losing You Cases - We'll Build You One That Wins",
    subtitle: "Most law firm websites look like they're from 1995. We build modern sites that convert visitors to clients.",
    problems: [
      "• Template website that looks like every other firm",
      "• No practice area pages for specific searches",
      "• Can't capture leads properly",
      "• Takes forever to load case results",
      "• Not optimized for \"near me\" searches",
      "• Missing from voice search results"
    ],
    solutions: [
      "• Custom WordPress site with authority design",
      "• Individual practice area landing pages",
      "• Secure client intake forms",
      "• Case results showcase",
      "• Voice search optimization for legal queries",
      "• ChatGPT visibility for legal questions"
    ],
    package: "$8,000 - $15,000",
    description: "Professional WordPress site + Legal SEO + Voice search + Content strategy"
  },
  
  restaurants: {
    title: "Stop Paying 30% to Delivery Apps - We Build Your Own Online Ordering",
    subtitle: "We build restaurant websites with integrated ordering, then make sure hungry people find you first.",
    problems: [
      "• PDF menu nobody can read on phones",
      "• No online ordering (losing to DoorDash)",
      "• Can't update specials easily",
      "• No reservation system",
      "• Missing from \"food near me\" searches",
      "• Invisible to voice search"
    ],
    solutions: [
      "• Custom WordPress with online ordering",
      "• Mobile-first menu design",
      "• Table reservation system",
      "• Daily specials management",
      "• Voice search (\"Hey Siri, pizza near me\")",
      "• ChatGPT recommendations"
    ],
    package: "$7,500 - $12,000",
    description: "Restaurant site with ordering + Local SEO + Review management + Voice search"
  },
  
  dentists: {
    title: "Your Dental Website Is Scaring Patients Away - We'll Fix That",
    subtitle: "We build welcoming dental websites that actually get new patients booking appointments.",
    problems: [
      "• Outdated site with stock photos from 2005",
      "• No online appointment booking",
      "• Can't show insurance accepted",
      "• Missing emergency dental pages",
      "• Not showing up for \"dentist near me\"",
      "• Voice search invisible"
    ],
    solutions: [
      "• Modern WordPress site that builds trust",
      "• Online appointment scheduling",
      "• Insurance verification system",
      "• Service pages for every procedure",
      "• Emergency dental optimization",
      "• Voice and AI search ready"
    ],
    package: "$6,000 - $10,000",
    description: "Dental website + Patient booking system + Local SEO + Voice optimization"
  },
  
  cpas: {
    title: "Stop Losing to TurboTax - Build Your Digital Presence",
    subtitle: "We build CPA websites that establish expertise and attract year-round clients, not just tax season.",
    problems: [
      "• Generic template site with no personality",
      "• No service pages beyond tax prep",
      "• Can't showcase expertise areas",
      "• Missing business client features",
      "• Only busy during tax season",
      "• Not found for specialty searches"
    ],
    solutions: [
      "• Professional WordPress for CPAs",
      "• Service pages for all offerings",
      "• Client portal integration",
      "• Business service calculators",
      "• Year-round SEO strategy",
      "• Voice search for tax questions"
    ],
    package: "$5,000 - $8,000",
    description: "CPA website + Service expansion + Local SEO + Business client focus"
  },
  
  gyms: {
    title: "January Isn't Your Only Month - We Build Sites That Convert Year-Round",
    subtitle: "Stop depending on New Year's resolutions. We build gym websites that bring members every month.",
    problems: [
      "• Basic site with outdated class schedules",
      "• No online membership signup",
      "• Can't showcase trainers/classes",
      "• Missing from \"gym near me\" searches",
      "• Lost to big chains on Google",
      "• No virtual tour capability"
    ],
    solutions: [
      "• Dynamic WordPress with class booking",
      "• Online membership registration",
      "• Trainer profiles and specialties",
      "• Virtual gym tour feature",
      "• Local neighborhood targeting",
      "• Voice search optimization"
    ],
    package: "$6,000 - $10,000",
    description: "Gym website + Class booking + Member portal + Local SEO + Voice search"
  },
  
  salons: {
    title: "Instagram Isn't Enough - You Need a Website That Books Appointments",
    subtitle: "We build salon websites that turn browsers into bookings, then rank you everywhere.",
    problems: [
      "• Relying only on Instagram for marketing",
      "• No online booking system",
      "• Can't showcase stylist portfolios",
      "• Missing from \"salon near me\"",
      "• Lost to chains on Google",
      "• No price transparency"
    ],
    solutions: [
      "• Beautiful WordPress with booking",
      "• Stylist portfolio galleries",
      "• Service menu with pricing",
      "• Instagram integration",
      "• Neighborhood salon pages",
      "• Voice search ready"
    ],
    package: "$5,000 - $8,000",
    description: "Salon website + Booking system + Portfolio galleries + Local SEO"
  },
  
  "auto-services": {
    title: "Your Auto Shop Website Is Broken - We'll Build One That Brings Cars In",
    subtitle: "Stop losing to dealerships. We build mechanic websites that build trust and bring customers.",
    problems: [
      "• Ancient website that looks sketchy",
      "• No service pricing information",
      "• Can't book appointments online",
      "• Missing from emergency searches",
      "• No mobile version",
      "• Reviews not displayed"
    ],
    solutions: [
      "• Professional WordPress for auto shops",
      "• Online appointment scheduling",
      "• Service pricing calculator",
      "• Emergency service pages",
      "• Mobile-first design",
      "• Review showcase system"
    ],
    package: "$5,000 - $8,000",
    description: "Auto shop website + Booking system + Local SEO + Emergency rankings"
  },
  
  roofing: {
    title: "Storm Season Is Coming - Is Your Website Ready?",
    subtitle: "We build roofing websites that capture emergency calls and insurance jobs.",
    problems: [
      "• No website or one that crashes in storms",
      "• Missing emergency service info",
      "• No insurance claim help",
      "• Can't showcase past work",
      "• Not found for storm damage",
      "• Voice search invisible"
    ],
    solutions: [
      "• Storm-proof WordPress hosting",
      "• Emergency service priority",
      "• Insurance claim assistance pages",
      "• Before/after galleries",
      "• Storm damage SEO",
      "• Voice search optimization"
    ],
    package: "$6,000 - $10,000",
    description: "Roofing website + Emergency SEO + Insurance targeting + Storm preparation"
  },
  
  "real-estate": {
    title: "Stop Paying Zillow - Build Your Own Lead Generation Machine",
    subtitle: "We build real estate websites that generate your own leads, not Zillow's.",
    problems: [
      "• Paying thousands to Zillow Premier",
      "• Generic brokerage template site",
      "• No neighborhood pages",
      "• Can't showcase listings properly",
      "• Missing from local searches",
      "• No lead capture system"
    ],
    solutions: [
      "• Custom WordPress with IDX integration",
      "• Neighborhood specialist pages",
      "• Advanced property search",
      "• Lead capture forms",
      "• Market report generation",
      "• Voice search for properties"
    ],
    package: "$7,500 - $12,000",
    description: "Real estate website + IDX/MLS + Lead generation + Neighborhood SEO"
  }
}

// Export for use
module.exports = buildAndRankSections;