// src/screens/BugFixing.jsx

import React from 'react';
import SubpageHero from '../../../Common/SubpageHero';
import ContentBlockImage from '../../../Common/ContentBlockImage';
import Breadcrumbs from '../../../Common/Breadcrumbs';
import KeyFeaturesGrid from '../../../Common/KeyFeaturesGrid';
// --- NEW: Import icons needed for the process data array ---
import {
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  BugAntIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Process from '../../../Common/Process';
import AnimatedSection from '../../../Common/AnimatedSection';
import FAQSection from '../../../Common/FAQSection';
import FinalCtaBanner from '../../../Common/FinalCtaBanner';


// --- Feature Data (No Change) ---
const featureData = [
  {
    icon: BugAntIcon,
    title: "Bug Fixing",
    description:
      "Comprehensive debugging to identify and resolve JavaScript errors, functionality issues, and broken features.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Design Fixes",
    description:
      "Ensure websites look and work perfectly on all devices from mobile phones to large desktop screens.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Cross-Browser Compatibility",
    description:
      "Fix rendering issues across Chrome, Firefox, Safari, Edge, and other browsers for consistent user experience.",
  },
  {
    icon: CodeBracketIcon,
    title: "Code Optimization",
    description:
      "Clean up messy code, improve performance, and implement best practices for maintainability.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Patches",
    description:
      "Fix security vulnerabilities and implement protections against common web threats.",
  },
  {
    icon: BoltIcon,
    title: "Performance Improvements",
    description:
      "Optimize loading times, fix rendering issues, and smooth out interactions for better user experience.",
  },
];


// --- 1. DEFINING THE SPECIFIC PROCESS DATA ---
const PROCESS = [
    {
    id: 1,
    name: "Analysis",
    icon: MagnifyingGlassIcon,
    title: "Issue Analysis & Detection",
    description:
      "Identifying bugs, layout issues, and responsiveness problems through deep inspection and debugging.",
    details: [
      "Full website audit",
      "Reproducing reported issues",
      "Debugging console & network errors",
      "Identifying layout and UI breakpoints",
    ],
  },
  {
    id: 2,
    name: "Debugging",
    icon: WrenchScrewdriverIcon,
    title: "Bug Debugging & Fixing",
    description:
      "Resolving broken components, JavaScript errors, layout glitches, and functionality issues.",
    details: [
      "Fixing broken UI components",
      "Correcting JS logic & API errors",
      "Resolving React/Vite/Node issues",
      "Fixing feature-specific breakages",
    ],
  },
  {
    id: 3,
    name: "Optimization",
    icon: AdjustmentsHorizontalIcon,
    title: "Code Cleanup & Optimization",
    description:
      "Improving overall code quality, structure, and performance for better maintainability.",
    details: [
      "Refactoring messy code",
      "Removing unused components",
      "Improving performance bottlenecks",
      "Optimizing scripts & assets",
    ],
  },
  {
    id: 4,
    name: "Responsiveness",
    icon: DevicePhoneMobileIcon,
    title: "Mobile & Tablet Responsiveness",
    description:
      "Ensuring layouts work perfectly on all screen sizes with pixel-perfect responsiveness.",
    details: [
      "Fixing mobile layout issues",
      "Improving tablet breakpoints",
      "Tailwind/Media query adjustments",
      "Flexible grids & spacing fixes",
    ],
  },
  {
    id: 5,
    name: "Compatibility",
    icon: ArrowsRightLeftIcon,
    title: "Cross-Browser Compatibility",
    description:
      "Making sure the website behaves consistently on all major browsers.",
    details: [
      "Testing on Chrome, Firefox, Safari, Edge",
      "Fixing CSS rendering inconsistencies",
      "Polyfills where required",
      "Verifying device/browser combinations",
    ],
  },
  {
    id: 6,
    name: "Validation",
    icon: ShieldCheckIcon,
    title: "Final Testing & Quality Assurance",
    description:
      "Ensuring all bugs are fixed and the website is performing smoothly across all devices.",
    details: [
      "Regression testing",
      "Performance checks",
      "UI/UX validation",
      "Final approval & delivery",
    ],
  },
];
// --- END OF PROCESS DATA ---

// --- Data for the FAQ items ---
const faqData = [
  {
    id: 1,
    question: "How quickly can Bantern fix bugs on my website?",
    answer: "Critical issues are prioritized and often resolved within 24–48 hours. For complex problems, Bantern provides a detailed timeline after an initial assessment and prioritizes fixes by impact and severity.",
  },
  {
    id: 2,
    question: "Does Bantern work with existing codebases?",
    answer: "Yes. Bantern is experienced in working with existing projects across various technology stacks, including WordPress, custom CMS, React, Angular, and more.",
  },
  {
    id: 3,
    question: "How does Bantern test responsiveness fixes?",
    answer: "Bantern uses a combination of real devices, browser developer tools, and cloud testing platforms to validate changes across iOS, Android, and desktop resolutions, ensuring consistent behavior on all screens.",
  },
  {
    id: 4,
    question: "Can Bantern help prevent future bugs?",
    answer: "Yes. Bantern implements testing strategies, automated checks, code reviews, and monitoring to detect issues early and reduce future regressions. All fixes are documented for transparency and maintainability.",
  },
  {
    id: 5,
    question: "What if the issue source is unknown?",
    answer: "Bantern offers comprehensive website audits to locate underlying problems and provides a detailed report with recommended solutions and estimates before any remediation work begins.",
  },
];



const BugFixing = () => {

    const pathItems = [
        { name: "Services", href: "/services" },
        { name: "Bug fixing", href: "/services/bug-fixing" },
    ];
    
    // Props for the reusable Process component
    const processDataProps = {
        title: "Our Design Methodology",
        subtitle: "We follow a structured six-step methodology to ensure every design is successful and scalable.",
    };

    return (
        <div className="flex flex-col gap-16">

            <Breadcrumbs items={pathItems} /> 

            <SubpageHero
                category="Service"
                title="Bug Fixing & Responsiveness"
                subtitle="Fix layout, code, and browser issues while ensuring your site is mobile-friendly and performs flawlessly across all devices."
            />
              
            <ContentBlockImage
                title="Eliminate Bugs. Enhance Performance. Deliver Perfection"
                paragraph1="Website errors and unresponsive layouts can cost traffic, credibility, and conversions. Bantern provides fast, effective bug-fixing and responsiveness services to ensure websites look and function flawlessly across devices, screen sizes, and browsers. Whether the issue is a CSS layout glitch, a JavaScript error, a mobile rendering problem, or cross-browser incompatibility, Bantern diagnoses and resolves problems precisely while preserving existing functionality."
                paragraph2="If users report bugs or poor mobile experience, Bantern can revamp frontend implementations to improve responsiveness and performance. The result is a consistent, reliable user experience that reduces bounce rates and increases engagement."
                ctaText="Get Started"
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
                headline="Ready to Fix Your Website Issues?"
                subtext="Bantern will ensure your website works perfectly across all devices and browsers."
                ctaText="Get Help Now"
            />
           

        </div>
    );
};

export default BugFixing;
