import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/AboutUs/HeroSection";

const AboutUs = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && <></>}
    </>
  );
};

export default AboutUs;
