import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

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
            <Play className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm text-purple-600 dark:text-purple-400">See It In Action</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
          >
            Experience the Future of{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Healthcare AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Watch how our AI-powered solutions are revolutionizing patient care, 
            improving diagnostic accuracy, and transforming healthcare operations worldwide.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Wrapper */}
          <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl group">
            {/* Placeholder Video Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center">
              <div className="text-center text-white">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
                  <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/30 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
                </div>

                {/* Medical visualization */}
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-8 relative"
                  >
                    <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl mb-4">Healthcare AI in Action</h3>
                  <p className="text-white/80 mb-8 max-w-md mx-auto">
                    Discover how our AI solutions are transforming patient diagnosis, 
                    treatment planning, and healthcare delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300 group"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white ml-0" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </motion.button>
            </motion.div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex-1 bg-white/20 rounded-full h-1 mx-4">
                  <div className="bg-white rounded-full h-1 w-1/3"></div>
                </div>
                <span className="text-white text-sm">2:15 / 6:42</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-80 blur-sm animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-70 blur-sm animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/4 -right-12 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg opacity-60 blur-sm animate-pulse animation-delay-2000"></div>
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-muted-foreground">Diagnostic Accuracy Improvement</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              60%
            </div>
            <p className="text-muted-foreground">Reduction in Analysis Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-muted-foreground">Healthcare Facilities Served</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}