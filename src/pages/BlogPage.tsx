
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Strategies for Success in Nursing School",
    excerpt: "Discover proven strategies to excel in your nursing education at Chamberlain University and beyond.",
    category: "Study Tips",
    author: "Dr. Maria Stevens",
    date: "May 5, 2024",
    readTime: "8 min read",
    slug: "strategies-for-nursing-school-success"
  },
  {
    id: 2,
    title: "Understanding NANDA Diagnoses: A Comprehensive Guide",
    excerpt: "Learn how to correctly identify and formulate nursing diagnoses using the NANDA framework.",
    category: "Nursing Knowledge",
    author: "Robert Johnson, MSN",
    date: "April 28, 2024",
    readTime: "12 min read",
    slug: "understanding-nanda-diagnoses"
  },
  {
    id: 3,
    title: "Evidence-Based Practice in Nursing: Implementation Guide",
    excerpt: "A step-by-step approach to integrating evidence-based practices into your nursing care plans and assignments.",
    category: "Clinical Practice",
    author: "Dr. Angela Thomas",
    date: "April 15, 2024",
    readTime: "10 min read",
    slug: "evidence-based-practice-guide"
  },
  {
    id: 4,
    title: "Mastering APA Format in Nursing Papers: Tips and Examples",
    excerpt: "Common APA formatting mistakes in nursing papers and how to avoid them in your assignments.",
    category: "Writing Tips",
    author: "James Wilson, PhD",
    date: "April 7, 2024",
    readTime: "7 min read",
    slug: "mastering-apa-format"
  },
  {
    id: 5,
    title: "Nursing Ethics: Navigating Common Dilemmas in Your Assignments",
    excerpt: "How to approach ethical scenarios in nursing case studies and reflection papers.",
    category: "Ethics",
    author: "Dr. Sarah Johnson",
    date: "March 25, 2024",
    readTime: "9 min read",
    slug: "nursing-ethics-dilemmas"
  },
  {
    id: 6,
    title: "Time Management for Nursing Students: Balancing School, Work and Life",
    excerpt: "Practical strategies to manage your time effectively as a busy nursing student with multiple responsibilities.",
    category: "Student Life",
    author: "Michelle Rogers, MSN",
    date: "March 18, 2024",
    readTime: "6 min read",
    slug: "time-management-nursing-students"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-nursing-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-nursing-navy">Nursing Insights Blog</h1>
              <p className="text-lg text-nursing-navy/80 mb-8">
                Expert articles, guides, and resources to help you succeed in your nursing education.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 border-nursing-blue/30 focus:border-nursing-blue"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-nursing-navy/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-gradient-to-br from-nursing-lightBlue/20 to-nursing-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-nursing-blue h-64 lg:h-auto">
                  <div className="h-full w-full flex items-center justify-center text-white">
                    <div className="text-center p-6">
                      <span className="text-4xl">📚</span>
                      <p className="mt-4 text-white/80">Featured Article</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-nursing-lightBlue/30 text-nursing-navy text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="ml-2 text-xs text-nursing-navy/60">May 10, 2024 • 15 min read</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-nursing-navy">The Complete Guide to Writing Exceptional Nursing Case Studies</h2>
                  <p className="text-nursing-navy/80 mb-6">
                    Our comprehensive guide walks you through every step of creating compelling, evidence-based nursing case studies that showcase your critical thinking and clinical judgment skills.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-nursing-navy rounded-full flex items-center justify-center text-white">
                        <span className="font-semibold">MS</span>
                      </div>
                      <span className="ml-2 text-sm text-nursing-navy/80">By Dr. Maria Stevens</span>
                    </div>
                    <Link to="/blog/nursing-case-studies-guide">
                      <Button variant="outline" className="text-nursing-blue border-nursing-blue hover:bg-nursing-blue hover:text-white">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-wrap items-center justify-between">
              <h2 className="text-2xl font-bold text-nursing-navy">Latest Articles</h2>
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <Button variant="outline" className="text-sm border-nursing-blue/50 text-nursing-blue">
                  All Categories
                </Button>
                <Button variant="outline" className="text-sm border-nursing-blue/50 text-nursing-blue">
                  Study Tips
                </Button>
                <Button variant="outline" className="text-sm border-nursing-blue/50 text-nursing-blue">
                  Clinical Practice
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="bg-nursing-lightBlue/20 h-48 flex items-center justify-center">
                      <span className="text-4xl">📄</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-medium bg-nursing-lightBlue/30 text-nursing-navy px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-nursing-navy/60">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-nursing-navy group-hover:text-nursing-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-nursing-navy/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-nursing-navy/60">
                          By {post.author}
                        </span>
                        <span className="text-xs text-nursing-navy/60">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-nursing-blue text-nursing-blue hover:bg-nursing-blue hover:text-white">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-nursing-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter for the latest nursing education tips, guides, and resources delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
                <Button className="bg-nursing-lightBlue text-nursing-navy hover:bg-white hover:text-nursing-navy">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
