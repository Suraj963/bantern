import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import websiteDevelopment from "../../assets/website-development.jpg";
import appDevelopment from "../../assets/app-development.png";
import ai from "../../assets/ai.png";
import maintenance from "../../assets/website-maintenance.png";
import seo from "../../assets/seo.png";

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

const serviceData = [
  // {
  //   icon: PaintBrushIcon,
  //   title: "Website Design",
  //   description:
  //     "Custom, responsive web designs that reflect your brand identity and engage users.",
  //   features: [
  //     "Custom UI/UX design",
  //     "Mobile-first responsive layouts",
  //     "Brand identity integration",
  //   ],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop",
  //   href: "/services/website-design",
  // },
  {
    icon: CodeBracketIcon,
    title: "Website Development",
    description:
      "Full-stack web development using modern technologies for a scalable experience.",
    features: [
      "Custom website development",
      "Front-end (React, Next.js)",
      "Back-end (Node.js, Python)",
    ],
    imageUrl: websiteDevelopment,
    href: "/services/website-development",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    description:
      "High-performance mobile apps built for iOS and Android using modern native and cross-platform technologies.",
    features: [
      "Native & cross-platform app development",
      "UI/UX for mobile screens",
      "Backend integration & APIs",
    ],
    imageUrl: appDevelopment,
    href: "/services/app-development",
  },
  {
    icon: CpuChipIcon,
    title: "AI & Automation",
    description:
      "Integrate intelligent AI models and automation to boost efficiency.",
    features: [
      "Custom AI model integration",
      "Workflow automation",
      "Data-driven insights",
    ],
    imageUrl: ai,
    href: "/services/ai-automation",
  },
  // {
  //   icon: WrenchScrewdriverIcon,
  //   title: "Bug Fixing & Responsiveness",
  //   description:
  //     "Fix layout, code, and issues while ensuring your site is mobile-friendly.",
  //   features: [
  //     "Cross-browser compatibility",
  //     "Mobile layout optimization",
  //     "JavaScript bug fixing",
  //   ],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1581094488347-3d1490232d4b?q=80&w=2070&auto=format&fit=crop",
  //   href: "/services/bug-fixing",
  // },
  {
    icon: ShieldCheckIcon,
    title: "Website Maintenance & Security",
    description:
      "Regular updates and monitoring to keep your website secure and up to date.",
    features: [
      "Regular security audits",
      "Automated backups",
      "Plugin & dependency updates",
    ],
    imageUrl: maintenance,
    href: "/services/maintenance",
  },
  {
    icon: SparklesIcon,
    title: "Speed Optimization & SEO",
    description:
      "Improve website speed, Core Web Vitals, and search engine visibility.",
    features: [
      "Image & asset optimization",
      "Core Web Vitals improvement",
      "On-page SEO setup",
    ],
    imageUrl: seo,
    href: "/services/speed-seo",
  },
];

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description, features, imageUrl, href } = service;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="border border-primary rounded-lg overflow-hidden flex flex-col h-full bg-background"
    >
      <Link to={href}>
        <div className="relative w-full h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-foreground rounded-full p-3 shadow-lg">
            <Icon className="w-6 h-6 text-background" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          <p className="text-sm font-semibold text-foreground mb-2">
            Key Features:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-6">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium flex items-center group mt-auto w-fit"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServiceOfferings = () => {
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
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8 pt-16 sm:pt-20 lg:pt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </motion.section>
  );
};

export default ServiceOfferings;
