import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
                  group relative flex flex-col h-full rounded-2xl border border-border/50 overflow-hidden
                  bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--primary)/0.1))]
                "
    >
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

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>

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

        <div
          className="
            mt-auto p-3 bg-foreground text-background rounded-lg 
            font-medium flex items-center justify-between 
            text-sm
          "
        >
          View Project
          <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* <Link to={`/portfolio/${project.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View project: {project.title}</span>
      </Link> */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View project: {project.url}</span>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
