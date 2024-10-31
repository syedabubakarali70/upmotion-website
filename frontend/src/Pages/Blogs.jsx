import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/Blogs/HeroSection";

const Blogs = () => {
  const context = useOutletContext();
  return (
    <>
      {context === "hero-section" && <HeroSection />}
      {context === "rest" && <></>}
    </>
  );
};

export default Blogs;
