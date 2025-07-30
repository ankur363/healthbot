import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Clock, Users, TrendingUp, Award, Eye, PlayCircle, Monitor, Smartphone, Tablet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SeeItInAction() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const demos = [
    {
      id: 0,
      title: "AI-Powered Medical Diagnosis",
      subtitle: "Real-time Analysis & Detection",
      description: "Watch our AI system analyze medical scans in real-time, detecting anomalies with 95%+ accuracy and providing instant diagnostic insights.",
      videoUrl: "https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center",
      stats: [
        { label: "Accuracy Rate", value: "95.7%" },
        { label: "Processing Time", value: "< 2 sec" },
        { label: "Cases Analyzed", value: "50K+" }
      ],
      features: ["Real-time Analysis", "Multi-modal Imaging", "Instant Reports", "FDA Approved"],
      category: "Diagnostics",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      title: "Predictive Patient Analytics",
      subtitle: "Early Warning System",
      description: "See how our predictive models identify at-risk patients 48 hours before critical events, enabling proactive intervention.",
      videoUrl: "https://player.vimeo.com/video/169053818?background=1&autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=500&fit=crop&crop=center",
      stats: [
        { label: "Early Detection", value: "48hrs" },
        { label: "Risk Reduction", value: "67%" },
        { label: "Lives Saved", value: "2.3K+" }
      ],
      features: ["24/7 Monitoring", "Risk Scoring", "Alert System", "Integration Ready"],
      category: "Analytics",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Smart Treatment Optimization",
      subtitle: "Personalized Care Plans",
      description: "Experience how our AI creates personalized treatment plans by analyzing patient history, genetics, and real-world evidence.",
      videoUrl: "https://player.vimeo.com/video/179228669?background=1&autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&crop=center",
      stats: [
        { label: "Treatment Success", value: "89%" },
        { label: "Recovery Time", value: "-40%" },
        { label: "Patient Satisfaction", value: "4.8/5" }
      ],
      features: ["Genetic Analysis", "Drug Interactions", "Outcome Prediction", "Cost Optimization"],
      category: "Treatment",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Clinical Decision Support",
      subtitle: "AI-Assisted Healthcare",
      description: "Watch physicians use our AI assistant to make more informed decisions with evidence-based recommendations and risk assessments.",
      videoUrl: "https://player.vimeo.com/video/237715392?background=1&autoplay=1&loop=1&muted=1",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&crop=center",
      stats: [
        { label: "Decision Speed", value: "3x Faster" },
        { label: "Accuracy Boost", value: "+25%" },
        { label: "Physician Adoption", value: "94%" }
      ],
      features: ["Evidence-Based", "Risk Assessment", "Drug Recommendations", "Clinical Guidelines"],
      category: "Decision Support",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const deviceViews = [
    { icon: Monitor, label: "Desktop", active: true },
    { icon: Tablet, label: "Tablet", active: false },
    { icon: Smartphone, label: "Mobile", active: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-indigo-50/30 to-purple-50/30 dark:via-indigo-950/10 dark:to-purple-950/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
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
            <PlayCircle className="w-4 h-4 mr-2 text-indigo-500" />
            <span className="text-sm text-indigo-600 dark:text-indigo-400">Live Demonstrations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
          >
            See Our AI{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
              In Action
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Experience the power of our AI solutions through interactive demonstrations and real-world case studies. 
            See how we're transforming healthcare, one innovation at a time.
          </motion.p>
        </motion.div>

        {/* Demo Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {demos.map((demo, index) => (
            <Button
              key={demo.id}
              variant={activeDemo === index ? "default" : "outline"}
              onClick={() => setActiveDemo(index)}
              className={`${
                activeDemo === index 
                  ? `bg-gradient-to-r ${demo.gradient} text-white hover:opacity-90` 
                  : "bg-card/50 backdrop-blur-sm border-border/50 hover:bg-accent"
              } transition-all duration-300`}
            >
              <Badge className="mr-2 text-xs">{demo.category}</Badge>
              {demo.title}
            </Button>
          ))}
        </motion.div>

        {/* Main Demo Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Demo Area */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
              {/* Device View Toggle */}
              <div className="p-4 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 border-b border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground ml-4">healthcare-ai-demo.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {deviceViews.map((device) => {
                      const Icon = device.icon;
                      return (
                        <button
                          key={device.label}
                          className={`p-1 rounded ${device.active ? 'text-indigo-500' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          <Icon className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
                <ImageWithFallback
                  src={demos[activeDemo].thumbnail}
                  alt={demos[activeDemo].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-slate-700" />
                    ) : (
                      <Play className="w-8 h-8 text-slate-700 ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </motion.button>
                    <div className="text-white text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                      2:34 / 4:18
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="p-2 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Demo Stats */}
              <div className="p-6 bg-gradient-to-r from-slate-50/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-700/50">
                <div className="grid grid-cols-3 gap-4">
                  {demos[activeDemo].stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="text-center"
                    >
                      <div className={`text-2xl bg-gradient-to-r ${demos[activeDemo].gradient} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Demo Information */}
          <motion.div
            key={`info-${activeDemo}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <Badge className={`mb-4 bg-gradient-to-r ${demos[activeDemo].gradient} text-white`}>
                {demos[activeDemo].category}
              </Badge>
              <h3 className="text-3xl md:text-4xl mb-4">
                {demos[activeDemo].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {demos[activeDemo].description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {demos[activeDemo].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${demos[activeDemo].gradient} rounded-full`}></div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className={`bg-gradient-to-r ${demos[activeDemo].gradient} text-white hover:opacity-90 flex-1`}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Full Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="flex-1 border-border/50 hover:bg-accent"
              >
                Request Demo
              </Button>
            </div>

            {/* Interactive Elements */}
            <Card className="p-6 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/30 dark:border-indigo-800/30">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-sm font-medium">Live System Status</h5>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Processing Queue</span>
                  <span className="text-green-600">234 tasks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Response Time</span>
                  <span className="text-blue-600">1.2ms avg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Active Users</span>
                  <span className="text-purple-600">1,847 online</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl md:text-3xl mb-4">
              Ready to Experience Our AI Solutions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a personalized demonstration and see how our AI can transform your healthcare operations. 
              Our experts will walk you through real implementations tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
              >
                Schedule Live Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-indigo-500/50 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}