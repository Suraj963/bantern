import React from "react";
import SubpageHero from "../../../Common/SubpageHero";
import ContentBlockImage from "../../../Common/ContentBlockImage";
import Breadcrumbs from "../../../Common/Breadcrumbs";
import KeyFeaturesGrid from "../../../Common/KeyFeaturesGrid";
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import {
  CpuChipIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  RectangleGroupIcon,
  BoltIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import Process from "../../../Common/Process";
import AnimatedSection from "../../../Common/AnimatedSection";
import FAQSection from "../../../Common/FAQSection";
import FinalCtaBanner from "../../../Common/FinalCtaBanner";

const featureData = [
  {
    icon: CpuChipIcon,
    title: "Custom UI/UX Design",
    description:
      "Tailored designs created to reflect your brand identity while delivering exceptional user experience.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Layouts",
    description:
      "Layouts that adapt seamlessly across all devices for a smooth and consistent user experience.",
  },
  {
    icon: EyeIcon,
    title: "Visual Storytelling",
    description:
      "Strategic use of visuals, typography, and color to communicate your brand message effectively.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Intuitive Navigation",
    description:
      "User-friendly navigation structures that guide visitors clearly and support engagement.",
  },
  {
    icon: BoltIcon,
    title: "Performance Optimization",
    description:
      "Optimized designs built for fast loading, smooth interaction, and improved SEO performance.",
  },
  {
    icon: BriefcaseIcon,
    title: "Website Design Strategy",
    description:
      "Structured planning to ensure your website meets business goals and delivers measurable results.",
  },
];

const WEBSITE_DESIGN_PROCESS = [
  {
    id: 1,
    name: "Discovery",
    icon: MagnifyingGlassIcon,
    title: "Project Scoping",
    description:
      "Bantern begins by understanding your brand, goals, and audience to establish a strong project foundation.",
    details: [
      "Brand alignment & competitor analysis",
      "Audience identification & goal setting",
      "Defining project scope & deliverables",
      "Initial concept discussions",
    ],
  },
  {
    id: 2,
    name: "Strategy",
    icon: ClipboardDocumentListIcon,
    title: "Wireframing & Planning",
    description:
      "Bantern creates clear structures and wireframes to map user flow and outline the website’s core framework.",
    details: [
      "Sitemap and user journey mapping",
      "Wireframing key pages",
      "Defining content hierarchy",
      "Strategy review and approval",
    ],
  },
  {
    id: 3,
    name: "Design",
    icon: PaintBrushIcon,
    title: "Visual Mockups & Prototyping",
    description:
      "Bantern designs high-quality visual mockups and interactive prototypes aligned with your brand aesthetic.",
    details: [
      "High-fidelity design mockups",
      "Custom typography and color systems",
      "Interactive prototypes",
      "Final design asset preparation",
    ],
  },
  {
    id: 4,
    name: "Development",
    icon: CodeBracketIcon,
    title: "Frontend Build",
    description:
      "Bantern develops mobile-first, responsive, and accessible frontend code that brings your design to life.",
    details: [
      "Building scalable UI components",
      "Responsive layout engineering",
      "JavaScript feature implementation",
      "Cross-browser compatibility checks",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: BeakerIcon,
    title: "QA & Accessibility",
    description:
      "Bantern performs extensive testing to ensure your website functions flawlessly across all devices.",
    details: [
      "Functional & UI/UX testing",
      "Performance optimization",
      "User experience audits",
      "Accessibility compliance (W3C & WCAG)",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Deployment & Handoff",
    description:
      "Bantern deploys your website, conducts final launch checks, and provides full documentation and training.",
    details: [
      "Hosting & domain configuration",
      "Pre-launch quality checks",
      "Final approval & deployment",
      "Documentation & team training",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question: "Why do I need ongoing website maintenance?",
    answer:
      "Ongoing maintenance ensures your website remains secure, optimized, and compatible with the latest technologies. Bantern helps prevent downtime, improve performance, and protect your platform from evolving security risks.",
  },
  {
    id: 2,
    question: "How often do you perform updates?",
    answer:
      "Bantern performs automated system checks daily and deploys manual updates weekly or immediately when security patches are released, ensuring your website stays safe and up to date.",
  },
  {
    id: 3,
    question: "What happens if my website gets hacked?",
    answer:
      "Bantern provides emergency recovery, malware removal, security patching, and restoration from clean backups. We secure your website and implement long-term protection measures to prevent future incidents.",
  },
  {
    id: 4,
    question: "Do you provide reports on maintenance activities?",
    answer:
      "Yes. Bantern provides detailed monthly reports covering updates, performance metrics, security scans, and backup confirmations for complete transparency.",
  },
  {
    id: 5,
    question: "Can I cancel maintenance services anytime?",
    answer:
      "Yes. Bantern offers flexible monthly billing with no long-term commitments. You may cancel anytime.",
  },
];

const WebsiteDesign = () => {
  const pathItems = [
    { name: "Services", href: "/services" },
    { name: "Website Design", href: "/services/website-design" },
  ];

  const processDataProps = {
    title: "Our Design Methodology",
    subtitle:
      "We follow a structured six-step methodology to ensure every design is successful and scalable.",
  };

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs items={pathItems} />

      <SubpageHero
        category="Service"
        title="Website Design Service"
        subtitle="Custom, responsive web designs crafted by Bantern to elevate your brand and captivate your audience."
      />

      <ContentBlockImage
        title="Transform Your Brand with Professional Website Design"
        paragraph1="In today's digital-first world, your website is one of your most important brand assets. Bantern delivers modern, visually stunning, and mobile-first website designs that strengthen your digital presence and leave a lasting impression."
        paragraph2="Whether you’re building a new brand or refreshing an outdated design, Bantern creates high-performance, conversion-focused websites that align with your business goals. Every layout, visual choice, and user flow is crafted with precision to ensure a seamless and impactful user experience."
        ctaText="Get Started"
        imageSrc={
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop"
        }
        reverse={false}
      />

      <KeyFeaturesGrid featureData={featureData} />

      <Process
        title={processDataProps.title}
        subtitle={processDataProps.subtitle}
        stepsData={WEBSITE_DESIGN_PROCESS}
      />

      <AnimatedSection>
        <FAQSection faqData={faqData} />
      </AnimatedSection>

      <FinalCtaBanner
        category="Ready to Start?"
        headline="Build Your Digital Presence with Bantern"
        subtext="Get a detailed consultation and a strategic roadmap for launching a high-performance website that elevates your brand."
        ctaText="Start your project"
      />
    </div>
  );
};

export default WebsiteDesign;
