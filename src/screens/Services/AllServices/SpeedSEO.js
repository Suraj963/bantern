// src/screens/SpeedSEO.jsx

import React from 'react';
import SubpageHero from '../../../Common/SubpageHero';
import ContentBlockImage from '../../../Common/ContentBlockImage';
import Breadcrumbs from '../../../Common/Breadcrumbs';
import KeyFeaturesGrid from '../../../Common/KeyFeaturesGrid';
// --- NEW: Import icons needed for the process data array ---
import {
  BoltIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Process from '../../../Common/Process';
import AnimatedSection from '../../../Common/AnimatedSection';
import FAQSection from '../../../Common/FAQSection';
import FinalCtaBanner from '../../../Common/FinalCtaBanner';


// --- Feature Data (No Change) ---
const featureData = [
  {
    icon: BoltIcon,
    title: "Core Web Vitals",
    description:
      "Optimize LCP, FID, and CLS scores to meet Google's performance standards and ranking factors.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Page Speed Optimization",
    description:
      "Reduce load times through image optimization, code minification, caching strategies, and CDN implementation.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Technical SEO",
    description:
      "Fix crawlability issues, proper indexing, sitemaps, schema markup, and site architecture improvements.",
  },
  {
    icon: ChartBarIcon,
    title: "Content Optimization",
    description:
      "Enhance on-page elements including meta tags, headings, keyword placement, and content structure.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Performance Audits",
    description:
      "Comprehensive analysis of your website's speed bottlenecks with actionable improvement plans.",
  },
  {
    icon: GlobeAltIcon,
    title: "Local SEO",
    description:
      "Optimize for local search results with GBP optimization, local citations, and location pages.",
  },
];


// --- 1. DEFINING THE SPECIFIC PROCESS DATA ---
const PROCESS = [
     {
    id: 1,
    name: "Audit",
    icon: MagnifyingGlassIcon,
    title: "Website Audit & Core Web Vital Analysis",
    description:
      "Bantern begins by analyzing the website’s performance, SEO structure, and identifying speed bottlenecks.",
    details: [
      "Core Web Vitals scan (LCP, FID, CLS)",
      "Performance & speed report",
      "SEO technical audit",
      "Identifying bottlenecks & issues",
    ],
  },
  {
    id: 2,
    name: "Planning",
    icon: ClipboardDocumentListIcon,
    title: "Optimization Plan & SEO Strategy",
    description:
      "Bantern prepares a detailed roadmap outlining code-level improvements, SEO fixes, and optimization priorities.",
    details: [
      "Prioritizing speed-impact tasks",
      "Technical SEO planning",
      "Content structure strategy",
      "Improvement timeline setup",
    ],
  },
  {
    id: 3,
    name: "Optimization",
    icon: WrenchScrewdriverIcon,
    title: "Performance Optimization",
    description:
      "Bantern implements optimizations to improve speed, stability, and the overall loading experience.",
    details: [
      "Image & asset optimization",
      "Code minification/compression",
      "Lazy-loading & caching setup",
      "Server/CDN performance tweaks",
    ],
  },
  {
    id: 4,
    name: "SEO",
    icon: GlobeAltIcon,
    title: "Technical & On-Page SEO",
    description:
      "Bantern improves discoverability through proper indexing, metadata, schema, and content optimization.",
    details: [
      "Keyword & meta improvements",
      "Schema markup implementation",
      "Fixing crawl & indexing issues",
      "Optimizing headings & structure",
    ],
  },
  {
    id: 5,
    name: "Testing",
    icon: ChartBarIcon,
    title: "Testing & Validation",
    description:
      "Bantern validates improvements across performance tools and real devices to ensure accurate results.",
    details: [
      "Google Lighthouse testing",
      "Cross-browser performance checks",
      "Mobile responsiveness validation",
      "Speed metrics benchmarking",
    ],
  },
  {
    id: 6,
    name: "Launch",
    icon: RocketLaunchIcon,
    title: "Deployment & Ongoing Monitoring",
    description:
      "Bantern deploys enhancements and continuously tracks performance to maintain long-term rankings.",
    details: [
      "Deploying final optimizations",
      "Continuous Core Web Vital tracking",
      "SEO performance monitoring",
      "Monthly improvement reporting",
    ],
  },
];
// --- END OF PROCESS DATA ---

// --- Data for the FAQ items ---
const faqData = [
  {
    id: 1,
    question: "How much can Bantern improve my website speed?",
    answer: "Many websites see substantial load-time improvements after optimization. Exact gains depend on the current setup, but Bantern typically targets significant improvements in user-perceived performance and aims for competitive PageSpeed scores through targeted technical work.",
  },
  {
    id: 2,
    question: "Will speed optimization help my SEO rankings?",
    answer: "Yes. Page speed and Core Web Vitals are ranking factors, particularly for mobile. Faster sites also tend to have lower bounce rates and higher engagement, which contribute positively to search performance.",
  },
  {
    id: 3,
    question: "How long does SEO take to show results?",
    answer: "Technical SEO fixes can show impact in a few weeks, while content and authority improvements typically take several months to mature. Bantern provides monthly reports to track keyword movement, traffic changes, and other KPIs so progress is measurable.",
  },
  {
    id: 4,
    question: "Do you work with e-commerce sites?",
    answer: "Yes. E-commerce platforms benefit greatly from speed and SEO optimizations. Bantern specializes in optimizing product pages, category structures, faceted navigation, and technical challenges unique to online stores to improve conversion rates and performance.",
  },
  {
    id: 5,
    question: "What's included in ongoing SEO services?",
    answer: "Ongoing packages typically include monthly technical audits, content optimizations, backlink monitoring, performance tracking, competitor analysis, and regular reporting. Bantern also monitors algorithm updates and adjusts strategies to maintain effectiveness.",
  },
];



const SpeedSEO = () => {

    const pathItems = [
        { name: "Services", href: "/services" },
        { name: "Website maintenance", href: "/services/maintenance" },
    ];
    
    // Props for the reusable Process component
    const processDataProps = {
        title: "Our Optimization Methodology",
        subtitle: "Bantern follows a structured six-step methodology to improve speed and search visibility.",
    };

    return (
        <div className="flex flex-col gap-16">

            <Breadcrumbs items={pathItems} /> 

            <SubpageHero
                category="Service"
                title="Speed Optimization & SEO"
                subtitle="Improve website loading speed, Core Web Vitals, and search engine visibility for better rankings and user experience."
            />
              
            <ContentBlockImage
                title="Accelerate Your Growth with Speed & Visibility"
                paragraph1="In a world where seconds matter and visibility drives business, a fast and search-optimized website is essential. Bantern's Speed Optimization & SEO services focus on reducing load times, improving Core Web Vitals, and increasing organic visibility. By combining technical optimization with SEO best practices—image compression, code minification, caching strategies, metadata improvements, and structured data—Bantern ensures sites perform well in both tests and real-world usage."
                paragraph2="Whether targeting global audiences or local leads, Bantern delivers measurable improvements using data-driven tools and real-world insights. The approach centers on sustainable gains that boost discoverability, user experience, and conversion rates."
                ctaText="Boost My Site"
                imageSrc={"https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop"}
                reverse={false} 
            />

            <KeyFeaturesGrid
            featureData={featureData}
            />
            
            {/* --- 2. UPDATED: Passing specific data to the Process component --- */}
            <Process 
                title={processDataProps.title} 
                subtitle={processDataProps.subtitle} 
                stepsData={PROCESS} // Pass the newly defined array
            />

            <AnimatedSection>
                <FAQSection 
                faqData={faqData}
                /> 
            </AnimatedSection>

            <FinalCtaBanner 
                category="Ready to Start?"
                headline="Ready to Accelerate Your Website?"
                subtext="Boost your speed, rankings, and conversions with professional optimization from Bantern."
                ctaText="Get Started"
            />
           

        </div>
    );
};

export default SpeedSEO;
