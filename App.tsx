import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Router } from './components/Router';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <div className="min-h-screen text-foreground">
      <Navigation 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />
      <main>
        <Router currentPath={currentPath} onNavigate={handleNavigate} />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-background via-blue-50/20 to-indigo-50/10 dark:via-gray-800/30 dark:to-blue-950/20 border-t border-border/50 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 via-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg subtle-glow">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <span className="text-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-text-gradient">
                  HealthTech
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Revolutionizing healthcare through innovative AI and machine learning solutions. 
                Empowering medical professionals to deliver better patient care and outcomes.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-sky-500/25">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/25">
                  <span className="text-white text-sm">📱</span>
                </div>
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h4 className="mb-6 text-lg bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Solutions</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavigate('solutions')} className="text-muted-foreground hover:text-sky-700 dark:hover:text-sky-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">AI Diagnostics</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('solutions')} className="text-muted-foreground hover:text-sky-700 dark:hover:text-sky-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Predictive Analytics</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('solutions')} className="text-muted-foreground hover:text-sky-700 dark:hover:text-sky-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Medical Imaging</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('solutions')} className="text-muted-foreground hover:text-sky-700 dark:hover:text-sky-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Patient Care</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="mb-6 text-lg bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavigate('about')} className="text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('blog')} className="text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Blog</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('about')} className="text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Research</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('blog')} className="text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">News</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="mb-6 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavigate('contact')} className="text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Documentation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('contact')} className="text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">API Reference</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('contact')} className="text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Help Center</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
                <li><button onClick={() => handleNavigate('contact')} className="text-muted-foreground hover:text-emerald-700 dark:hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-left relative group w-full p-1">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-sky-500/8 via-blue-500/8 to-emerald-500/8 backdrop-blur-sm rounded-2xl p-8 border border-sky-500/20 mb-12 subtle-glow">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl mb-3 bg-gradient-to-r from-sky-700 via-blue-700 to-emerald-700 dark:from-sky-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">Stay Updated with Healthcare AI</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get the latest insights on AI in healthcare, product updates, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border/50 focus:border-blue-500 focus:outline-none transition-colors text-sm focus:ring-2 focus:ring-blue-500/20"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm whitespace-nowrap btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              &copy; 2024 HealthTech AI. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Privacy Policy</button>
              <span className="text-sky-600 dark:text-sky-400">•</span>
              <button className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Terms of Service</button>
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <button className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Cookie Policy</button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500 glow-text">❤️</span>
              <span>for healthcare</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}