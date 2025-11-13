/* src/components/OurMission.jsx */

import { motion } from "framer-motion";
import { 
  SparklesIcon,   // Represents Innovation
  UsersIcon,      // Represents Collaboration
  CodeBracketIcon,  // Represents Technology
  GlobeAltIcon,   // Represents Global Reach
  ArrowRightIcon
} from "@heroicons/react/24/solid";

const OurMission = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
      {/* Main grid: Text on left, visuals on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* === Left: Text Content === */}
        <div className="text-center lg:text-left">
          {/* 1. Shining Heading */}
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
          
          {/* 2. Sub-heading */}
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            To Architect the Future of Digital Interaction.
          </p>
          
          {/* 3. Paragraphs */}
          <p className="text-lg text-muted-foreground mb-4">
            Our mission is to empower businesses by transforming innovative ideas into high-performance, scalable, and user-centric software solutions. We build the technology that lets our partners lead their industry.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We believe in a future where technology is seamless and intuitive. Through a culture of relentless innovation, radical collaboration, and uncompromising quality, we aim to be the most trusted partner in our clients' digital journey.
          </p>

          {/* --- 4. UPDATED: Added Button --- */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-foreground text-background 
              px-6 py-2 rounded-full 
              text-base font-medium 
              flex items-center group
              mx-auto lg:mx-0
              transition-shadow shadow-lg
            "
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
          {/* --- END OF UPDATE --- */}
        </div>

        {/* --- 5. UPDATED: Animated Visuals (Added 2 more icons) --- */}
        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
          {/* 1. Background Gradient "Aura" */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />
          
          {/* 2. Floating Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="absolute top-[20%] left-[25%] w-16 h-16 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <SparklesIcon className="w-9 h-9 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] right-[25%] w-16 h-16 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <UsersIcon className="w-9 h-9 text-primary" />
          </motion.div>

          {/* --- NEW ICON 1 --- */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[15%] right-[20%] w-12 h-12 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <CodeBracketIcon className="w-7 h-7 text-primary" />
          </motion.div>

          {/* --- NEW ICON 2 --- */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-[15%] left-[20%] w-12 h-12 bg-card/80 border border-border/50 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <GlobeAltIcon className="w-7 h-7 text-primary" />
          </motion.div>
          {/* --- END OF UPDATE --- */}
        </div>

      </div>
    </section>
  );
};

export default OurMission;