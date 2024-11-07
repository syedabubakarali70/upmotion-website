import { useOutletContext } from "react-router-dom";
import DiscoverSection from "../components/Home/DiscoverSection";
import HeroSection from "../components/Home/HeroSection";
import Services from "../components/Services/Services";
import Team from "../components/Home/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import GifSection from "../components/Home/GifSection";

const Home = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <DiscoverSection />
          <GifSection />
          <Services />
          {/* <Team /> */}
          <Testimonials />
        </>
      )}
    </>
  );
};

export default Home;
