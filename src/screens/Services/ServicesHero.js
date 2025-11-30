import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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
      animate="visible"
      className="relative flex items-center justify-center min-h-[70vh] px-4 overflow-hidden text-center pt-8 pb-16"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 transition-colors cursor-pointer"
        >
          <span>Our Services</span>
          <ChevronRightIcon className="w-4 h-4" />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
        >
          Websites, Apps, & E-Commerce.
          <br />
          Built Right.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg text-muted-foreground max-w-2xl"
        >
          We are your dedicated technical partner for growing any business, of
          any size.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          <Link to="/audit" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 group transition-colors w-full"
            >
              <span>Book Free 15-min Audit</span>
              <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-full bg-card hover:bg-muted text-foreground border border-border w-full sm:w-auto"
          >
            <span>See Our Work</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
