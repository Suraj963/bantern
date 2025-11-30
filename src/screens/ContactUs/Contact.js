import React from "react";
import ContactSection from "./ContactSection";
import ContactHero from "./ContactHero";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactSection />
    </div>
  );
};

export default Contact;
