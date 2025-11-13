/* src/screens/Contact.jsx */

import React from 'react';
import ContactSection from './ContactSection';
import ContactHero from './ContactHero';

const Contact = () => {
  return (
    <div className="flex flex-col">
       <ContactHero />
      <ContactSection />
      
      {/* You could add other sections here, like an FAQ or a Map */}
    </div>
  );
};

export default Contact;