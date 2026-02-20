'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Download } from 'lucide-react';

export default function HomeSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-4">
            <span className="text-lg font-medium text-primary">Hi, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Doug Zeller
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer building full-stack solutions with AI/ML
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Currently at <span className="font-semibold text-foreground">Vituity</span>, 
            creating intelligent systems that reduce manual processing from hours to minutes. 
            Passionate about leveraging technology to solve real business problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" onClick={handleScrollToProjects}>
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
