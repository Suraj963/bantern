/* src/components/Services.jsx */

import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { useEffect } from "react"; // Import useEffect
import {
  ArrowRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

/**
 * A single service card component (No change)
 */
const ServiceCard = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      // Hover effect: Lifts up and scales
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col h-full" // Added h-full
    >
      {/* Icon Wrapper */}
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{children}</p>

      <Link
        to="/services"
        className="text-foreground font-medium flex items-center group"
      >
        Learn More
        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

// --- Service data array (No change) ---
const servicesList = [
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "Full-stack solutions, custom web apps, API integrations, and clean, scalable code for maximum performance.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Design",
    description:
      "Custom UI/UX design for iOS and Android, focusing on mobile-first layouts and aesthetic visuals that represent your brand.",
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    description:
      "High-availability infrastructure, CI/CD pipelines, and scalable cloud solutions on AWS, Azure, and GCP.",
  },
  {
    icon: SparklesIcon,
    title: "AI & ML Solutions",
    description:
      "Full-stack solutions, landing pages, API integrations, and clean, scalable code for performance.",
  },
];

/**
 * The main "What We Offer" services section
 */
const Services = () => {
  // 1. Set up animation controls
  const controls = useAnimation();

  // 2. Define the animation function
  const startAnimation = () => {
    controls.start({
      x: "0%", // Animate to the start of the first list
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 2,
      },
    });
  };

  // 3. Start animation on component mount
  useEffect(() => {
    startAnimation();
  }, []); // Added controls to dependency array

  return (
    <section className="w-full py-4 md:py-8 overflow-hidden">
      {/* 5. New container to constrain heading (No change) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
            Services
          </div>

          <h2
            className="
              text-4xl md:text-6xl font-bold mb-4
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine
            "
          >
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Comprehensive software development and design services tailored to
            bring your specific needs from concept to reality.
          </p>
        </div>
      </div>
      {/* End of constrained container */}

      {/* 6. Scroller is now outside the max-w container and has hover controls */}
      <div
        className="w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
        // --- UPDATED: Added touch controls ---
        onMouseEnter={() => controls.stop()}
        onMouseLeave={startAnimation}
        onTouchStart={() => controls.stop()}
        onTouchEnd={startAnimation}
        // --- END OF UPDATE ---
      >
        <motion.div
          className="flex w-max"
          // 8. Use controls and updated initial state
          initial={{ x: "-50%" }} // Start from the beginning of the second list
          animate={controls}
        >
          {[...servicesList, ...servicesList].map((service, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96 p-3">
              {" "}
              {/* Sized wrapper for card */}
              <ServiceCard icon={service.icon} title={service.title}>
                {service.description}
              </ServiceCard>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 9. Button re-constrained in its own container (No change) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" bg-foreground text-background rounded-full px-6 py-3 font-medium flex items-center group transition-colors"
          >
            View All Services
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
