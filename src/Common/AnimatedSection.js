import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 *
 * @param {React.ReactNode} children
 * @param {string} [className]
 */
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  };

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
