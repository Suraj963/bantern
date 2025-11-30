import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const KeyFeaturesGrid = ({ featureData }) => {
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
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-0 sm:pt-28 lg:pt-0"
    >
      <div className="text-center mb-12">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text 
               bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
               bg-[200%_auto] animate-shine inline-block leading-[1.08] pb-0.5"
          style={{
            overflow: "visible",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: "translateZ(0)",
          }}
        >
          Key Features
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-3xl mx-auto"
        >
          Our service includes everything you need to create a compelling online
          presence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group bg-background border border-border/50 rounded-lg p-6 flex flex-col h-full 
                       transition-colors duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="mb-4">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm flex-grow">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyFeaturesGrid;
