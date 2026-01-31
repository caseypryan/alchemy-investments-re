// Schema.org JSON-LD structured data

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Alchemy Investments RE',
  image: 'https://alchemyinvestmentsre.com/logo.png',
  '@id': 'https://alchemyinvestmentsre.com',
  url: 'https://alchemyinvestmentsre.com',
  telephone: '+1-702-718-6934',
  email: 'Casey@AlchemyInvestmentsRE.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8978 Spanish Ridge',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89148',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1699,
    longitude: -115.1398,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    // Add social media URLs here when available
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Las Vegas',
    },
    {
      '@type': 'City',
      name: 'Henderson',
    },
    {
      '@type': 'City',
      name: 'North Las Vegas',
    },
    {
      '@type': 'City',
      name: 'Boulder City',
    },
    {
      '@type': 'City',
      name: 'Pahrump',
    },
  ],
  additionalProperty: {
    '@type': 'PropertyValue',
    name: 'Nevada Real Estate License',
    value: 'S.0184768',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Alchemy Investments RE',
  url: 'https://alchemyinvestmentsre.com',
  logo: 'https://alchemyinvestmentsre.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-702-718-6934',
    contactType: 'customer service',
    email: 'Casey@AlchemyInvestmentsRE.com',
    areaServed: 'US',
    availableLanguage: 'en',
  },
}

export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alchemy Investments RE',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
}
