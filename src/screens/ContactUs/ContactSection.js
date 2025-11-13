/* src/components/ContactSection.jsx */

import { motion } from "framer-motion";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  UserIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import React from "react";

// --- Animation Variants ---
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

// --- Reusable Sub-Component for Info Items ---
const ContactInfoItem = ({ icon: Icon, title, value, href }) => (
  <motion.div variants={itemVariants} className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-card/50 border border-border/50 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {value}
      </a>
    </div>
  </motion.div>
);

// --- Reusable Sub-Component for Form Fields ---
const FormField = ({ icon: Icon, label, type, placeholder, name }) => (
  <div className="relative">
    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4" />
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="
        w-full bg-muted/50 border border-border/50 rounded-lg 
        p-3 pl-4 
        text-foreground placeholder:text-muted-foreground/50
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
      "
    />
  </div>
);

// --- Main Contact Section Component ---
const ContactSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Animate on page load
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8"
      id="contact-form" // <-- 1. UPDATED: Added ID for anchor link
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        
        {/* === Left Column: Info === */}
        <div className="flex flex-col gap-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something Amazing <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Fill out the form and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="space-y-6">
            <ContactInfoItem 
              icon={EnvelopeIcon}
              title="Email"
              value="hello@bantern.com"
              href="mailto:hello@bantern.com"
            />
            <ContactInfoItem 
              icon={PhoneIcon}
              title="Phone"
              value="+1 (234) 567-890"
              href="tel:+1234567890"
            />
            <ContactInfoItem 
              icon={MapPinIcon}
              title="Location"
              value="Remote / Global"
              href="#"
            />
          </div>
        </div>
        
        {/* === Right Column: Form Card === */}
        <motion.div variants={itemVariants}>
          <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-2">
              Let's Get <span className="text-primary">Started</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us a bit about yourself
            </p>

            <form action="#" className="space-y-6">
              <FormField 
                icon={UserIcon} 
                label="Full Name" 
                type="text" 
                placeholder="Enter your full name" 
                name="name" 
              />
              <FormField 
                icon={EnvelopeIcon} 
                label="Email Address" 
                type="email" 
                placeholder="your.email@example.com" 
                name="email" 
              />
              <FormField 
                icon={PhoneIcon} 
                label="Phone Number" 
                type="tel" 
                placeholder="+1 (555) 123-4567" 
                name="phone" 
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full bg-foreground text-background 
                  px-6 py-3 rounded-full 
                  text-base font-medium 
                  flex items-center justify-center group
                  transition-shadow shadow-lg
                "
              >
                Continue
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ContactSection;