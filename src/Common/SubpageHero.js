import { motion } from "framer-motion";
import React from "react";

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

const SubpageHero = ({ category, title, subtitle }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center text-center 
                 min-h-[10vh] w-full px-4 pt-0 pb-16 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
    >
      <div className="relative z-10 max-w-4xl px-4">
        <motion.div
          variants={itemVariants}
          className="inline-block bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 uppercase tracking-wider"
        >
          {category}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground tracking-tight max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>

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
