import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, BookOpen, Filter, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI Research', 'Machine Learning', 'Healthcare Analytics', 'NLP Technology', 'Medical Imaging', 'Drug Discovery'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Medical Diagnosis: Revolutionizing Healthcare",
      excerpt: "Explore how artificial intelligence is transforming medical diagnosis, improving accuracy rates, and enabling early disease detection across various medical specialties.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI Research",
      tags: ["AI", "Diagnosis", "Healthcare", "Innovation"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning in Drug Discovery: Accelerating Innovation",
      excerpt: "Discover how ML algorithms are speeding up drug discovery processes, reducing costs, and identifying potential treatments for complex diseases.",
      author: "Prof. Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Drug Discovery",
      tags: ["ML", "Drug Discovery", "Research", "Innovation"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "Predictive Analytics for Patient Care: Saving Lives with Data",
      excerpt: "Learn how predictive models are helping healthcare providers anticipate patient needs, prevent complications, and improve treatment outcomes.",
      author: "Dr. Emily Watson",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Healthcare Analytics",
      tags: ["Analytics", "Patient Care", "Prediction", "Data"],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 4,
      title: "Natural Language Processing in Electronic Health Records",
      excerpt: "Understand how NLP technology is extracting valuable insights from unstructured medical data, improving clinical documentation and research.",
      author: "Dr. James Liu",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "NLP Technology",
      tags: ["NLP", "EHR", "Documentation", "Data Processing"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Medical Imaging: Enhancing Diagnostic Precision",
      excerpt: "Explore the latest advances in AI-driven medical imaging technology and its impact on radiology, pathology, and diagnostic accuracy.",
      author: "Dr. Anna Kowalski",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      category: "Medical Imaging",
      tags: ["Medical Imaging", "Radiology", "AI", "Diagnostics"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 6,
      title: "The Ethics of AI in Healthcare: Balancing Innovation and Privacy",
      excerpt: "Addressing the critical ethical considerations in healthcare AI development, including patient privacy, bias mitigation, and regulatory compliance.",
      author: "Prof. David Thompson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "AI Research",
      tags: ["Ethics", "Privacy", "Regulation", "AI"],
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&crop=center",
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:via-blue-950/10 dark:to-purple-950/10 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm text-blue-600 dark:text-blue-400">Healthcare AI Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
          >
            Latest{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Insights & Research
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Explore cutting-edge research, industry insights, and breakthrough innovations 
            in healthcare artificial intelligence and machine learning.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-card/50 backdrop-blur-sm border-border/50"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                    : "bg-card/50 backdrop-blur-sm border-border/50 hover:bg-accent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-medium">
                    Featured
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl mb-4 hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-medium">
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
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-blue-500/50 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50"
          >
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </div>
  );
}