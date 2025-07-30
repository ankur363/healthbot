import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ isDark, toggleTheme, currentPath, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Solutions', path: 'solutions' },
    { name: 'Services', path: 'services' },
    { name: 'Blog', path: 'blog' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 via-blue-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg drop-shadow-sm">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-700 via-blue-700 to-emerald-700 dark:from-sky-400 dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              HealthTech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`relative transition-colors duration-300 group ${
                  currentPath === item.path 
                    ? 'text-sky-700 dark:text-sky-400' 
                    : 'text-foreground hover:text-sky-700 dark:hover:text-sky-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 ${
                  currentPath === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden group"
            >
              <Sun className={`h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
                  currentPath === item.path 
                    ? 'text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30' 
                    : 'text-foreground hover:text-sky-700 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}