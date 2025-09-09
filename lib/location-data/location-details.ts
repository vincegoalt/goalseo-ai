export interface LocationDetails {
  name: string
  slug: string
  county: string
  population: string
  medianIncome: string
  businessCount: string
  distance: string // from Long Beach
  landmarks: string[]
  neighborhoods: string[]
  characteristics: string[]
  localChallenges: string[]
  demographics: {
    primary: string
    secondary: string
  }
}

export const locationDetails: Record<string, LocationDetails> = {
  'belmont-shore': {
    name: 'Belmont Shore',
    slug: 'belmont-shore',
    county: 'Los Angeles',
    population: '15,000+',
    medianIncome: '$95,000',
    businessCount: '500+',
    distance: '0 miles (within Long Beach)',
    landmarks: ['2nd Street Shopping District', 'Belmont Veterans Memorial Pier', 'Bayshore Beach'],
    neighborhoods: ['The Peninsula', 'Belmont Heights', 'Alamitos Bay'],
    characteristics: ['Beachfront community', 'High foot traffic', 'Tourist destination', 'Upscale shopping area'],
    localChallenges: ['Seasonal business fluctuations', 'High competition', 'Parking limitations', 'Tourist vs local balance'],
    demographics: {
      primary: 'Affluent professionals ages 35-55',
      secondary: 'Young families and retirees'
    }
  },
  'naples': {
    name: 'Naples',
    slug: 'naples',
    county: 'Los Angeles',
    population: '3,000+',
    medianIncome: '$125,000',
    businessCount: '150+',
    distance: '1 mile',
    landmarks: ['Naples Canals', 'Naples Plaza', 'Alamitos Bay Marina'],
    neighborhoods: ['Naples Island', 'The Peninsula', 'Treasure Island'],
    characteristics: ['Exclusive waterfront', 'High-end residential', 'Gondola rides', 'Italian-inspired architecture'],
    localChallenges: ['Ultra-competitive luxury market', 'Seasonal tourism', 'Limited commercial space', 'High operating costs'],
    demographics: {
      primary: 'High-net-worth individuals 45-65',
      secondary: 'Luxury vacation home owners'
    }
  },
  'bixby-knolls': {
    name: 'Bixby Knolls',
    slug: 'bixby-knolls',
    county: 'Los Angeles',
    population: '35,000+',
    medianIncome: '$75,000',
    businessCount: '800+',
    distance: '3 miles',
    landmarks: ['Atlantic Avenue Corridor', 'Bixby Park', 'Long Beach Boulevard'],
    neighborhoods: ['California Heights', 'Los Cerritos', 'Virginia Country Club'],
    characteristics: ['Family-friendly', 'Diverse businesses', 'Historic district', 'Growing tech scene'],
    localChallenges: ['Gentrification concerns', 'Parking issues', 'Competition from chains', 'Changing demographics'],
    demographics: {
      primary: 'Middle-class families ages 30-50',
      secondary: 'Young professionals and seniors'
    }
  },
  'downtown-long-beach': {
    name: 'Downtown Long Beach',
    slug: 'downtown-long-beach',
    county: 'Los Angeles',
    population: '50,000+',
    medianIncome: '$65,000',
    businessCount: '2,000+',
    distance: '0 miles (city center)',
    landmarks: ['Pike Outlets', 'Aquarium of the Pacific', 'Queen Mary', 'Long Beach Convention Center'],
    neighborhoods: ['Pine Avenue District', 'East Village', 'Waterfront', 'Civic Center'],
    characteristics: ['Business hub', 'Entertainment district', 'Convention destination', 'High-rise residential'],
    localChallenges: ['High competition', 'Event-dependent traffic', 'Parking costs', 'Homeless concerns'],
    demographics: {
      primary: 'Urban professionals ages 25-45',
      secondary: 'Convention visitors and tourists'
    }
  },
  'signal-hill': {
    name: 'Signal Hill',
    slug: 'signal-hill',
    county: 'Los Angeles',
    population: '11,500+',
    medianIncome: '$55,000',
    businessCount: '600+',
    distance: '3 miles',
    landmarks: ['Signal Hill Park', 'Hilltop Park', 'Discovery Well Park'],
    neighborhoods: ['Hilltop', 'California Heights Adjacent', 'Burnett'],
    characteristics: ['Oil heritage', 'Panoramic views', 'Small city feel', 'Auto dealership row'],
    localChallenges: ['Limited retail space', 'Industrial image', 'Traffic congestion', 'Competition from Long Beach'],
    demographics: {
      primary: 'Working families ages 30-45',
      secondary: 'Young renters and seniors'
    }
  },
  'lakewood': {
    name: 'Lakewood',
    slug: 'lakewood',
    county: 'Los Angeles',
    population: '80,000+',
    medianIncome: '$85,000',
    businessCount: '1,500+',
    distance: '5 miles',
    landmarks: ['Lakewood Center Mall', 'Lakewood Country Club', 'Del Valle Park'],
    neighborhoods: ['Lakewood Village', 'Lakewood Park', 'Lakewood Mutuals'],
    characteristics: ['Post-war planned community', 'Family-oriented', 'Strong schools', 'Mall-centric commerce'],
    localChallenges: ['Mall competition', 'Aging infrastructure', 'Limited nightlife', 'Chain store dominance'],
    demographics: {
      primary: 'Suburban families ages 35-55',
      secondary: 'Retirees and young families'
    }
  },
  'seal-beach': {
    name: 'Seal Beach',
    slug: 'seal-beach',
    county: 'Orange',
    population: '24,000+',
    medianIncome: '$90,000',
    businessCount: '700+',
    distance: '8 miles',
    landmarks: ['Seal Beach Pier', 'Main Street', 'Naval Weapons Station'],
    neighborhoods: ['Old Town', 'The Hill', 'Bridgeport', 'Leisure World'],
    characteristics: ['Beach town charm', 'Historic Main Street', 'Senior community', 'Military presence'],
    localChallenges: ['Seasonal fluctuations', 'Parking limitations', 'High rents', 'Competition from HB'],
    demographics: {
      primary: 'Affluent retirees ages 55-75',
      secondary: 'Beach-loving families'
    }
  },
  'san-pedro': {
    name: 'San Pedro',
    slug: 'san-pedro',
    county: 'Los Angeles',
    population: '80,000+',
    medianIncome: '$60,000',
    businessCount: '1,200+',
    distance: '10 miles',
    landmarks: ['Port of Los Angeles', 'USS Iowa', 'Korean Bell', 'Cabrillo Beach'],
    neighborhoods: ['Downtown San Pedro', 'Point Fermin', 'San Pedro Hills', 'Harbor Gateway'],
    characteristics: ['Port town', 'Arts district emerging', 'Historic downtown', 'Waterfront development'],
    localChallenges: ['Industrial image', 'Gentrification', 'Port traffic', 'Distance from LA center'],
    demographics: {
      primary: 'Working-class families ages 35-50',
      secondary: 'Artists and young professionals'
    }
  },
  'carson': {
    name: 'Carson',
    slug: 'carson',
    county: 'Los Angeles',
    population: '95,000+',
    medianIncome: '$70,000',
    businessCount: '2,000+',
    distance: '8 miles',
    landmarks: ['StubHub Center', 'SouthBay Pavilion', 'Carson Community Center'],
    neighborhoods: ['Carson Park', 'Dominguez', 'Avalon Village', 'Scottsdale'],
    characteristics: ['Diverse community', 'Industrial/commercial mix', 'Sports destination', 'Oil refineries'],
    localChallenges: ['Industrial pollution', 'Traffic congestion', 'Image issues', 'Competition from Torrance'],
    demographics: {
      primary: 'Diverse families ages 30-50',
      secondary: 'Industrial workers and immigrants'
    }
  },
  'torrance': {
    name: 'Torrance',
    slug: 'torrance',
    county: 'Los Angeles',
    population: '145,000+',
    medianIncome: '$85,000',
    businessCount: '4,000+',
    distance: '12 miles',
    landmarks: ['Del Amo Fashion Center', 'Torrance Beach', 'Wilson Park', 'Toyota USA HQ'],
    neighborhoods: ['Old Torrance', 'Walteria', 'Hollywood Riviera', 'West Torrance'],
    characteristics: ['Corporate headquarters', 'Japanese businesses', 'Beach access', 'Strong schools'],
    localChallenges: ['High competition', 'Traffic issues', 'High commercial rents', 'Parking limitations'],
    demographics: {
      primary: 'Professional families ages 35-55',
      secondary: 'Asian community and tech workers'
    }
  },
  'redondo-beach': {
    name: 'Redondo Beach',
    slug: 'redondo-beach',
    county: 'Los Angeles',
    population: '67,000+',
    medianIncome: '$95,000',
    businessCount: '2,500+',
    distance: '15 miles',
    landmarks: ['Redondo Beach Pier', 'Harbor Drive', 'Seaside Lagoon', 'Veterans Park'],
    neighborhoods: ['Harbor Area', 'South Redondo', 'North Redondo', 'El Nido'],
    characteristics: ['Beach tourism', 'Harbor dining', 'Waterfront activities', 'Tech companies'],
    localChallenges: ['Seasonal business', 'Parking issues', 'High cost of living', 'Tourist management'],
    demographics: {
      primary: 'Affluent professionals ages 30-50',
      secondary: 'Beach enthusiasts and retirees'
    }
  },
  'hermosa-beach': {
    name: 'Hermosa Beach',
    slug: 'hermosa-beach',
    county: 'Los Angeles',
    population: '19,500+',
    medianIncome: '$120,000',
    businessCount: '800+',
    distance: '17 miles',
    landmarks: ['The Strand', 'Hermosa Beach Pier', 'Comedy & Magic Club'],
    neighborhoods: ['Sand Section', 'Valley Section', 'East Hermosa'],
    characteristics: ['Beach volleyball capital', 'Nightlife destination', 'Fitness culture', 'Upscale beach town'],
    localChallenges: ['Ultra-high rents', 'Limited parking', 'Noise complaints', 'Seasonal fluctuations'],
    demographics: {
      primary: 'Young professionals ages 25-40',
      secondary: 'Athletes and beach culture enthusiasts'
    }
  },
  'manhattan-beach': {
    name: 'Manhattan Beach',
    slug: 'manhattan-beach',
    county: 'Los Angeles',
    population: '35,000+',
    medianIncome: '$150,000',
    businessCount: '1,000+',
    distance: '18 miles',
    landmarks: ['Manhattan Beach Pier', 'The Strand', 'Polliwog Park', 'Downtown MB'],
    neighborhoods: ['The Hill', 'Sand Section', 'Tree Section', 'East Manhattan'],
    characteristics: ['Ultra-affluent', 'Top schools', 'Beach volleyball', 'Family-oriented luxury'],
    localChallenges: ['Extreme competition', 'Very high costs', 'Limited commercial space', 'Exclusivity barriers'],
    demographics: {
      primary: 'Wealthy families ages 40-55',
      secondary: 'Tech executives and celebrities'
    }
  },
  'palos-verdes-estates': {
    name: 'Palos Verdes Estates',
    slug: 'palos-verdes-estates',
    county: 'Los Angeles',
    population: '13,500+',
    medianIncome: '$175,000',
    businessCount: '300+',
    distance: '15 miles',
    landmarks: ['Malaga Cove Plaza', 'PV Golf Club', 'Lunada Bay'],
    neighborhoods: ['Malaga Cove', 'Lunada Bay', 'Valmonte', 'Montemalaga'],
    characteristics: ['Gated community feel', 'Ocean views', 'Equestrian trails', 'Mediterranean architecture'],
    localChallenges: ['Very limited commercial', 'Exclusive market', 'Geographic isolation', 'High barriers to entry'],
    demographics: {
      primary: 'Ultra-wealthy families ages 45-65',
      secondary: 'Retired executives and investors'
    }
  },
  'cerritos': {
    name: 'Cerritos',
    slug: 'cerritos',
    county: 'Los Angeles',
    population: '50,000+',
    medianIncome: '$95,000',
    businessCount: '1,800+',
    distance: '12 miles',
    landmarks: ['Cerritos Center', 'Cerritos Library', 'Heritage Park', 'Los Cerritos Center'],
    neighborhoods: ['West Cerritos', 'East Cerritos', 'Los Cerritos', 'South Cerritos'],
    characteristics: ['Auto Square', 'Diverse community', 'Top schools', 'Family-friendly'],
    localChallenges: ['Mall competition', 'High commercial rents', 'Traffic congestion', 'Chain dominance'],
    demographics: {
      primary: 'Asian families ages 35-50',
      secondary: 'Professional families'
    }
  },
  'downey': {
    name: 'Downey',
    slug: 'downey',
    county: 'Los Angeles',
    population: '113,000+',
    medianIncome: '$65,000',
    businessCount: '3,000+',
    distance: '15 miles',
    landmarks: ['Downey Landing', 'Columbia Memorial Space Center', 'Downey Theatre'],
    neighborhoods: ['Downtown Downey', 'North Downey', 'South Downey', 'West Downey'],
    characteristics: ['Aerospace heritage', 'Latino culture', 'Historic downtown', 'Growing arts scene'],
    localChallenges: ['Competition from malls', 'Parking issues', 'Gang perception', 'Economic diversity'],
    demographics: {
      primary: 'Latino families ages 30-45',
      secondary: 'Young professionals'
    }
  },
  'norwalk': {
    name: 'Norwalk',
    slug: 'norwalk',
    county: 'Los Angeles',
    population: '105,000+',
    medianIncome: '$60,000',
    businessCount: '2,500+',
    distance: '16 miles',
    landmarks: ['Norwalk Town Square', 'Norwalk Park', 'Metropolitan State Hospital'],
    neighborhoods: ['North Norwalk', 'South Norwalk', 'Southeast Norwalk', 'West Norwalk'],
    characteristics: ['Suburban feel', 'Government services', 'Transit hub', 'Diverse community'],
    localChallenges: ['Limited downtown', 'Image issues', 'Competition from Cerritos', 'Infrastructure needs'],
    demographics: {
      primary: 'Working families ages 35-50',
      secondary: 'Latino and Asian communities'
    }
  },
  'bellflower': {
    name: 'Bellflower',
    slug: 'bellflower',
    county: 'Los Angeles',
    population: '77,000+',
    medianIncome: '$55,000',
    businessCount: '1,500+',
    distance: '10 miles',
    landmarks: ['Bellflower Boulevard', 'Thompson Park', 'Bellflower Bike Trail'],
    neighborhoods: ['North Bellflower', 'South Bellflower', 'East Bellflower', 'West Bellflower'],
    characteristics: ['Dutch heritage', 'Boulevard culture', 'Transit-oriented', 'Diverse neighborhoods'],
    localChallenges: ['Crime perception', 'Aging infrastructure', 'Limited attractions', 'Economic challenges'],
    demographics: {
      primary: 'Working-class families ages 30-45',
      secondary: 'Young renters and immigrants'
    }
  },
  'hawaiian-gardens': {
    name: 'Hawaiian Gardens',
    slug: 'hawaiian-gardens',
    county: 'Los Angeles',
    population: '14,500+',
    medianIncome: '$45,000',
    businessCount: '400+',
    distance: '11 miles',
    landmarks: ['Gardens Casino', 'Furgeson Park', 'Hawaiian Gardens Community Center'],
    neighborhoods: ['Central HG', 'North HG', 'South HG'],
    characteristics: ['Casino town', 'Small city', 'Latino majority', 'Residential focus'],
    localChallenges: ['Casino dependency', 'Limited commercial', 'Low income', 'Small market size'],
    demographics: {
      primary: 'Latino families ages 25-40',
      secondary: 'Casino workers and seniors'
    }
  },
  'paramount': {
    name: 'Paramount',
    slug: 'paramount',
    county: 'Los Angeles',
    population: '55,000+',
    medianIncome: '$48,000',
    businessCount: '1,200+',
    distance: '9 miles',
    landmarks: ['Paramount Park', 'Progress Park', 'Zamboni Ice Rink'],
    neighborhoods: ['North Paramount', 'South Paramount', 'West Paramount', 'East Paramount'],
    characteristics: ['Industrial base', 'Latino culture', 'Family-oriented', 'Blue-collar'],
    localChallenges: ['Industrial image', 'Limited retail', 'Competition from larger cities', 'Economic struggles'],
    demographics: {
      primary: 'Latino working families ages 30-45',
      secondary: 'Immigrant communities'
    }
  },
  'compton': {
    name: 'Compton',
    slug: 'compton',
    county: 'Los Angeles',
    population: '97,000+',
    medianIncome: '$45,000',
    businessCount: '1,800+',
    distance: '10 miles',
    landmarks: ['Compton Creek', 'MLK Monument', 'Compton Airport', 'Gateway Towne Center'],
    neighborhoods: ['Downtown Compton', 'North Compton', 'South Compton', 'East Compton'],
    characteristics: ['Hip-hop heritage', 'Changing demographics', 'Transit hub', 'Revitalization efforts'],
    localChallenges: ['Crime reputation', 'Economic challenges', 'Infrastructure needs', 'Image rehabilitation'],
    demographics: {
      primary: 'Latino and Black families ages 25-40',
      secondary: 'Young adults and immigrants'
    }
  },
  'artesia': {
    name: 'Artesia',
    slug: 'artesia',
    county: 'Los Angeles',
    population: '16,500+',
    medianIncome: '$65,000',
    businessCount: '600+',
    distance: '13 miles',
    landmarks: ['Little India', 'Artesia Park', 'Pioneer Boulevard'],
    neighborhoods: ['Central Artesia', 'North Artesia', 'South Artesia'],
    characteristics: ['Little India destination', 'Diverse cultures', 'Small city', 'International businesses'],
    localChallenges: ['Limited space', 'Parking issues', 'Competition from Cerritos', 'Small market'],
    demographics: {
      primary: 'Indian and Asian families ages 35-50',
      secondary: 'Multi-cultural professionals'
    }
  },
  'buena-park': {
    name: 'Buena Park',
    slug: 'buena-park',
    county: 'Orange',
    population: '83,000+',
    medianIncome: '$68,000',
    businessCount: '2,200+',
    distance: '18 miles',
    landmarks: ["Knott's Berry Farm", 'Medieval Times', 'The Source OC', 'Buena Park Mall'],
    neighborhoods: ['Downtown BP', 'West Buena Park', 'North Buena Park', 'South Buena Park'],
    characteristics: ['Entertainment destination', 'Theme parks', 'Korean businesses', 'Family attractions'],
    localChallenges: ['Tourist focus', 'Traffic congestion', 'Seasonal business', 'Competition from Anaheim'],
    demographics: {
      primary: 'Diverse families ages 30-45',
      secondary: 'Korean community and tourists'
    }
  },
  'cypress': {
    name: 'Cypress',
    slug: 'cypress',
    county: 'Orange',
    population: '49,000+',
    medianIncome: '$85,000',
    businessCount: '1,400+',
    distance: '14 miles',
    landmarks: ['Cypress College', 'Arnold Park', 'Race on the Base'],
    neighborhoods: ['West Cypress', 'East Cypress', 'North Cypress', 'South Cypress'],
    characteristics: ['College town', 'Suburban quiet', 'Good schools', 'Family-friendly'],
    localChallenges: ['Limited downtown', 'Bedroom community', 'Low visibility', 'Competition from larger cities'],
    demographics: {
      primary: 'Middle-class families ages 35-50',
      secondary: 'College students and staff'
    }
  },
  'garden-grove': {
    name: 'Garden Grove',
    slug: 'garden-grove',
    county: 'Orange',
    population: '175,000+',
    medianIncome: '$60,000',
    businessCount: '4,500+',
    distance: '20 miles',
    landmarks: ['Crystal Cathedral', 'Garden Grove Main Street', 'Atlantis Play Center'],
    neighborhoods: ['Downtown GG', 'West Grove', 'Korean Business District', 'East Garden Grove'],
    characteristics: ['Vietnamese Little Saigon', 'Korean businesses', 'Diverse cultures', 'Historic downtown'],
    localChallenges: ['Gang issues', 'Aging infrastructure', 'Competition from Westminster', 'Economic disparity'],
    demographics: {
      primary: 'Vietnamese families ages 35-50',
      secondary: 'Korean and Latino communities'
    }
  },
  'westminster': {
    name: 'Westminster',
    slug: 'westminster',
    county: 'Orange',
    population: '91,000+',
    medianIncome: '$58,000',
    businessCount: '3,000+',
    distance: '22 miles',
    landmarks: ['Little Saigon', 'Asian Garden Mall', 'Westminster Mall', 'Vietnam War Memorial'],
    neighborhoods: ['Little Saigon', 'West Westminster', 'East Westminster', 'North Westminster'],
    characteristics: ['Vietnamese capital', 'Asian businesses', 'Cultural hub', 'International cuisine'],
    localChallenges: ['Language barriers', 'Parking issues', 'Competition within', 'Cultural navigation'],
    demographics: {
      primary: 'Vietnamese families ages 30-45',
      secondary: 'Asian immigrants and seniors'
    }
  },
  'huntington-beach': {
    name: 'Huntington Beach',
    slug: 'huntington-beach',
    county: 'Orange',
    population: '200,000+',
    medianIncome: '$90,000',
    businessCount: '6,000+',
    distance: '20 miles',
    landmarks: ['HB Pier', 'Main Street', 'Surf City USA', 'Bella Terra'],
    neighborhoods: ['Downtown HB', 'Huntington Harbour', 'Bolsa Chica', 'Edwards Hill'],
    characteristics: ['Surf City USA', 'Beach culture', 'Oil wells', 'Tourism hub'],
    localChallenges: ['High competition', 'Seasonal fluctuations', 'Parking issues', 'Tourist management'],
    demographics: {
      primary: 'Beach-lifestyle families ages 35-50',
      secondary: 'Surfers and tourists'
    }
  },
  'los-altos': {
    name: 'Los Altos',
    slug: 'los-altos',
    county: 'Los Angeles',
    population: '42,000+',
    medianIncome: '$70,000',
    businessCount: '900+',
    distance: '4 miles',
    landmarks: ['Los Altos Market', 'Machado Park', 'Los Altos Library'],
    neighborhoods: ['East Los Altos', 'West Los Altos', 'Central Los Altos'],
    characteristics: ['Residential focus', 'Ranch-style homes', 'Quiet neighborhoods', 'Family-oriented'],
    localChallenges: ['Limited commercial', 'Residential zoning', 'Low business visibility', 'Competition from LB'],
    demographics: {
      primary: 'Middle-class families ages 35-50',
      secondary: 'Long-time residents and seniors'
    }
  },
  'wrigley': {
    name: 'Wrigley',
    slug: 'wrigley',
    county: 'Los Angeles',
    population: '25,000+',
    medianIncome: '$55,000',
    businessCount: '600+',
    distance: '2 miles',
    landmarks: ['Willow Street', 'Pacific Avenue', 'Wrigley Greenbelt'],
    neighborhoods: ['North Wrigley', 'South Wrigley', 'Wrigley Heights'],
    characteristics: ['Historic neighborhood', 'Diverse community', 'Transit corridor', 'Gentrifying area'],
    localChallenges: ['Gentrification', 'Crime concerns', 'Limited parking', 'Economic disparity'],
    demographics: {
      primary: 'Working families ages 30-45',
      secondary: 'Young professionals moving in'
    }
  },
  'alamitos-beach': {
    name: 'Alamitos Beach',
    slug: 'alamitos-beach',
    county: 'Los Angeles',
    population: '8,000+',
    medianIncome: '$50,000',
    businessCount: '400+',
    distance: '1 mile',
    landmarks: ['Alamitos Beach', 'Junipero Beach', 'Bixby Park', 'Cherry Beach'],
    neighborhoods: ['Upper Alamitos', 'Lower Alamitos', 'Beach Area'],
    characteristics: ['LGBTQ+ friendly', 'Beach access', 'Nightlife', 'Urban beach'],
    localChallenges: ['Parking issues', 'Homeless presence', 'Noise complaints', 'Seasonal crowds'],
    demographics: {
      primary: 'Young professionals ages 25-35',
      secondary: 'LGBTQ+ community and artists'
    }
  },
  'bluff-heights': {
    name: 'Bluff Heights',
    slug: 'bluff-heights',
    county: 'Los Angeles',
    population: '12,000+',
    medianIncome: '$75,000',
    businessCount: '350+',
    distance: '2 miles',
    landmarks: ['Bluff Park', 'Broadway Corridor', 'Historic District'],
    neighborhoods: ['Upper Bluff Heights', 'Lower Bluff Heights', 'Broadway Area'],
    characteristics: ['Historic homes', 'Ocean views', 'Walkable', 'Tree-lined streets'],
    localChallenges: ['Limited commercial', 'Parking restrictions', 'High housing costs', 'Preservation rules'],
    demographics: {
      primary: 'Professional couples ages 30-45',
      secondary: 'Empty nesters and preservationists'
    }
  },
  'bluff-park': {
    name: 'Bluff Park',
    slug: 'bluff-park',
    county: 'Los Angeles',
    population: '6,000+',
    medianIncome: '$85,000',
    businessCount: '200+',
    distance: '2 miles',
    landmarks: ['Bluff Park', 'Ocean Boulevard', 'Museum of Latin American Art'],
    neighborhoods: ['Upper Bluff Park', 'Lower Bluff Park'],
    characteristics: ['Ocean views', 'Historic mansions', 'Quiet residential', 'Premium location'],
    localChallenges: ['Very limited commercial', 'High property values', 'Parking limitations', 'Tourist traffic'],
    demographics: {
      primary: 'Affluent families ages 40-60',
      secondary: 'Retirees and professionals'
    }
  },
  'east-village-arts-district': {
    name: 'East Village Arts District',
    slug: 'east-village-arts-district',
    county: 'Los Angeles',
    population: '5,000+',
    medianIncome: '$45,000',
    businessCount: '300+',
    distance: '0.5 miles',
    landmarks: ['Art Theatre', 'Harvey Milk Park', 'Linden Avenue'],
    neighborhoods: ['Arts District Core', 'Linden Area', 'Alamitos Area'],
    characteristics: ['Artist lofts', 'Galleries', 'Creative businesses', 'Urban renewal'],
    localChallenges: ['Gentrification', 'Parking issues', 'Homeless concerns', 'Rising rents'],
    demographics: {
      primary: 'Artists and creatives ages 25-40',
      secondary: 'Young professionals and students'
    }
  },
  'north-long-beach': {
    name: 'North Long Beach',
    slug: 'north-long-beach',
    county: 'Los Angeles',
    population: '90,000+',
    medianIncome: '$48,000',
    businessCount: '1,500+',
    distance: '5 miles',
    landmarks: ['Houghton Park', 'Atlantic Avenue', 'Jordan High School'],
    neighborhoods: ['Coolidge Triangle', 'Longwood', 'Hamilton', 'Jackson Park'],
    characteristics: ['Diverse community', 'Affordable housing', 'Industrial areas', 'Community focus'],
    localChallenges: ['Crime perception', 'Limited investment', 'Food deserts', 'Infrastructure needs'],
    demographics: {
      primary: 'Working families ages 25-40',
      secondary: 'Immigrant communities and seniors'
    }
  },
  'rolling-hills': {
    name: 'Rolling Hills',
    slug: 'rolling-hills',
    county: 'Los Angeles',
    population: '1,900+',
    medianIncome: '$250,000+',
    businessCount: '50+',
    distance: '16 miles',
    landmarks: ['Rolling Hills Country Club', 'Private Gates', 'Equestrian Trails'],
    neighborhoods: ['The Estates', 'Country Club Area'],
    characteristics: ['Gated city', 'Equestrian community', 'Ultra-exclusive', 'Rural feel'],
    localChallenges: ['No commercial zone', 'Extreme exclusivity', 'Very small market', 'Access restrictions'],
    demographics: {
      primary: 'Ultra-wealthy families ages 45-65',
      secondary: 'Celebrities and executives'
    }
  }
}