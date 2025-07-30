import React from 'react';
import { Hero } from './Hero';
import { SeeItInAction } from './SeeItInAction';
import { BlogSection } from './BlogSection';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { Solutions } from './Solutions';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { VideoShowcase } from './VideoShowcase';
import { BlogPage } from './BlogPage';

interface RouterProps {
  currentPath: string;
  onNavigate?: (path: string) => void;
}

export function Router({ currentPath, onNavigate }: RouterProps) {
  switch (currentPath) {
    case 'home':
      return (
        <>
          <Hero />
          <SeeItInAction />
          <BlogSection onNavigate={onNavigate} />
          <TestimonialsCarousel />
        </>
      );
    case 'solutions':
      return <Solutions />;
    case 'services':
      return <Services />;
    case 'about':
      return <About />;
    case 'contact':
      return <Contact />;
    case 'blog':
      return <BlogPage />;
    default:
      return (
        <>
          <Hero />
          <SeeItInAction />
          <BlogSection onNavigate={onNavigate} />
          <TestimonialsCarousel />
        </>
      );
  }
}