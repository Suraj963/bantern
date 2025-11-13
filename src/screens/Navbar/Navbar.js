/* src/components/Navbar.jsx */

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  BoltIcon,
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// --- Data for the dropdown (No change) ---
const servicesDropdownItems = [
  {
    title: "Website Design",
    description: "Custom, responsive web designs that reflect your brand identity.",
    icon: PaintBrushIcon,
    href: "/services/website-design",
  },
  {
    title: "Website Development",
    description: "Full-stack web development using modern technologies.",
    icon: CodeBracketIcon,
    href: "/services/website-development",
  },
  {
    title: "Mobile App Development",
    description: "High-performance mobile apps built for iOS and Android using modern native and cross-platform technologies.",
    icon: DevicePhoneMobileIcon,
    href: "/services/app-development",
  },
  {
    title: "AI & Automation",
    description: "Integrate intelligent AI models and automation to boost efficiency.",
    icon: CpuChipIcon,
    href: "/services/ai-automation",
  },
  {
    title: "Bug Fixing & Responsiveness",
    description: "Fix layout, code, and issues while ensuring your site is mobile-friendly.",
    icon: WrenchScrewdriverIcon,
    href: "/services/bug-fixing",
  },
  {
    title: "Website Maintenance & Security",
    description: "Regular updates and monitoring to keep your website secure.",
    icon: ShieldCheckIcon,
    href: "/services/maintenance",
  },
  {
    title: "Speed Optimization & SEO",
    description: "Improve website speed, Core Web Vitals, and search visibility.",
    icon: SparklesIcon,
    href: "/services/speed-seo",
  },
];

// --- Dropdown Item Sub-component (No change) ---
const DropdownItem = ({ item, onClick = () => {} }) => (
  <Link
    to={item.href}
    className="group flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-muted"
    onClick={onClick}
  >
    <div className="bg-muted/50 border border-border/50 p-2 rounded-lg group-hover:bg-primary group-hover:border-primary">
      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  </Link>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // === STYLING FUNCTIONS (No change) ===
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "text-primary font-medium px-3 py-2 rounded-md text-sm transition-colors"
      : "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors";
  };

  const getMobileNavLinkClass = ({ isActive }) => {
    return isActive
      ? "block px-3 py-2 rounded-md text-base font-medium bg-foreground text-background"
      : "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors";
  };

  const ctaButtonClass =
    " bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors";
  
  const mobileCtaButtonClass =
    "block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-foreground text-background hover:bg-primary/90 transition-colors mt-2";

  const servicesLinkClass =
    "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer";

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };
  
  const mobileDropdownVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0 },
    visible: { height: "auto", opacity: 1, marginTop: "4px" },
    exit: { height: 0, opacity: 0, marginTop: 0 },
  };


  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* --- UPDATED: 'nav' is now relative --- */}
      <nav 
        className="relative w-full max-w-6xl mx-auto bg-card/80 backdrop-blur-md rounded-full shadow-2xl border border-border/50"
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          
          {/* Logo (No change) */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <span className="bg-primary p-2 rounded-full">
                <BoltIcon className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-foreground text-2xl font-bold">
                Bantern
              </span>
            </Link>
          </div>

          {/* --- UPDATED: Desktop Navigation Links (Center) --- */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
            
            {/* --- Services Button (no dropdown here) --- */}
            <div 
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <button className={servicesLinkClass}>
                Services
                <ChevronDownIcon 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
            {/* --- END: Services Button --- */}

            <NavLink to="/portfolio" className={getNavLinkClass}>
              Portfolio
            </NavLink>
          </div>

          {/* Desktop Auth Section (Right) (No change) */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/" className={ctaButtonClass}>
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button (No change) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* --- 1. UPDATED: Desktop Dropdown moved here --- */}
        {/* This is now positioned relative to the whole nav bar */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[40rem] z-50"
              onMouseEnter={() => setIsServicesOpen(true)} // Keep open on hover
            >
              <div className="bg-card border border-border/50 rounded-2xl shadow-2xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  {servicesDropdownItems.map((item) => (
                    <DropdownItem key={item.title} item={item} />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Need a custom solution?
                  </p>
                  <Link 
                    to="/services" 
                    className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-1"
                  >
                    View All Services
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* --- END: Desktop Dropdown --- */}


        {/* --- 2. UPDATED: Mobile Menu (No layout changes) --- */}
        {/* The animation logic is now cleaner */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-card/90 backdrop-blur-md absolute top-20 left-0 right-0 mx-auto max-w-lg rounded-xl shadow-lg border border-border overflow-hidden" 
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to="/" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)} end>
                  Home
                </NavLink>
                <NavLink to="/about" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
                
                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`${getMobileNavLinkClass({ isActive: false })} w-full flex justify-between items-center`}
                  >
                    Services
                    <ChevronDownIcon 
                      className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pl-4 ml-3 border-l-2 border-primary/20 overflow-hidden"
                      >
                        {servicesDropdownItems.map(item => (
                          <NavLink 
                            key={item.title} 
                            to={item.href} 
                            className={getMobileNavLinkClass}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </NavLink>
                        ))}
                        <NavLink 
                          to="/services" 
                          className={getMobileNavLinkClass}
                          onClick={() => setIsOpen(false)}
                        >
                          All Services
                        </NavLink>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink to="/portfolio" className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>
                  Portfolio
                </NavLink>
                
                <NavLink to="/" className={mobileCtaButtonClass} onClick={() => setIsOpen(false)}>
                  Get Started
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;