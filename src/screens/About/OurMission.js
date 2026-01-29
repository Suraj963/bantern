import { motion } from "framer-motion";
import {
  SparklesIcon,
  UsersIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  // ArrowRightIcon,
} from "@heroicons/react/24/solid";

const OurMission = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-12 sm:pt-28 lg:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2
            className="
              text-4xl md:text-6xl font-bold mb-4
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine
            "
          >
            Our Mission & Vision
          </h2>

          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            We build the right solution for your business
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Our mission is to give your business the exact technical solution it
            needs to succeed. Whether it's a high-speed website, a custom
            e-commerce store, or a complex mobile app, we deliver high-quality,
            reliable code. We're your long-term technical partner, built for
            results.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Our vision is simple: to be the most trusted, no-nonsense developer
            for growing businesses. We do that by being transparent with our
            process, honest with our timelines, and obsessed with the quality of
            your final product.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            className="
              bg-foreground text-background 
              px-6 py-2 rounded-full 
              text-base font-medium 
              flex items-center group
              mx-auto lg:mx-0
              transition-colors
            "
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button> */}
        </div>

        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            className="absolute top-[20%] left-[25%] w-16 h-16 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <SparklesIcon className="w-9 h-9 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-[20%] right-[25%] w-16 h-16 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <UsersIcon className="w-9 h-9 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute top-[15%] right-[20%] w-12 h-12 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <CodeBracketIcon className="w-7 h-7 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute bottom-[15%] left-[20%] w-12 h-12 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <GlobeAltIcon className="w-7 h-7 text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
