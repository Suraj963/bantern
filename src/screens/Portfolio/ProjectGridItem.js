/* src/components/ProjectGridItem.jsx */

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// A single item for the Portfolio Grid
export const ProjectGridItem = ({ project, variants }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }} // Lifts the card on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // 'group' is needed for the icon's hover effect
      className="
        group relative flex flex-col h-full rounded-2xl border border-border/50 overflow-hidden
        bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--primary)/0.1))]
      "
    >
      {/* 1. Image (No change) */}
      <div className="relative w-full h-36 md:h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* <span
          className="absolute bottom-3 left-3 inline-block bg-primary/10 text-primary 
                     text-xs font-medium rounded-full px-3 py-1"
        >
          {project.category}
        </span> */}
      </div>

      {/* 2. Content (No change) */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>

        {/* 3. Tech Tags (No change) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-muted text-foreground text-xs font-medium rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* --- 4. UPDATED: "View Project" div --- */}
        {/* Removed all transition classes from this div */}
        <div
          className="
            mt-auto p-3 bg-foreground rounded-lg 
            bg-foreground text-background font-medium flex items-center justify-between 
            text-sm
          "
        >
          View Project
          {/* Icon transition is still here */}
          <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* 5. Full card link overlay (No change) */}
      {/* <Link
        to={`/portfolio/${project.id}`}
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View project: {project.title}</span>
      </Link> */}
      <a
        href={project.url} // full external URL
        target="_blank" // optional: open in new tab
        rel="noopener noreferrer" // security best practice
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View project: {project.url}</span>
      </a>
    </motion.div>
  );
};

export default ProjectGridItem;
