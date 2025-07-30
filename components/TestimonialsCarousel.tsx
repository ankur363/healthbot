import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award, TrendingUp, Users, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "Metropolitan Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote: "The AI diagnostic tools have revolutionized our radiology department. We've seen a 40% improvement in diagnosis accuracy and reduced patient wait times significantly.",
      rating: 5,
      category: "Diagnostics",
      impact: "40% accuracy improvement",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO",
      company: "HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Implementation was seamless and the ROI was immediate. Our patient satisfaction scores increased by 35% within the first quarter of deployment.",
      rating: 5,
      category: "Implementation",
      impact: "35% satisfaction increase",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of Cardiology",
      company: "Heart Care Center",
      image: "https://images.unsplash.com/photo-1594824835086-e592180db62c?w=100&h=100&fit=crop&crop=face",
      quote: "The predictive analytics helped us prevent 127 cardiac events last year. This technology is literally saving lives every day in our practice.",
      rating: 5,
      category: "Predictive Care",
      impact: "127 lives saved",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50/50 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/30"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Hospital Administrator",
      company: "Regional Medical Network",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Cost reduction of 28% while improving care quality seemed impossible until we partnered with this team. The AI solutions exceeded all expectations.",
      rating: 5,
      category: "Operations",
      impact: "28% cost reduction",
      gradient: "from-orange-500 to-red-500",
      bgColor: "from-orange-50/50 to-red-50/50 dark:from-orange-950/30 dark:to-red-950/30"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      role: "Research Director",
      company: "Medical Research Institute",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      quote: "The AI research platform accelerated our clinical trials by 60%. We're now able to identify promising treatments faster than ever before.",
      rating: 5,
      category: "Research",
      impact: "60% faster trials",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30"
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      role: "Emergency Medicine Director",
      company: "City General Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      quote: "In emergency medicine, every second counts. The AI triage system has improved our response times by 45% and patient outcomes dramatically.",
      rating: 5,
      category: "Emergency Care",
      impact: "45% faster response",
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50/50 to-cyan-50/50 dark:from-teal-950/30 dark:to-cyan-950/30"
    }
  ];

  const stats = [
    { icon: Users, label: "Healthcare Partners", value: "500+", color: "text-blue-600" },
    { icon: Heart, label: "Lives Improved", value: "2.5M+", color: "text-red-500" },
    { icon: TrendingUp, label: "Efficiency Gain", value: "40%", color: "text-green-600" },
    { icon: Award, label: "Industry Awards", value: "25+", color: "text-purple-600" }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-indigo-50/20 to-purple-50/20 dark:via-indigo-950/10 dark:to-purple-950/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20 mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-indigo-500 animate-pulse" />
            <span className="text-sm text-indigo-600 dark:text-indigo-400">Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
              Healthcare Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover how healthcare organizations worldwide are transforming patient care 
            and operational efficiency with our AI-powered solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-2xl md:text-3xl ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-gradient-to-br ${currentTestimonial.bgColor} rounded-3xl p-8 md:p-12 border border-border/30 relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <Quote className="absolute top-8 right-8 w-32 h-32 transform rotate-12" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-current to-transparent rounded-full transform -translate-x-32 translate-y-32"></div>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Badge className={`bg-gradient-to-r ${currentTestimonial.gradient} text-white border-none`}>
                        {currentTestimonial.category}
                      </Badge>
                      <div className="flex items-center">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className={`w-8 h-8 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent mb-4`} />
                      <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                        "{currentTestimonial.quote}"
                      </blockquote>
                    </div>

                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${currentTestimonial.gradient} bg-opacity-10 rounded-full`}>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm">Impact: {currentTestimonial.impact}</span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-md opacity-30 animate-pulse`}></div>
                      <Avatar className="w-24 h-24 relative">
                        <ImageWithFallback
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </Avatar>
                    </div>
                    
                    <div>
                      <h4 className="text-xl mb-1">{currentTestimonial.name}</h4>
                      <p className="text-muted-foreground">{currentTestimonial.role}</p>
                      <p className={`text-sm bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 -ml-6 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 -mr-6 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-lg hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${currentTestimonial.gradient}` 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${currentTestimonial.gradient}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentTestimonial.id}
            />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl border transition-all duration-300 ${
                index === currentIndex 
                  ? `border-primary bg-gradient-to-r ${testimonial.bgColor}` 
                  : 'border-border/50 bg-card/30 hover:bg-card/50'
              }`}
            >
              <Avatar className="w-8 h-8 mx-auto mb-2">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </Avatar>
              <div className="text-xs text-center">
                <div className="truncate">{testimonial.name.split(' ')[0]}</div>
                <div className={`text-xs bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                  {testimonial.category}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}