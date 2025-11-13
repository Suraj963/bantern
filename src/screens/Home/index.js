import AnimatedSection from "../../Common/AnimatedSection";
import Process from "../../Common/Process";
import AboutUs from "./AboutUs";
import ContactSection from "./ContactSection";
import CtaVideo from "./CtaVideo";
import FeaturedProjects from "./FeaturedProjects";
import FeaturesGrid from "./FeaturesGrid";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AnimatedSection>
        <FeaturesGrid />
      </AnimatedSection> */}
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <CtaVideo />
      </AnimatedSection>
      {/* <AnimatedSection>
        <Process />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <FeaturedProjects />
      </AnimatedSection> */}
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
};

export default Home;
