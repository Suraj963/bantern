/* src/components/TechScroller.jsx */
// This is the one, correct, bulletproof component.

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJava,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiStripe,
  SiJavascript,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

// This is the correct, professional tech stack.
const techIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaMobileAlt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> }, // The correct GREEN LEAF
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // The correct Tailwind logo
  { name: "Stripe", icon: <SiStripe /> }, // The correct Stripe logo
  { name: "Figma", icon: <FaFigma /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const ScrollerRow = ({ icons, direction = "left" }) => {
  const animationClass =
    direction === "left"
      ? "animate-[scroll-left_40s_linear_infinite]"
      : "animate-[scroll-right_40s_linear_infinite]";

  const repeatedIcons = [...icons, ...icons];

  return (
    <div className={`flex w-max ${animationClass}`}>
      {repeatedIcons.map((item, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-12"
          title={item.name}
        >
          <span className="text-4xl sm:text-5xl lg:text-6xl text-muted-foreground transition-colors hover:text-foreground">
            {item.icon}
          </span>
        </div>
      ))}
    </div>
  );
};

const TechScroller = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <h2 className="text-center text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider mb-8 sm:mb-12">
        Technologies we use to build your projects
      </h2>

      <div className="flex w-full mb-4">
        <ScrollerRow icons={techIcons} direction="left" />
      </div>
    </div>
  );
};

export default TechScroller;