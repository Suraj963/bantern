/* src/components/WhyChooseUs.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SparklesIcon,       // For Innovation
  CheckBadgeIcon,    // For Quality
  UsersIcon          // For Collaboration
} from "@heroicons/react/24/solid";

// Animation variants for the section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
    },
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

const WhyChooseUs = () => {
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
      {/* === TOP HEADING === */}
      <div className="flex flex-col items-center text-center">
        <motion.div variants={itemVariants} className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
          Our Values
        </motion.div>
        <motion.h2 
          variants={itemVariants}
          className="
            text-4xl md:text-6xl font-bold mb-4
            bg-clip-text text-transparent 
            bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
            bg-[200%_auto] animate-shine
          "
        >
          Why Choose Bantern?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mb-12">
          We're more than just a software company. We're your dedicated partner in innovation and success.
        </motion.p>
      </div>

      {/* === 3-CARD GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Innovation */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6 overflow-hidden"
        >
          {/* Card's unique animation: Shine Effect */}
          <div 
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                       bg-[linear-gradient(110deg,transparent_40%,hsl(var(--primary)/0.1)_50%,transparent_60%)] 
                       bg-[200%_auto] animate-shine opacity-50 group-hover:opacity-100"
          />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <SparklesIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pure Innovation</h3>
            <p className="text-muted-foreground text-sm">
              We live on the cutting-edge. We build with the latest, most efficient technologies to ensure your product is future-proof.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Quality */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6 overflow-hidden"
        >
          {/* Card's unique animation: Pulsing Border */}
          <motion.div 
            animate={{ scale: [1, 1.02, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl border-2 border-primary"
          />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <CheckBadgeIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
            <p className="text-muted-foreground text-sm">
              From pixel-perfect design to rock-solid backend code, we are obsessed with quality, performance, and reliability.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Collaboration */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6 overflow-hidden"
        >
          {/* Card's unique animation: Floating Orbs */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/20"
          />
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-primary/20"
          />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <UsersIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">True Partnership</h3>
            <p className="text-muted-foreground text-sm">
              We work *with* you, not *for* you. We value transparent communication and consider your success our success.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyChooseUs;