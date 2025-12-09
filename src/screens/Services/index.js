import AnimatedSection from "../../Common/AnimatedSection";
import IndustriesWeServe from "../../Common/IndustriesWeServe";
import ContactSection from "../Home/ContactSection";
import ServiceOfferings from "./ServiceOfferings";
import ServicesHero from "./ServicesHero";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceOfferings />
      <AnimatedSection>
        <IndustriesWeServe />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
};

export default Services;
