export default function TrustSignals() {
  const partners = [
    { 
      name: 'Google Partner',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M44.5 24.5C44.5 23.04 44.38 21.64 44.16 20.28H24V28.28H35.22C34.71 30.92 33.21 33.13 30.98 34.57V40.08H38.01C42.17 36.28 44.5 30.78 44.5 24.5Z" fill="#4285F4"/>
            <path d="M24 45.5C30.15 45.5 35.3 43.52 38.01 40.08L30.98 34.57C28.99 35.97 26.42 36.82 24 36.82C18.06 36.82 12.99 33.02 11.36 27.83H4.08V33.54C7.66 40.63 15.29 45.5 24 45.5Z" fill="#34A853"/>
            <path d="M11.36 27.83C10.85 26.43 10.56 24.92 10.56 23.37C10.56 21.82 10.85 20.31 11.36 18.91V13.2H4.08C2.31 16.71 1.5 20.86 1.5 24C1.5 28.14 2.31 32.29 4.08 35.8L11.36 27.83Z" fill="#FBBC04"/>
            <path d="M24 10.18C26.69 10.18 29.09 11.06 31.02 12.77L38.17 5.62C35.29 2.97 30.14 0.5 24 0.5C15.29 0.5 7.66 5.37 4.08 12.46L11.36 18.91C12.99 13.72 18.06 10.18 24 10.18Z" fill="#EA4335"/>
          </svg>
          <span className="text-gray-700 font-medium">Partner</span>
        </div>
      )
    },
    { 
      name: 'Shopify Plus',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M40.6 11.9C40.6 11.7 40.4 11.6 40.3 11.6C40.2 11.6 37.5 11.5 37.5 11.5C37.5 11.5 35.2 9.3 35 9.1C34.8 8.9 34.4 9 34.2 9.1C34.2 9.1 33.7 9.2 32.9 9.5C32.7 8.7 32.3 7.8 31.7 7C30.3 4.7 28.3 3.5 26 3.5C25.8 3.5 25.6 3.5 25.4 3.5C25.3 3.3 25.1 3.2 25 3C24 2.1 22.7 1.7 21.3 1.7C16.8 1.7 14.6 7.3 13.9 10.2C11.8 10.8 10.3 11.3 10.1 11.3C9.2 11.6 9.2 11.6 9 12.5C8.9 13.2 6 38.5 6 38.5L32.4 43.5L44 40.9C44 40.9 40.6 12.1 40.6 11.9ZM31.5 10C30.5 10.3 29.4 10.6 28.2 11C28.2 10.8 28.2 10.6 28.2 10.3C28.2 8.6 28 7.2 27.6 6.1C29.7 6.4 30.8 8.7 31.5 10ZM26 6.2C26.5 7.3 26.7 8.8 26.7 10.6C26.7 10.8 26.7 10.9 26.7 11.1C24.4 11.7 21.9 12.4 19.5 13.1C20.3 10.5 22.2 7.1 26 6.2ZM21.5 3.2C22.1 3.2 22.6 3.4 23.1 3.7C18.8 5.6 16.5 10.8 15.8 13.8C13.8 14.4 12 14.9 10.3 15.4C11.3 12.1 14.1 3.2 21.5 3.2Z" fill="#5E8E3E"/>
            <path d="M40.3 11.6C40.2 11.6 37.5 11.5 37.5 11.5C37.5 11.5 35.2 9.3 35 9.1C34.9 9 34.8 9 34.7 9V43.5L44 40.9C44 40.9 40.6 12.1 40.6 11.9C40.6 11.7 40.4 11.6 40.3 11.6Z" fill="#5E8E3E"/>
            <path d="M26 18.8L24.5 24.5C24.5 24.5 23.2 23.8 21.5 23.8C19 23.8 18.9 25.3 18.9 25.7C18.9 27.7 24.3 28.5 24.3 33.5C24.3 37.4 21.6 39.8 18 39.8C13.7 39.8 11.5 37.2 11.5 37.2L12.7 33.5C12.7 33.5 15 35.6 16.9 35.6C18.1 35.6 18.6 34.7 18.6 33.9C18.6 31.3 14 31.2 14 26.5C14 22.5 16.8 18.7 22.3 18.7C24.5 18.7 26 18.8 26 18.8Z" fill="white"/>
          </svg>
          <span className="text-gray-700 font-medium">Plus</span>
        </div>
      )
    },
    { 
      name: 'Facebook Partner',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" fill="#1877F2"/>
            <path d="M29.5 24.5H26V36H21V24.5H18V20H21V17.5C21 14.5 23 12 26 12H29V16H27.5C26.5 16 26 16.5 26 17.5V20H29L29.5 24.5Z" fill="white"/>
          </svg>
          <span className="text-gray-700 font-medium">Partner</span>
        </div>
      )
    },
    { 
      name: 'HubSpot',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none">
            <path d="M35.8 19.2V13.7C37.1 12.9 38 11.5 38 9.9C38 7.3 35.9 5.2 33.3 5.2C30.7 5.2 28.6 7.3 28.6 9.9C28.6 11.5 29.5 12.9 30.8 13.7V19.2C27.7 19.7 25.1 21.6 23.6 24.2L13.5 20C13.4 18.3 12 17 10.2 17C8.3 17 6.8 18.5 6.8 20.4C6.8 22.3 8.3 23.8 10.2 23.8C11.1 23.8 11.9 23.4 12.5 22.8L22.8 27.1C22.7 27.6 22.6 28.1 22.6 28.6C22.6 29.1 22.7 29.6 22.8 30.1L12.5 34.4C11.9 33.8 11.1 33.4 10.2 33.4C8.3 33.4 6.8 34.9 6.8 36.8C6.8 38.7 8.3 40.2 10.2 40.2C12 40.2 13.4 38.9 13.5 37.2L23.6 33C25.1 35.6 27.7 37.5 30.8 38V43.5C30.8 44.3 31.5 45 32.3 45H34.3C35.1 45 35.8 44.3 35.8 43.5V38C39.5 37.4 42.3 34.3 42.3 30.6V26.6C42.3 22.9 39.5 19.8 35.8 19.2ZM33.3 34.6C31 34.6 29.3 32.9 29.3 30.6V26.6C29.3 24.3 31 22.6 33.3 22.6C35.6 22.6 37.3 24.3 37.3 26.6V30.6C37.3 32.9 35.6 34.6 33.3 34.6Z" fill="#FF7A59"/>
          </svg>
          <span className="text-gray-700 font-medium">HubSpot</span>
        </div>
      )
    },
    { 
      name: 'Semrush',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="h-8 w-10" viewBox="0 0 50 48" fill="none">
            <path d="M41.5 28C41.5 28 40 25.5 36.5 25.5C33 25.5 31.5 28 31.5 28V36C31.5 36 33 38.5 36.5 38.5C40 38.5 41.5 36 41.5 36V28Z" fill="#FF642D"/>
            <path d="M29.5 15C29.5 15 28 12.5 24.5 12.5C21 12.5 19.5 15 19.5 15V36C19.5 36 21 38.5 24.5 38.5C28 38.5 29.5 36 29.5 36V15Z" fill="#FF642D"/>
            <path d="M17.5 22C17.5 22 16 19.5 12.5 19.5C9 19.5 7.5 22 7.5 22V36C7.5 36 9 38.5 12.5 38.5C16 38.5 17.5 36 17.5 36V22Z" fill="#FF642D"/>
            <path d="M36.5 20C40 20 42.5 17.5 42.5 14C42.5 10.5 40 8 36.5 8C33 8 30.5 10.5 30.5 14C30.5 17.5 33 20 36.5 20Z" fill="#FF642D"/>
          </svg>
          <span className="text-gray-700 font-medium">Semrush</span>
        </div>
      )
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}