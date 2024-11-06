import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/AboutUs/HeroSection";
import Values from "../components/AboutUs/Values";
import Testimonials from "../components/AboutUs/Testimonials";

const AboutUs = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <Values />
          <Testimonials />
        </>
      )}
    </>
  );
};

export default AboutUs;
