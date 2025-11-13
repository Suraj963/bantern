// src/screens/Maintenance.jsx

import React from 'react';
import SubpageHero from '../../../Common/SubpageHero';
import ContentBlockImage from '../../../Common/ContentBlockImage';
import Breadcrumbs from '../../../Common/Breadcrumbs';
import KeyFeaturesGrid from '../../../Common/KeyFeaturesGrid';
// --- NEW: Import icons needed for the process data array ---
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CircleStackIcon,
  ChartBarIcon,
  BellAlertIcon,
  LockClosedIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Process from '../../../Common/Process';
import AnimatedSection from '../../../Common/AnimatedSection';
import FAQSection from '../../../Common/FAQSection';
import FinalCtaBanner from '../../../Common/FinalCtaBanner';


// --- Feature Data (No Change) ---
const featureData = [
  {
    icon: ArrowPathIcon,
    title: "Regular Updates",
    description:
      "Keep your CMS, plugins, themes, and dependencies updated to prevent security vulnerabilities and ensure compatibility.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Monitoring",
    description:
      "24/7 security monitoring with malware scanning, vulnerability assessments, and immediate threat response.",
  },
  {
    icon: CircleStackIcon,
    title: "Automated Backups",
    description:
      "Daily or weekly backups stored securely off-site, with easy one-click restoration when needed.",
  },
  {
    icon: ChartBarIcon,
    title: "Performance Optimization",
    description:
      "Regular performance checks and optimizations to maintain fast loading speeds and smooth user experience.",
  },
  {
    icon: LockClosedIcon,
    title: "SSL Management",
    description:
      "SSL certificate installation, renewal, and configuration to keep your site secure and maintain HTTPS status.",
  },
  {
    icon: BoltIcon,
    title: "Uptime Monitoring",
    description:
      "Instant alerts if your website goes down, with rapid response to minimize downtime and business impact.",
  },
];


// --- 1. DEFINING THE SPECIFIC PROCESS DATA ---
const PROCESS = [
     {
    id: 1,
    name: "Audit",
    icon: WrenchScrewdriverIcon,
    title: "Initial System Audit",
    description:
      "Bantern starts by analyzing website health, identifying vulnerabilities, outdated components, and performance bottlenecks.",
    details: [
      "Full website health check",
      "Outdated plugin/theme detection",
      "Security vulnerability assessment",
      "Performance & uptime analysis",
    ],
  },
  {
    id: 2,
    name: "Security",
    icon: ShieldCheckIcon,
    title: "Security Hardening",
    description:
      "Bantern secures websites by implementing protective layers and industry best practices to safeguard data and prevent attacks.",
    details: [
      "Malware & threat scanning",
      "Firewall and security rules setup",
      "Brute-force protection",
      "User-role & permission tightening",
    ],
  },
  {
    id: 3,
    name: "Updates",
    icon: ArrowPathIcon,
    title: "Updates & Patch Management",
    description:
      "Bantern manages updates and patches to ensure stability, compatibility, and long-term reliability.",
    details: [
      "CMS & platform updates",
      "Plugin & dependency upgrades",
      "Theme & UI updates",
      "Core patch installations",
    ],
  },
  {
    id: 4,
    name: "Backup",
    icon: CircleStackIcon,
    title: "Backup & Restore Setup",
    description:
      "Bantern configures automated backup systems and verifies restore procedures to keep data safe and recoverable.",
    details: [
      "Daily/weekly automated backups",
      "Off-site storage configuration",
      "Backup verification & health check",
      "One-click restore setup",
    ],
  },
  {
    id: 5,
    name: "Optimization",
    icon: ChartBarIcon,
    title: "Performance Optimization",
    description:
      "Bantern continuously improves loading speed, responsiveness, and overall user experience with targeted optimizations.",
    details: [
      "Speed & caching improvements",
      "Image & asset optimization",
      "Database cleanup & tuning",
      "Code efficiency refinements",
    ],
  },
  {
    id: 6,
    name: "Monitoring",
    icon: BellAlertIcon,
    title: "Monitoring & Continuous Protection",
    description:
      "Bantern actively monitors websites and responds promptly to downtime, security threats, and performance issues.",
    details: [
      "24/7 uptime monitoring",
      "Real-time threat alerts",
      "Error & log monitoring",
      "Immediate issue response",
    ],
  },
];
// --- END OF PROCESS DATA ---

// --- Data for the FAQ items ---
const faqData = [
  {
    id: 1,
    question: "Why do I need ongoing website maintenance?",
    answer: "Websites require regular care to remain secure, compatible, and performant. Ongoing maintenance prevents breaches, reduces downtime, and ensures the site continues to meet user expectations and business objectives.",
  },
  {
    id: 2,
    question: "How often are updates performed?",
    answer: "Bantern performs automated system checks daily. Critical security patches are applied immediately, major updates are scheduled weekly, and routine maintenance occurs monthly. All updates are tested in staging before deployment to production.",
  },
  {
    id: 3,
    question: "What happens if my website is compromised?",
    answer: "Bantern provides emergency recovery services including isolating and cleaning infections, restoring from clean backups when necessary, patching vulnerabilities, and implementing additional protections to prevent recurrence.",
  },
  {
    id: 4,
    question: "Do you provide reports on maintenance activities?",
    answer: "Yes. Bantern delivers regular reports summarizing maintenance actions, security scans, backup status, and performance metrics. Premium plans include more frequent reporting and real-time alerts for critical incidents.",
  },
  {
    id: 5,
    question: "Can I cancel maintenance services anytime?",
    answer: "Yes. Bantern offers flexible monthly billing with no long-term commitments. Clients may cancel at any time, though continued basic updates are recommended to maintain security.",
  },
];



const Maintenance = () => {

    const pathItems = [
        { name: "Services", href: "/services" },
        { name: "Website maintenance", href: "/services/maintenance" },
    ];
    
    // Props for the reusable Process component
    const processDataProps = {
        title: "Our Maintenance Methodology",
        subtitle: "Bantern follows a structured approach to ensure websites remain secure, updated, and high-performing.",
    };

    return (
        <div className="flex flex-col gap-16">

            <Breadcrumbs items={pathItems} /> 

            <SubpageHero
                category="Service"
                title="Website Maintenance & Security"
                subtitle="Regular updates, backups, and monitoring to keep websites secure, up to date, and performing at their best."
            />
              
            <ContentBlockImage
                title="Protect Your Investment. Stay Secure. Perform Better"
                paragraph1="A website is a critical business asset that requires continuous attention to remain secure, fast, and reliable. Bantern’s Website Maintenance & Security services cover updates, bug fixes, malware protection, emergency recovery, and performance tuning. Tailored maintenance plans are available custom platforms to ensure protection against vulnerabilities, downtime, and data loss. With automated backups, uptime monitoring, and expert support, websites remain stable and secure."
                paragraph2="Whether the platform is a corporate site, blog, or e-commerce store, Bantern ensures it stays up to date, resilient to attacks, and optimized for performance—preserving traffic, trust, and revenue."
                ctaText="Get Protected"
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
                headline="Ready to Secure Your Website?"
                subtext="Protect your online presence with professional maintenance and security services from Bantern."
                ctaText="Get Protected"
            />
           

        </div>
    );
};

export default Maintenance;
