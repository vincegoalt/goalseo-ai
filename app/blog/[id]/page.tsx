import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, ArrowRight, Calendar, Clock, User, Tag,
  Share2, Twitter, Linkedin, Facebook,
  ChevronRight, BookOpen, TrendingUp, Zap,
  CheckCircle2, Star, Mail
} from 'lucide-react'
import { blogPosts, blogAuthors, getRelatedPosts, type BlogPost } from '@/lib/blog-data'
import '../blog.css'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - GoalSEO AI',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - GoalSEO AI Blog`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
    }
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.id === params.id)
  const relatedPosts = getRelatedPosts(post.id, 3)
  const authorInfo = blogAuthors[post.author as keyof typeof blogAuthors]

  // Get previous and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <article className="pt-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-gray-50 to-white py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{post.category}</span>
          </nav>

          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            {post.featured && (
              <span className="flex items-center gap-1 text-electric-600">
                <Star className="h-4 w-4 fill-current" />
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold">
                {authorInfo.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">{post.authorRole}</div>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Share:</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Share on LinkedIn">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Copy link">
                <Share2 className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Table of Contents
          </h2>
          <div className="space-y-2 text-sm">
            {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((heading, index) => {
              const title = heading.replace(/<\/?h2>/g, '')
              return (
                <a
                  key={index}
                  href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {index + 1}. {title}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {authorInfo.avatar}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{post.author}</h4>
              <p className="text-sm text-gray-600 mb-2">{post.authorRole}</p>
              <p className="text-sm text-gray-700">{post.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-gray-400" />
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog?search=${encodeURIComponent(tag)}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-electric-50 rounded-2xl border-2 border-primary-100">
          <div className="text-center">
            <Mail className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get More SEO Insights
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Join 10,000+ marketers receiving weekly updates on AI SEO strategies, algorithm changes, and growth tactics.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Navigation Between Posts */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid md:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.id}`}
                className="group p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft className="h-5 w-5 text-primary-600 group-hover:-translate-x-1 transition-transform" />
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Previous Article</div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {prevPost.title}
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.id}`}
                className="group p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Next Article</div>
                    <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {nextPost.title}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map(relatedPost => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{relatedPost.image}</span>
                    <span className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedPost.readTime}</span>
                    <span className="flex items-center gap-1 text-primary-600 font-medium">
                      Read more
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More from Category */}
          <div className="mt-12 text-center">
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              View all {post.category} articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Dominate Your Search Rankings?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses using AI to win at SEO
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>30-Day Results Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Cancel Anytime</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Free SEO Audit
              <Zap className="h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Watch Demo
              <TrendingUp className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}