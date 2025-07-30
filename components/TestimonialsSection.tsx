import React from 'react';
import { Star, Quote, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Jennifer Martinez",
      role: "Chief Medical Officer",
      company: "Metropolitan General Hospital",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "HealthTech AI has transformed our diagnostic capabilities. The accuracy improvements are remarkable, and our patients receive faster, more precise care. It's revolutionized how we practice medicine.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      id: 2,
      name: "Prof. David Chen",
      role: "Director of Radiology",
      company: "University Medical Center",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "The AI-powered medical imaging analysis has reduced our diagnostic time by 60% while improving accuracy. Our radiologists can now focus on complex cases while AI handles routine screenings.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      id: 3,
      name: "Dr. Sarah Thompson",
      role: "Head of Oncology",
      company: "Cancer Treatment Institute",
      avatar: "https://images.unsplash.com/photo-1594824475531-06ad6d6d4141?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "The predictive analytics platform has been instrumental in early cancer detection. We've seen a 40% improvement in early-stage diagnoses, which directly translates to better patient outcomes.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      id: 4,
      name: "Dr. Michael Rodriguez",
      role: "Chief Technology Officer",
      company: "Regional Health Network",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "Implementation was seamless, and the ROI has exceeded our expectations. The AI solutions integrate perfectly with our existing systems, and the support team is exceptional.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      role: "Emergency Department Director",
      company: "City General Hospital",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "In our emergency department, every second counts. The AI triage system helps us prioritize critical cases instantly, improving patient flow and potentially saving lives every day.",
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.5
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      role: "Director of Research",
      company: "Medical Research Foundation",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote: "The research capabilities have accelerated our clinical trials significantly. The data analysis tools help us identify patterns and insights that would take months to discover manually.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.6
    }
  ];

  const stats = [
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: Award,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      value: "500+",
      label: "Healthcare Facilities",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      value: "1M+",
      label: "Patients Helped",
      icon: Star,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30 dark:via-purple-950/10 dark:to-pink-950/10">
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 mb-6"
          >
            <Star className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm text-purple-600 dark:text-purple-400">Trusted by Healthcare Leaders</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            What Healthcare{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Professionals Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover how leading healthcare organizations are transforming patient care 
            and improving outcomes with our AI-powered solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br ${testimonial.gradient} rounded-full border-2 border-background`}></div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl mb-4">
              Join Healthcare Leaders Worldwide
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your healthcare operations with cutting-edge AI solutions? 
              Join hundreds of satisfied healthcare organizations already benefiting from our technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}