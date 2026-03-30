import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getBlogIndex } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Blog & Seller Resources',
  description: 'Expert guides for Las Vegas homeowners. Topics include selling fast, foreclosure, inherited homes, divorce sales, and Las Vegas real estate market trends.',
  alternates: {
    canonical: 'https://alchemyinvestmentsre.com/blog',
  },
  openGraph: {
    title: 'Las Vegas Real Estate Blog & Seller Resources',
    description: 'Expert guides for Las Vegas homeowners on selling fast, foreclosure, inherited homes, divorce sales, and market trends.',
    url: 'https://alchemyinvestmentsre.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://alchemyinvestmentsre.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Real Estate Blog - Alchemy Investments RE',
      },
    ],
  },
}

const reviews = [
  {
    id: 1,
    name: 'John & Sarah M.',
    location: 'Henderson, NV',
    rating: 5,
    date: 'December 2025',
    review: 'Casey and his team made selling our house incredibly easy. We needed to sell quickly due to a job relocation, and they closed in just 10 days. No hassles, no repairs needed, and we got a fair price. Highly recommend!',
  },
  {
    id: 2,
    name: 'Robert T.',
    location: 'Las Vegas, NV',
    rating: 5,
    date: 'November 2025',
    review: 'After inheriting my parents\' house, I didn\'t want to deal with repairs or staging. Alchemy Investments bought it as-is for a fair price. The whole process was transparent and professional. Great experience.',
  },
  {
    id: 3,
    name: 'Maria G.',
    location: 'North Las Vegas, NV',
    rating: 5,
    date: 'October 2025',
    review: 'I was behind on payments and facing foreclosure. Casey helped me avoid that nightmare by purchasing my home quickly. He was compassionate and professional throughout the entire process. Thank you!',
  },
  {
    id: 4,
    name: 'David & Linda K.',
    location: 'Summerlin, NV',
    rating: 5,
    date: 'September 2025',
    review: 'We compared several cash buyers and Alchemy gave us the best offer. No hidden fees, no commission, and they closed exactly when they said they would. Couldn\'t have asked for a better experience.',
  },
]

const categoryColors: Record<string, string> = {
  'Selling a Home': 'bg-blue-100 text-blue-700',
  'Las Vegas Market': 'bg-green-100 text-green-700',
  'Real Estate Investing': 'bg-purple-100 text-purple-700',
  'Home Improvement': 'bg-orange-100 text-orange-700',
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export default async function BlogPage() {
  const { posts } = await getBlogIndex()

  const featuredPosts = posts.filter((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4A90E2] via-[#5B9FE3] to-[#7CB3E8] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-[44px] font-extrabold mb-4">Guides & Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert advice for Las Vegas homeowners. Learn how to sell on your terms.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-10">Featured Guides</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden group"
                  >
                    <div className="h-40 bg-gradient-to-br from-[#4A90E2] to-[#7CB3E8]" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#4A90E2] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="text-[#4A90E2] font-semibold text-sm flex items-center gap-1">
                        Read Guide
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        {regularPosts.length > 0 && (
          <section className="py-16 bg-[#f5f7fa]">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-10">All Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow group flex gap-4"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-[#4A90E2] to-[#7CB3E8] rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#4A90E2] transition-colors leading-snug mb-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-4">Client Testimonials</h2>
              <p className="text-lg text-gray-600">
                See what homeowners are saying about Alchemy Investments RE
              </p>
            </div>

            <div className="text-center mb-12 pb-8 border-b border-gray-200">
              <div className="text-5xl font-bold text-[#22c55e] mb-2">5.0</div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">Based on {reviews.length} verified reviews</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {reviews.map((review) => (
                <div key={review.id} className="bg-[#f8f9fa] p-8 rounded-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{review.review}&rdquo;</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">See more reviews on Google</p>
              <a
                href="https://www.google.com/search?q=alchemy+investments+re+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4A90E2] hover:text-[#3A80D2] font-semibold"
              >
                View Google Reviews
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#22c55e] text-white py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-[40px] font-bold mb-4">Ready to get your cash offer?</h2>
            <p className="text-xl mb-8">No obligation. No fees. Close in as little as 7 days.</p>
            <Link
              href="/#valuation"
              className="bg-white text-[#22c55e] hover:bg-gray-100 font-bold px-10 py-4 rounded text-lg transition-colors inline-block"
            >
              Get Started &rarr;
            </Link>
            <p className="text-lg mt-6">
              Or call us: <a href="tel:702-547-6664" className="font-bold hover:underline">(702) 547-6664</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
