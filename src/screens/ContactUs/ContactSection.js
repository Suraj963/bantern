import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  ArrowRightIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkyawoe";

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

const ContactInfoItem = ({ icon: Icon, title, value, href }) => (
  <motion.div variants={itemVariants} className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-card/50 border border-border/50 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {value}
      </a>
    </div>
  </motion.div>
);

const FormField = ({
  icon: Icon,
  label,
  type,
  placeholder,
  name,
  required = false,
}) => (
  <div className="relative">
    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4" />
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="
        w-full bg-muted/50 border border-border/50 rounded-lg 
        p-3 pl-4 
        text-foreground placeholder:text-muted-foreground/50
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    />
  </div>
);

const FormTextArea = ({
  icon: Icon,
  label,
  placeholder,
  name,
  required = false,
}) => (
  <div className="relative">
    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4" />
      {label}
    </label>
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      rows="4"
      className="
        w-full bg-muted/50 border border-border/50 rounded-lg 
        p-3 pl-4 
        text-foreground placeholder:text-muted-foreground/50
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
        disabled:opacity-50 disabled:cursor-not-allowed resize-none
      "
    />
  </div>
);

const ContactSection = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = new FormData(e.target);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setStatus("success");
        setTimeout(() => navigate("/thank-you"), 1400);
      } else {
        setStatus("error");
        setError(data?.error || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setError(err.message || "Network error");
    }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-screen-xl mx-auto p-4 md:p-8"
      id="contact-form"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        <div className="flex flex-col gap-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let’s Create a High-Impact Digital Experience for Your{" "}
              <span className="text-primary">Business</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We’re here to help you bring your project to life. Share your
              requirements, and our team will get back to you with a clear next
              step and tailored recommendations.
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

        <motion.div variants={itemVariants}>
          <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-2">
              Let's Get <span className="text-primary">Started</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us a bit about yourself
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="_subject"
                value="New Contact Inquiry from Bantern Site"
              />
              <input
                type="hidden"
                name="source"
                value="bantern-contact-section"
              />

              <FormField
                icon={UserIcon}
                label="Full Name"
                type="text"
                name="name"
                required={true}
                placeholder="Enter your full name"
              />
              <FormField
                icon={EnvelopeIcon}
                label="Email Address"
                type="email"
                name="email"
                required={true}
                placeholder="your.email@example.com"
              />
              <FormField
                icon={PhoneIcon}
                label="Phone Number"
                type="tel"
                name="phone"
                required={true}
                placeholder="+1 (555) 123-4567"
              />

              <FormTextArea
                icon={ChatBubbleBottomCenterTextIcon}
                label="Message"
                name="message"
                required={true}
                placeholder="How can we help you?"
              />

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={
                  status === "idle"
                    ? {
                        scale: 1.05,
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                      }
                    : {}
                }
                whileTap={status === "idle" ? { scale: 0.95 } : {}}
                className={`
                  w-full px-6 py-3 rounded-full 
                  text-base font-medium 
                  flex items-center justify-center group
                  transition-all shadow-lg
                  ${
                    status === "sending"
                      ? "bg-muted text-muted-foreground cursor-wait"
                      : "bg-foreground text-background"
                  }
                  ${status === "success" ? "bg-green-600 text-white" : ""}
                `}
              >
                {status === "idle" && (
                  <>
                    Continue
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </motion.button>

              <div className="text-center text-sm">
                {status === "success" && (
                  <p className="text-green-500">Redirecting you shortly...</p>
                )}
                {status === "error" && (
                  <p className="text-red-500">Error: {error}</p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
