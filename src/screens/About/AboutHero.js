import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const StatCard = ({ value, label }) => (
  <motion.div
    variants={itemVariants}
    className="bg-card/50 border border-border/50 rounded-2xl p-6 h-full"
    style={{
      background:
        "radial-gradient(at top left, hsl(var(--primary) / 0.1), transparent 70%)",
    }}
  >
    <span className="text-4xl md:text-5xl font-bold text-foreground">
      {value}
    </span>
    <p className="text-muted-foreground mt-1 text-sm md:text-base">{label}</p>
  </motion.div>
);

const ImageCard = ({ src, alt, className }) => (
  <motion.div
    variants={itemVariants}
    className={`rounded-2xl overflow-hidden border border-border/50 ${className}`}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

const TextBlock = () => (
  <motion.div
    variants={itemVariants}
    className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col justify-center h-full"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/80">
      Empowering growth through{" "}
      <span className="text-primary">smart technology</span>
    </h2>
    <p className="text-muted-foreground mb-6">
      We are Bantern, a dedicated team of engineers and designers. We thrive on
      complex challenges and build high-performance, scalable software that
      drives your business forward.
    </p>

    <Link to="/contact">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
      bg-foreground text-background 
      px-6 py-2 rounded-full 
      text-base font-medium 
      flex items-center group w-fit
      transition-colors
    "
      >
        Contact Us
        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </motion.button>
    </Link>
  </motion.div>
);

const AboutHero = () => {
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
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-0 sm:pt-28 lg:pt-6"
    >
      <div className="flex flex-col gap-6 lg:hidden">
        <TextBlock />

        <ImageCard
          src="/about_image1.png"
          alt="Women collaborating with tablet"
          className="w-full h-[300px]"
        />

        <div className="grid grid-cols-2 gap-6 h-[150px]">
          <StatCard value="98%" label="Satisfaction Rate" />
          <StatCard value="50%" label="Increase in Web Traffic" />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <ImageCard
            src="/about_image1.png"
            alt="Women collaborating with tablet"
            className="w-full h-[400px]"
          />
          <div className="grid grid-cols-2 gap-6 h-[200px]">
            <StatCard value="98%" label="Satisfaction Rate" />
            <StatCard value="50%" label="Increase in Web Traffic" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TextBlock />
          <ImageCard
            src="/about_image2.png"
            alt="Team at planning table"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-6">
          <ImageCard
            src="/about_image3.png"
            alt="Two developers at desk"
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
