/* src/components/KeyFeaturesGrid.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";


// --- Animation Variants (No Change) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/**
 * Reusable component for displaying Key Features in a grid.
 */
const KeyFeaturesGrid = ({featureData}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8"
    >
      {/* Heading Block --- UPDATED: Added Shine Effect --- */}
      <div className="text-center mb-12">
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text 
                     bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
                     bg-[200%_auto] animate-shine"
        >
          Key Features
        </motion.h2>
        <motion.p variants={itemVariants} className="text-muted-foreground max-w-3xl mx-auto">
          Our service includes everything you need to create a compelling online presence.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            // --- UPDATED: Hover effect for lift and green border ---
            whileHover={{ y: -5 }} 
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group bg-background border border-border/50 rounded-lg p-6 flex flex-col h-full 
                       transition-colors duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
          >
            {/* Icon */}
            <div className="mb-4">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            
            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyFeaturesGrid;