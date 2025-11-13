/* src/components/FeaturedProjects.jsx */

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ProjectCard } from './ProjectCard'; // Adjust path as needed
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// 1. Define your project data (No change)
const projectData = [
  {
    title: "Project Alpha",
    category: "Web Application",
    description: "A dynamic, multi-dashboard web platform built to manage and scale enterprise-level solutions.",
    tags: ["React", "Node.js", "TypeScript", "+3"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    url: "#"
  },
  {
    title: "SaaS Dashboard",
    category: "Cloud Solution",
    description: "A comprehensive SaaS dashboard for real-time analytics, user management, and API integrations.",
    tags: ["Vue.js", "AWS", "Python", "+5"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
    url: "#"
  },
  {
    title: "E-Commerce Store",
    category: "Web Development",
    description: "A high-converting e-commerce store with custom CMS, payment integrations, and scalable architecture.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "+2"],
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop",
    url: "#"
  },
  {
    title: "Mobile App",
    category: "Mobile Application",
    description: "A cross-platform mobile app designed to bring wellness and tracking to users' fingertips.",
    tags: ["React Native", "Firebase", "PHP", "+4"],
    imageUrl: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070&auto=format&fit=crop",
    url: "#"
  },
];

const FeaturedProjects = () => {
  // 2. Set up Embla Carousel (No change)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 3. Create scroll functions (No change)
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // 4. Update the active dot (No change)
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
      {/* === TOP HEADING (No change) === */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
          Our Works
        </div>
        <h2 
          className="
            text-4xl md:text-6xl font-bold mb-4
            bg-clip-text text-transparent 
            bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
            bg-[200%_auto] animate-shine
          "
        >
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          A selection of our most impactful work across various industries
          and technologies.
        </p>
      </div>

      {/* === 5. UPDATED: CAROUSEL WRAPPER --- */}
      {/* This outer div is relative to position the arrows */}
      <div className="relative">
        {/* The Carousel Viewport */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container -ml-2"> {/* Offset padding */}
            {projectData.map((project, index) => (
              <div 
                key={index}
                className="embla__slide p-2 flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        
        {/* --- 6. UPDATED: Arrow Buttons Position --- */}
        {/* Arrows are now positioned relative to the div above */}
        <button 
          onClick={scrollPrev} 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground
                     absolute top-1/2 -translate-y-1/2 left-[-1rem] md:left-[-2rem] z-10 
                     transition-all hover:bg-muted hover:scale-110"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollNext} 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground
                     absolute top-1/2 -translate-y-1/2 right-[-1rem] md:right-[-2rem] z-10 
                     transition-all hover:bg-muted hover:scale-110"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      {/* --- END OF UPDATE --- */}


      {/* 7. Pagination Dots (No change) */}
      <div className="flex justify-center gap-2 mt-8">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-primary scale-125' : 'bg-muted'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default FeaturedProjects;