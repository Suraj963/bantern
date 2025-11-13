/* src/components/ContactSection.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ContactSection = () => {
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
      {/* Main container card */}
      <div 
        className="
          relative w-full rounded-2xl border border-border/50 
          bg-card/50 overflow-hidden
          p-10 md:p-16 flex flex-col items-center text-center
        "
      >
        {/* Decorative Gradient Glow from top (No Change) */}
        <div 
          className="absolute inset-0 opacity-25" 
          style={{ 
            background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.3), transparent 70%)" 
          }}
        />
        
        {/* Content (relative to stay on top) */}
        <div className="relative z-10 flex flex-col items-center">

          {/* 1. Shining Heading (No Change) */}
          <motion.h2 
            variants={itemVariants}
            className="
              text-4xl md:text-6xl font-bold mb-4
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine
            "
          >
            Let's Build Your Next Big Idea
          </motion.h2>

          {/* 2. Sub-heading (No Change) */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-muted-foreground max-w-2xl mb-10"
          >
            Have a project in mind, or just want to chat about what's possible? 
            We're here to listen. Let's turn your vision into a high-performance reality.
          </motion.p>

          {/* --- 3. UPDATED: Pulsing Call-to-Action Button with White background --- */}
          <motion.a
            href="mailto:hello@bantern.com"
            variants={itemVariants}
            // Continuous pulse animation with primary color glow
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 10px hsl(var(--primary) / 0.0)", // Start with no glow
                "0 0 20px hsl(var(--primary) / 0.4)", // Glow with primary color
                "0 0 10px hsl(var(--primary) / 0.0)", // End with no glow
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            // Hover/tap with a primary color border
            whileHover={{ 
              scale: 1.05, // Slightly less pop on hover to blend with pulse
              boxShadow: "0 0 25px hsl(var(--primary) / 0.6)" // Stronger glow on hover
            }} 
            whileTap={{ scale: 0.98 }}
            className="
              bg-foreground text-background           /* Changed: White background, black text */
              px-8 py-3 rounded-full 
              text-lg font-bold 
              flex items-center group
              transition-all duration-300 ease-in-out /* Added smooth transition for hover */
            "
          >
            Get in Touch
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>
          {/* --- END OF UPDATE --- */}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;