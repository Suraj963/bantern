import { motion } from "framer-motion";

/**
 * @param {string} className
 * @param {React.ReactNode} children
 * @param {object} variants
 */
export const BentoCard = ({ className, children, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        group relative overflow-hidden 
        bg-background border border-border 
        p-6 ${className}
        transition-colors duration-300
        hover:border-primary/30 
        hover:z-10 
        rounded-2xl 
      `}
    >
      <div className="relative z-10 flex flex-col h-full">{children}</div>

      <div
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] 
                   opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.10), transparent 50%)",
        }}
      />
    </motion.div>
  );
};

export default BentoCard;
