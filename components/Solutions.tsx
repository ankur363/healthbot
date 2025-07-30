import React from 'react';
import { 
  Brain, 
  Stethoscope, 
  Activity, 
  Database, 
  Scan, 
  HeartHandshake,
  Microscope,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

export function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Advanced machine learning algorithms for accurate medical diagnosis and early disease detection.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Stethoscope,
      title: "Predictive Analytics",
      description: "Predict patient outcomes and optimize treatment plans using sophisticated AI models.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with AI-powered alerts and intelligent health tracking.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform healthcare data into actionable insights with our advanced analytics platform.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      icon: Scan,
      title: "Medical Imaging",
      description: "AI-enhanced medical imaging for faster and more accurate radiological assessments.",
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.5
    },
    {
      icon: HeartHandshake,
      title: "Patient Care",
      description: "Personalized care recommendations and treatment optimization for better patient outcomes.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.6
    },
    {
      icon: Microscope,
      title: "Research Platform",
      description: "Accelerate medical research with AI-powered data analysis and pattern recognition.",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.7
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "HIPAA-compliant AI solutions with enterprise-grade security and privacy protection.",
      gradient: "from-violet-500 to-purple-500",
      delay: 0.8
    }
  ];

  return (
    <section id="solutions" className="min-h-screen bg-gradient-to-br from-background to-blue-50/50 dark:to-blue-950/10 pt-20"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
          >
            <Microscope className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm text-blue-600 dark:text-blue-400">Innovative Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Transforming Healthcare with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our comprehensive suite of AI-powered healthcare solutions empowers medical professionals 
            to deliver better patient care, improve operational efficiency, and advance medical research.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: solution.delay }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}></div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-500/20">
            <span className="text-muted-foreground">Ready to transform your healthcare operations?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}