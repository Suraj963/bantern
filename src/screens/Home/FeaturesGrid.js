import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BentoCard } from "./BentoCard";
import {
  HeartIcon,
  CpuChipIcon,
  EnvelopeIcon,
  SparklesIcon,
  NewspaperIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Groq",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  },
];

const TechScroller = () => (
  <div
    className="w-full overflow-hidden"
    style={{
      maskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}
  >
    <div className="flex w-max animate-[scroll-right_30s_linear_infinite]">
      {[...technologies, ...technologies].map((tech, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex items-center justify-center mx-4 bg-muted/50 border border-border/50 rounded-full px-4 py-2"
        >
          <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-2" />
          <span className="text-sm text-foreground font-medium">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const scoopProjects = [
  { title: "Project: 'Nexus'", desc: "Next-gen creative workflow platform." },
  {
    title: "Status: In Development",
    desc: "Alpha testing scheduled for Q1 2026.",
  },
  {
    title: "Client: EcoTech",
    desc: "Building a new green energy marketplace.",
  },
  {
    title: "R&D: AI Integration",
    desc: "Exploring generative AI for code assist.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const AnimatedSoftwareList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { title: "AI Analytics", icon: SparklesIcon },
    { title: "Data Streaming", icon: CpuChipIcon },
    { title: "Collaboration Hub", icon: HeartIcon },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center space-y-3 p-4 rounded-lg bg-background border border-border min-h-[20rem]">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const IconComponent = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              background: isActive
                ? `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.7))`
                : "hsl(var(--muted) / 0.5)",
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-20 rounded-xl p-4 flex items-center space-x-4 border border-border/50"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
              animate={{
                backgroundColor: isActive
                  ? "hsl(var(--primary-foreground))"
                  : "hsl(var(--muted))",
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <IconComponent
                className={`w-6 h-6 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
            </motion.div>
            <div className="flex-grow overflow-hidden">
              <motion.div
                className="h-4 rounded"
                animate={{
                  width: isActive ? "80%" : "50%",
                  opacity: isActive ? 1 : 0.5,
                  backgroundColor: isActive
                    ? "hsl(var(--primary-foreground) / 0.7)"
                    : "hsl(var(--muted-foreground) / 0.5)",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
              <motion.div
                className="h-3 rounded mt-2"
                animate={{
                  width: isActive ? "60%" : "30%",
                  opacity: isActive ? 1 : 0.3,
                  backgroundColor: isActive
                    ? "hsl(var(--primary-foreground) / 0.5)"
                    : "hsl(var(--muted-foreground) / 0.3)",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const FeaturesGrid = () => {
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
      <motion.h2
        variants={itemVariants}
        className="
          text-4xl md:text-6xl font-bold text-center mb-12 
          bg-clip-text text-transparent 
          bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
          bg-[200%_auto] animate-shine
        "
      >
        Our Core Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4">
        <BentoCard className="md:col-span-2" variants={itemVariants}>
          <HeartIcon className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2">
            Built on Collaboration
          </h3>
          <p className="text-muted-foreground mb-4">
            We prioritize client collaboration, fostering open communication and
            transparent workflows.
          </p>
          <div className="flex space-x-2 overflow-hidden">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <UserCircleIcon className="w-8 h-8 text-primary/70" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <UserCircleIcon className="w-8 h-8 text-primary/70" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <UserCircleIcon className="w-8 h-8 text-primary/70" />
            </motion.div>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-2" variants={itemVariants}>
          <CpuChipIcon className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2">
            Passionate About Technology
          </h3>
          <p className="text-muted-foreground mb-4">
            We use cutting-edge tech to build scalable and efficient software.
          </p>
          <div className="flex-grow flex items-center">
            <TechScroller />
          </div>
        </BentoCard>

        <BentoCard
          className="md:row-span-2 flex flex-col !p-0"
          variants={itemVariants}
        >
          <img
            src="/globe.png"
            alt="Dotted globe"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-background/70" />
          <div className="relative z-10 p-6 flex flex-col h-full">
            <GlobeAltIcon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Flexible Across Time Zones
            </h3>
            <p className="text-muted-foreground">
              We work with clients worldwide, ensuring seamless communication
              regardless of your location.
            </p>
          </div>
        </BentoCard>

        <BentoCard
          className="md:col-span-2 flex flex-col items-center justify-center text-center min-h-[20rem] relative"
          variants={itemVariants}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519681393784-de3ab941e393?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full bg-background/60
                       bg-[linear-gradient(110deg,transparent_40%,hsl(var(--primary)/0.3)_50%,transparent_60%)] 
                       bg-[200%_auto] animate-shine opacity-80"
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SparklesIcon className="w-12 h-12 text-primary mb-4" />
            </motion.div>

            <h3 className="text-3xl font-semibold mb-4">
              Let's build your next project
            </h3>

            <motion.a
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 0.5,
              }}
              href="mailto:hello@bantern.com"
              className="flex items-center gap-3 px-6 py-3 text-lg font-medium transition-colors rounded-full bg-muted hover:bg-muted/80 text-muted-foreground"
            >
              <EnvelopeIcon className="w-5 h-5" />
              <span>hello@bantern.com</span>
            </motion.a>
          </div>
        </BentoCard>

        <BentoCard
          className="md:row-span-2 flex flex-col"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold mb-2">
            Software That Stands Out
          </h3>
          <p className="text-muted-foreground mb-4">
            We design solutions that make a real difference.
          </p>

          <AnimatedSoftwareList />
        </BentoCard>

        <BentoCard
          className="md:col-span-2 min-h-[20rem] flex flex-col"
          variants={itemVariants}
        >
          <NewspaperIcon className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2">The Inside Scoop</h3>

          <div
            className="w-full overflow-hidden mt-4 flex-grow flex items-center"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-[scroll-left_25s_linear_infinite]">
              {[...scoopProjects, ...scoopProjects].map((project, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 bg-muted/50 p-4 rounded-lg border border-border/50 mx-3"
                >
                  <h4 className="font-semibold text-foreground truncate">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>
      </div>
    </motion.section>
  );
};

export default FeaturesGrid;
