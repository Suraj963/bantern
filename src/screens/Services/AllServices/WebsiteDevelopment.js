import React from "react";
import SubpageHero from "../../../Common/SubpageHero";
import ContentBlockImage from "../../../Common/ContentBlockImage";
import Breadcrumbs from "../../../Common/Breadcrumbs";
import KeyFeaturesGrid from "../../../Common/KeyFeaturesGrid";
import websiteDevelopment from "../../../assets/website-development.png";
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import {
  ServerStackIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  BoltIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Process from "../../../Common/Process";
import AnimatedSection from "../../../Common/AnimatedSection";
import FAQSection from "../../../Common/FAQSection";
import FinalCtaBanner from "../../../Common/FinalCtaBanner";

const featureData = [
  {
    icon: CodeBracketIcon,
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces built with React, Next.js, and TypeScript to deliver exceptional user experiences.",
  },
  {
    icon: ServerStackIcon,
    title: "Backend Development",
    description:
      "Robust server-side solutions using Node.js, Express, and other frameworks to power scalable application logic.",
  },
  {
    icon: CircleStackIcon,
    title: "Database Integration",
    description:
      "Efficient data management with SQL and NoSQL databases including PostgreSQL, MongoDB, and Firebase.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Implementation",
    description:
      "Industry-standard security practices to protect application data and maintain regulatory compliance.",
  },
  {
    icon: BoltIcon,
    title: "Performance Optimization",
    description:
      "Speed and efficiency improvements to ensure fast loading times and smooth user experiences.",
  },
  {
    icon: LinkIcon,
    title: "API Development",
    description:
      "Custom RESTful or GraphQL APIs to connect frontends with backend services and third-party integrations.",
  },
];

const PROCESS = [
  {
    id: 1,
    name: "Discovery",
    icon: MagnifyingGlassIcon,
    title: "Discovery & Research",
    description:
      "NexaWhale conducts discovery workshops to understand business goals, target users, and technical constraints.",
    details: [
      "Requirement gathering",
      "Market & competitor analysis",
      "User persona creation",
      "Define project scope & success metrics",
    ],
  },
  {
    id: 2,
    name: "Planning",
    icon: ClipboardDocumentListIcon,
    title: "Planning & Strategy",
    description:
      "NexaWhale creates a detailed technical roadmap, architecture plan, and sprint schedule to guide delivery.",
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
      "NexaWhale designs intuitive, accessible interfaces and prototypes that prioritize usability and brand fidelity.",
    details: [
      "Wireframing and prototyping",
      "High-fidelity mockups",
      "User flow mapping",
      "Design system creation",
    ],
  },
  {
    id: 4,
    name: "Development",
    icon: CodeBracketIcon,
    title: "Development",
    description:
      "NexaWhale implements the solution using modular, testable code and industry best practices for maintainability.",
    details: [
      "Frontend & Backend development",
      "Agile/Scrum delivery",
      "CI/CD implementation",
      "Code reviews & QA",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: BeakerIcon,
    title: "Testing & QA",
    description:
      "NexaWhale runs comprehensive testing to validate functionality, performance, and cross-platform compatibility.",
    details: [
      "Functional testing",
      "Performance optimization",
      "Cross-browser/device compatibility",
      "Accessibility checks",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Deployment & Handoff",
    description:
      "NexaWhale manages deployment, monitoring setup, and handoff documentation to ensure a smooth launch and ongoing support.",
    details: [
      "Server deployment",
      "Post-launch monitoring",
      "Client training & documentation",
      "Ongoing maintenance & updates",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question: "What technologies does NexaWhale use for web development?",
    answer:
      "NexaWhale leverages modern web technologies such as React, Next.js, TypeScript, Node.js, and reliable database solutions (PostgreSQL, MongoDB, Firebase). The chosen stack is matched to project needs and long-term maintainability.",
  },
  {
    id: 2,
    question: "How long does web development typically take?",
    answer:
      "Timelines vary with scope and complexity. Typical projects range from 4–12 weeks for standard websites and 2–4+ months for complex web applications. NexaWhale provides a detailed timeline after the discovery phase.",
  },
  {
    id: 3,
    question: "Does NexaWhale handle both frontend and backend development?",
    answer:
      "Yes. NexaWhale provides end-to-end development services covering frontend interfaces, backend systems, APIs, and database design to ensure an integrated and consistent solution.",
  },
  {
    id: 4,
    question: "How does NexaWhale ensure website security?",
    answer:
      "Security is built into every project. NexaWhale follows best practices including secure authentication, encrypted communication, input validation, regular dependency updates, and vulnerability scanning to reduce risk.",
  },
  {
    id: 5,
    question: "Can NexaWhale work with existing designs or teams?",
    answer:
      "Absolutely. NexaWhale can implement existing designs, collaborate with in-house teams, or provide full design and development services depending on client needs.",
  },
];

const WebsiteDevelopment = () => {
  const pathItems = [
    { name: "Services", href: "/services" },
    { name: "Website Development", href: "/services/website-development" },
  ];

  const processDataProps = {
    title: "Our Development Methodology",
    subtitle:
      "NexaWhale follows a structured six-step methodology to deliver robust, maintainable web applications.",
  };

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs items={pathItems} />

      <SubpageHero
        category="Service"
        title="Web Development Service"
        subtitle="Custom, high-performance web development by NexaWhale using modern technologies for optimal results."
      />

      <ContentBlockImage
        title="Build Powerful Web Applications with Modern Technologies"
        paragraph1="NexaWhale builds fast, scalable, and secure web applications tailored to business objectives. Our development approach focuses on reliability, maintainability, and delivering measurable outcomes."
        paragraph2="From marketing sites and landing pages to complex web applications and dashboards, NexaWhale provides end-to-end development services including architecture, implementation, testing, and deployment."
        ctaText="Get Started"
        imageSrc={websiteDevelopment}
        reverse={false}
      />

      <KeyFeaturesGrid featureData={featureData} />

      <Process
        title={processDataProps.title}
        subtitle={processDataProps.subtitle}
        stepsData={PROCESS}
      />

      <AnimatedSection>
        <FAQSection faqData={faqData} />
      </AnimatedSection>

      <FinalCtaBanner
        category="Ready to Start?"
        headline="Ready to Build Your Next Web Project?"
        subtext="NexaWhale delivers powerful, scalable web applications that meet business objectives and exceed user expectations."
        ctaText="Start your project"
      />
    </div>
  );
};

export default WebsiteDevelopment;
