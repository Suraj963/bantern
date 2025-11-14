/* src/components/HowItWorks.jsx */

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateYImage = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const sectionVariants = { /* ...no change... */ };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[70vh] overflow-hidden pt-14 sm:pt-28 lg:pt-10"
    >
      {/* Left Content Area */}
      <div className="relative z-20 lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 p-4">
        
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
          How It Works
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          From First Call to Final Launch in 7 Days
        </h2>

        <div className="space-y-6 max-w-prose mx-auto lg:mx-0 text-left">
          
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">1</span>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Strategy & Audit
              </h3>
              {/* ======================================
                  REVERTED: "patients" -> "clients"
                  ======================================
              */}
              <p className="text-base sm:text-lg text-muted-foreground">
                We start with your free 15-min audit. We'll pinpoint what you need,
                who your clients are, and build a simple, high-conversion plan.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">2</span>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Fast, Focused Build
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                No wasted time. We get to work, building your custom website.
                You'll get a private link to review and request changes in real-time.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">3</span>
            <div>
              {/* ======================================
                  REVERTED: "Patients" -> "Clients"
                  ======================================
              */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Launch & Get Clients
              </h3>
              {/* ======================================
                  REVERTED: "patients" -> "clients"
                  ======================================
              */}
              <p className="text-base sm:text-lg text-muted-foreground">
                Once you're 100% happy, we launch. Your site is live,
                SEO-optimized, and ready to turn visitors into paying clients.
              </p>
            </div>
          </div>
        </div>

        {/* This CTA is still bulletproof. It stays. */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10"
        >
          <Link
            to="/audit"
            className="
              bg-primary text-primary-foreground 
              px-8 py-3 rounded-full 
              text-lg font-medium 
              transition-all duration-300 
              shadow-md 
              flex items-center justify-center gap-2 group
            "
          >
            <span>Book Your Free Audit</span>
            <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Right Image Area (No change) */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-4">
        <motion.div
          style={{ translateY: translateYImage }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-background/50 rounded-3xl p-6 shadow-2xl flex items-center justify-center"
        >
          <ClipboardDocumentCheckIcon className="w-3/4 h-3/4 text-primary opacity-70" />
          <div className="absolute inset-0 rounded-3xl border border-primary/40 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 to-transparent blur-xl opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;