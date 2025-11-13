/* src/components/ServicesHero/ServicesHero.jsx */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react"; // Import React

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start 20px down and faded out
  visible: {
    opacity: 1,
    y: 0, // Animate to 0px (original position)
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ServicesHero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Animate on page load
      className="relative flex items-center justify-center min-h-[70vh] px-4 overflow-hidden text-center pt-32 pb-16"
      // This radial gradient creates the primary color glow from the bottom
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* 1. "Our Services" Pill */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 transition-colors cursor-pointer"
        >
          <span>Our Services</span>
          <ChevronRightIcon className="w-4 h-4" />
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground font-serif max-w-5xl"
        >
          Scalable Solutions,
          <span className="italic text-muted-foreground/80">
            {' '}Seamless Experiences
          </span>
        </motion.h1>

        {/* 3. Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg text-muted-foreground max-w-2xl"
        >
          We provide end-to-end software solutions designed to grow with your business.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Main CTA */}
          <Link
            to="/portfolio" // Link to your projects
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-full bg-card hover:bg-muted text-foreground border border-border"
          >
            <span>View Our Work</span>
            <span className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-muted-foreground/20">
              <ArrowRightIcon className="w-3 h-3 text-foreground" />
            </span>
          </Link>
          
          {/* Email Link */}
          <a
            href="mailto:hello@bantern.com"
            className="px-4 py-3 text-sm font-medium transition-colors rounded-full text-muted-foreground hover:text-primary"
          >
            hello@bantern.com
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;