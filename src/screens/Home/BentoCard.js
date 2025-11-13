/* src/components/BentoCard.jsx */

import { motion } from "framer-motion";

/**
 * A reusable card component for the bento grid.
 * @param {string} className - Additional classes for grid layout (e.g., col-span-2)
 * @param {React.ReactNode} children - Content to display inside the card
 * @param {object} variants - Framer Motion variants passed from the parent
 */
export const BentoCard = ({ className, children, variants }) => {
  return (
    <motion.div
      // Apply the variants from the parent
      variants={variants}
      
      // "Come out" effect on hover
      whileHover={{ scale: 1.05 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      
      // Base styles
      className={`
        group relative overflow-hidden 
        bg-background border border-border 
        p-6 ${className}
        transition-colors duration-300
        hover:border-primary/30 /* Subtle border highlight on hover */
        hover:z-10 /* Ensure card is on top when hovered */
        rounded-2xl /* --- ADDED THIS BACK --- */
      `}
    >
      {/* The content */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
      
      {/* Subtle Glow Effect on Hover */}
      <div 
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] 
                   opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.10), transparent 50%)'
        }}
      />
    </motion.div>
  );
};

export default BentoCard;