import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ContentBlockImage = ({
  title,
  paragraph1,
  paragraph2,
  ctaText,
  imageSrc,
  reverse = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const layoutOrder = reverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-0 sm:pt-28 lg:pt-0"
    >
      <div
        className={`flex flex-col ${layoutOrder} gap-12 md:gap-16 items-center justify-between`}
      >
        <div className="flex flex-col gap-6 lg:w-1/2">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground"
          >
            {paragraph1}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground"
          >
            {paragraph2}
          </motion.p>

          <Link
            to="/contact"
            className="
                      mt-4 bg-foreground text-background 
                      px-6 py-3 rounded-full 
                      text-base font-medium 
                      flex items-center group w-fit
                      transition-transform 
                      hover:scale-105 
                      active:scale-95
                    "
          >
            {ctaText}
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div variants={itemVariants} className="lg:w-1/2 w-full">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={imageSrc}
            alt={title}
            className="w-full h-64 sm:h-96 lg:h-96 rounded-xl shadow-2xl border border-border/50 object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentBlockImage;
