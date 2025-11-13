/* src/components/SubpageHero.jsx */

import { motion } from "framer-motion";
import React from "react"; 

// --- Animation Variants (No Change) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/**
 * Reusable Hero section for service/sub-pages.
 * Matches the main Hero section design (Radial Glow).
 */
const SubpageHero = ({ category, title, subtitle }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // --- UPDATED: Matching Main Hero Style with Radial Glow ---
      className="relative flex flex-col items-center justify-center text-center 
                 min-h-[10vh] w-full px-4 pt-0 pb-16 overflow-hidden" 
      style={{
        // Radial glow from the bottom using company primary color
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
      // --- END UPDATE ---
    >
      {/* 1. Content Container (Staggered Animation) */}
      <div className="relative z-10 max-w-4xl px-4">
        
        {/* Category Pill */}
        <motion.div
          variants={itemVariants}
          // Styled like the pill on the main hero
          className="inline-block bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 uppercase tracking-wider"
        >
          {category}
        </motion.div>

        {/* Title --- UPDATED: Reduced font size --- */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground tracking-tight max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>

        {/* Subtitle --- UPDATED: Reduced font size --- */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default SubpageHero;