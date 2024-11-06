import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/AboutUs/HeroSection";
import Values from "../components/AboutUs/Values";

const AboutUs = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <Values />
        </>
      )}
    </>
  );
};

export default AboutUs;
