/* src/screens/ProjectPage.jsx */

import React from "react";
import { useParams } from "react-router-dom";

import ProjectDetailHeader from "./ProjectDetailHeader";
import ProjectDetailContent from "./ProjectDetailContent";
import ProjectDetailSidebar from "./ProjectDetailSidebar";


const projectDetails = {
  1: {
    id: 1,
    title: "EcoSense Platform",
    category: "Web Application",
    timeline: "2-3 weeks",
    budget: "$900 - $1200",
    date: "Dec 2024",
    description:
      "A real-time environmental tracking dashboard with analytics, alerts, and powerful data visualization.",
    galleryImages: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      "https://images.unsplash.com/photo-1530654510161-101a6f17f82c",
      "https://images.unsplash.com/photo-1508711040928-5dde28c66007",
    ],
    overview:
      "EcoSense helps organizations monitor air quality, emissions, climate, and resource usage. Built using React, Node.js, and PostgreSQL with live streaming APIs.",
    challenges:
      "Processing high-frequency data streams while keeping the dashboard performant and accurate under load.",
    results:
      "Delivered real-time insights and reduced monitoring effort by 60% for customers.",
    tools: ["React", "Node.js", "PostgreSQL", "AWS", "WebSocket"],
    liveSiteUrl: "#",
    keyFeatures: [
      "Live environmental metrics",
      "Real-time charts & insights",
      "Automated alerts",
      "Multi-location tracking",
      "Admin reporting dashboard",
    ],
  },

  2: {
    id: 2,
    title: "Nexus Pro CMS",
    category: "CMS/SaaS",
    timeline: "3-4 weeks",
    budget: "$1500 - $2000",
    date: "Nov 2024",
    description:
      "A scalable headless CMS for delivering structured content across multiple platforms.",
    galleryImages: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0e",
      "https://images.unsplash.com/photo-1547658719-da2b51169166",
      "https://images.unsplash.com/photo-1522199670076-2852e6ef9446",
    ],
    overview:
      "Nexus Pro CMS centralizes content management and distributes content via a fast GraphQL API to web and mobile apps.",
    challenges:
      "Designing a scalable architecture and optimizing GraphQL queries for performance.",
    results:
      "Improved content publishing speed by 70% and reduced operational overhead.",
    tools: ["Next.js", "GraphQL", "TypeScript", "Tailwind CSS"],
    liveSiteUrl: "#",
    keyFeatures: [
      "Headless architecture",
      "GraphQL API",
      "Roles & permission management",
      "Version-controlled publishing",
    ],
  },

  3: {
    id: 3,
    title: "Flow State Mobile App",
    category: "Mobile Application",
    timeline: "2-3 weeks",
    budget: "$600 - $800",
    date: "Oct 2024",
    description:
      "A productivity app with geo alerts, tasks, and real-time updates.",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742400-b5d2268800c6",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      "https://images.unsplash.com/photo-1598327105740-67d23accb3a2",
      "https://images.unsplash.com/photo-1551650975-e096f66904f7",
    ],
    overview:
      "Flow State helps users manage tasks and get location-triggered reminders, built with React Native and Firebase.",
    challenges:
      "Implementing battery-efficient geolocation and real-time sync.",
    results:
      "Increased retention and task completion through smart notifications.",
    tools: ["React Native", "Firebase", "TypeScript"],
    liveSiteUrl: "#",
    keyFeatures: [
      "Geo-triggered tasks",
      "Realtime database sync",
      "Push notifications",
      "Lightweight UI",
    ],
  },

  4: {
    id: 4,
    title: "Aura E-Commerce",
    category: "E-Commerce",
    timeline: "5-7 days",
    budget: "$300 - $450",
    date: "Sep 2024",
    description:
      "A modern Shopify+ eCommerce store with optimized UI and high conversion elements.",
    galleryImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    ],
    overview:
      "A clean, SEO-friendly storefront built on Shopify+ with custom Liquid components and fast performance.",
    challenges:
      "Customizing Liquid templates and meeting aggressive performance targets.",
    results: "Increased conversion rate by 30% in 6 weeks.",
    tools: ["Shopify", "Liquid", "React", "Stripe"],
    liveSiteUrl: "#",
    keyFeatures: [
      "Fast storefront",
      "Optimized product pages",
      "Custom checkout integrations",
    ],
  },

  5: {
    id: 5,
    title: "Quantum API Gateway",
    category: "Backend/API",
    timeline: "2 weeks",
    budget: "$800 - $1100",
    date: "Aug 2024",
    description: "A scalable API gateway for microservice communication.",
    galleryImages: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    ],
    overview:
      "Provides routing, authentication, logging, and high-volume data processing for microservices.",
    challenges:
      "Ensuring high concurrency, low-latency routing, and fault tolerance.",
    results: "Handles 1M+ requests/day with 99.9% uptime.",
    tools: ["Node.js", "Docker", "AWS Lambda", "Go"],
    liveSiteUrl: "#",
    keyFeatures: ["API rate-limiting", "JWT auth", "High-performance routing"],
  },

  6: {
    id: 6,
    title: "Brand Site Relaunch",
    category: "Website Design",
    timeline: "3-5 days",
    budget: "$200 - $350",
    date: "Jul 2024",
    description:
      "Complete redesign focused on modern visuals, accessibility, and improved core web vitals.",
    galleryImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    ],
    overview: "Rebuilt UI, improved layout, and boosted Core Web Vitals.",
    challenges:
      "Maintaining design consistency while improving performance and SEO.",
    results: "Achieved PageSpeed 95+ and doubled traffic.",
    tools: ["HTML5", "Tailwind CSS", "Figma"],
    liveSiteUrl: "#",
    keyFeatures: ["Brand-focused UI", "SEO optimized", "Responsive layouts"],
  },

  7: {
    id: 7,
    title: "FinTech Data Model",
    category: "Data & AI",
    timeline: "1-2 weeks",
    budget: "$500 - $650",
    date: "Jun 2024",
    description: "Predictive financial models using ML for forecasting.",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a0a",
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    ],
    overview: "Forecasting pipelines and dashboards for finance teams.",
    challenges:
      "Cleaning noisy historical data and ensuring model accuracy.",
    results: "Achieved 92% forecasting accuracy.",
    tools: ["Python", "Pandas", "SQL", "Machine Learning"],
    liveSiteUrl: "#",
    keyFeatures: ["Forecast dashboards", "AI predictions", "Scalable ETL"],
  },
};



const ProjectPage = () => {
  const { id } = useParams(); // receiving ID
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="w-full max-w-screen-xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The project you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
      {/* TOP HEADER */}
      <ProjectDetailHeader
        category={project.category}
        timeline={project.timeline}
        budget={project.budget}
      />

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          <ProjectDetailContent
            title={project.title}
            description={project.description}
            galleryImages={project.galleryImages}
            overview={project.overview}
            challenges={project.challenges}
            results={project.results}
            tools={project.tools}
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1">
          <ProjectDetailSidebar
            budget={project.budget}
            timeline={project.timeline}
            date={project.date}
            liveSiteUrl={project.liveSiteUrl}
            keyFeatures={project.keyFeatures}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
