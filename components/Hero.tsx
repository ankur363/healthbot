import React from 'react';
import { ArrowRight, Brain, Heart, Shield, Activity, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-sky-50/30 to-blue-50/50 dark:to-blue-950/20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary healthcare gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-sky-400/15 via-blue-500/20 to-cyan-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/15 via-teal-500/20 to-green-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-violet-400/15 via-purple-500/20 to-indigo-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Healthcare data particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-emerald-500/10 rounded-full border border-sky-500/30 backdrop-blur-sm shadow-lg"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Brain className="w-5 h-5 mr-3 text-sky-600 dark:text-sky-400" />
            </motion.div>
            <span className="text-sm bg-gradient-to-r from-sky-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent font-medium">
              AI-Powered Healthcare Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl leading-tight"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Revolutionizing{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-sky-600 via-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Healthcare
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              with AI
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Empowering healthcare providers with cutting-edge AI and machine learning solutions 
            to improve patient outcomes, streamline operations, and accelerate medical breakthroughs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 hover:from-sky-700 hover:via-blue-700 hover:to-emerald-700 text-white group btn-primary shadow-xl"
              >
                Get Started
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-sky-500/50 text-sky-700 hover:bg-sky-50 hover:border-sky-500 dark:hover:bg-sky-950/50 hover-lift backdrop-blur-sm shadow-lg"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                500+
              </motion.div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                2.5M+
              </motion.div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                98.7%
              </motion.div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Enhanced animated background glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-sky-400/15 via-blue-500/20 via-emerald-500/15 to-teal-400/20 rounded-full blur-3xl"
            />

            {/* Central AI brain with enhanced effects */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 15, 0, -15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-36 h-36 bg-gradient-to-br from-sky-500 via-blue-600 via-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-sm z-10 medical-pulse"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Brain className="w-18 h-18 text-white drop-shadow-lg" />
              </motion.div>
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-r from-sky-500/50 via-blue-600/50 to-emerald-500/50 rounded-3xl blur-xl opacity-60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>

            {/* Enhanced medical data nodes */}
            {[
              { icon: Heart, color: 'from-red-500 to-rose-500', delay: 0, radius: 110, speed: 28, name: 'Cardiology' },
              { icon: Shield, color: 'from-emerald-500 to-teal-500', delay: 1, radius: 150, speed: 22, name: 'Security' },
              { icon: Activity, color: 'from-blue-500 to-cyan-500', delay: 2, radius: 130, speed: 32, name: 'Monitoring' },
              { icon: Zap, color: 'from-amber-500 to-orange-500', delay: 3, radius: 170, speed: 18, name: 'Analytics' }
            ].map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={index}
                  className={`absolute w-18 h-18 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-sm`}
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: node.speed, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: node.delay * 0.5
                  }}
                  whileHover={{ scale: 1.2, zIndex: 20 }}
                  style={{
                    transformOrigin: `${node.radius}px 0px`,
                    left: '50%',
                    top: '50%',
                    marginLeft: `-${node.radius}px`,
                    marginTop: '-36px'
                  }}
                >
                  <Icon className="w-9 h-9 text-white drop-shadow-lg" />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.4, 1], 
                      opacity: [0.2, 0.5, 0.2],
                      rotate: [0, -360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-white/25 rounded-2xl"
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-sm"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: index * 0.2 
                    }}
                  />
                </motion.div>
              );
            })}

            {/* Data connection visualization */}
            <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 5 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="33%" stopColor="#0ea5e9" stopOpacity="0.8" />
                  <stop offset="66%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="healthcareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="healthcareGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feColorMatrix in="coloredBlur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Animated connection rings */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="70"
                fill="none"
                stroke="url(#connectionGradient)"
                strokeWidth="2.5"
                strokeDasharray="10 5"
                filter="url(#glow)"
                animate={{ 
                  strokeDashoffset: [0, -30],
                  opacity: [0.4, 0.9, 0.4],
                  r: [70, 75, 70]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.circle
                cx="50%"
                cy="50%"
                r="100"
                fill="none"
                stroke="url(#connectionGradient2)"
                strokeWidth="2"
                strokeDasharray="15 10"
                filter="url(#glow)"
                animate={{ 
                  strokeDashoffset: [0, 50],
                  opacity: [0.3, 0.7, 0.3],
                  r: [100, 105, 100]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />

              <motion.circle
                cx="50%"
                cy="50%"
                r="135"
                fill="none"
                stroke="url(#connectionGradient)"
                strokeWidth="1.5"
                strokeDasharray="20 15"
                filter="url(#glow)"
                animate={{ 
                  strokeDashoffset: [0, -70],
                  opacity: [0.2, 0.5, 0.2],
                  r: [135, 140, 135]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 3
                }}
              />
              
              {/* Healthcare pulse rings */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="50"
                fill="none"
                stroke="rgba(16, 185, 129, 0.6)"
                strokeWidth="1"
                animate={{ 
                  r: [50, 180, 50],
                  opacity: [0.8, 0, 0.8],
                  strokeWidth: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeOut",
                  delay: 0
                }}
              />
              
              <motion.circle
                cx="50%"
                cy="50%"
                r="50"
                fill="none"
                stroke="rgba(14, 165, 233, 0.6)"
                strokeWidth="1"
                animate={{ 
                  r: [50, 180, 50],
                  opacity: [0.8, 0, 0.8],
                  strokeWidth: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeOut",
                  delay: 2
                }}
              />
              
              <motion.circle
                cx="50%"
                cy="50%"
                r="50"
                fill="none"
                stroke="rgba(139, 92, 246, 0.6)"
                strokeWidth="1"
                animate={{ 
                  r: [50, 180, 50],
                  opacity: [0.8, 0, 0.8],
                  strokeWidth: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeOut",
                  delay: 4
                }}
              />
            </svg>

            {/* Enhanced floating healthcare data particles */}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full data-particle"
                style={{
                  width: `${3 + Math.random() * 4}px`,
                  height: `${3 + Math.random() * 4}px`,
                  left: '50%',
                  top: '50%',
                  background: `linear-gradient(${Math.random() * 360}deg, 
                    ${['#0ea5e9', '#3b82f6', '#10b981', '#8b5cf6', '#06b6d4'][Math.floor(Math.random() * 5)]}, 
                    ${['#6366f1', '#14b8a6', '#8b5cf6', '#0ea5e9', '#10b981'][Math.floor(Math.random() * 5)]})`
                }}
                animate={{
                  x: [0, Math.random() * 400 - 200, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 400 - 200, Math.random() * 200 - 100, 0],
                  opacity: [0, 1, 0.8, 0],
                  scale: [0, 2, 1.5, 0],
                  rotate: [0, 360, 720, 1080]
                }}
                transition={{
                  duration: 8 + Math.random() * 6,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Enhanced neural network connections */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute rounded-full"
                style={{
                  width: '3px',
                  height: `${90 + Math.random() * 120}px`,
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center bottom',
                  transform: `rotate(${i * 45}deg) translateY(-50%)`,
                  background: `linear-gradient(to top, 
                    ${['rgba(14, 165, 233, 0.6)', 'rgba(59, 130, 246, 0.5)', 'rgba(16, 185, 129, 0.6)', 'rgba(139, 92, 246, 0.5)'][i % 4]}, 
                    transparent)`
                }}
                animate={{
                  scaleY: [0.3, 1.4, 0.3],
                  opacity: [0.1, 0.7, 0.1],
                  scaleX: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Additional medical cross connections */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`cross-${i}`}
                className="absolute bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full"
                style={{
                  width: '2px',
                  height: `${60 + Math.random() * 80}px`,
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center bottom',
                  transform: `rotate(${i * 90 + 45}deg) translateY(-50%)`
                }}
                animate={{
                  scaleY: [0.8, 1.6, 0.8],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}