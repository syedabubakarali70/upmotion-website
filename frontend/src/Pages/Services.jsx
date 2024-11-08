import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/Services/HeroSection";
import Services from "../components/Services/Services";
const ServicesPage = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <Services />
        </>
      )}
    </>
  );
};

export default ServicesPage;
