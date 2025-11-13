/* src/components/CtaVideo.jsx */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // 1. Import hooks
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// 2. Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2, // Stagger text items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const videoVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
  },
};

const CtaVideo = () => {
  // 3. Set up the scroll-trigger
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    // 4. Apply motion and ref to the main section
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8"
    >
      {/* Main container */}
      <div
        className="
          relative w-full rounded-2xl border border-border/50 
          bg-card/50 overflow-hidden
          flex flex-col-reverse lg:flex-row items-center
        "
      >
        {/* Decorative Gradient Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.3), transparent 70%)",
          }}
        />

        {/* === Left (Text) Column === */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 lg:w-1/2">
          {/* Pill */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4 w-fit"
          >
            Start Your Website
          </motion.div>

          {/* === HEADING UPDATED: Removed whitespace-nowrap and <br> --- */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Launch Your Website or Online Business with Confidence
          </motion.h2>
          {/* === END OF UPDATE === */}

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground mb-8"
          >
            Have an idea? Looking to sell services or products? Whether it's a
            portfolio, blog, or eCommerce store, we help turn your vision into a
            fully functional website.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block" /* keeps the size/flow similar to a button */
          >
            <Link
              to="/contact"
              className="
      bg-foreground text-background 
      px-6 py-2 rounded-full 
      text-base font-medium 
      flex items-center 
       transition-colors
    "
            >
              Launch Now
              <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* === Right (Video) Column === */}
        <motion.div
          variants={videoVariant}
          className="relative z-10 p-6 sm:p-10 lg:p-12 w-full lg:w-1/2"
        >
          <video
            className="w-full aspect-video object-cover rounded-xl border border-border/50 shadow-2xl"
            src="https://videos.pexels.com/video-files/3254008/3254008-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaVideo;
