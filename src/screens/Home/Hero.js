import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TechScroller from "./TechScroller";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden text-center hero-glow pt-6 sm:pt-10 pb-16"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-6 flex items-center gap-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 transition-colors"
        >
          <span>Websites & Software For Any Business</span>
          <ChevronRightIcon className="w-4 h-4" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
        >
          We build professional websites that turn your visitors into paying
          clients.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl"
        >
          Strategy-led design. Conversion-focused development. Websites built
          for serious business growth.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          <Link to="/audit" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 group transition-colors w-full"
            >
              <span>Book Free 15-min Audit</span>
              <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-full bg-card hover:bg-muted text-foreground border border-border w-full sm:w-auto"
          >
            <span>See Our Work</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-6xl mt-10 sm:mt-12 px-2"
        >
          <TechScroller />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
