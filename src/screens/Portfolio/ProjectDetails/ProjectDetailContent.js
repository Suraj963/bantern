import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
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

const ProjectDetailContent = ({
  title,
  description,
  galleryImages,
  overview,
  challenges,
  results,
  tools,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden border border-border/50"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="
                w-full 
                h-[140px] sm:h-[180px] md:h-[220px] 
                object-cover object-center
              "
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">
          Project Overview
        </h2>
        <p className="text-muted-foreground leading-relaxed">{overview}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">Challenges</h2>
        <p className="text-muted-foreground leading-relaxed">{challenges}</p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-semibold text-foreground">Results</h2>
        <p className="text-muted-foreground leading-relaxed">{results}</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-3">Tools Used:</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-muted text-foreground text-sm font-medium rounded-md px-4 py-1.5 border border-border/70"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailContent;
