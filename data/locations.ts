export interface Location {
  id: string
  slug: string
  city: string
  state: string
  stateAbbr: string
  county?: string
  population?: number
  tier: 1 | 2 | 3
  coordinates?: {
    lat: number
    lng: number
  }
  neighborhoods?: string[]
  landmarks?: string[]
  industries?: string[]
  nickname?: string
  description?: string
  businessStats?: {
    totalBusinesses?: number
    topIndustries?: string[]
    growthRate?: string
  }
}

export const locations: Location[] = [
  // Tier 1: Primary Cities
  {
    id: 'orange-county',
    slug: 'orange-county',
    city: 'Orange County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 3186989,
    tier: 1,
    coordinates: { lat: 33.7175, lng: -117.8311 },
    neighborhoods: [
      'Irvine',
      'Anaheim',
      'Santa Ana',
      'Huntington Beach',
      'Newport Beach',
      'Costa Mesa',
      'Mission Viejo',
      'Fullerton'
    ],
    landmarks: [
      'Disneyland Resort',
      'Huntington Beach Pier',
      'Balboa Island',
      'Crystal Cove State Park',
      'Mission San Juan Capistrano'
    ],
    industries: ['Technology', 'Tourism', 'Healthcare', 'Finance', 'Manufacturing'],
    nickname: 'The OC',
    description: 'Home to world-famous beaches, Disneyland, and a thriving tech hub in Irvine',
    businessStats: {
      totalBusinesses: 285000,
      topIndustries: ['Tech', 'Tourism', 'Healthcare'],
      growthRate: '12.5%'
    }
  },
  {
    id: 'san-francisco',
    slug: 'san-francisco',
    city: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Francisco',
    population: 873965,
    tier: 1,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    neighborhoods: [
      'Financial District',
      'Mission District',
      'Castro',
      'Haight-Ashbury',
      'Pacific Heights',
      'Chinatown',
      'North Beach',
      'SOMA'
    ],
    landmarks: [
      'Golden Gate Bridge',
      'Alcatraz Island',
      'Fisherman\'s Wharf',
      'Golden Gate Park',
      'Lombard Street',
      'Coit Tower',
      'Palace of Fine Arts'
    ],
    industries: ['Technology', 'Finance', 'Tourism', 'Healthcare', 'Biotechnology'],
    nickname: 'The City by the Bay',
    description: 'Global tech capital with iconic landmarks, diverse neighborhoods, and innovative spirit',
    businessStats: {
      totalBusinesses: 87000,
      topIndustries: ['Tech', 'Finance', 'Tourism'],
      growthRate: '14.2%'
    }
  },
  {
    id: 'san-jose',
    slug: 'san-jose',
    city: 'San Jose',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Santa Clara',
    population: 1013240,
    tier: 1,
    coordinates: { lat: 37.3382, lng: -121.8863 },
    neighborhoods: [
      'Downtown',
      'Willow Glen',
      'Rose Garden',
      'Japantown',
      'Santana Row',
      'Almaden Valley',
      'Evergreen',
      'Silver Creek'
    ],
    landmarks: [
      'Tech Museum of Innovation',
      'Winchester Mystery House',
      'SAP Center',
      'Municipal Rose Garden',
      'Cathedral Basilica of St. Joseph',
      'Happy Hollow Park & Zoo'
    ],
    industries: ['Technology', 'Software', 'Hardware Manufacturing', 'Clean Energy', 'Healthcare'],
    nickname: 'Capital of Silicon Valley',
    description: 'Heart of Silicon Valley, home to major tech companies and innovation ecosystem',
    businessStats: {
      totalBusinesses: 75000,
      topIndustries: ['Technology', 'Software', 'Manufacturing'],
      growthRate: '16.8%'
    }
  },
  {
    id: 'sacramento',
    slug: 'sacramento',
    city: 'Sacramento',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Sacramento',
    population: 524943,
    tier: 1,
    coordinates: { lat: 38.5816, lng: -121.4944 },
    neighborhoods: [
      'Midtown',
      'East Sacramento',
      'Land Park',
      'Curtis Park',
      'Oak Park',
      'Natomas',
      'Pocket-Greenhaven',
      'Tahoe Park'
    ],
    landmarks: [
      'California State Capitol',
      'Old Sacramento',
      'Crocker Art Museum',
      'Tower Bridge',
      'Sutter\'s Fort',
      'Golden 1 Center'
    ],
    industries: ['Government', 'Healthcare', 'Education', 'Technology', 'Agriculture'],
    nickname: 'City of Trees',
    description: 'California\'s capital city blending government, farm-to-fork cuisine, and emerging tech scene',
    businessStats: {
      totalBusinesses: 42000,
      topIndustries: ['Government', 'Healthcare', 'Tech'],
      growthRate: '11.5%'
    }
  },
  {
    id: 'fresno',
    slug: 'fresno',
    city: 'Fresno',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Fresno',
    population: 542107,
    tier: 1,
    coordinates: { lat: 36.7378, lng: -119.7871 },
    neighborhoods: [
      'Tower District',
      'Downtown',
      'Woodward Park',
      'Fig Garden',
      'Old Fig Garden',
      'Sunnyside',
      'Bullard',
      'Clovis'
    ],
    landmarks: [
      'Forestiere Underground Gardens',
      'Fresno Chaffee Zoo',
      'Tower Theatre',
      'Woodward Park',
      'Fresno Art Museum',
      'Kearney Mansion'
    ],
    industries: ['Agriculture', 'Healthcare', 'Education', 'Manufacturing', 'Distribution'],
    nickname: 'Gateway to Yosemite',
    description: 'Central Valley agricultural hub and gateway to Yosemite National Park',
    businessStats: {
      totalBusinesses: 38000,
      topIndustries: ['Agriculture', 'Healthcare', 'Manufacturing'],
      growthRate: '8.7%'
    }
  },
  {
    id: 'oakland',
    slug: 'oakland',
    city: 'Oakland',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Alameda',
    population: 440646,
    tier: 1,
    coordinates: { lat: 37.8044, lng: -122.2712 },
    neighborhoods: [
      'Downtown',
      'Jack London Square',
      'Uptown',
      'Lake Merritt',
      'Rockridge',
      'Temescal',
      'Fruitvale',
      'Montclair'
    ],
    landmarks: [
      'Lake Merritt',
      'Oakland Museum of California',
      'Jack London Square',
      'Fox Theater',
      'Redwood Regional Park',
      'Oakland Zoo'
    ],
    industries: ['Healthcare', 'Transportation', 'Technology', 'Green Energy', 'Arts & Culture'],
    nickname: 'The Town',
    description: 'Diverse port city with thriving arts scene, tech growth, and cultural richness',
    businessStats: {
      totalBusinesses: 32000,
      topIndustries: ['Healthcare', 'Transportation', 'Tech'],
      growthRate: '10.3%'
    }
  },
  {
    id: 'long-beach',
    slug: 'long-beach',
    city: 'Long Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 466742,
    tier: 1,
    coordinates: { lat: 33.7701, lng: -118.1937 },
    neighborhoods: [
      'Belmont Shore',
      'Naples Island',
      'Downtown Long Beach',
      'Bixby Knolls',
      'California Heights',
      'Rose Park',
      'Los Altos',
      'Traffic Circle Area'
    ],
    landmarks: [
      'Queen Mary',
      'Aquarium of the Pacific',
      'Long Beach Port',
      'Shoreline Village',
      'Naples Canals'
    ],
    industries: ['Shipping & Logistics', 'Healthcare', 'Aerospace', 'Tourism', 'Education'],
    nickname: 'International City',
    description: 'Major port city featuring the historic Queen Mary and vibrant waterfront districts',
    businessStats: {
      totalBusinesses: 32000,
      topIndustries: ['Port & Logistics', 'Healthcare', 'Tourism'],
      growthRate: '8.3%'
    }
  },
  {
    id: 'los-angeles-county',
    slug: 'los-angeles-county',
    city: 'Los Angeles County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 10014009,
    tier: 1,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    neighborhoods: [
      'Los Angeles',
      'Long Beach',
      'Glendale',
      'Santa Clarita',
      'Lancaster',
      'Palmdale',
      'Pomona',
      'Torrance'
    ],
    landmarks: ['Hollywood Sign', 'Griffith Observatory', 'Getty Center', 'Santa Monica Pier', 'Universal Studios'],
    industries: ['Entertainment', 'Technology', 'Aerospace', 'Tourism', 'International Trade'],
    nickname: 'LA County',
    description: 'Most populous U.S. county, global entertainment capital and diverse economic powerhouse',
    businessStats: {
      totalBusinesses: 950000,
      topIndustries: ['Entertainment', 'Tech', 'Trade'],
      growthRate: '9.3%'
    }
  },
  {
    id: 'los-angeles',
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 3898747,
    tier: 1,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    neighborhoods: [
      'Downtown LA',
      'Hollywood',
      'Beverly Hills',
      'Santa Monica',
      'Venice',
      'Silver Lake',
      'Echo Park',
      'Los Feliz'
    ],
    landmarks: [
      'Hollywood Sign',
      'Griffith Observatory',
      'Santa Monica Pier',
      'Getty Center',
      'Venice Beach',
      'Universal Studios'
    ],
    industries: ['Entertainment', 'Technology', 'Fashion', 'Tourism', 'Aerospace'],
    nickname: 'City of Angels',
    description: 'Entertainment capital of the world, home to Hollywood and endless sunshine',
    businessStats: {
      totalBusinesses: 425000,
      topIndustries: ['Entertainment', 'Tech', 'Fashion'],
      growthRate: '9.8%'
    }
  },
  {
    id: 'anaheim',
    slug: 'anaheim',
    city: 'Anaheim',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 346824,
    tier: 1,
    coordinates: { lat: 33.8366, lng: -117.9143 },
    neighborhoods: ['Anaheim Hills', 'Downtown Anaheim', 'Platinum Triangle', 'The Colony'],
    landmarks: ['Disneyland Park', 'Angel Stadium', 'Honda Center', 'Downtown Disney'],
    industries: ['Tourism', 'Sports & Entertainment', 'Healthcare', 'Manufacturing'],
    nickname: 'City of Kindness',
    description: 'Home to the original Disneyland and major sports venues',
    businessStats: {
      totalBusinesses: 28000,
      topIndustries: ['Tourism', 'Entertainment', 'Healthcare'],
      growthRate: '11.2%'
    }
  },
  {
    id: 'santa-ana',
    slug: 'santa-ana',
    city: 'Santa Ana',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 310227,
    tier: 1,
    coordinates: { lat: 33.7455, lng: -117.8677 },
    neighborhoods: ['Downtown Santa Ana', 'South Coast Metro', 'Artist Village', 'French Park'],
    landmarks: ['Bowers Museum', 'Santa Ana Zoo', 'Heritage Museum', 'MainPlace Mall'],
    industries: ['Government', 'Healthcare', 'Retail', 'Manufacturing', 'Arts & Culture'],
    nickname: 'Downtown OC',
    description: 'Orange County seat with vibrant arts district and diverse culture',
    businessStats: {
      totalBusinesses: 22000,
      topIndustries: ['Government', 'Healthcare', 'Retail'],
      growthRate: '7.9%'
    }
  },
  {
    id: 'irvine',
    slug: 'irvine',
    city: 'Irvine',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 307670,
    tier: 1,
    coordinates: { lat: 33.6846, lng: -117.8265 },
    neighborhoods: ['Woodbridge', 'Turtle Rock', 'University Park', 'Northwood', 'Westpark'],
    landmarks: ['UC Irvine', 'Irvine Spectrum Center', 'Great Park', 'Bommer Canyon'],
    industries: ['Technology', 'Biotechnology', 'Finance', 'Education', 'Healthcare'],
    nickname: 'Silicon Valley South',
    description: 'Master-planned city and tech hub with top-rated schools and UC Irvine',
    businessStats: {
      totalBusinesses: 35000,
      topIndustries: ['Technology', 'Biotech', 'Finance'],
      growthRate: '15.7%'
    }
  },
  {
    id: 'huntington-beach',
    slug: 'huntington-beach',
    city: 'Huntington Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 198711,
    tier: 1,
    coordinates: { lat: 33.6595, lng: -117.9988 },
    neighborhoods: ['Downtown', 'Huntington Harbour', 'Bolsa Chica', 'Edwards Hill', 'Seacliff'],
    landmarks: ['Huntington Pier', 'Bolsa Chica Wetlands', 'Main Street', 'Pacific City', 'International Surfing Museum'],
    industries: ['Tourism', 'Surfing Industry', 'Retail', 'Healthcare', 'Energy'],
    nickname: 'Surf City USA',
    description: 'World-famous surfing destination with 8.5 miles of pristine beaches and iconic pier',
    businessStats: {
      totalBusinesses: 18000,
      topIndustries: ['Tourism', 'Surf & Beach Retail', 'Restaurants'],
      growthRate: '9.4%'
    }
  },
  {
    id: 'newport-beach',
    slug: 'newport-beach',
    city: 'Newport Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 85239,
    tier: 1,
    coordinates: { lat: 33.6189, lng: -117.9289 },
    neighborhoods: ['Balboa Peninsula', 'Corona del Mar', 'Newport Coast', 'Fashion Island', 'Balboa Island'],
    landmarks: ['Fashion Island', 'Balboa Fun Zone', 'The Wedge', 'Crystal Cove', 'Newport Harbor'],
    industries: ['Finance', 'Real Estate', 'Tourism', 'Yacht Industry', 'Healthcare'],
    nickname: 'The Gold Coast',
    description: 'Upscale coastal city known for luxury shopping, world-class beaches, and premier yacht harbor',
    businessStats: {
      totalBusinesses: 12000,
      topIndustries: ['Finance', 'Real Estate', 'Luxury Retail'],
      growthRate: '11.8%'
    }
  },
  {
    id: 'beverly-hills',
    slug: 'beverly-hills',
    city: 'Beverly Hills',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 32701,
    tier: 1,
    coordinates: { lat: 34.0736, lng: -118.4004 },
    neighborhoods: ['The Flats', 'Beverly Hills Gateway', 'Golden Triangle', 'Trousdale Estates', 'Beverly Park'],
    landmarks: ['Rodeo Drive', 'Beverly Gardens Park', 'Greystone Mansion', 'Beverly Hills Hotel', 'The Beverly Hilton'],
    industries: ['Luxury Retail', 'Entertainment', 'Real Estate', 'Tourism', 'Professional Services'],
    nickname: '90210',
    description: 'World-renowned luxury destination famous for Rodeo Drive shopping and celebrity estates',
    businessStats: {
      totalBusinesses: 8500,
      topIndustries: ['Luxury Retail', 'Entertainment', 'Real Estate'],
      growthRate: '8.6%'
    }
  },
  {
    id: 'santa-monica',
    slug: 'santa-monica',
    city: 'Santa Monica',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 93076,
    tier: 1,
    coordinates: { lat: 34.0195, lng: -118.4912 },
    neighborhoods: ['Downtown', 'Ocean Park', 'Mid-City', 'Montana Avenue', 'Pico'],
    landmarks: ['Santa Monica Pier', 'Third Street Promenade', 'Pacific Park', 'Palisades Park', 'Montana Avenue'],
    industries: ['Technology', 'Tourism', 'Entertainment', 'Healthcare', 'Digital Media'],
    nickname: 'Silicon Beach',
    description: 'Beachside tech hub featuring the iconic pier, vibrant downtown, and booming startup scene',
    businessStats: {
      totalBusinesses: 11000,
      topIndustries: ['Tech Startups', 'Tourism', 'Digital Media'],
      growthRate: '13.2%'
    }
  },
  {
    id: 'pasadena',
    slug: 'pasadena',
    city: 'Pasadena',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 138699,
    tier: 1,
    coordinates: { lat: 34.1478, lng: -118.1445 },
    neighborhoods: ['Old Pasadena', 'South Lake', 'Playhouse District', 'Bungalow Heaven', 'Madison Heights'],
    landmarks: ['Rose Bowl', 'Norton Simon Museum', 'Huntington Library', 'CalTech', 'Jet Propulsion Laboratory'],
    industries: ['Education', 'Technology', 'Healthcare', 'Aerospace', 'Tourism'],
    nickname: 'Crown City',
    description: 'Historic city home to the Rose Bowl, world-class museums, and leading scientific institutions',
    businessStats: {
      totalBusinesses: 14000,
      topIndustries: ['Education & Research', 'Tech', 'Healthcare'],
      growthRate: '10.1%'
    }
  },
  {
    id: 'san-diego',
    slug: 'san-diego',
    city: 'San Diego',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Diego',
    population: 1386932,
    tier: 1,
    coordinates: { lat: 32.7157, lng: -117.1611 },
    neighborhoods: ['Downtown', 'Balboa Park', 'La Jolla', 'Mission Beach', 'Gaslamp Quarter', 'Pacific Beach', 'Hillcrest', 'North Park'],
    landmarks: ['Balboa Park', 'San Diego Zoo', 'USS Midway Museum', 'Coronado Bridge', 'Sunset Cliffs', 'Mission Bay'],
    industries: ['Military Defense', 'Biotechnology', 'Tourism', 'Telecommunications', 'Healthcare'],
    nickname: 'America\'s Finest City',
    description: 'Year-round perfect weather, world-class beaches, and major military and biotech industries',
    businessStats: {
      totalBusinesses: 125000,
      topIndustries: ['Defense', 'Biotech', 'Tourism'],
      growthRate: '11.2%'
    }
  },
  {
    id: 'bakersfield',
    slug: 'bakersfield',
    city: 'Bakersfield',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Kern',
    population: 384145,
    tier: 1,
    coordinates: { lat: 35.3733, lng: -119.0187 },
    neighborhoods: [
      'Downtown',
      'Westchester',
      'Seven Oaks',
      'Oleander',
      'Rosedale',
      'Southwest',
      'East Bakersfield',
      'Stockdale'
    ],
    landmarks: [
      'Buck Owens Crystal Palace',
      'Kern County Museum',
      'California Living Museum',
      'Fox Theater',
      'Rabobank Arena',
      'Park at River Walk'
    ],
    industries: ['Oil & Gas', 'Agriculture', 'Healthcare', 'Distribution', 'Manufacturing'],
    nickname: 'Country Music Capital of the West',
    description: 'Oil and agriculture powerhouse known for country music heritage and energy production',
    businessStats: {
      totalBusinesses: 28000,
      topIndustries: ['Oil & Gas', 'Agriculture', 'Healthcare'],
      growthRate: '9.1%'
    }
  },
  {
    id: 'riverside',
    slug: 'riverside',
    city: 'Riverside',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Riverside',
    population: 314998,
    tier: 1,
    coordinates: { lat: 33.9533, lng: -117.3961 },
    neighborhoods: [
      'Downtown',
      'Mission Grove',
      'Wood Streets',
      'Victoria',
      'Canyon Crest',
      'Arlington',
      'La Sierra',
      'Orangecrest'
    ],
    landmarks: [
      'Mission Inn Hotel',
      'UC Riverside',
      'California Citrus State Historic Park',
      'Mount Rubidoux',
      'Fox Performing Arts Center',
      'Riverside Metropolitan Museum'
    ],
    industries: ['Education', 'Healthcare', 'Manufacturing', 'Logistics', 'Technology'],
    nickname: 'City of Arts & Innovation',
    description: 'Historic citrus capital transformed into education and healthcare hub with UC Riverside',
    businessStats: {
      totalBusinesses: 24000,
      topIndustries: ['Education', 'Healthcare', 'Manufacturing'],
      growthRate: '10.8%'
    }
  },
  // Regional Coverage
  {
    id: 'san-diego-county',
    slug: 'san-diego-county',
    city: 'San Diego County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Diego',
    population: 3338330,
    tier: 1,
    coordinates: { lat: 32.7157, lng: -117.1611 },
    neighborhoods: [
      'San Diego',
      'Chula Vista',
      'Oceanside',
      'Escondido',
      'Carlsbad',
      'Vista',
      'San Marcos',
      'Encinitas'
    ],
    landmarks: ['Balboa Park', 'San Diego Zoo', 'USS Midway Museum', 'Coronado Beach', 'SeaWorld'],
    industries: ['Military Defense', 'Biotechnology', 'Tourism', 'Telecommunications', 'Healthcare'],
    nickname: 'America\'s Finest City',
    description: 'Major naval base, biotech hub, and year-round perfect weather destination',
    businessStats: {
      totalBusinesses: 280000,
      topIndustries: ['Defense', 'Biotech', 'Tourism'],
      growthRate: '10.7%'
    }
  },
  {
    id: 'riverside-county',
    slug: 'riverside-county',
    city: 'Riverside County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Riverside',
    population: 2470546,
    tier: 1,
    coordinates: { lat: 33.9533, lng: -117.3961 },
    neighborhoods: [
      'Riverside',
      'Moreno Valley',
      'Corona',
      'Murrieta',
      'Temecula',
      'Menifee',
      'Hemet',
      'Perris'
    ],
    landmarks: ['Mission Inn', 'Temecula Wine Country', 'Joshua Tree National Park', 'Desert Hot Springs', 'Lake Elsinore'],
    industries: ['Logistics', 'Healthcare', 'Manufacturing', 'Agriculture', 'Tourism'],
    nickname: 'Inland Empire East',
    description: 'Fast-growing region with wine country, desert resorts, and major distribution centers',
    businessStats: {
      totalBusinesses: 145000,
      topIndustries: ['Logistics', 'Healthcare', 'Manufacturing'],
      growthRate: '12.3%'
    }
  },
  {
    id: 'san-bernardino-county',
    slug: 'san-bernardino-county',
    city: 'San Bernardino County',
    state: 'California',
    stateAbbr: 'CA',
    county: 'San Bernardino',
    population: 2180085,
    tier: 1,
    coordinates: { lat: 34.1083, lng: -117.2898 },
    neighborhoods: [
      'San Bernardino',
      'Fontana',
      'Rancho Cucamonga',
      'Ontario',
      'Victorville',
      'Rialto',
      'Hesperia',
      'Chino'
    ],
    landmarks: ['Big Bear Lake', 'Ontario International Airport', 'Victoria Gardens', 'San Bernardino Mountains', 'Route 66'],
    industries: ['Transportation', 'Logistics', 'Manufacturing', 'Healthcare', 'Retail'],
    nickname: 'Inland Empire West',
    description: 'Largest U.S. county by area with mountains, deserts, and major transportation hub',
    businessStats: {
      totalBusinesses: 120000,
      topIndustries: ['Transportation', 'Logistics', 'Manufacturing'],
      growthRate: '11.5%'
    }
  },
  // Tier 2: Secondary Cities
  {
    id: 'torrance',
    slug: 'torrance',
    city: 'Torrance',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 147067,
    tier: 2,
    coordinates: { lat: 33.8358, lng: -118.3406 },
    neighborhoods: ['Old Torrance', 'Walteria', 'West Torrance', 'South Bay', 'Hollywood Riviera'],
    landmarks: ['Del Amo Fashion Center', 'Torrance Beach', 'Madrona Marsh', 'Wilson Park', 'Toyota USA Headquarters'],
    industries: ['Aerospace', 'Automotive', 'Healthcare', 'Manufacturing', 'Retail'],
    nickname: 'Balanced City',
    description: 'South Bay hub with strong Japanese business presence and excellent schools',
    businessStats: {
      totalBusinesses: 15000,
      topIndustries: ['Aerospace', 'Automotive', 'Healthcare'],
      growthRate: '7.8%'
    }
  },
  {
    id: 'glendale',
    slug: 'glendale',
    city: 'Glendale',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 196543,
    tier: 2,
    coordinates: { lat: 34.1425, lng: -118.2551 },
    neighborhoods: ['Downtown', 'Montrose', 'La Crescenta', 'Adams Hill', 'Glenoaks Canyon'],
    landmarks: ['Americana at Brand', 'Glendale Galleria', 'Brand Library', 'Forest Lawn Cemetery', 'Alex Theatre'],
    industries: ['Healthcare', 'Entertainment', 'Finance', 'Retail', 'Technology'],
    nickname: 'Jewel City',
    description: 'Major business center with thriving Armenian community and entertainment industry presence',
    businessStats: {
      totalBusinesses: 20000,
      topIndustries: ['Healthcare', 'Entertainment', 'Finance'],
      growthRate: '9.2%'
    }
  },
  {
    id: 'burbank',
    slug: 'burbank',
    city: 'Burbank',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 107337,
    tier: 2,
    coordinates: { lat: 34.1808, lng: -118.3090 },
    neighborhoods: ['Downtown', 'Magnolia Park', 'Rancho', 'Media District', 'Hillside'],
    landmarks: ['Warner Bros Studios', 'Walt Disney Studios', 'NBC Universal', 'Hollywood Burbank Airport', 'Magnolia Boulevard'],
    industries: ['Entertainment', 'Media Production', 'Aerospace', 'Healthcare', 'Technology'],
    nickname: 'Media Capital of the World',
    description: 'Entertainment industry powerhouse home to major studios and production facilities',
    businessStats: {
      totalBusinesses: 12000,
      topIndustries: ['Entertainment', 'Media', 'Production'],
      growthRate: '10.5%'
    }
  },
  {
    id: 'fullerton',
    slug: 'fullerton',
    city: 'Fullerton',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 143617,
    tier: 2,
    coordinates: { lat: 33.8704, lng: -117.9242 },
    neighborhoods: ['Downtown', 'Sunny Hills', 'Golden Hill', 'Raymond Hills', 'West Coyote Hills'],
    landmarks: ['Cal State Fullerton', 'Fullerton Arboretum', 'Muckenthaler Cultural Center', 'Downtown Plaza', 'Fullerton Museum Center'],
    industries: ['Education', 'Manufacturing', 'Healthcare', 'Retail', 'Aerospace'],
    nickname: 'Education City',
    description: 'Historic college town with vibrant downtown and strong aerospace industry',
    businessStats: {
      totalBusinesses: 13000,
      topIndustries: ['Education', 'Manufacturing', 'Aerospace'],
      growthRate: '8.1%'
    }
  },
  {
    id: 'orange',
    slug: 'orange',
    city: 'Orange',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 139911,
    tier: 2,
    coordinates: { lat: 33.7878, lng: -117.8531 },
    neighborhoods: ['Old Towne', 'El Modena', 'Santiago Hills', 'Villa Park', 'Orange Park Acres'],
    landmarks: ['Old Towne Orange', 'Chapman University', 'The Outlets at Orange', 'Santiago Oaks Regional Park', 'Plaza Square Park'],
    industries: ['Education', 'Healthcare', 'Retail', 'Professional Services', 'Manufacturing'],
    nickname: 'Plaza City',
    description: 'Historic city with preserved Old Towne antique district and Chapman University',
    businessStats: {
      totalBusinesses: 11500,
      topIndustries: ['Education', 'Healthcare', 'Retail'],
      growthRate: '7.6%'
    }
  },
  {
    id: 'costa-mesa',
    slug: 'costa-mesa',
    city: 'Costa Mesa',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 111918,
    tier: 2,
    coordinates: { lat: 33.6412, lng: -117.9187 },
    neighborhoods: ['South Coast Metro', 'Eastside', 'Westside', 'Mesa Verde', 'College Park'],
    landmarks: ['South Coast Plaza', 'Segerstrom Center for the Arts', 'OC Fair & Event Center', 'The LAB', 'The Camp'],
    industries: ['Retail', 'Arts & Culture', 'Manufacturing', 'Professional Services', 'Design'],
    nickname: 'City of the Arts',
    description: 'Cultural hub featuring world-class shopping at South Coast Plaza and performing arts venues',
    businessStats: {
      totalBusinesses: 10500,
      topIndustries: ['Retail', 'Arts', 'Design'],
      growthRate: '9.7%'
    }
  },
  {
    id: 'downey',
    slug: 'downey',
    city: 'Downey',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 114355,
    tier: 2,
    coordinates: { lat: 33.9401, lng: -118.1332 },
    neighborhoods: ['Downtown', 'North Downey', 'South Downey', 'West Downey', 'Northeast Downey'],
    landmarks: ['Columbia Memorial Space Center', 'Downey Theatre', 'Stonewood Center', 'Apollo Park', 'Oldest McDonald\'s'],
    industries: ['Healthcare', 'Aerospace Heritage', 'Retail', 'Manufacturing', 'Professional Services'],
    nickname: 'Birthplace of Apollo',
    description: 'Historic aerospace city where Apollo space program began, now thriving healthcare hub',
    businessStats: {
      totalBusinesses: 9500,
      topIndustries: ['Healthcare', 'Retail', 'Services'],
      growthRate: '6.9%'
    }
  },
  {
    id: 'norwalk',
    slug: 'norwalk',
    city: 'Norwalk',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 102773,
    tier: 2,
    coordinates: { lat: 33.9022, lng: -118.0817 },
    neighborhoods: ['North Norwalk', 'South Norwalk', 'Studebaker', 'Civic Center', 'Southeast'],
    landmarks: ['Norwalk Town Square', 'Cerritos College', 'Norwalk Park', 'DD Johnston-Hargitt House Museum'],
    industries: ['Government Services', 'Education', 'Healthcare', 'Retail', 'Transportation'],
    nickname: 'Gateway City',
    description: 'Family-friendly city with strong community services and convenient central location',
    businessStats: {
      totalBusinesses: 7200,
      topIndustries: ['Government', 'Education', 'Healthcare'],
      growthRate: '5.8%'
    }
  },
  {
    id: 'cerritos',
    slug: 'cerritos',
    city: 'Cerritos',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 49578,
    tier: 2,
    coordinates: { lat: 33.8583, lng: -118.0648 },
    neighborhoods: ['Los Cerritos', 'Villa Cerritos', 'Westgate', 'Town Center', 'Artesia Boulevard Corridor'],
    landmarks: ['Cerritos Center for Performing Arts', 'Los Cerritos Center', 'Cerritos Library', 'Heritage Park', 'Cerritos Sculpture Garden'],
    industries: ['Auto Sales', 'Retail', 'Professional Services', 'Finance', 'Healthcare'],
    nickname: 'Auto Square',
    description: 'Premier auto mall destination with world-class performing arts center and library',
    businessStats: {
      totalBusinesses: 4800,
      topIndustries: ['Auto Sales', 'Retail', 'Services'],
      growthRate: '7.3%'
    }
  },
  {
    id: 'lakewood',
    slug: 'lakewood',
    city: 'Lakewood',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 82496,
    tier: 2,
    coordinates: { lat: 33.8536, lng: -118.1340 },
    neighborhoods: ['Lakewood Village', 'Lakewood Park', 'Mayfair', 'El Dorado', 'Lakewood Mutuals'],
    landmarks: ['Lakewood Center', 'Lakewood Country Club', 'Bolivar Park', 'Monte Verde Park', 'San Martin Park'],
    industries: ['Retail', 'Healthcare', 'Education', 'Professional Services', 'Manufacturing'],
    nickname: 'Tomorrow\'s City Today',
    description: 'Post-war planned community known for excellent schools and family neighborhoods',
    businessStats: {
      totalBusinesses: 6500,
      topIndustries: ['Retail', 'Healthcare', 'Education'],
      growthRate: '6.2%'
    }
  },
  // Tier 3: Extended Coverage (sample - add more as needed)
  {
    id: 'carson',
    slug: 'carson',
    city: 'Carson',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 95558,
    tier: 3,
    coordinates: { lat: 33.8317, lng: -118.2820 },
    neighborhoods: ['Carson Park', 'Dominguez', 'Scottsdale', 'Victoria Park', 'Carousel'],
    landmarks: ['StubHub Center', 'California State University Dominguez Hills', 'International Printing Museum', 'Carson Community Center'],
    industries: ['Logistics', 'Manufacturing', 'Oil Refining', 'Education', 'Sports & Entertainment'],
    nickname: 'Future Unlimited',
    description: 'Industrial powerhouse near ports with major sports venue and university campus',
    businessStats: {
      totalBusinesses: 8000,
      topIndustries: ['Logistics', 'Manufacturing', 'Oil'],
      growthRate: '7.1%'
    }
  },
  {
    id: 'compton',
    slug: 'compton',
    city: 'Compton',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 95740,
    tier: 3,
    coordinates: { lat: 33.8958, lng: -118.2201 },
    neighborhoods: ['Downtown', 'East Compton', 'West Compton', 'North Compton', 'Richland Farms'],
    landmarks: ['Compton Creek', 'Heritage House', 'Compton Airport', 'Martin Luther King Jr. Memorial'],
    industries: ['Transportation', 'Manufacturing', 'Healthcare', 'Retail', 'Music Industry'],
    nickname: 'Hub City',
    description: 'Historic city with rich musical heritage and growing business community',
    businessStats: {
      totalBusinesses: 5500,
      topIndustries: ['Transportation', 'Manufacturing', 'Healthcare'],
      growthRate: '6.1%'
    }
  },
  {
    id: 'bellflower',
    slug: 'bellflower',
    city: 'Bellflower',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 79190,
    tier: 3,
    coordinates: { lat: 33.8817, lng: -118.1170 },
    neighborhoods: ['Downtown', 'North Bellflower', 'East Bellflower', 'Somerset', 'Bellflower Boulevard'],
    landmarks: ['Bellflower Town Center', 'Thompson Park', 'Simms Park', 'Bellflower Bike Trail'],
    industries: ['Healthcare', 'Retail', 'Auto Services', 'Manufacturing', 'Education'],
    nickname: 'The Friendly City',
    description: 'Family-oriented community with historic downtown and excellent medical facilities',
    businessStats: {
      totalBusinesses: 4800,
      topIndustries: ['Healthcare', 'Retail', 'Auto Services'],
      growthRate: '5.3%'
    }
  },
  {
    id: 'signal-hill',
    slug: 'signal-hill',
    city: 'Signal Hill',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 11848,
    tier: 3,
    coordinates: { lat: 33.8047, lng: -118.1679 },
    neighborhoods: ['Signal Hill Heights', 'California Heights', 'Hilltop', 'Cherry Avenue Corridor'],
    landmarks: ['Signal Hill Park', 'Hilltop Park', 'Discovery Well Park', 'Sunset View Park'],
    industries: ['Oil & Gas', 'Retail', 'Auto Dealerships', 'Professional Services', 'Healthcare'],
    nickname: 'City on the Hill',
    description: 'Historic oil town with panoramic views and thriving auto mall district',
    businessStats: {
      totalBusinesses: 2200,
      topIndustries: ['Oil & Gas', 'Auto Sales', 'Retail'],
      growthRate: '8.4%'
    }
  },
  {
    id: 'seal-beach',
    slug: 'seal-beach',
    city: 'Seal Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Orange',
    population: 25242,
    tier: 3,
    coordinates: { lat: 33.7414, lng: -118.1048 },
    neighborhoods: ['Old Town', 'The Hill', 'Bridgeport', 'Surfside', 'College Park East'],
    landmarks: ['Seal Beach Pier', 'Main Street', 'Naval Weapons Station', 'Gum Grove Park', 'Eisenhower Park'],
    industries: ['Defense', 'Tourism', 'Healthcare', 'Retail', 'Professional Services'],
    nickname: 'Jewel of Orange County',
    description: 'Charming beach town with longest wooden pier in California and quaint Main Street',
    businessStats: {
      totalBusinesses: 2400,
      topIndustries: ['Defense', 'Tourism', 'Healthcare'],
      growthRate: '6.7%'
    }
  },
  {
    id: 'manhattan-beach',
    slug: 'manhattan-beach',
    city: 'Manhattan Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 35506,
    tier: 3,
    coordinates: { lat: 33.8847, lng: -118.4109 },
    neighborhoods: ['The Sand Section', 'The Hill Section', 'The Tree Section', 'Manhattan Village', 'El Porto'],
    landmarks: ['Manhattan Beach Pier', 'The Strand', 'Roundhouse Aquarium', 'Manhattan Village Mall', 'Polliwog Park'],
    industries: ['Professional Services', 'Finance', 'Healthcare', 'Retail', 'Beach Volleyball'],
    nickname: 'Pearl of the South Bay',
    description: 'Upscale beach city famous for volleyball, The Strand bike path, and excellent schools',
    businessStats: {
      totalBusinesses: 3200,
      topIndustries: ['Professional Services', 'Finance', 'Healthcare'],
      growthRate: '8.9%'
    }
  },
  {
    id: 'hermosa-beach',
    slug: 'hermosa-beach',
    city: 'Hermosa Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 19728,
    tier: 3,
    coordinates: { lat: 33.8622, lng: -118.3995 },
    neighborhoods: ['The Strand', 'Sand Section', 'Hermosa Valley', 'East Hermosa'],
    landmarks: ['Hermosa Beach Pier', 'The Strand Bike Path', 'Comedy & Magic Club', 'Hermosa Beach Volleyball Courts'],
    industries: ['Tourism', 'Professional Services', 'Retail', 'Entertainment', 'Healthcare'],
    nickname: 'Best Beach Town',
    description: 'Vibrant beach volleyball capital with lively pier and beachfront dining scene',
    businessStats: {
      totalBusinesses: 2100,
      topIndustries: ['Tourism', 'Services', 'Retail'],
      growthRate: '7.8%'
    }
  },
  {
    id: 'redondo-beach',
    slug: 'redondo-beach',
    city: 'Redondo Beach',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 71576,
    tier: 3,
    coordinates: { lat: 33.8492, lng: -118.3884 },
    neighborhoods: ['Redondo Beach Pier', 'Harbor District', 'North Redondo', 'South Redondo', 'El Nido'],
    landmarks: ['Redondo Beach Pier', 'Harbor Drive', 'Seaside Lagoon', 'Veterans Park', 'King Harbor Marina'],
    industries: ['Healthcare', 'Aerospace', 'Tourism', 'Marine Services', 'Retail'],
    nickname: 'Harbor City',
    description: 'Historic harbor city with bustling pier, marina, and waterfront entertainment',
    businessStats: {
      totalBusinesses: 6800,
      topIndustries: ['Healthcare', 'Aerospace', 'Tourism'],
      growthRate: '6.5%'
    }
  },
  {
    id: 'el-segundo',
    slug: 'el-segundo',
    city: 'El Segundo',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 17272,
    tier: 3,
    coordinates: { lat: 33.9192, lng: -118.4165 },
    neighborhoods: ['Downtown', 'Smoky Hollow', 'East El Segundo', 'Campus El Segundo'],
    landmarks: ['LAX', 'Dockweiler Beach', 'El Segundo Beach', 'Chevron Refinery', 'The Point'],
    industries: ['Aerospace', 'Technology', 'Energy', 'Media', 'Professional Services'],
    nickname: 'Aerospace Beach',
    description: 'Major aerospace and tech hub next to LAX with Fortune 500 headquarters',
    businessStats: {
      totalBusinesses: 3500,
      topIndustries: ['Aerospace', 'Tech', 'Energy'],
      growthRate: '12.1%'
    }
  },
  {
    id: 'marina-del-rey',
    slug: 'marina-del-rey',
    city: 'Marina del Rey',
    state: 'California',
    stateAbbr: 'CA',
    county: 'Los Angeles',
    population: 11757,
    tier: 3,
    coordinates: { lat: 33.9803, lng: -118.4517 },
    neighborhoods: ['Marina Peninsula', 'Silver Strand', 'Marina City Club', 'Oxford Triangle'],
    landmarks: ['Marina del Rey Harbor', 'Fisherman\'s Village', 'Burton Chace Park', 'Marina Beach', 'Admiralty Park'],
    industries: ['Marine Services', 'Tourism', 'Technology', 'Real Estate', 'Entertainment'],
    nickname: 'World\'s Largest Man-Made Marina',
    description: 'Premier boating destination with waterfront dining, tech companies, and luxury living',
    businessStats: {
      totalBusinesses: 2800,
      topIndustries: ['Marine Services', 'Tech', 'Tourism'],
      growthRate: '9.6%'
    }
  },
  // Non-California Major Cities
  {
    id: 'new-york-city',
    slug: 'new-york-city',
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    county: 'New York',
    population: 8336817,
    tier: 1,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    neighborhoods: [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'Bronx',
      'Staten Island',
      'Times Square',
      'SoHo',
      'Greenwich Village'
    ],
    landmarks: [
      'Statue of Liberty',
      'Empire State Building',
      'Central Park',
      'Times Square',
      'Brooklyn Bridge',
      'One World Trade Center',
      'Metropolitan Museum'
    ],
    industries: ['Finance', 'Media', 'Technology', 'Real Estate', 'Fashion'],
    nickname: 'The Big Apple',
    description: 'Global financial capital and cultural hub with endless opportunities',
    businessStats: {
      totalBusinesses: 950000,
      topIndustries: ['Finance', 'Media', 'Tech'],
      growthRate: '12.1%'
    }
  },
  {
    id: 'brooklyn',
    slug: 'brooklyn',
    city: 'Brooklyn',
    state: 'New York',
    stateAbbr: 'NY',
    county: 'Kings',
    population: 2736074,
    tier: 1,
    coordinates: { lat: 40.6782, lng: -73.9442 },
    neighborhoods: [
      'Williamsburg',
      'DUMBO',
      'Park Slope',
      'Brooklyn Heights',
      'Bushwick',
      'Greenpoint',
      'Bed-Stuy',
      'Crown Heights'
    ],
    landmarks: [
      'Brooklyn Bridge',
      'Coney Island',
      'Prospect Park',
      'Brooklyn Museum',
      'Barclays Center',
      'Brooklyn Botanic Garden'
    ],
    industries: ['Technology', 'Creative Arts', 'Manufacturing', 'Healthcare', 'E-commerce'],
    nickname: 'Borough of Homes and Churches',
    description: 'Dynamic e-commerce hub with thriving tech and creative scenes',
    businessStats: {
      totalBusinesses: 85000,
      topIndustries: ['E-commerce', 'Tech', 'Creative'],
      growthRate: '14.3%'
    }
  },
  {
    id: 'queens',
    slug: 'queens',
    city: 'Queens',
    state: 'New York',
    stateAbbr: 'NY',
    county: 'Queens',
    population: 2405464,
    tier: 1,
    coordinates: { lat: 40.7282, lng: -73.7949 },
    neighborhoods: [
      'Astoria',
      'Long Island City',
      'Flushing',
      'Jackson Heights',
      'Forest Hills',
      'Jamaica',
      'Bayside',
      'Corona'
    ],
    landmarks: [
      'Flushing Meadows Corona Park',
      'Citi Field',
      'US Open Tennis Center',
      'MoMA PS1',
      'Queens Museum'
    ],
    industries: ['Transportation', 'Healthcare', 'Retail', 'Food Industry', 'Multilingual SEO'],
    nickname: 'The World\'s Borough',
    description: 'Most diverse county in America with multilingual business opportunities',
    businessStats: {
      totalBusinesses: 72000,
      topIndustries: ['Multilingual SEO', 'Healthcare', 'Food'],
      growthRate: '11.7%'
    }
  },
  {
    id: 'houston',
    slug: 'houston',
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    county: 'Harris',
    population: 2304580,
    tier: 1,
    coordinates: { lat: 29.7604, lng: -95.3698 },
    neighborhoods: [
      'Downtown',
      'Midtown',
      'Montrose',
      'The Heights',
      'River Oaks',
      'Memorial',
      'Galleria',
      'Museum District'
    ],
    landmarks: [
      'Space Center Houston',
      'Museum District',
      'Houston Zoo',
      'Buffalo Bayou Park',
      'Minute Maid Park'
    ],
    industries: ['Energy', 'Healthcare', 'Aerospace', 'Manufacturing', 'Technology'],
    nickname: 'Space City',
    description: 'Energy sector powerhouse with NASA and leading medical centers',
    businessStats: {
      totalBusinesses: 185000,
      topIndustries: ['Energy', 'Healthcare', 'Aerospace'],
      growthRate: '13.5%'
    }
  },
  {
    id: 'dallas',
    slug: 'dallas',
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    county: 'Dallas',
    population: 1304379,
    tier: 1,
    coordinates: { lat: 32.7767, lng: -96.7970 },
    neighborhoods: [
      'Uptown',
      'Deep Ellum',
      'Bishop Arts District',
      'Highland Park',
      'Oak Lawn',
      'Design District',
      'Lower Greenville',
      'Victory Park'
    ],
    landmarks: [
      'Reunion Tower',
      'Dallas Arboretum',
      'Sixth Floor Museum',
      'Dallas Museum of Art',
      'AT&T Stadium'
    ],
    industries: ['Technology', 'Finance', 'Telecommunications', 'Healthcare', 'B2B'],
    nickname: 'Big D',
    description: 'B2B specialist hub with strong finance and telecom sectors',
    businessStats: {
      totalBusinesses: 125000,
      topIndustries: ['B2B', 'Finance', 'Telecom'],
      growthRate: '14.8%'
    }
  },
  {
    id: 'austin',
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    county: 'Travis',
    population: 964254,
    tier: 1,
    coordinates: { lat: 30.2672, lng: -97.7431 },
    neighborhoods: [
      'Downtown',
      'South Congress',
      'East Austin',
      'Zilker',
      'Hyde Park',
      'Mueller',
      'Domain',
      'Westlake'
    ],
    landmarks: [
      'State Capitol',
      'Sixth Street',
      'Lady Bird Lake',
      'Barton Springs Pool',
      'Austin City Limits'
    ],
    industries: ['Technology', 'Startups', 'Music & Entertainment', 'Education', 'Clean Energy'],
    nickname: 'Silicon Hills',
    description: 'Startup favorite with thriving tech scene and live music capital',
    businessStats: {
      totalBusinesses: 82000,
      topIndustries: ['Startups', 'Tech', 'Entertainment'],
      growthRate: '18.2%'
    }
  },
  {
    id: 'san-antonio',
    slug: 'san-antonio',
    city: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    county: 'Bexar',
    population: 1547253,
    tier: 1,
    coordinates: { lat: 29.4241, lng: -98.4936 },
    neighborhoods: [
      'Downtown',
      'Pearl District',
      'Alamo Heights',
      'Stone Oak',
      'The Dominion',
      'King William',
      'Southtown',
      'Medical Center'
    ],
    landmarks: [
      'The Alamo',
      'River Walk',
      'Pearl Brewery',
      'San Antonio Missions',
      'Six Flags Fiesta Texas'
    ],
    industries: ['Healthcare', 'Military', 'Tourism', 'Cybersecurity', 'Bioscience'],
    nickname: 'Alamo City',
    description: 'Healthcare SEO leader with major military presence and historic tourism',
    businessStats: {
      totalBusinesses: 98000,
      topIndustries: ['Healthcare', 'Military', 'Tourism'],
      growthRate: '11.9%'
    }
  },
  {
    id: 'miami',
    slug: 'miami',
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    county: 'Miami-Dade',
    population: 442241,
    tier: 1,
    coordinates: { lat: 25.7617, lng: -80.1918 },
    neighborhoods: [
      'South Beach',
      'Downtown',
      'Brickell',
      'Wynwood',
      'Design District',
      'Coral Gables',
      'Coconut Grove',
      'Little Havana'
    ],
    landmarks: [
      'South Beach',
      'Art Deco District',
      'Vizcaya Museum',
      'Wynwood Walls',
      'Bayside Marketplace'
    ],
    industries: ['International Trade', 'Finance', 'Tourism', 'Real Estate', 'Technology'],
    nickname: 'Magic City',
    description: 'International SEO gateway to Latin America with booming tech scene',
    businessStats: {
      totalBusinesses: 65000,
      topIndustries: ['International Trade', 'Finance', 'Tourism'],
      growthRate: '15.7%'
    }
  },
  {
    id: 'orlando',
    slug: 'orlando',
    city: 'Orlando',
    state: 'Florida',
    stateAbbr: 'FL',
    county: 'Orange',
    population: 307573,
    tier: 1,
    coordinates: { lat: 28.5383, lng: -81.3792 },
    neighborhoods: [
      'Downtown',
      'Winter Park',
      'Thornton Park',
      'College Park',
      'Mills 50',
      'Baldwin Park',
      'Dr. Phillips',
      'Lake Nona'
    ],
    landmarks: [
      'Walt Disney World',
      'Universal Orlando',
      'SeaWorld',
      'Lake Eola',
      'Orlando Science Center'
    ],
    industries: ['Tourism', 'Healthcare', 'Technology', 'Aerospace', 'Entertainment'],
    nickname: 'The City Beautiful',
    description: 'Tourism expert capital with theme parks and growing tech sector',
    businessStats: {
      totalBusinesses: 52000,
      topIndustries: ['Tourism', 'Entertainment', 'Tech'],
      growthRate: '13.4%'
    }
  },
  {
    id: 'tampa',
    slug: 'tampa',
    city: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    county: 'Hillsborough',
    population: 399700,
    tier: 1,
    coordinates: { lat: 27.9506, lng: -82.4572 },
    neighborhoods: [
      'Downtown',
      'Ybor City',
      'Hyde Park',
      'Westshore',
      'Channelside',
      'Seminole Heights',
      'Davis Islands',
      'Bayshore'
    ],
    landmarks: [
      'Busch Gardens',
      'Tampa Riverwalk',
      'Ybor City Historic District',
      'Florida Aquarium',
      'Amalie Arena'
    ],
    industries: ['Finance', 'Healthcare', 'Technology', 'Defense', 'Tourism'],
    nickname: 'Cigar City',
    description: 'Growth leader with expanding finance and healthcare sectors',
    businessStats: {
      totalBusinesses: 48000,
      topIndustries: ['Finance', 'Healthcare', 'Tech'],
      growthRate: '14.1%'
    }
  },
  {
    id: 'jacksonville',
    slug: 'jacksonville',
    city: 'Jacksonville',
    state: 'Florida',
    stateAbbr: 'FL',
    county: 'Duval',
    population: 949611,
    tier: 1,
    coordinates: { lat: 30.3322, lng: -81.6557 },
    neighborhoods: [
      'Downtown',
      'Riverside',
      'San Marco',
      'Beaches',
      'Southside',
      'Arlington',
      'Mandarin',
      'Avondale'
    ],
    landmarks: [
      'Jacksonville Beach',
      'St. Johns River',
      'Cummer Museum',
      'Jacksonville Zoo',
      'TIAA Bank Field'
    ],
    industries: ['Logistics', 'Finance', 'Healthcare', 'Military', 'Insurance'],
    nickname: 'River City',
    description: 'Logistics SEO hub with major port and distribution centers',
    businessStats: {
      totalBusinesses: 72000,
      topIndustries: ['Logistics', 'Finance', 'Healthcare'],
      growthRate: '10.8%'
    }
  },
  {
    id: 'chicago',
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    county: 'Cook',
    population: 2746388,
    tier: 1,
    coordinates: { lat: 41.8781, lng: -87.6298 },
    neighborhoods: [
      'The Loop',
      'River North',
      'Lincoln Park',
      'Wicker Park',
      'Lakeview',
      'Gold Coast',
      'West Loop',
      'Hyde Park'
    ],
    landmarks: [
      'Willis Tower',
      'Millennium Park',
      'Navy Pier',
      'Art Institute of Chicago',
      'Cloud Gate',
      'Magnificent Mile'
    ],
    industries: ['Finance', 'Technology', 'Manufacturing', 'Healthcare', 'Transportation'],
    nickname: 'The Windy City',
    description: 'Midwest leader in finance, tech, and diverse industries',
    businessStats: {
      totalBusinesses: 225000,
      topIndustries: ['Finance', 'Tech', 'Manufacturing'],
      growthRate: '11.3%'
    }
  },
  {
    id: 'phoenix',
    slug: 'phoenix',
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    county: 'Maricopa',
    population: 1608139,
    tier: 1,
    coordinates: { lat: 33.4484, lng: -112.0740 },
    neighborhoods: [
      'Downtown',
      'Scottsdale',
      'Tempe',
      'Arcadia',
      'Paradise Valley',
      'Ahwatukee',
      'Desert Ridge',
      'Biltmore'
    ],
    landmarks: [
      'Camelback Mountain',
      'Desert Botanical Garden',
      'Heard Museum',
      'Phoenix Zoo',
      'Papago Park'
    ],
    industries: ['Technology', 'Real Estate', 'Healthcare', 'Manufacturing', 'Finance'],
    nickname: 'Valley of the Sun',
    description: 'Fastest growing metro with booming tech and real estate sectors',
    businessStats: {
      totalBusinesses: 115000,
      topIndustries: ['Tech', 'Real Estate', 'Healthcare'],
      growthRate: '16.9%'
    }
  },
  {
    id: 'philadelphia',
    slug: 'philadelphia',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    stateAbbr: 'PA',
    county: 'Philadelphia',
    population: 1603797,
    tier: 1,
    coordinates: { lat: 39.9526, lng: -75.1652 },
    neighborhoods: [
      'Center City',
      'Old City',
      'Rittenhouse Square',
      'Fishtown',
      'Northern Liberties',
      'University City',
      'Manayunk',
      'South Philly'
    ],
    landmarks: [
      'Liberty Bell',
      'Independence Hall',
      'Philadelphia Museum of Art',
      'Reading Terminal Market',
      'Eastern State Penitentiary'
    ],
    industries: ['Healthcare', 'Education', 'Finance', 'Biotechnology', 'History & Tourism'],
    nickname: 'City of Brotherly Love',
    description: 'Historic excellence in healthcare, education, and biotech innovation',
    businessStats: {
      totalBusinesses: 128000,
      topIndustries: ['Healthcare', 'Education', 'Biotech'],
      growthRate: '10.2%'
    }
  },
  {
    id: 'las-vegas',
    slug: 'las-vegas',
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    county: 'Clark',
    population: 641903,
    tier: 1,
    coordinates: { lat: 36.1699, lng: -115.1398 },
    neighborhoods: [
      'The Strip',
      'Downtown',
      'Summerlin',
      'Henderson',
      'Green Valley',
      'Centennial Hills',
      'Spring Valley',
      'Paradise'
    ],
    landmarks: [
      'Las Vegas Strip',
      'Fremont Street',
      'Red Rock Canyon',
      'Hoover Dam',
      'Bellagio Fountains'
    ],
    industries: ['Hospitality', 'Entertainment', 'Gaming', 'Conventions', 'Technology'],
    nickname: 'Entertainment Capital',
    description: 'Hospitality expert with world-class entertainment and convention industry',
    businessStats: {
      totalBusinesses: 58000,
      topIndustries: ['Hospitality', 'Entertainment', 'Gaming'],
      growthRate: '12.7%'
    }
  },
  {
    id: 'seattle',
    slug: 'seattle',
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    county: 'King',
    population: 737015,
    tier: 1,
    coordinates: { lat: 47.6062, lng: -122.3321 },
    neighborhoods: [
      'Capitol Hill',
      'Belltown',
      'Fremont',
      'Ballard',
      'Queen Anne',
      'University District',
      'Georgetown',
      'West Seattle'
    ],
    landmarks: [
      'Space Needle',
      'Pike Place Market',
      'Seattle Waterfront',
      'Museum of Pop Culture',
      'Chihuly Garden and Glass'
    ],
    industries: ['Technology', 'E-commerce', 'Aerospace', 'Coffee', 'Healthcare'],
    nickname: 'Emerald City',
    description: 'Tech pioneer home to Amazon, Microsoft, and innovative startups',
    businessStats: {
      totalBusinesses: 68000,
      topIndustries: ['Tech', 'E-commerce', 'Aerospace'],
      growthRate: '15.3%'
    }
  },
  {
    id: 'boston',
    slug: 'boston',
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    county: 'Suffolk',
    population: 675647,
    tier: 1,
    coordinates: { lat: 42.3601, lng: -71.0589 },
    neighborhoods: [
      'Back Bay',
      'Beacon Hill',
      'North End',
      'South End',
      'Cambridge',
      'Fenway',
      'Seaport',
      'Jamaica Plain'
    ],
    landmarks: [
      'Freedom Trail',
      'Fenway Park',
      'Boston Common',
      'Harvard University',
      'MIT',
      'Boston Harbor'
    ],
    industries: ['Education', 'Healthcare', 'Biotechnology', 'Finance', 'Technology'],
    nickname: 'The Hub',
    description: 'Education sector leader with world-class universities and biotech',
    businessStats: {
      totalBusinesses: 62000,
      topIndustries: ['Education', 'Healthcare', 'Biotech'],
      growthRate: '11.8%'
    }
  },
  {
    id: 'atlanta',
    slug: 'atlanta',
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    county: 'Fulton',
    population: 498715,
    tier: 1,
    coordinates: { lat: 33.7490, lng: -84.3880 },
    neighborhoods: [
      'Midtown',
      'Buckhead',
      'Downtown',
      'Virginia-Highland',
      'Inman Park',
      'Old Fourth Ward',
      'West End',
      'East Atlanta'
    ],
    landmarks: [
      'Georgia Aquarium',
      'World of Coca-Cola',
      'Martin Luther King Jr. Historic Site',
      'Fox Theatre',
      'Atlanta Botanical Garden'
    ],
    industries: ['Technology', 'Film & Media', 'Transportation', 'Finance', 'Healthcare'],
    nickname: 'The ATL',
    description: 'Southeast hub for business, film production, and transportation',
    businessStats: {
      totalBusinesses: 55000,
      topIndustries: ['Tech', 'Film', 'Transportation'],
      growthRate: '13.6%'
    }
  },
  {
    id: 'denver',
    slug: 'denver',
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    county: 'Denver',
    population: 715522,
    tier: 1,
    coordinates: { lat: 39.7392, lng: -104.9903 },
    neighborhoods: [
      'LoDo',
      'RiNo',
      'Cherry Creek',
      'Highlands',
      'Capitol Hill',
      'Washington Park',
      'Five Points',
      'Baker'
    ],
    landmarks: [
      'Red Rocks Amphitheatre',
      'Denver Art Museum',
      'Union Station',
      'Denver Botanic Gardens',
      'Mile High Stadium'
    ],
    industries: ['Technology', 'Energy', 'Aerospace', 'Cannabis', 'Tourism'],
    nickname: 'Mile High City',
    description: 'Mountain region tech hub with energy and aerospace industries',
    businessStats: {
      totalBusinesses: 58000,
      topIndustries: ['Tech', 'Energy', 'Aerospace'],
      growthRate: '14.2%'
    }
  },
  {
    id: 'portland',
    slug: 'portland',
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    county: 'Multnomah',
    population: 652503,
    tier: 1,
    coordinates: { lat: 45.5152, lng: -122.6784 },
    neighborhoods: [
      'Pearl District',
      'Downtown',
      'Hawthorne',
      'Alberta Arts',
      'Sellwood',
      'Nob Hill',
      'Belmont',
      'Mississippi'
    ],
    landmarks: [
      'Powell\'s City of Books',
      'Portland Japanese Garden',
      'International Rose Test Garden',
      'Lan Su Chinese Garden',
      'Forest Park'
    ],
    industries: ['Technology', 'Creative Services', 'Manufacturing', 'Green Energy', 'Food & Beverage'],
    nickname: 'Rose City',
    description: 'Creative industries leader with sustainable business focus',
    businessStats: {
      totalBusinesses: 48000,
      topIndustries: ['Creative', 'Tech', 'Green Energy'],
      growthRate: '11.5%'
    }
  },
  {
    id: 'detroit',
    slug: 'detroit',
    city: 'Detroit',
    state: 'Michigan',
    stateAbbr: 'MI',
    county: 'Wayne',
    population: 639111,
    tier: 1,
    coordinates: { lat: 42.3314, lng: -83.0458 },
    neighborhoods: [
      'Downtown',
      'Midtown',
      'Corktown',
      'Eastern Market',
      'Greektown',
      'New Center',
      'Rivertown',
      'West Village'
    ],
    landmarks: [
      'Detroit Institute of Arts',
      'Motown Museum',
      'Fox Theatre',
      'Belle Isle Park',
      'Renaissance Center'
    ],
    industries: ['Automotive', 'Manufacturing', 'Healthcare', 'Technology', 'Sports & Entertainment'],
    nickname: 'Motor City',
    description: 'Manufacturing SEO capital with automotive heritage and tech revival',
    businessStats: {
      totalBusinesses: 42000,
      topIndustries: ['Manufacturing', 'Automotive', 'Tech'],
      growthRate: '9.8%'
    }
  },
  {
    id: 'nashville',
    slug: 'nashville',
    city: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Davidson',
    population: 689447,
    tier: 1,
    coordinates: { lat: 36.1627, lng: -86.7816 },
    neighborhoods: [
      'Downtown',
      'The Gulch',
      'East Nashville',
      'Germantown',
      'Music Row',
      '12 South',
      'Green Hills',
      'Belle Meade'
    ],
    landmarks: [
      'Grand Ole Opry',
      'Country Music Hall of Fame',
      'Ryman Auditorium',
      'Broadway Honky Tonks',
      'Parthenon'
    ],
    industries: ['Music & Entertainment', 'Healthcare', 'Tourism', 'Publishing', 'Technology'],
    nickname: 'Music City',
    description: 'Music industry capital with growing healthcare and tech sectors',
    businessStats: {
      totalBusinesses: 52000,
      topIndustries: ['Music', 'Healthcare', 'Tourism'],
      growthRate: '13.1%'
    }
  },
  {
    id: 'charlotte',
    slug: 'charlotte',
    city: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    county: 'Mecklenburg',
    population: 874579,
    tier: 1,
    coordinates: { lat: 35.2271, lng: -80.8431 },
    neighborhoods: [
      'Uptown',
      'South End',
      'NoDa',
      'Plaza Midwood',
      'Dilworth',
      'Myers Park',
      'Elizabeth',
      'Ballantyne'
    ],
    landmarks: [
      'NASCAR Hall of Fame',
      'Discovery Place',
      'Mint Museum',
      'Carowinds',
      'U.S. National Whitewater Center'
    ],
    industries: ['Finance', 'Banking', 'Technology', 'Energy', 'Healthcare'],
    nickname: 'Queen City',
    description: 'Finance sector powerhouse and second-largest banking center in US',
    businessStats: {
      totalBusinesses: 68000,
      topIndustries: ['Finance', 'Banking', 'Tech'],
      growthRate: '14.7%'
    }
  },
  {
    id: 'buffalo',
    slug: 'buffalo',
    city: 'Buffalo',
    state: 'New York',
    stateAbbr: 'NY',
    county: 'Erie',
    population: 278349,
    tier: 2,
    coordinates: { lat: 42.8864, lng: -78.8784 },
    neighborhoods: [
      'Downtown',
      'Allentown',
      'Elmwood Village',
      'North Buffalo',
      'Hertel Avenue',
      'Canalside',
      'Larkinville',
      'West Side'
    ],
    landmarks: [
      'Niagara Falls',
      'Albright-Knox Art Gallery',
      'Buffalo City Hall',
      'Frank Lloyd Wright\'s Darwin Martin House',
      'Canalside'
    ],
    industries: ['Healthcare', 'Education', 'Manufacturing', 'Tourism', 'Clean Energy'],
    nickname: 'City of Good Neighbors',
    description: 'Regional leader in healthcare and education near Niagara Falls',
    businessStats: {
      totalBusinesses: 22000,
      topIndustries: ['Healthcare', 'Education', 'Manufacturing'],
      growthRate: '8.5%'
    }
  },
  {
    id: 'tulsa',
    slug: 'tulsa',
    city: 'Tulsa',
    state: 'Oklahoma',
    stateAbbr: 'OK',
    county: 'Tulsa',
    population: 413066,
    tier: 1,
    coordinates: { lat: 36.1540, lng: -95.9928 },
    neighborhoods: [
      'Downtown',
      'Brookside',
      'Cherry Street',
      'Pearl District',
      'Brady Arts District',
      'Greenwood District',
      'Riverside',
      'Utica Square'
    ],
    landmarks: [
      'Philbrook Museum of Art',
      'Tulsa Air and Space Museum',
      'BOK Center',
      'Gathering Place',
      'Gilcrease Museum',
      'Golden Driller',
      'Boston Avenue Methodist Church'
    ],
    industries: ['Energy', 'Oil & Gas', 'Aerospace', 'Healthcare', 'Manufacturing', 'Technology'],
    nickname: 'Oil Capital of the World',
    description: 'Historic oil and energy hub with thriving arts scene and growing tech sector',
    businessStats: {
      totalBusinesses: 35000,
      topIndustries: ['Energy', 'Oil & Gas', 'Aerospace'],
      growthRate: '10.2%'
    }
  }
]

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug)
}

export const getLocationsByTier = (tier: 1 | 2 | 3): Location[] => {
  return locations.filter(location => location.tier === tier)
}

export const getPrimaryLocations = (): Location[] => {
  return getLocationsByTier(1)
}

export const getAllLocationSlugs = (): string[] => {
  return locations.map(location => location.slug)
}

export const generateLocationTitle = (service: string, location: Location): string => {
  return `${service} in ${location.city}, ${location.stateAbbr} | GoalSEO.ai`
}

export const generateLocationDescription = (service: string, location: Location): string => {
  return `Professional ${service.toLowerCase()} services in ${location.city}, ${location.state}. Get 387% average ROI with our AI-powered SEO strategies. Free consultation available.`
}