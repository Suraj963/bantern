import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HeartIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const IndustryCard = ({ Icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-background/50 backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-6 h-full flex flex-col text-left hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center mb-2 sm:mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

const IndustriesWeServe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const industries = [
    {
      id: 1,
      title: "Healthcare",
      description:
        "Secure patient management systems, telemedicine platforms, and HIPAA-compliant data solutions that modernize care delivery.",
      Icon: HeartIcon,
    },
    {
      id: 2,
      title: "Banking & Finance",
      description:
        "High-frequency trading platforms, secure fintech apps, and blockchain integration designed for reliability and speed.",
      Icon: BuildingLibraryIcon,
    },
    {
      id: 3,
      title: "Education",
      description:
        "Interactive LMS platforms, e-learning portals, and administrative tools that bridge the gap between students and knowledge.",
      Icon: AcademicCapIcon,
    },
    {
      id: 4,
      title: "Infrastructure & Real Estate",
      description:
        "Smart property management dashboards, IoT integration for smart cities, and CRM solutions for large-scale developers.",
      Icon: BuildingOffice2Icon,
    },
    {
      id: 5,
      title: "Retail & E-commerce",
      description:
        "Scalable storefronts, inventory management systems, and personalized shopping experiences that drive higher conversion.",
      Icon: ShoppingBagIcon,
    },
    {
      id: 6,
      title: "Travel & Hospitality",
      description:
        "Booking engines, itinerary planners, and customer loyalty apps designed to handle global traffic seamlessly.",
      Icon: GlobeAltIcon,
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-12"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          variants={headerVariants}
          className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4"
        >
          Our Expertise
        </motion.div>

        <motion.h2
          variants={headerVariants}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine"
        >
          Industries We Transform
        </motion.h2>

        <motion.p
          variants={headerVariants}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          We apply our technical depth to diverse sectors, building tailored
          software solutions that solve specific industry challenges.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
      >
        {industries.map((item) => (
          <IndustryCard
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default IndustriesWeServe;