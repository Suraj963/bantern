/* src/components/PortfolioHero.jsx */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react"; 

// --- Animation Variants (Consistent with main Hero) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const PortfolioHero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Self-animates on page load
      className="relative flex flex-col items-center justify-center text-center 
                 min-h-[70vh] w-full px-4 pt-32 pb-16 overflow-hidden" 
      style={{
        // Radial glow background (consistent theme)
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
    >
      {/* 1. Content Container (Staggered Animation) */}
      <div className="relative z-10 max-w-4xl px-4">
        
        {/* Category Pill */}
        <motion.div
          variants={itemVariants}
          className="inline-block bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 uppercase tracking-wider"
        >
          Our Featured Work
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground tracking-tight max-w-4xl mx-auto"
        >
          Highlighting Excellence in <br />
          <span className="text-primary">Software Design</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Explore our selection of high-performance applications and successful client collaborations built to drive real business value.
        </motion.p>
        
        {/* CTA Button (White Theme) */}
        <motion.div variants={itemVariants} className="flex justify-center">
            <Link
                to="/services" 
                className="bg-foreground text-background px-6 py-2 rounded-full text-base font-medium hover:bg-primary/90 transition-colors flex items-center gap-1 shadow-lg"
            >
                View Services
                <ChevronRightIcon className="w-4 h-4" />
            </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioHero;