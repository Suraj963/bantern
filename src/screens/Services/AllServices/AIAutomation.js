import React from "react";
import SubpageHero from "../../../Common/SubpageHero";
import ContentBlockImage from "../../../Common/ContentBlockImage";
import Breadcrumbs from "../../../Common/Breadcrumbs";
import KeyFeaturesGrid from "../../../Common/KeyFeaturesGrid";
import ai from "../../../assets/ai.png";
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  Cog6ToothIcon,
  CircleStackIcon,
  ServerStackIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

import Process from "../../../Common/Process";
import AnimatedSection from "../../../Common/AnimatedSection";
import FAQSection from "../../../Common/FAQSection";
import FinalCtaBanner from "../../../Common/FinalCtaBanner";

const featureData = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "AI Chatbots & Conversational Agents",
    description:
      "NexaWhale builds advanced conversational agents and virtual assistants that understand context, handle multi-turn conversations, and automate common user interactions.",
  },
  {
    icon: BoltIcon,
    title: "Automation Workflows",
    description:
      "NexaWhale designs and implements automated end-to-end workflows that reduce manual effort, trigger actions across systems, and orchestrate business processes.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Model Integration & APIs",
    description:
      "NexaWhale integrates state-of-the-art ML models and LLMs into products via secure, scalable APIs and microservices.",
  },
  {
    icon: CircleStackIcon,
    title: "Data Pipelines & ETL",
    description:
      "NexaWhale develops reliable data collection, transformation, and storage pipelines that feed models with clean, labeled, and timely data.",
  },
  {
    icon: ServerStackIcon,
    title: "Custom Model Training & Fine-tuning",
    description:
      "NexaWhale fine-tunes models on domain-specific data, optimizes for latency and accuracy, and produces tailored AI behavior for unique use cases.",
  },
  {
    icon: ChartBarIcon,
    title: "Monitoring & Governance",
    description:
      "NexaWhale provides continuous performance monitoring, bias and quality checks, observability, and governance to keep AI safe and performant in production.",
  },
];

const PROCESS = [
  {
    id: 1,
    name: "Discovery",
    icon: MagnifyingGlassIcon,
    title: "Discovery & Use-Case Definition",
    description:
      "NexaWhale identifies high-impact AI automation opportunities and defines measurable success metrics aligned to business objectives.",
    details: [
      "Stakeholder interviews and painpoint mapping",
      "Identify automation candidates and ROI estimates",
      "Data availability and quality assessment",
      "Define KPIs and success metrics",
    ],
  },
  {
    id: 2,
    name: "Planning",
    icon: ClipboardDocumentListIcon,
    title: "Technical Planning & Roadmap",
    description:
      "NexaWhale designs the architecture, integration points, and delivery plan for the automation solution to ensure scalable production readiness.",
    details: [
      "Select model approach (off-the-shelf vs fine-tune)",
      "Define API and infrastructure requirements",
      "Design data pipelines and ETL flows",
      "Set milestones and rollout strategy",
    ],
  },
  {
    id: 3,
    name: "Design",
    icon: PaintBrushIcon,
    title: "UX, Prompt & Interaction Design",
    description:
      "NexaWhale crafts intuitive conversational experiences and prompt designs that guide AI behavior and set clear user expectations.",
    details: [
      "Design conversation flows and prompt engineering",
      "Define error handling and fallback UX",
      "Establish persona and tone guidelines",
      "Prototype conversational UI and interactions",
    ],
  },
  {
    id: 4,
    name: "Development",
    icon: CodeBracketIcon,
    title: "Build & Integration",
    description:
      "NexaWhale implements model integrations, builds secure APIs, and connects automation workflows to existing systems and services.",
    details: [
      "API development and secure authentication",
      "Model integration and inference pipelines",
      "Workflow orchestration and connector development",
      "Prepare scalable deployment configuration",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: BeakerIcon,
    title: "Validation & Safety Testing",
    description:
      "NexaWhale executes thorough test cycles to validate model performance, safety, and reliability across production-like scenarios and edge cases.",
    details: [
      "Functional and regression testing",
      "Bias, safety, and content filtering checks",
      "Performance and latency testing",
      "User acceptance testing (UAT) and scenario verification",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Deploy, Monitor & Iterate",
    description:
      "NexaWhale deploys to production with real-time monitoring and an iterative roadmap for continuous improvement and governance.",
    details: [
      "Production rollout and canary releases",
      "Monitoring and alerting (metrics and logs)",
      "Continuous feedback loop and retraining",
      "SLA setup, maintenance, and governance",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question: "What types of AI automation does NexaWhale build?",
    answer:
      "NexaWhale builds conversational agents, document understanding pipelines, automation workflows, recommendation systems, and custom model integrations tailored to specific business needs.",
  },
  {
    id: 2,
    question: "Is a large dataset required to use AI effectively?",
    answer:
      "Not always. NexaWhale evaluates available data and recommends the most cost-effective approach—ranging from prompt engineering to targeted fine-tuning and synthetic data augmentation when required.",
  },
  {
    id: 3,
    question: "How does NexaWhale ensure AI safety and compliance?",
    answer:
      "NexaWhale implements guardrails including content filtering, rate limiting, human-in-the-loop checkpoints, and continuous bias monitoring, and follows privacy and compliance best practices relevant to each industry.",
  },
  {
    id: 4,
    question: "Can AI automation integrate with existing systems?",
    answer:
      "Yes. NexaWhale designs secure connectors and APIs to integrate with CRMs, databases, messaging platforms, and enterprise systems to enable end-to-end automation.",
  },
  {
    id: 5,
    question: "How does NexaWhale measure success for AI automation projects?",
    answer:
      "NexaWhale tracks outcome-driven KPIs such as time saved, error reduction, conversion lift, throughput improvement, and model accuracy/latency metrics aligned to business objectives.",
  },
];

const AIAutomation = () => {
  const pathItems = [
    { name: "Services", href: "/services" },
    { name: "AI Automation", href: "/services/ai-automation" },
  ];

  const processDataProps = {
    title: "Our AI Automation Methodology",
    subtitle:
      "A pragmatic six-step approach for designing, building, and operating reliable AI-driven automation.",
  };

  return (
    <div className="flex flex-col gap-16">
      <Breadcrumbs items={pathItems} />

      <SubpageHero
        category="Service"
        title="AI Automation"
        subtitle="Intelligent automation: conversational AI, model integrations, and scalable workflows that accelerate business outcomes."
      />

      <ContentBlockImage
        title="Automate Repetitive Workflows with AI"
        paragraph1="NexaWhale’s AI Automation services reduce manual effort, improve response times, and unlock new capabilities. Solutions include conversational agents, document processing, and event-driven automation that integrate securely with existing systems."
        paragraph2="From rapid prototyping to production-grade deployments, NexaWhale handles data pipelines, model integration, prompt engineering, and monitoring—focused on measurable outcomes such as efficiency gains, accuracy improvements, and auditable AI behavior."
        ctaText="Explore AI Automation"
        imageSrc={ai}
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
        category="Ready for AI?"
        headline="Bring AI into your product, safely and reliably."
        subtext="NexaWhale designs automation that delivers measurable impact while keeping safety and governance front of mind."
        ctaText="Start your AI project"
      />
    </div>
  );
};

export default AIAutomation;
