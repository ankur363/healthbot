import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'contact@healthtech.ai',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '24/7 Support Available',
      value: '+1 (555) 123-4567',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      value: 'Bangalore, India',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:via-blue-950/10 dark:to-purple-950/10 pt-20"
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
            <MessageCircle className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm text-blue-600 dark:text-blue-400">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Ready to Transform{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Healthcare?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Let's discuss how our AI-powered healthcare solutions can revolutionize 
            your organization and improve patient outcomes.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="bg-background/50 border-border/50 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background/50 border-border/50 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-background/50 border-border/50 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Company</label>
                    <Input 
                      placeholder="Your healthcare organization" 
                      className="bg-background/50 border-border/50 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your healthcare AI needs..." 
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="flex items-center space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{method.description}</p>
                      <p className="text-sm font-medium">{method.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Schedule Meeting */}
            <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg">Schedule a Demo</h4>
                    <p className="text-muted-foreground text-sm">Book a personalized demo session</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-blue-500/50 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50"
                >
                  Book Demo Call
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <h4 className="text-lg mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="border-t border-border/50 pt-2 mt-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}