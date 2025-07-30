import React from 'react';
import { 
  Monitor, 
  Server, 
  Sparkles, 
  Brain,
  Code,
  Database,
  Cpu,
  Layers,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Zap,
  Network,
  Shield,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Services() {
  const serviceCategories = [
    {
      icon: Monitor,
      category: "Frontend Technologies",
      title: "Modern Web & Mobile Interfaces",
      description: "Cutting-edge frontend solutions that deliver exceptional user experiences for healthcare applications.",
      technologies: [
        { name: "React.js", icon: Code, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", icon: Layers, color: "from-black to-gray-700" },
        { name: "Vue.js", icon: Globe, color: "from-green-500 to-emerald-500" },
        { name: "React Native", icon: Smartphone, color: "from-purple-500 to-pink-500" },
        { name: "Flutter", icon: Smartphone, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", icon: Code, color: "from-blue-600 to-indigo-600" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    {
      icon: Server,
      category: "Backend Technologies", 
      title: "Scalable Server-Side Solutions",
      description: "Robust backend infrastructure designed to handle healthcare data processing and system integrations.",
      technologies: [
        { name: "Node.js", icon: Server, color: "from-green-500 to-green-600" },
        { name: "Python", icon: Code, color: "from-yellow-500 to-orange-500" },
        { name: "Java", icon: Cpu, color: "from-red-500 to-orange-600" },
        { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: Database, color: "from-green-600 to-green-800" },
        { name: "Redis", icon: Zap, color: "from-red-500 to-red-600" }
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/50 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/30"
    },
    {
      icon: Sparkles,
      category: "Generative AI",
      title: "Advanced AI Content Generation",
      description: "Next-generation AI solutions that create, analyze, and process healthcare content intelligently.",
      technologies: [
        { name: "GPT Models", icon: Bot, color: "from-purple-500 to-pink-500" },
        { name: "Claude AI", icon: Brain, color: "from-orange-500 to-red-500" },
        { name: "LangChain", icon: Network, color: "from-green-500 to-teal-500" },
        { name: "OpenAI API", icon: Sparkles, color: "from-black to-gray-600" },
        { name: "Hugging Face", icon: Bot, color: "from-yellow-500 to-orange-500" },
        { name: "RAG Systems", icon: Brain, color: "from-indigo-500 to-purple-500" }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
    {
      icon: Brain,
      category: "AI/ML Solutions",
      title: "Intelligent Healthcare Analytics",
      description: "Machine learning and AI models specifically designed for healthcare applications and medical data analysis.",
      technologies: [
        { name: "TensorFlow", icon: Cpu, color: "from-orange-500 to-red-500" },
        { name: "PyTorch", icon: Brain, color: "from-red-500 to-pink-500" },
        { name: "Scikit-learn", icon: Network, color: "from-blue-500 to-indigo-500" },
        { name: "Keras", icon: Layers, color: "from-red-600 to-red-700" },
        { name: "Computer Vision", icon: Monitor, color: "from-cyan-500 to-blue-500" },
        { name: "NLP", icon: Bot, color: "from-green-500 to-cyan-500" }
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50/50 to-red-50/50 dark:from-orange-950/30 dark:to-red-950/30"
    }
  ];

  const deploymentOptions = [
    { name: "Cloud Deployment", icon: Cloud, desc: "AWS, Azure, GCP" },
    { name: "Edge Computing", icon: Cpu, desc: "Real-time processing" },
    { name: "Enterprise Security", icon: Shield, desc: "HIPAA compliant" },
    { name: "API Integration", icon: Network, desc: "Seamless connectivity" }
  ];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-background via-indigo-50/20 to-purple-50/20 dark:via-indigo-950/10 dark:to-purple-950/10 pt-20"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 mr-2 text-indigo-500 animate-pulse" />
            <span className="text-sm text-indigo-600 dark:text-indigo-400">Technology Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Complete{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
              Tech Stack
            </span>{' '}
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From frontend frameworks to AI/ML models, we provide comprehensive technology solutions 
            that power next-generation healthcare applications and intelligent systems.
          </motion.p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient} border border-border/30 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-current to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-current to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
                </div>

                {/* Category Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className={`mb-2 bg-gradient-to-r ${category.gradient} text-white border-none`}>
                        {category.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-lg max-w-2xl">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.technologies.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <Card className="h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg card-hover">
                          <CardContent className="p-4 text-center">
                            <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                              <TechIcon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-sm group-hover:text-primary transition-colors duration-300">
                              {tech.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deployment & Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl mb-4">
              Enterprise{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Deployment
              </span>{' '}
              & Integration
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scalable deployment options and seamless integration capabilities 
              to fit your organization's infrastructure requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, index) => {
              const OptionIcon = option.icon;
              return (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <OptionIcon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {option.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{option.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl mb-4">
                Ready to Build with Our Tech Stack?
              </h3>
              <p className="text-muted-foreground mb-8">
                Let our expert development team create custom healthcare solutions using the latest technologies. 
                From concept to deployment, we handle every aspect of your technical requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group"
                >
                  Start Your Project
                  <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-indigo-500/50 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
                >
                  View Portfolio
                  <Monitor className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}