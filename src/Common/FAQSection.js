/* src/components/FAQSection.jsx */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


// --- Animation Variants ---
// 1. Entrance animation (for the whole section/heading)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

// 2. Accordion content animation
const accordionVariants = {
  open: { height: "auto", opacity: 1, marginTop: 16, transition: { duration: 0.3 } },
  collapsed: { height: 0, opacity: 0, marginTop: 0, transition: { duration: 0.3 } },
};


/**
 * Reusable component for Frequently Asked Questions.
 */
const FAQSection = ({faqData}) => {
  const [openId, setOpenId] = useState(null); // State to track the currently open FAQ
  
  // Scroll-triggered animation hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-4xl mx-auto p-4 md:p-8 pt-0 sm:pt-28 lg:pt-0"
    >
      {/* === HEADING BLOCK === */}
      <div className="text-center mb-16">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
          Frequently <span className="text-primary">Asked Questions</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
          Common questions about website maintenance and security
        </motion.p>
      </div>

      {/* === ACCORDION CONTAINER === */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants} 
            transition={{ delay: index * 0.1 }}
            className="border-b border-border/70 overflow-hidden"
          >
            {/* Question Header (Toggle Button) */}
            <motion.button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left py-4 flex justify-between items-center text-foreground font-medium transition-colors hover:text-primary"
              whileHover={{ x: 5 }} // Subtle slide on hover
              whileTap={{ scale: 0.99 }}
            >
              <span>{item.question}</span>
              <ChevronDownIcon 
                className={`w-5 h-5 ml-4 text-primary transition-transform duration-300 ${openId === item.id ? 'rotate-180' : 'rotate-0'}`} 
              />
            </motion.button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {openId === item.id && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={accordionVariants}
                >
                  <p className="pb-4 text-muted-foreground max-w-3xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;