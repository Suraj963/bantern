/* src/components/PortfolioProjectCard.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectGridItem } from "./ProjectGridItem"; // Import the item component
import React from "react";

// --- 7 Dummy Data Items for Bantern (No change) ---
const projectData = [
  {
    id: 1,
    title: "Clarity Dental Clinic",
    category: "Dental Practice Website",
    description:
      "A 7-day build for a local dental practice, focused on patient trust and a high-conversion 'Book Now' flow.",
    tags: ["Webflow", "Local SEO", "Booking System"],
    imageUrl:
      "https://images.unsplash.com/photo-1606813838122-b3698d2511c1?q=80&w=2070&auto=format&fit=crop", // Dental clinic image
    url: "#",
  },
  {
    id: 2,
    title: "Peak Physio",
    category: "Physiotherapy Clinic",
    description:
      "Full website relaunch focused on integrating their 'Jane' booking system and optimizing for 'physio near me'.",
    tags: ["React", "Jane App", "Google Maps"],
    imageUrl:
      "https://images.unsplash.com/photo-1599058882045-f661d9016e6f?q=80&w=2070&auto=format&fit=crop", // Physio image
    url: "#",
  },
  {
    id: 3,
    title: "Glow Aesthetics",
    category: "Skin Clinic E-Commerce",
    description:
      "Designed a clean, high-end website with an integrated Shopify store for selling skincare products.",
    tags: ["Shopify", "React", "Stripe", "E-Commerce"],
    imageUrl:
      "https://images.unsplash.com/photo-1556760544-4f24800361e6?q=80&w=1974&auto=format&fit=crop", // Skin clinic image
    url: "#",
  },
  {
    id: 4,
    title: "Nourish Nutrition",
    category: "Nutritionist Website",
    description:
      "A personal branding site for a nutritionist, including a blog, recipe section, and Calendly integration.",
    tags: ["Next.js", "Calendly", "CMS"],
    imageUrl:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1965&auto=format&fit=crop", // Nutrition image
    url: "#",
  },
  {
    id: 5,
    title: "Local Dental SEO Audit",
    category: "Local SEO",
    description:
      "A successful SEO campaign that took a dental practice from page 3 to the #1 Google Maps spot in 3 months.",
    tags: ["SEO", "Google Business", "Analytics"],
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d6589e7afc58?q=80&w=2070&auto=format&fit=crop", // Office/Analytics image
    url: "#",
  },
  {
    id: 6,
    title: "MyClinic Telehealth",
    category: "Telehealth Platform",
    description:
      "Integration of a secure, HIPAA-compliant telehealth portal for virtual patient consultations.",
    tags: ["Telehealth", "Web App", "Security"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112a14c6790a?q=80&w=2070&auto=format&fit=crop", // Telehealth image
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
          A selection of our most impactful work across various industries
          and technologies.
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
