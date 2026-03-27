/**
 * Dynamic blog post pages
 * Generates static pages for all blog posts at build time
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPost, getAllBlogSlugs } from '@/lib/content'
import { generateMetadata as genMeta, generateArticleSchema, generateBreadcrumbSchema, generateSchemaScript } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return genMeta(post)
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const schemas = [
    generateArticleSchema(post),
    generateBreadcrumbSchema(`/blog/${slug}`, post.title),
  ]

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaScript(schemas) }}
      />

      <Header />
      <main className="bg-white">
        <article className="container-custom max-w-4xl py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <Link href="/blog" className="hover:text-[#4A90E2]">Blog</Link>
              <span>/</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-5xl font-heading mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="bg-gray-50 p-8 rounded-lg my-12">
            <h3 className="text-2xl font-heading mb-4">Get Your Free Cash Offer Today</h3>
            <p className="mb-6">
              Alchemy Investments RE is a licensed Nevada real estate brokerage (License: S.0184768)
              with 15+ years of experience buying houses in Las Vegas. We&apos;ve purchased 500+ homes
              and pride ourselves on fair, transparent offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#valuation" className="btn-primary text-center">
                Get Your Cash Offer
              </Link>
              <a href="tel:702-547-6664" className="btn-outline text-center">
                Call: 702-547-6664
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-heading mb-2">About the Author</h3>
            <p className="text-gray-700">
              This guide was prepared by {post.author}, a licensed Nevada real estate
              brokerage specializing in fast cash home purchases. With 15+ years of experience
              and 500+ homes purchased, we understand the Las Vegas market and homeowner needs.
            </p>
          </div>

          {/* Back to blog */}
          <div className="mt-12 border-t pt-8">
            <Link href="/blog" className="text-[#4A90E2] hover:underline font-semibold">
              ← Back to All Articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
