import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const FinalCtaBanner = ({
  category,
  headline,
  subtext,
  ctaText = "Start Your Project",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-20 overflow-hidden pt-12 sm:pt-28 lg:pt-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{
        background: `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(260 50% 10% / 1) 50%, hsl(var(--background)) 100%)`,
      }}
    >
      <div className="relative w-full max-w-screen-xl mx-auto px-4 md:px-8 flex justify-center">
        <motion.div
          className="relative w-full max-w-4xl p-1 md:p-2 rounded-[2rem] shadow-2xl"
          style={{
            boxShadow: "0 0 40px 10px hsl(var(--background) / 0.8)",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-[2rem] z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(
                from 0deg, 
                hsl(var(--primary) / 0.5) 0deg, 
                transparent 150deg, 
                hsl(260 80% 50% / 0.5) 250deg, 
                hsl(var(--primary) / 0.5) 360deg
              )`,
              padding: "2px",
            }}
          />

          <div className="relative z-10 w-full p-8 md:p-14 rounded-[2rem] bg-background/50 backdrop-blur-xl border border-border/50 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-block bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full text-sm font-medium mb-4"
            >
              {category}
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            >
              {headline}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              {subtext}
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 0 15px hsl(var(--primary) / 0.0)",
                    "0 0 25px hsl(var(--primary) / 0.3)",
                    "0 0 15px hsl(var(--primary) / 0.0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link
                  to="/contact"
                  className="
                              bg-foreground text-background 
                              px-8 py-3 rounded-full 
                              text-lg font-medium 
                              inline-flex items-center group 
                            "
                >
                  {ctaText}
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FinalCtaBanner;
