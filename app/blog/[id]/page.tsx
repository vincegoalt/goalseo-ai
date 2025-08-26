import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, ArrowRight, Calendar, Clock, User, Tag,
  Share2, Twitter, Linkedin, Facebook,
  ChevronRight, BookOpen, TrendingUp
} from 'lucide-react'

// Mock blog posts data - in production, this would come from a database
const blogPosts = [
  {
    id: '1',
    title: 'How AI is Revolutionizing SEO in 2024',
    subtitle: 'The Complete Guide to AI-Powered Search Optimization',
    author: 'Sarah Johnson',
    authorRole: 'SEO Strategy Director',
    date: '2024-03-15',
    readTime: '12 min read',
    category: 'AI & Technology',
    tags: ['AI SEO', 'Machine Learning', 'Search Algorithms', 'Future of SEO'],
    image: '/api/placeholder/1200/600',
    content: `
      <p>The landscape of Search Engine Optimization is undergoing a dramatic transformation, driven by the rapid advancement of artificial intelligence technologies. As we move through 2024, it's becoming increasingly clear that AI isn't just a buzzword in the SEO industry—it's a fundamental shift in how we approach search optimization.</p>

      <h2>The AI Revolution in Search</h2>
      <p>Search engines have evolved far beyond simple keyword matching. Today's algorithms use sophisticated machine learning models to understand context, user intent, and content quality at a level that was impossible just a few years ago. Google's BERT, MUM, and other AI models have fundamentally changed how search results are generated and ranked.</p>

      <p>For businesses, this means traditional SEO tactics are no longer enough. You need to understand how AI interprets your content and how to optimize for these new, smarter algorithms.</p>

      <h2>Understanding AI-Powered Search Algorithms</h2>
      <p>Modern search algorithms use natural language processing (NLP) to understand content the way humans do. They can:</p>
      <ul>
        <li>Understand context and nuance in search queries</li>
        <li>Identify the true intent behind searches</li>
        <li>Evaluate content quality based on expertise and authority</li>
        <li>Connect related concepts even when specific keywords aren't used</li>
      </ul>

      <h2>How GoalSEO Uses AI to Your Advantage</h2>
      <p>At GoalSEO, we've built our platform from the ground up to leverage these AI advancements. Our system doesn't just optimize for keywords—it understands your content at a semantic level and optimizes for the way modern search engines actually work.</p>

      <h3>1. Semantic Content Optimization</h3>
      <p>Our AI analyzes your content to ensure it covers topics comprehensively, addressing related concepts and questions that search engines expect to see in authoritative content.</p>

      <h3>2. Intent Matching</h3>
      <p>We help you create content that matches user intent, not just keywords. This means higher engagement rates and better rankings.</p>

      <h3>3. Competitive Intelligence</h3>
      <p>Our AI continuously monitors your competitors, identifying gaps in their content strategy that you can exploit for quick wins.</p>

      <h2>The Future of SEO is Already Here</h2>
      <p>The businesses that adapt to AI-powered SEO now will dominate search results in the coming years. Those that stick to outdated tactics will find themselves falling further behind as search engines become increasingly sophisticated.</p>

      <p>The good news? You don't need to become an AI expert to benefit from these technologies. With GoalSEO, you get all the power of AI-driven optimization without the complexity.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>AI has fundamentally changed how search engines work</li>
        <li>Traditional keyword-focused SEO is no longer enough</li>
        <li>Semantic understanding and intent matching are crucial</li>
        <li>AI-powered tools like GoalSEO give you a competitive advantage</li>
        <li>The time to adapt is now—early adopters will win</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The integration of AI into SEO isn't a future trend—it's happening right now. Businesses that embrace AI-powered optimization tools and strategies will see dramatic improvements in their search rankings and organic traffic. Those that don't risk being left behind in an increasingly competitive digital landscape.</p>

      <p>Ready to harness the power of AI for your SEO? GoalSEO makes it simple, effective, and affordable for businesses of any size.</p>
    `,
    relatedPosts: ['2', '3', '4']
  },
  {
    id: '2',
    title: 'The $50,000 SEO Mistake Most E-commerce Stores Make',
    subtitle: 'And How to Fix It in 30 Days',
    author: 'Michael Chen',
    authorRole: 'Technical SEO Lead',
    date: '2024-03-12',
    readTime: '8 min read',
    category: 'E-commerce',
    tags: ['E-commerce SEO', 'Technical SEO', 'Common Mistakes', 'Quick Wins'],
    image: '/api/placeholder/1200/600',
    content: `
      <p>After analyzing over 1,000 e-commerce stores, we've discovered a shocking pattern: most online retailers are making the same costly SEO mistake that's costing them an average of $50,000 per year in lost revenue. The worst part? It's completely preventable.</p>

      <h2>The Hidden Revenue Killer</h2>
      <p>The mistake is simple but devastating: duplicate content across product variations. When you have the same product in different colors, sizes, or configurations, search engines see multiple pages with nearly identical content. This causes:</p>
      <ul>
        <li>Diluted page authority</li>
        <li>Keyword cannibalization</li>
        <li>Confused search engines</li>
        <li>Lower rankings for all variations</li>
      </ul>

      <h2>The Real Cost of Duplicate Content</h2>
      <p>Let's break down the numbers. If your store has 100 products with an average of 5 variations each, you potentially have 500 pages competing against each other. Our research shows this typically results in:</p>
      <ul>
        <li>40% lower rankings than properly optimized stores</li>
        <li>60% less organic traffic</li>
        <li>35% lower conversion rates due to poor user experience</li>
      </ul>

      <p>For a store doing $500,000 in annual revenue, this translates to approximately $50,000 in lost sales every year.</p>

      <h2>The 30-Day Fix</h2>
      <p>Here's exactly how to fix this problem and reclaim your lost revenue:</p>

      <h3>Week 1: Audit and Identify</h3>
      <ul>
        <li>Catalog all product variations</li>
        <li>Identify duplicate content issues</li>
        <li>Map out canonical URL structure</li>
      </ul>

      <h3>Week 2: Implement Technical Fixes</h3>
      <ul>
        <li>Set up proper canonical tags</li>
        <li>Create unique content for main products</li>
        <li>Implement structured data markup</li>
      </ul>

      <h3>Week 3: Optimize and Enhance</h3>
      <ul>
        <li>Write unique descriptions for key variations</li>
        <li>Optimize images and alt text</li>
        <li>Build internal linking structure</li>
      </ul>

      <h3>Week 4: Monitor and Refine</h3>
      <ul>
        <li>Track ranking improvements</li>
        <li>Monitor organic traffic growth</li>
        <li>Fine-tune based on initial results</li>
      </ul>

      <h2>Real Results from Real Stores</h2>
      <p>Fashion retailer TrendyThreads.com implemented these fixes and saw:</p>
      <ul>
        <li>127% increase in organic traffic in 60 days</li>
        <li>$73,000 additional revenue in the first quarter</li>
        <li>Page 1 rankings for 85% of their target keywords</li>
      </ul>

      <h2>Why Most Stores Never Fix This</h2>
      <p>The problem persists because:</p>
      <ol>
        <li>It's not immediately visible (unlike a broken checkout)</li>
        <li>It requires technical SEO knowledge</li>
        <li>Manual fixes are time-consuming and expensive</li>
        <li>Most SEO tools don't specifically address this issue</li>
      </ol>

      <h2>The Automated Solution</h2>
      <p>This is exactly why we built GoalSEO's AI-powered optimization engine. Our system automatically:</p>
      <ul>
        <li>Identifies duplicate content issues</li>
        <li>Generates unique, optimized content for variations</li>
        <li>Implements proper canonical structures</li>
        <li>Monitors and maintains optimization over time</li>
      </ul>

      <p>What would take weeks of manual work happens automatically, continuously, 24/7.</p>

      <h2>Take Action Today</h2>
      <p>Every day you wait is money left on the table. The average e-commerce store sees a 40% traffic increase within 30 days of fixing their duplicate content issues. Don't let another day of potential revenue slip away.</p>
    `,
    relatedPosts: ['1', '3', '5']
  },
  {
    id: '3',
    title: '10 SEO Quick Wins You Can Implement Today',
    subtitle: 'Boost Your Rankings in Less Than an Hour',
    author: 'Emily Rodriguez',
    authorRole: 'Content Strategy Manager',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'SEO Tips',
    tags: ['Quick Wins', 'SEO Basics', 'Optimization', 'Best Practices'],
    image: '/api/placeholder/1200/600',
    content: `
      <p>Not every SEO improvement requires months of work. Here are 10 quick wins you can implement in less than an hour that will have an immediate impact on your search rankings.</p>

      <h2>1. Fix Your Title Tags (10 minutes)</h2>
      <p>Check your homepage and top 5 pages. Make sure title tags are:</p>
      <ul>
        <li>Under 60 characters</li>
        <li>Include your primary keyword</li>
        <li>Unique for each page</li>
        <li>Compelling enough to click</li>
      </ul>

      <h2>2. Optimize Meta Descriptions (10 minutes)</h2>
      <p>While not a direct ranking factor, good meta descriptions improve click-through rates:</p>
      <ul>
        <li>Keep under 155 characters</li>
        <li>Include a call-to-action</li>
        <li>Match search intent</li>
        <li>Include target keywords naturally</li>
      </ul>

      <h2>3. Add Internal Links (5 minutes)</h2>
      <p>Find your best-performing page in Google Analytics. Add 3-5 internal links from this page to related content that needs a boost.</p>

      <h2>4. Compress Images (10 minutes)</h2>
      <p>Large images slow down your site. Use tools like TinyPNG to compress images without quality loss. Aim for images under 200KB.</p>

      <h2>5. Create a FAQ Schema (10 minutes)</h2>
      <p>Add FAQ structured data to your main pages. This can earn you rich snippets in search results and increase visibility.</p>

      <h2>6. Fix Broken Links (5 minutes)</h2>
      <p>Run your site through a broken link checker. Fix or redirect any 404 errors you find.</p>

      <h2>7. Update Old Content (10 minutes)</h2>
      <p>Find your best blog post from last year. Update statistics, add new information, and change the publish date.</p>

      <h2>8. Add Alt Text to Images (5 minutes)</h2>
      <p>Check your top pages for images without alt text. Add descriptive, keyword-rich alt text to each.</p>

      <h2>9. Claim Your Google Business Profile (5 minutes)</h2>
      <p>If you haven't already, claim and optimize your Google Business Profile. It's free and crucial for local SEO.</p>

      <h2>10. Submit Your Sitemap (2 minutes)</h2>
      <p>Make sure your XML sitemap is submitted to Google Search Console. This helps Google find and index all your pages.</p>

      <h2>Bonus Tip: Track Your Progress</h2>
      <p>Before implementing these changes, record your current rankings for key terms. Check again in 2 weeks to see the impact.</p>

      <h2>Want Even Faster Results?</h2>
      <p>These quick wins are just the beginning. GoalSEO automates hundreds of optimizations like these, continuously improving your site 24/7. What takes you an hour to do manually, our AI does in seconds—and it never stops optimizing.</p>
    `,
    relatedPosts: ['1', '2', '4']
  },
  {
    id: '4',
    title: 'Case Study: From Page 10 to #1 in 47 Days',
    subtitle: 'How TechGadgets.io Dominated Their Niche',
    author: 'David Park',
    authorRole: 'Customer Success Director',
    date: '2024-03-08',
    readTime: '10 min read',
    category: 'Case Studies',
    tags: ['Case Study', 'Success Story', 'Results', 'E-commerce'],
    image: '/api/placeholder/1200/600',
    content: `
      <p>When TechGadgets.io came to us, they were invisible in search results. Their main keywords ranked on page 10 or worse. Today, they dominate page 1 for over 200 high-value keywords. Here's exactly how they did it.</p>

      <h2>The Challenge</h2>
      <p>TechGadgets.io sells consumer electronics online. Despite having great products and competitive prices, they were getting less than 500 organic visitors per month. Their problems included:</p>
      <ul>
        <li>No SEO strategy or optimization</li>
        <li>Thin, manufacturer-copied product descriptions</li>
        <li>No blog or content marketing</li>
        <li>Zero backlinks from relevant sites</li>
        <li>Slow site speed (8+ second load times)</li>
      </ul>

      <h2>The GoalSEO Solution</h2>
      <p>We implemented our AI-powered SEO platform with a focus on quick wins and sustainable growth.</p>

      <h3>Day 1-7: Technical Foundation</h3>
      <ul>
        <li>Fixed critical technical SEO issues</li>
        <li>Improved site speed to under 3 seconds</li>
        <li>Implemented proper URL structure</li>
        <li>Set up comprehensive tracking</li>
      </ul>

      <h3>Day 8-21: Content Transformation</h3>
      <ul>
        <li>AI rewrote 500+ product descriptions</li>
        <li>Created 50 buying guide articles</li>
        <li>Optimized all meta tags and headers</li>
        <li>Built topic clusters around main categories</li>
      </ul>

      <h3>Day 22-35: Authority Building</h3>
      <ul>
        <li>Launched link-building campaign</li>
        <li>Created shareable infographics</li>
        <li>Guest posting on tech blogs</li>
        <li>Built relationships with influencers</li>
      </ul>

      <h3>Day 36-47: Optimization and Scaling</h3>
      <ul>
        <li>Fine-tuned based on initial results</li>
        <li>Expanded to long-tail keywords</li>
        <li>Implemented advanced schema markup</li>
        <li>Launched automated content creation</li>
      </ul>

      <h2>The Results</h2>
      <p>The transformation was dramatic:</p>

      <h3>Traffic Growth</h3>
      <ul>
        <li>Month 1: 500 → 8,750 organic visitors (1,650% increase)</li>
        <li>Month 2: 8,750 → 24,300 organic visitors</li>
        <li>Month 3: 24,300 → 41,200 organic visitors</li>
      </ul>

      <h3>Revenue Impact</h3>
      <ul>
        <li>Month 1: $12,000 additional revenue</li>
        <li>Month 2: $38,000 additional revenue</li>
        <li>Month 3: $67,000 additional revenue</li>
      </ul>

      <h3>Ranking Improvements</h3>
      <ul>
        <li>"wireless earbuds" - Position 97 → Position 3</li>
        <li>"smartphone accessories" - Not ranked → Position 1</li>
        <li>"tech gadgets 2024" - Position 68 → Position 2</li>
        <li>200+ keywords in top 10 (from 3)</li>
      </ul>

      <h2>Key Success Factors</h2>

      <h3>1. Speed of Implementation</h3>
      <p>Using AI, we optimized content 50x faster than manual methods. What would take a team months, we accomplished in days.</p>

      <h3>2. Data-Driven Decisions</h3>
      <p>Every change was based on data, not guesswork. We tracked everything and doubled down on what worked.</p>

      <h3>3. Holistic Approach</h3>
      <p>We didn't just focus on one aspect. Technical SEO, content, and link building all worked together.</p>

      <h3>4. Continuous Optimization</h3>
      <p>Our AI never stops optimizing. While competitors rest, TechGadgets.io's SEO improves 24/7.</p>

      <h2>Client Testimonial</h2>
      <blockquote>
        <p>"I was skeptical that SEO could work this fast. But the results speak for themselves. We're now the #1 organic result for most of our products. Our revenue has increased 4x, and we're expanding our team. GoalSEO didn't just improve our SEO—they transformed our business."</p>
        <footer>— James Liu, Founder of TechGadgets.io</footer>
      </blockquote>

      <h2>Your Turn</h2>
      <p>TechGadgets.io's success isn't unique. We've replicated these results for hundreds of businesses. The only question is: how much longer will you wait to dominate your market?</p>
    `,
    relatedPosts: ['1', '2', '5']
  },
  {
    id: '5',
    title: 'Google\'s March 2024 Core Update: What You Need to Know',
    subtitle: 'Algorithm Changes and How to Adapt',
    author: 'Jessica Thompson',
    authorRole: 'SEO Research Analyst',
    date: '2024-03-05',
    readTime: '7 min read',
    category: 'Algorithm Updates',
    tags: ['Google Updates', 'Algorithm', 'SEO News', 'Core Update'],
    image: '/api/placeholder/1200/600',
    content: `
      <p>Google's March 2024 core update is rolling out, and early data shows significant ranking shifts across multiple industries. Here's everything you need to know to protect and improve your rankings.</p>

      <h2>What Changed in This Update</h2>
      <p>This update focuses heavily on:</p>
      <ul>
        <li>Content helpfulness and user satisfaction</li>
        <li>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</li>
        <li>Site speed and Core Web Vitals</li>
        <li>Mobile-first indexing completion</li>
      </ul>

      <h2>Winners and Losers</h2>
      
      <h3>Winners:</h3>
      <ul>
        <li>Sites with original, in-depth content</li>
        <li>Fast-loading, mobile-optimized websites</li>
        <li>Brands with strong author credentials</li>
        <li>Sites using AI for optimization (like GoalSEO users)</li>
      </ul>

      <h3>Losers:</h3>
      <ul>
        <li>Thin content and affiliate sites</li>
        <li>Slow, poorly optimized websites</li>
        <li>Sites with excessive ads</li>
        <li>AI-generated content without human oversight</li>
      </ul>

      <h2>How to Adapt and Thrive</h2>
      
      <h3>1. Audit Your Content Quality</h3>
      <p>Review your top pages. Ask yourself:</p>
      <ul>
        <li>Does this fully answer the user's question?</li>
        <li>Is this better than competing content?</li>
        <li>Would I bookmark or share this?</li>
      </ul>

      <h3>2. Improve E-E-A-T Signals</h3>
      <ul>
        <li>Add author bios to content</li>
        <li>Link to authoritative sources</li>
        <li>Showcase credentials and expertise</li>
        <li>Include case studies and real examples</li>
      </ul>

      <h3>3. Speed Up Your Site</h3>
      <p>Core Web Vitals are more important than ever:</p>
      <ul>
        <li>Largest Contentful Paint (LCP) under 2.5s</li>
        <li>First Input Delay (FID) under 100ms</li>
        <li>Cumulative Layout Shift (CLS) under 0.1</li>
      </ul>

      <h3>4. Enhance User Experience</h3>
      <ul>
        <li>Reduce intrusive interstitials</li>
        <li>Improve internal linking</li>
        <li>Make content scannable with headers</li>
        <li>Add helpful visuals and videos</li>
      </ul>

      <h2>The AI Advantage</h2>
      <p>Interestingly, sites using AI-powered SEO tools are seeing better results from this update. Why? Because AI can:</p>
      <ul>
        <li>Continuously optimize for user intent</li>
        <li>Maintain consistent content quality at scale</li>
        <li>Quickly adapt to algorithm changes</li>
        <li>Identify and fix issues before they impact rankings</li>
      </ul>

      <h2>What This Means for Your Strategy</h2>
      <p>This update reinforces that Google is getting better at identifying truly helpful content. The days of gaming the system with keyword stuffing and link schemes are long gone. Success now requires:</p>
      <ul>
        <li>Genuine expertise in your field</li>
        <li>Content that serves users first</li>
        <li>Technical excellence across all devices</li>
        <li>Continuous optimization and improvement</li>
      </ul>

      <h2>Take Action Now</h2>
      <p>Don't wait for your rankings to drop. The sites that act quickly to improve quality and user experience will capture the rankings lost by slower competitors. With GoalSEO's AI-powered optimization, you can implement these changes automatically and stay ahead of every algorithm update.</p>
    `,
    relatedPosts: ['1', '3', '4']
  }
]

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
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.id === params.id)
  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean)

  return (
    <article className="pt-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-gray-50 to-white py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
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
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {post.subtitle}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-electric-500 rounded-full flex items-center justify-center text-white font-semibold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-600">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:my-4 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-gray-400" />
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Share this article</div>
              <div className="text-sm text-gray-600">Help others discover this content</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                <Twitter className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                <Facebook className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Between Posts */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            {currentIndex > 0 ? (
              <Link
                href={`/blog/${blogPosts[currentIndex - 1].id}`}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Previous Article</div>
                  <div className="text-sm max-w-xs line-clamp-1">{blogPosts[currentIndex - 1].title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {currentIndex < blogPosts.length - 1 ? (
              <Link
                href={`/blog/${blogPosts[currentIndex + 1].id}`}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group text-right"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Next Article</div>
                  <div className="text-sm max-w-xs line-clamp-1">{blogPosts[currentIndex + 1].title}</div>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            {relatedPosts.slice(0, 3).map(relatedPost => relatedPost && (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {relatedPost.subtitle}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedPost.readTime}</span>
                    <span className="flex items-center gap-1">
                      Read more
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-electric-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate Your Search Rankings?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses using AI to win at SEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Free SEO Audit
              <TrendingUp className="h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              Watch Demo
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}