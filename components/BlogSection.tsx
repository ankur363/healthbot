import React from 'react';
import { Calendar, User, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogSectionProps {
  onNavigate?: (path: string) => void;
}

export function BlogSection({ onNavigate }: BlogSectionProps) {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Medical Diagnosis: Revolutionizing Healthcare",
      excerpt: "Explore how artificial intelligence is transforming medical diagnosis, improving accuracy rates, and enabling early disease detection across various medical specialties.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI Research",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Machine Learning in Drug Discovery: Accelerating Innovation",
      excerpt: "Discover how ML algorithms are speeding up drug discovery processes, reducing costs, and identifying potential treatments for complex diseases.",
      author: "Prof. Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Predictive Analytics for Patient Care: Saving Lives with Data",
      excerpt: "Learn how predictive models are helping healthcare providers anticipate patient needs, prevent complications, and improve treatment outcomes.",
      author: "Dr. Emily Watson",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Healthcare Analytics",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop&crop=center",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Natural Language Processing in Electronic Health Records",
      excerpt: "Understand how NLP technology is extracting valuable insights from unstructured medical data, improving clinical documentation and research.",
      author: "Dr. James Liu",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "NLP Technology",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:via-blue-950/10 dark:to-purple-950/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm text-blue-600 dark:text-blue-400">Latest Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Healthcare AI{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Research & Insights
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Stay updated with the latest breakthroughs, research findings, and innovative applications 
            of AI and machine learning in healthcare.
          </motion.p>
        </motion.div>

        {/* Blog Grid - Only show first 3 posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-full text-white text-xs font-medium`}>
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-blue-600 hover:text-blue-700 group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
            onClick={() => onNavigate?.('blog')}
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}