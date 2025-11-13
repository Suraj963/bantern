/* src/components/AnimatedSection.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * A reusable component that animates its children when they scroll into view.
 *
 * @param {React.ReactNode} children - The content to animate.
 * @param {string} [className] - Optional classes for the wrapper div.
 */
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    // Only trigger the animation once
    triggerOnce: true,
    // (Optional) Start the animation a bit sooner
    rootMargin: "-100px 0px", 
  });

  // --- UPDATED ANIMATION VARIANTS ---
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95 // Start slightly scaled down
    },
    visible: {
      opacity: 1,
      scale: 1, // Animate to 100% scale
      transition: {
        type: "spring",
        stiffness: 100, // Adjust "bounciness"
        damping: 20,  // Adjust "settle" speed
        mass: 0.5,
      },
    },
  };
  // --- END OF UPDATES ---

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;