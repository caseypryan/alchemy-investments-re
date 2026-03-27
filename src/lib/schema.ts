// Schema.org JSON-LD structured data

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Alchemy Investments RE',
  image: 'https://alchemyinvestmentsre.com/logo.png',
  '@id': 'https://alchemyinvestmentsre.com',
  url: 'https://alchemyinvestmentsre.com',
  telephone: '+1-702-547-6664',
  email: 'offers@alchemyinvestmentsre.com',
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
    latitude: 36.08954,
    longitude: -115.28779,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://www.google.com/maps/place/Alchemy+Investments+RE/@36.0895442,-115.2877868,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8b9fffe2cda59:0x7210cdf4a1cd30d8',
    'https://maps.app.goo.gl/LXhYrCer66FACynU9',
  ],
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'City', name: 'Henderson' },
    { '@type': 'City', name: 'North Las Vegas' },
    { '@type': 'City', name: 'Summerlin' },
    { '@type': 'City', name: 'Enterprise' },
    { '@type': 'City', name: 'Paradise' },
    { '@type': 'City', name: 'Pahrump' },
    { '@type': 'City', name: 'Boulder City' },
    { '@type': 'City', name: 'Green Valley' },
    { '@type': 'City', name: 'Spring Valley' },
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
  '@id': 'https://alchemyinvestmentsre.com/#organization',
  name: 'Alchemy Investments RE',
  url: 'https://alchemyinvestmentsre.com',
  logo: 'https://alchemyinvestmentsre.com/logo.png',
  email: 'offers@alchemyinvestmentsre.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-702-547-6664',
    contactType: 'customer service',
    email: 'offers@alchemyinvestmentsre.com',
    areaServed: 'US',
    availableLanguage: 'en',
  },
}

export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  '@id': 'https://alchemyinvestmentsre.com/#localbusiness',
  name: 'Alchemy Investments RE',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}
