/* src/components/ProjectDetailHeader.jsx */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";

// Animation for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Animation for each item
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

/**
 * Reusable Header for a project detail page.
 */
const ProjectDetailHeader = ({ category, timeline, budget }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-border/50"
    >
      {/* Back to Projects Link */}
      <motion.div variants={itemVariants}>
        <Link 
          to="/portfolio"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </motion.div>
      
      {/* Meta Data */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ClockIcon className="w-4 h-4 text-primary" />
          <span>{timeline}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CurrencyDollarIcon className="w-4 h-4 text-primary" />
          <span>{budget}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailHeader;