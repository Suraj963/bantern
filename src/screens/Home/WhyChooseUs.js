/* src/components/WhyChooseUs.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ClockIcon,
  CheckBadgeIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

const containerVariants = { /* ...no change... */ };
const itemVariants = { /* ...no change... */ };

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
          Our Promise
        </motion.div>
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Why Work With Us?
        </motion.h2>
        {/* ======================================
          CHANGED: Sub-headline
          - Ripped out the strong "health practice" niche.
          - Replaced with generic "partner" fluff.
          ======================================
        */}
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mb-12">
          We're not just another developer. We're a dedicated partner
          for your business. Here’s our simple, 3-point promise.
        </motion.p>
      </div>

      {/* === 3-CARD GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: SPEED (This is still a valid generic promise) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6"
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ClockIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch in 7 Days</h3>
            <p className="text-base text-muted-foreground">
              Your new website will be live in one week. We're fast, focused, 
              and we never miss a deadline. Period.
            </p>
          </div>
        </motion.div>

        {/* Card 2: RESULTS */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6"
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <CheckBadgeIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Focused on Results</h3>
            {/* ======================================
              REVERTED: "patients" -> "clients"
              ======================================
            */}
            <p className="text-base text-muted-foreground">
              We don't just build pretty sites. We build conversion-focused websites 
              that turn your traffic into booked calls and paying clients.
            </p>
          </div>
        </motion.div>

        {/* Card 3: NO HASSLE */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border border-border/50 rounded-2xl p-6"
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero Tech-Headaches</h3>
            {/* ======================================
              REVERTED: "treating your patients" -> "running your business"
              ======================================
            */}
            <p className="text-base text-muted-foreground">
              Stop worrying about plugins, hosting, or security. We handle all 
              the technical details so you can focus on what you do best: running your business.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyChooseUs;