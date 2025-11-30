import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const userNumber = "919513276042";
const defaultMessage =
  "Hello, I saw your website and I'm interested in your services.";
const whatsappUrl = `https://wa.me/${userNumber}?text=${encodeURIComponent(
  defaultMessage
)}`;

const WhatsAppCTA = () => {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 1.5 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      animatePulse={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 20px 0px hsl(var(--primary) / 0.3)",
          "0 0 30px 10px hsl(var(--primary) / 0.5)",
          "0 0 20px 0px hsl(var(--primary) / 0.3)",
        ],
      }}
      transitionPulse={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        fixed bottom-6 right-6 z-50 
        w-16 h-16 rounded-full 
        bg-primary text-primary-foreground 
        flex items-center justify-center 
        shadow-lg
      "
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppCTA;
