import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Alchemy Investments RE',
  description: 'Read reviews from Las Vegas homeowners who sold their houses with Alchemy Investments RE. Real testimonials from satisfied clients.',
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

const blogPosts = [
  {
    slug: 'sell-house-fast-las-vegas',
    title: 'How to Sell Your House Fast in Las Vegas: The Complete 2026 Guide',
    excerpt: 'Discover proven strategies to sell your Las Vegas home quickly in 2026. Learn about cash buyers, market timing, pricing strategies, and more.',
    date: 'January 2026',
    readTime: '8 min read',
  },
]

export default function BlogAndReviews() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4A90E2] via-[#5B9FE3] to-[#7CB3E8] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-[44px] font-extrabold mb-4">Reviews & Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Read what Las Vegas homeowners say about working with us, and explore our helpful guides.
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-4">Client Testimonials</h2>
              <p className="text-lg text-gray-600">
                See what homeowners are saying about Alchemy Investments RE
              </p>
            </div>

            {/* Overall Rating */}
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

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {reviews.map((review) => (
                <div key={review.id} className="bg-[#f8f9fa] p-8 rounded-lg">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.review}"</p>

                  {/* Reviewer Info */}
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

            {/* Google Reviews Link */}
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

        {/* Blog Posts Section */}
        <section className="py-20 bg-[#f5f7fa]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-4">Helpful Resources</h2>
              <p className="text-lg text-gray-600">
                Learn more about selling your Las Vegas home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#4A90E2] to-[#7CB3E8]"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#4A90E2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-[#4A90E2] font-semibold flex items-center gap-2">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#22c55e] text-white py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-[40px] font-bold mb-4">Ready to join our satisfied clients?</h2>
            <p className="text-xl mb-8">Get your free, no-obligation cash offer today</p>

            <a
              href="#contact"
              className="bg-white text-[#22c55e] hover:bg-gray-100 font-bold px-10 py-4 rounded text-lg transition-colors inline-block"
            >
              Get Started →
            </a>

            <p className="text-lg mt-6">
              Or call us: <a href="tel:702-718-6934" className="font-bold hover:underline">(702) 718-6934</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
