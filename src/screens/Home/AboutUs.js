import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const stickRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateYImage = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = ref.current?.getBoundingClientRect();
      if (containerRect) {
        setMousePosition({
          x: event.clientX - containerRect.left,
          y: event.clientY - containerRect.top,
        });
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const companyName = "Bantern Solutions";
  const companySlogan = "Innovating the Future, Together";

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[70vh] overflow-hidden"
    >
      <motion.div
        ref={stickRef}
        className="hidden lg:block absolute w-8 h-48 bg-gradient-to-b from-primary to-background/50 rounded-full shadow-lg pointer-events-none z-10"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 96,
          filter: `drop-shadow(0 0 10px hsl(var(--primary) / 0.5))`,
        }}
        animate={{
          y: mousePosition.y - 96,
          x: mousePosition.x - 16,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <div className="relative z-20 lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 p-4">
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
          Know About Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {companyName}:{" "}
          <span className="text-primary italic">{companySlogan}</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-6 max-w-prose mx-auto lg:mx-0">
          At {companyName}, we are a team of dedicated innovators passionate
          about creating dynamic and impactful digital experiences. From concept
          to deployment, we thrive on solving complex problems with clean,
          efficient code and user-centric design. Our expertise spans modern web
          technologies, cloud solutions, and scalable software architecture, and
          we're always eager to embrace new challenges.
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-prose mx-auto lg:mx-0">
          When we're not immersed in development, we're exploring new ideas,
          staying curious about emerging tech, and fostering a culture of
          continuous learning. We believe in creating solutions that not only
          meet but exceed expectations, making a tangible difference for our
          clients and their users.
        </p>

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/audit"
            className="
                        bg-foreground text-background 
                        px-8 py-3 rounded-full 
                        text-lg font-medium 
                        transition-all duration-300 
                        shadow-md block text-center
                      "
          >
            Book free Audit
          </Link>
        </motion.div>
      </div>

      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-4">
        <motion.div
          style={{ translateY: translateYImage }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-background/50 rounded-3xl p-6 shadow-2xl flex items-center justify-center"
        >
          <SparklesIcon className="w-3/4 h-3/4 text-primary opacity-70" />

          <div className="absolute inset-0 rounded-3xl border border-primary/40 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 to-transparent blur-xl opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
