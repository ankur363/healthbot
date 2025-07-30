import React from 'react';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Zap,
  Target,
  Globe,
  Brain,
  Code
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Users, value: '200+', label: 'AI Experts', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '50+', label: 'Industry Awards', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: '300%', label: 'Growth Rate', gradient: 'from-green-500 to-emerald-500' },
    { icon: Globe, value: '25+', label: 'Countries', gradient: 'from-orange-500 to-red-500' }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics and pattern recognition in healthcare data.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      icon: Code,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning models for complex medical image analysis and diagnosis.',
      technologies: ['CNN', 'RNN', 'Transformers']
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'AI-powered image processing for medical imaging, pathology, and diagnostic applications.',
      technologies: ['OpenCV', 'YOLO', 'ResNet']
    },
    {
      icon: Zap,
      title: 'Natural Language Processing',
      description: 'Extract insights from medical records, research papers, and clinical documentation.',
      technologies: ['BERT', 'GPT', 'spaCy']
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-background to-purple-50/30 dark:to-purple-950/10 pt-20"
      style={{ paddingTop: '120px' }}>
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 mb-6"
          >
            <Brain className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm text-purple-600 dark:text-purple-400">About Our Technology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Pioneering{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Innovation
            </span>{' '}
            in Healthcare
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We're a team of world-class AI researchers, healthcare professionals, and engineers 
            dedicated to transforming healthcare through cutting-edge artificial intelligence and machine learning.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-2xl md:text-3xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* AI Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI & ML
              </span>{' '}
              Expertise
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Our multidisciplinary team combines deep expertise in artificial intelligence, 
              machine learning, and healthcare to develop solutions that make a real difference 
              in patient outcomes and clinical workflows.
            </p>
            
            <div className="grid gap-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{capability.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {capability.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
              </div>

              {/* AI Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Center Node */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  >
                    <Brain className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Outer Nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <motion.div
                      key={angle}
                      animate={{ 
                        rotate: -360,
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        y: { duration: 2 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute top-1/2 left-1/2 w-12 h-12"
                      style={{
                        transformOrigin: '6px 6px',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <motion.line
                        key={angle}
                        x1="160"
                        y1="160"
                        x2={160 + 120 * Math.cos((angle - 90) * Math.PI / 180)}
                        y2={160 + 120 * Math.sin((angle - 90) * Math.PI / 180)}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: angle / 100 }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    className="absolute w-2 h-2 bg-blue-500 rounded-full"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${30 + (i * 5)}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}