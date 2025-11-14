/* src/components/Services.jsx */

import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  SparklesIcon,
  BugAntIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { BoltIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
// --- 1. IMPORT EMBLA AND AUTOPLAY ---
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/**
 * A single service card component (No change)
 */
const ServiceCard = ({ icon: Icon, title, path, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{children}</p>
      <Link
        to={path}
        className="text-foreground font-medium flex items-center group"
      >
        Learn More
        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

// --- Service data array (No change) ---
const servicesList = [
  {
    icon: CodeBracketIcon,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built to be fast, modern, and reflect your brand identity.",
    path: "/services",
  },
  {
    icon: ShoppingCartIcon, // NEW
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with secure payments and inventory management to sell your products.",
    path: "/services",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android to reach your customers anywhere.",
    path: "/services",
  },
  {
    icon: SparklesIcon, // NEW
    title: "Custom Software",
    description:
      "Bespoke software solutions, automations, and dashboards to solve your unique business problems.",
    path: "/services",
  },
  {
    icon: BoltIcon,
    title: "Speed Optimization & SEO",
    description:
      "Your site will be lightning-fast and optimized for Google, so new clients can actually find you.",
    path: "/services",
  },
  {
    icon: ShieldCheckIcon,
    title: "Website Maintenance",
    description:
      "Don't want to handle updates or security? We offer simple monthly plans to keep your site fast and safe.",
    path: "/services",
  },
];


/**
 * The main "What We Offer" services section
 */
const Services = () => {
  // --- 2. SET UP EMBLA CAROUSEL ---
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000, // 4-second pause on each card
        stopOnInteraction: true, // Stops on manual drag
        stopOnMouseEnter: true, // Stops on hover
      }),
    ]
  );

  // Restart autoplay when mouse leaves
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    const restartAutoplay = () => autoplay.play();

    emblaApi.on("pointerUp", restartAutoplay);
    emblaApi.on("dragEnd", restartAutoplay);
    emblaApi.rootNode().addEventListener("mouseleave", restartAutoplay);

    return () => {
      emblaApi.off("pointerUp", restartAutoplay);
      emblaApi.off("dragEnd", restartAutoplay);
      emblaApi.rootNode().removeEventListener("mouseleave", restartAutoplay);
    };
  }, [emblaApi]);
  // --- END OF EMBLA SETUP ---

  return (
    <section className="w-full py-4 md:py-8 overflow-hidden pt-0 sm:pt-20 lg:pt-5">
      {/* 5. New container to constrain heading (No change) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
            Services
          </div>
          <h2
            className="
              text-4xl md:text-6xl font-bold mb-4
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine
            "
          >
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Comprehensive software development and design services tailored to
            bring your specific needs from concept to reality.
          </p>
        </div>
      </div>
      {/* End of constrained container */}

      {/* --- 3. UPDATED: Scroller markup for Embla --- */}
      <div
        className="w-full embla"
        ref={emblaRef}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="embla__container">
          {[...servicesList, ...servicesList].map((service, index) => (
            <div
              key={index}
              // --- UPDATED: Restored original fixed widths ---
              className="embla__slide flex-shrink-0 w-80 md:w-96 p-3"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                path={service.path}
              >
                {service.description}
              </ServiceCard>
            </div>
          ))}
        </div>
      </div>
      {/* --- END OF UPDATE --- */}

      {/* 4. Button re-constrained in its own container (No change) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" bg-foreground text-background rounded-full px-6 py-3 font-medium flex items-center group transition-colors"
            >
              View All Services
              <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
