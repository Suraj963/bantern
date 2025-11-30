import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const DEFAULT_PROCESS_STEPS = [
  {
    id: 1,
    name: "Discovery",
    icon: MagnifyingGlassIcon,
    title: "Discovery & Research",
    description:
      "Understanding your vision, goals, and target audience to build a solid foundation.",
    details: [
      "Requirement gathering",
      "Market analysis",
      "User persona creation",
      "Defining project scope & goals",
    ],
  },
  {
    id: 2,
    name: "Planning",
    icon: ClipboardDocumentListIcon,
    title: "Planning & Strategy",
    description:
      "Creating a detailed roadmap, defining architecture, and planning our sprints.",
    details: [
      "Technology stack selection",
      "System architecture design",
      "Feature prioritization",
      "Milestone and timeline planning",
    ],
  },
  {
    id: 3,
    name: "Design",
    icon: PaintBrushIcon,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, beautiful, and responsive interfaces that your users will love.",
    details: [
      "Wireframing and prototyping",
      "High-fidelity mockups",
      "User flow mapping",
      "Interactive design systems",
    ],
  },
  {
    id: 4,
    name: "Development",
    icon: CodeBracketIcon,
    title: "Development",
    description:
      "Bringing the designs to life with clean, efficient, and scalable code.",
    details: [
      "Frontend & Backend development",
      "Agile/Scrum methodology",
      "CI/CD implementation",
      "Regular code reviews",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: BeakerIcon,
    title: "Testing & QA",
    description:
      "Ensuring functionality, performance, and compatibility across all devices.",
    details: [
      "Functional testing",
      "Performance optimization",
      "Cross-browser compatibility",
      "Mobile responsiveness",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Deployment & Handoff",
    description:
      "Deploying the application and providing ongoing support for a seamless experience.",
    details: [
      "Server deployment",
      "Post-launch monitoring",
      "User feedback gathering",
      "Ongoing maintenance & updates",
    ],
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.2 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const cardGradients = [
  "radial-gradient(at top left, hsl(154 100% 50% / 0.2), transparent 70%)", // Green
  "radial-gradient(at top right, hsl(217 91% 60% / 0.2), transparent 70%)", // Blue
  "radial-gradient(at bottom left, hsl(262 83% 58% / 0.2), transparent 70%)", // Purple
  "radial-gradient(at bottom right, hsl(174 72% 56% / 0.2), transparent 70%)", // Teal
  "radial-gradient(at top, hsl(24 96% 53% / 0.2), transparent 70%)", // Orange
  "radial-gradient(at bottom, hsl(0 84% 60% / 0.2), transparent 70%)", // Red
];

const Process = ({ title, subtitle, stepsData = DEFAULT_PROCESS_STEPS }) => {
  const [activeStep, setActiveStep] = useState(1);
  const intervalRef = useRef(null);
  const totalSteps = stepsData.length;

  const startAutoCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveStep((prevStep) => (prevStep === totalSteps ? 1 : prevStep + 1));
    }, 5000);
  }, [totalSteps]);

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoCycle]);

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
    startAutoCycle();
  };

  const currentStepData = stepsData.find((step) => step.id === activeStep);
  if (!currentStepData) return null;

  const colorIndex = (currentStepData.id - 1) % cardGradients.length;

  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-0 sm:pt-28 lg:pt-0">
      <div className="flex flex-col items-center text-center">
        <div className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4">
          {title || "Our Process"}
        </div>
        <h2
          className="
            text-4xl md:text-6xl font-bold mb-4
            bg-clip-text text-transparent 
            bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
            bg-[200%_auto] animate-shine
          "
        >
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          {subtitle ||
            "A structured approach to delivering exceptional results for your project."}
        </p>
      </div>

      <div className="flex justify-between items-start mb-12 relative">
        <div className="absolute top-5 sm:top-6 left-0 w-full h-0.5 bg-border -translate-y-1/2" />

        {stepsData.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center z-10 cursor-pointer px-1"
            style={{ width: `${100 / totalSteps}%` }}
            onClick={() => handleStepClick(step.id)}
          >
            <motion.div
              animate={{
                backgroundColor:
                  activeStep === step.id
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--card))",
                borderColor:
                  activeStep === step.id
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--border))",
                scale: activeStep === step.id ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            >
              <span
                className={`text-sm sm:text-base ${
                  activeStep === step.id
                    ? "text-background font-bold"
                    : "text-foreground"
                }`}
              >
                {step.id}
              </span>
            </motion.div>
            <span className="text-[10px] sm:text-sm text-muted-foreground mt-2 text-center">
              {step.name}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-10 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <currentStepData.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-primary font-semibold">
                    Step 0{currentStepData.id}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {currentStepData.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {currentStepData.description}
              </p>
              <ul className="space-y-3">
                {currentStepData.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRightIcon className="w-5 h-5 text-primary mr-2" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative bg-card/80 border border-border/50 rounded-2xl p-4 sm:p-8 flex items-center justify-center min-h-[14rem] md:min-h-[18rem]"
              style={{
                backgroundImage: cardGradients[colorIndex],
              }}
            >
              <div className="absolute bottom-[-2rem] right-[-1rem] text-8xl sm:text-9xl font-bold text-foreground opacity-20 pointer-events-none">
                0{currentStepData.id}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <currentStepData.icon className="w-6 h-6 sm:w-9 sm:h-9 text-primary" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-2">
                  {currentStepData.title}
                </h4>
                <p className="text-muted-foreground max-w-xs text-sm sm:text-base">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Process;
