import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/Testimonials/HeroSection";
import Testimonials from "../components/Testimonials/Testimonials";
const TestimonialsPage = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <Testimonials />
        </>
      )}
    </>
  );
};

export default TestimonialsPage;
