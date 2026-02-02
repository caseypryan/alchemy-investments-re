/**
 * Content loading utilities for dynamic page generation
 */

import fs from 'fs'
import path from 'path'
import { PageContent, BlogPost, BlogIndex, PageIndex } from '@/types/content'

const CONTENT_DIR = path.join(process.cwd(), 'content')

/**
 * Load all pages for a specific category
 */
export async function getPagesByCategory(category: string): Promise<PageContent[]> {
  const categoryDir = path.join(CONTENT_DIR, category)

  if (!fs.existsSync(categoryDir)) {
    return []
  }

  const files = fs.readdirSync(categoryDir)
  const jsonFiles = files.filter(file => file.endsWith('.json') && file !== 'index.json')

  const pages = await Promise.all(
    jsonFiles.map(async (file) => {
      const filePath = path.join(categoryDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(fileContent) as PageContent
    })
  )

  return pages
}

/**
 * Load individual page data by category and slug
 */
export async function getPageData(category: string, slug: string): Promise<PageContent | null> {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as PageContent
}

/**
 * Get all slugs for a category (for static generation)
 */
export async function getAllPageSlugs(category: string): Promise<string[]> {
  const categoryDir = path.join(CONTENT_DIR, category)

  if (!fs.existsSync(categoryDir)) {
    return []
  }

  const files = fs.readdirSync(categoryDir)
  const jsonFiles = files.filter(file => file.endsWith('.json') && file !== 'index.json')

  return jsonFiles.map(file => file.replace('.json', ''))
}

/**
 * Get all pages across all categories (for sitemap)
 */
export async function getAllPages(): Promise<PageIndex[]> {
  const categories = ['locations', 'services', 'neighborhoods', 'blog/posts']
  const allPages: PageIndex[] = []

  for (const category of categories) {
    const pages = await getPagesByCategory(category)

    pages.forEach(page => {
      allPages.push({
        slug: page.slug,
        title: page.seo.title,
        type: category.replace('/posts', ''),
        priority: page.migration?.priority || 0.7,
        lastModified: page.migration?.lastModified || new Date().toISOString(),
      })
    })
  }

  return allPages
}

/**
 * Load blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(CONTENT_DIR, 'blog', 'posts')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const jsonFiles = files.filter(file => file.endsWith('.json'))

  const posts = await Promise.all(
    jsonFiles.map(async (file) => {
      const filePath = path.join(blogDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(fileContent) as BlogPost
    })
  )

  // Sort by publish date (newest first)
  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/**
 * Load a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, 'blog', 'posts', `${slug}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as BlogPost
}

/**
 * Get all blog post slugs (for static generation)
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  const blogDir = path.join(CONTENT_DIR, 'blog', 'posts')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const jsonFiles = files.filter(file => file.endsWith('.json'))

  return jsonFiles.map(file => file.replace('.json', ''))
}

/**
 * Get blog index data
 */
export async function getBlogIndex(): Promise<BlogIndex> {
  const indexPath = path.join(CONTENT_DIR, 'blog', 'index.json')

  if (fs.existsSync(indexPath)) {
    const fileContent = fs.readFileSync(indexPath, 'utf-8')
    return JSON.parse(fileContent) as BlogIndex
  }

  // Generate index from posts if not exists
  const posts = await getBlogPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return {
    posts: posts.map(p => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      publishedAt: p.publishedAt,
      featured: p.featured,
    })),
    categories,
    totalPosts: posts.length,
  }
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter(p => p.featured).slice(0, limit)
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter(p => p.category === category)
}

/**
 * Load configuration files
 */
export function getBusinessConfig() {
  const configPath = path.join(process.cwd(), 'config', 'business.config.json')
  const fileContent = fs.readFileSync(configPath, 'utf-8')
  return JSON.parse(fileContent)
}

export function getSiteConfig() {
  const configPath = path.join(process.cwd(), 'config', 'site.config.json')
  const fileContent = fs.readFileSync(configPath, 'utf-8')
  return JSON.parse(fileContent)
}
