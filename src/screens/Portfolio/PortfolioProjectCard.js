/* src/components/PortfolioProjectCard.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectGridItem } from "./ProjectGridItem"; // Import the item component
import interior from "../../assets/iinterior.png";
import dentist from "../../assets/dentist.png";
import ecommerce from "../../assets/ecommerce.png";
import veterinary from "../../assets/pets.png";
import React from "react";

// --- 7 Dummy Data Items for Bantern (No change) ---
const projectData = [
  {
    id: 1,
    title: "Lumina Dental",
    category: "Dental Practice Website",
    description:
      "A professional dental clinic website providing appointment scheduling, service details, and patient resources.",
    tags: ["SEO", "Portfolio Showcase", "Client Testimonials"],
    imageUrl: dentist, // Dental clinic image
    url: "https://dental-liart-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Aura",
    category: " E-Commerce",
    description:
      "A modern ecommerce store featuring curated clothing collections with smooth shopping and secure checkout.",
    tags: ["SEO", "Portfolio Showcase", "Client Testimonials"],
    imageUrl: ecommerce, // Skin clinic image
    url: "https://ecommerce-lovat-one-65.vercel.app/",
  },
  {
    id: 4,
    title: "Lumina Interiors",
    category: "Interioor",
    description:
      "An elegant home interiors site showcasing portfolios, service packages, and client testimonials.",
    tags: ["SEO", "Portfolio Showcase", "Client Testimonials"],
    imageUrl: interior, // Nutrition image
    url: "https://interior-seven-gray.vercel.app/",
  },
  {
    id: 5,
    title: "Paws and Care",
    category: "Local SEO",
    description:
      "A user-friendly pet care platform offering service booking, pet health tips, and community forums.",
    tags: ["SEO", "Portfolio Showcase", "Client Testimonials"],
    imageUrl: veterinary, // Office/Analytics image
    url: "https://veterinary-beta.vercel.app/",
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
      className="w-full max-w-screen-xl mx-auto p-4 md:p-16 pt-16"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
          Our Work
        </div>
        <h2
          className="
            text-4xl md:text-6xl font-bold mb-4
            bg-clip-text text-transparent 
            bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
            bg-[200%_auto] animate-shine
          "
        >
          Our Featured Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          A selection of our most impactful work across various industries and
          technologies.
        </p>
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
