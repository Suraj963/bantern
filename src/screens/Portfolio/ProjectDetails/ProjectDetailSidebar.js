import { motion } from "framer-motion";
import { ArrowUpRightIcon, CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
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

const ProjectDetailSidebar = ({
  budget,
  timeline,
  date,
  liveSiteUrl,
  keyFeatures,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-28 flex flex-col gap-8"
    >
      <motion.div
        variants={itemVariants}
        className="bg-card/50 border border-border/50 rounded-2xl p-6"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-medium">Budget</span>
            <span className="text-foreground font-semibold">{budget}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-medium">Timeline</span>
            <span className="text-foreground font-semibold">{timeline}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-medium">Date</span>
            <span className="text-foreground font-semibold">{date}</span>
          </div>
        </div>

        <motion.a
          href={liveSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-6 bg-foreground text-background 
            px-5 py-3 rounded-full 
            text-base font-medium 
            flex items-center justify-center group 
          "
        >
          View Live Site
          <ArrowUpRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-card/50 border border-border/50 rounded-2xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-primary">
          Key Features
        </h3>
        <ul className="space-y-3">
          {keyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-card/50 border border-border/50 rounded-2xl p-6 text-center"
      >
        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center mb-4 mx-auto">
          <svg
            className="w-9 h-9 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17.25l.038-.038m0 0a1.5 1.5 0 01.354.606l.75 3.75a.75.75 0 001.404.039l3.75-1.5a.75.75 0 00.39-1.404l-3.75-.75a1.5 1.5 0 01-.606-.354m0 0l-3.75-3.75m3.75 3.75l3.75 3.75M9.75 17.25l3.75-3.75M9.75 17.25l-3.75 3.75m3.75-3.75l-3.75-3.75M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          Need a similar project?
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          I can help you build a custom solution tailored to your specific
          requirements.
        </p>
        <motion.a
          href="mailto:nexawhale@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-foreground text-background 
            px-5 py-2 rounded-full 
            text-sm font-medium 
            flex items-center justify-center group 
          "
        >
          Launch Your Project
          <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailSidebar;
