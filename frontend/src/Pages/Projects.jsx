import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/Projects/HeroSection";
import Projects from "../components/Projects/Projects";
const ProjectsPage = () => {
  const context = useOutletContext();

  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && (
        <>
          <Projects />
        </>
      )}
    </>
  );
};

export default ProjectsPage;
