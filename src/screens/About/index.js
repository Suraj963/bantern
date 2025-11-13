import AnimatedSection from "../../Common/AnimatedSection";
import AboutUs from "../Home/AboutUs";
import ContactSection from "../Home/ContactSection";
import FeaturedProjects from "../Home/FeaturedProjects";
import AboutHero from "./AboutHero";
import OurMission from "./OurMission";

const About = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-16 md:gap-24"> */}

        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>

        <AboutHero />

        <AnimatedSection>
          <OurMission />
        </AnimatedSection>

        <AnimatedSection>
          <FeaturedProjects />
        </AnimatedSection>

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>

        {/* You can add your other "About" page components here.
        Remember to wrap them in <AnimatedSection> so they
        fade in as the user scrolls down.
      */}

        {/*
      <AnimatedSection>
        <OurTeam />
      </AnimatedSection>
      */}
      {/* </div> */}
    </>
  );
};

export default About;
