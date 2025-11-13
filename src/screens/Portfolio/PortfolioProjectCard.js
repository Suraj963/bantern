/* src/components/PortfolioProjectCard.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectGridItem } from "./ProjectGridItem"; // Import the item component
import React from "react";

// --- 7 Dummy Data Items for Bantern (No change) ---
const projectData = [
  {
    id: 1,
    title: "EcoSense Platform",
    category: "Web Application",
    description:
      "A comprehensive dashboard for environmental tracking and resource management built with real-time data streaming.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 2,
    title: "Nexus Pro CMS",
    category: "CMS/SaaS",
    description:
      "A highly customizable headless CMS solution allowing content delivery across web and mobile endpoints.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 3,
    title: "Flow State Mobile App",
    category: "Mobile Application",
    description:
      "Cross-platform mobile application focused on productivity, utilizing geolocation and real-time alerts.",
    tags: ["React Native", "Firebase", "TypeScript", "+3"],
    imageUrl:
      "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 4,
    title: "Aura E-Commerce",
    category: "E-Commerce",
    description:
      "Bespoke online store design and development with integrated inventory management and secure payment gateways.",
    tags: ["Shopify+", "Liquid", "React", "Stripe"],
    imageUrl:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 5,
    title: "Quantum API Gateway",
    category: "Backend/API",
    description:
      "Robust, scalable API gateway designed for microservice communication and high-volume data traffic.",
    tags: ["Node.js", "Docker", "AWS Lambda", "Go"],
    imageUrl:
      "https://images.unsplash.com/photo-1581094488347-3d1490232d4b?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 6,
    title: "Brand Site Relaunch",
    category: "Website Design",
    description:
      "Complete overhaul of a corporate identity website, focusing on aesthetic visuals and improved core web vitals.",
    tags: ["Figma", "Tailwind CSS", "HTML5", "SEO"],
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
  {
    id: 7,
    title: "FinTech Data Model",
    category: "Data & AI",
    description:
      "Development of predictive data models using Python and custom machine learning algorithms for financial forecasting.",
    tags: ["Python", "Pandas", "AI/ML", "SQL"],
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
    url: "#",
  },
];

// --- Animation Variants (Staggered Entrance) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const PortfolioProjectCard = () => {
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
      <div className="text-center mb-12">
               {" "}
        <h2
          className="
    text-3xl 
    sm:text-4xl 
    md:text-5xl 
    lg:text-6xl 
    font-bold mb-2 
    bg-clip-text text-transparent 
    bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
    bg-[200%_auto] animate-shine
  "
        >
          All Projects
        </h2>
               {" "}
        <p
          className="
    text-base 
    sm:text-lg 
    md:text-xl 
    lg:text-2xl 
    text-muted-foreground
  "
        >
          A comprehensive view of our solutions across diverse industries.
        </p>
             {" "}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectGridItem project={project} variants={itemVariants} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default PortfolioProjectCard;
