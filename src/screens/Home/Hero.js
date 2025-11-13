/* src/components/Hero.jsx */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ScrollingWords from "./ScrollerRow";

const Hero = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start 20px down and faded out
    visible: {
      opacity: 1,
      y: 0, // Animate to 0px (original position)
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden text-center hero-glow pt-20 sm:pt-32 pb-16"
      // This radial gradient creates the primary color glow from the bottom
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.1), transparent)`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* 1. Top Pill (Optional - you can change this link or text) */}
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-6 flex items-center gap-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 transition-colors cursor-pointer"
        >
          <span>Explore Our Software Services</span>
          <ChevronRightIcon className="w-4 h-4" />
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent font-serif max-w-4xl sm:max-w-5xl lg:max-w-6xl bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground"
        >
          We turn visionary ideas into seamless{" "}
          <span className="italic text-muted-foreground/80">digital experiences</span>
        </motion.h1>

        {/* 3. Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl"
        >
          Your expert partner in custom software solutions.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          {/* Main CTA */}
          <Link
            to="/contact" // You can change this path to /services or /contact
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-full bg-card hover:bg-muted text-foreground border border-border w-full sm:w-auto"
          >
            <span>Start Your Project</span>
            <span className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-muted-foreground/20">
              <ArrowRightIcon className="w-3 h-3 text-foreground" />
            </span>
          </Link>

          {/* Email Link */}
          <a
            href="mailto:hello@bantern.com"
            className="px-4 py-3 text-sm font-medium transition-colors rounded-full text-muted-foreground hover:text-primary w-full sm:w-auto text-center"
          >
            hello@bantern.com
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-6xl mt-10 sm:mt-12 px-2">
          <ScrollingWords />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
