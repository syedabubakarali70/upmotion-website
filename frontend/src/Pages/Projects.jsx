import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/Projects/HeroSection";
// import Testimonials from "../components/Testimonials/Testimonials";
const ProjectsPage = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && <>{/* <Projects /> */}</>}
    </>
  );
};

export default ProjectsPage;
