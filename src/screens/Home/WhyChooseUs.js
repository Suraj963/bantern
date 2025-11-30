import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClockIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const InfoCard = ({ Icon, title, description }) => {
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
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-card border border-border/50 rounded-2xl p-6"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          {Icon && <Icon className="w-9 h-9 text-primary" />}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const cards = [
    {
      id: 1,
      Icon: ClockIcon,
      title: "Strategy-led Delivery",
      description:
        "Every project begins with a clear business strategy — timelines, milestones and execution designed for predictable, high-quality delivery.",
    },
    {
      id: 2,
      Icon: CheckBadgeIcon,
      title: "Conversion-first Design",
      description:
        "We design for results — clear messaging, strong CTAs, high-performance pages and UX that converts visitors into real customers.",
    },
    {
      id: 3,
      Icon: ShieldCheckIcon,
      title: "Fully Managed Tech",
      description:
        "Hosting, security, monitoring and updates handled end-to-end. You get a reliable, fast website while we handle the technical heavy lifting.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-12 sm:pt-28 lg:pt-8"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4"
        >
          Our Promise
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Why Work With Us?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mb-12"
        >
          We're not another freelancer — we're a strategic partner focused on
          building websites that elevate your brand and drive real business
          growth.
        </motion.p>
      </div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {cards.map((c) => (
          <InfoCard
            key={c.id}
            Icon={c.Icon}
            title={c.title}
            description={c.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
