/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    // Redirect old demo/WordPress template pages that are indexed in GSC
    // These were from a previous site template and should 301 to the homepage
    return [
      { source: '/about-this-demo', destination: '/about', permanent: true },
      { source: '/about-this-demo/', destination: '/about', permanent: true },
      { source: '/homepage-1', destination: '/', permanent: true },
      { source: '/homepage-1/', destination: '/', permanent: true },
      { source: '/homepage-2', destination: '/', permanent: true },
      { source: '/homepage-2/', destination: '/', permanent: true },
      { source: '/homepage-3', destination: '/', permanent: true },
      { source: '/homepage-3/', destination: '/', permanent: true },
      { source: '/compare-properties', destination: '/', permanent: true },
      { source: '/compare-properties/', destination: '/', permanent: true },
      { source: '/feature/:path*', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/property-type/:path*', destination: '/', permanent: true },
      { source: '/label/:path*', destination: '/', permanent: true },
      { source: '/property/:path*', destination: '/', permanent: true },
      { source: '/agent/:path*', destination: '/our-agents', permanent: true },
      // Trailing slash consistency — redirect /get-started/ to canonical (no trailing slash)
      { source: '/get-started/', destination: '/get-started', permanent: true },
    ]
  },
}

module.exports = nextConfig
