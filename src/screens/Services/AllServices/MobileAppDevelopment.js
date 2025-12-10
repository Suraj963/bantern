import React from "react";
import SubpageHero from "../../../Common/SubpageHero";
import ContentBlockImage from "../../../Common/ContentBlockImage";
import Breadcrumbs from "../../../Common/Breadcrumbs";
import KeyFeaturesGrid from "../../../Common/KeyFeaturesGrid";
import appDevelopment from "../../../assets/app-development.png";
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ServerStackIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

import Process from "../../../Common/Process";
import AnimatedSection from "../../../Common/AnimatedSection";
import FAQSection from "../../../Common/FAQSection";
import FinalCtaBanner from "../../../Common/FinalCtaBanner";

const featureData = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Native & Cross-Platform Apps",
    description:
      "NexaWhale delivers performant native apps (iOS/Android) and cross-platform apps (React Native, Flutter) tailored to each client’s needs.",
  },
  {
    icon: DeviceTabletIcon,
    title: "App Design & UX",
    description:
      "NexaWhale produces pixel-perfect mobile UI/UX with platform conventions, smooth gestures, and accessibility best practices.",
  },
  {
    icon: ServerStackIcon,
    title: "Backend & APIs",
    description:
      "NexaWhale builds robust backend systems, secure APIs, and realtime sync capabilities to power mobile features and scale with users.",
  },
  {
    icon: CircleStackIcon,
    title: "Offline & Sync",
    description:
      "NexaWhale implements reliable offline-first behavior and efficient data synchronization strategies for a seamless user experience.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Mobile Security",
    description:
      "NexaWhale applies secure authentication, encrypted storage, and mobile security best practices to protect user data and ensure compliance.",
  },
  {
    icon: ChartBarIcon,
    title: "Analytics & Monitoring",
    description:
      "NexaWhale integrates analytics, crash reporting, and performance monitoring to measure adoption and respond to issues quickly.",
  },
];

const PROCESS = [
  {
    id: 1,
    name: "Discovery",
    icon: MagnifyingGlassIcon,
    title: "Discovery & Requirements",
    description:
      "NexaWhale aligns on business goals, target users, and core features to establish a clear product vision for each mobile app.",
    details: [
      "Stakeholder interviews & goal setting",
      "User research & persona definition",
      "Core feature prioritization",
      "Define success metrics & KPIs",
    ],
  },
  {
    id: 2,
    name: "Planning",
    icon: ClipboardDocumentListIcon,
    title: "Architecture & Roadmap",
    description:
      "NexaWhale designs the app architecture, determines native vs cross-platform approach, and prepares a delivery roadmap.",
    details: [
      "Platform strategy (iOS/Android/Hybrid)",
      "System & API architecture",
      "Sprint planning & milestones",
      "Estimation and resource planning",
    ],
  },
  {
    id: 3,
    name: "Design",
    icon: PaintBrushIcon,
    title: "UI/UX Design & Prototyping",
    description:
      "NexaWhale creates high-fidelity screens, interactive prototypes, and flows that reflect real device behavior and accessibility needs.",
    details: [
      "Wireframes & interaction design",
      "High-fidelity mockups",
      "Prototype user flows & usability testing",
      "Design system & component library",
    ],
  },
  {
    id: 4,
    name: "Development",
    icon: CodeBracketIcon,
    title: "App Development",
    description:
      "NexaWhale implements the app using best practices, modular architecture, and CI/CD to ensure reliable delivery.",
    details: [
      "Frontend (mobile) implementation",
      "Backend & API development",
      "Realtime & push notification integration",
      "CI/CD and automated builds",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: BeakerIcon,
    title: "QA & Performance Testing",
    description:
      "NexaWhale conducts comprehensive testing to validate stability, performance, and compatibility across devices and networks.",
    details: [
      "Functional & regression testing",
      "Device & OS compatibility testing",
      "Performance, battery & network tests",
      "Beta testing (TestFlight / Play Console)",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Launch & Post-Launch Support",
    description:
      "NexaWhale manages app store submissions, monitors performance, and iterates rapidly based on user feedback.",
    details: [
      "App Store & Play Store submission",
      "Monitoring & crash reporting",
      "User feedback & roadmap iterations",
      "Ongoing maintenance & updates",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Which platform should organizations build for first — iOS, Android, or both?",
    answer:
      "NexaWhale recommends platform selection based on target audience and business goals. Clients often begin with the primary platform for their users or choose cross-platform frameworks (React Native/Flutter) to reach both platforms with shared code.",
  },
  {
    id: 2,
    question: "Does NexaWhale build native apps or cross-platform apps?",
    answer:
      "NexaWhale develops both native (iOS/Android) and cross-platform applications (React Native, Flutter), selecting the approach that best balances performance, time-to-market, and long-term maintainability.",
  },
  {
    id: 3,
    question:
      "How does NexaWhale handle push notifications and background tasks?",
    answer:
      "NexaWhale implements reliable push notification systems using platform services (APNs, FCM) and adopts background processing patterns appropriate for each platform while respecting battery and privacy constraints.",
  },
  {
    id: 4,
    question: "Does NexaWhale assist with app store submission and approvals?",
    answer:
      "Yes. NexaWhale handles packaging, metadata, screenshots, and submissions for both Apple App Store and Google Play, and addresses review feedback to ensure compliance with store guidelines.",
  },
  {
    id: 5,
    question:
      "How does NexaWhale ensure data security and privacy in mobile apps?",
    answer:
      "NexaWhale follows industry best practices including secure authentication, encrypted storage, secure network communication (HTTPS), minimal permissions, and adherence to relevant privacy regulations such as GDPR where applicable.",
  },
];

const MobileAppDevelopment = () => {
  const pathItems = [
    { name: "Services", href: "/services" },
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
  ];

  const processDataProps = {
    title: "Our Mobile App Development Process",
    subtitle:
      "A practical six-step approach to design, build, and ship high-quality mobile apps.",
  };

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs items={pathItems} />

      <SubpageHero
        category="Service"
        title="Mobile App Development"
        subtitle="Native & cross-platform mobile apps designed for performance, usability, and scale by NexaWhale."
      />

      <ContentBlockImage
        title="Build Engaging Mobile Experiences"
        paragraph1="NexaWhale builds mobile applications that delight users and solve real business problems. From consumer-facing apps to internal tools, NexaWhale delivers performant, maintainable, and secure mobile solutions."
        paragraph2="NexaWhale’s approach covers the full lifecycle — research, design, engineering, testing, and app store launches — with a focus on measurable outcomes and scalable architecture."
        ctaText="Get Started"
        imageSrc={appDevelopment}
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
        category="Ready to Launch?"
        headline="Let NexaWhale build your next mobile app."
        subtext="Deliver a delightful, performant app experience that scales with your users."
        ctaText="Start your app"
      />
    </div>
  );
};

export default MobileAppDevelopment;
