import ContactUs from "../components/Home/ContactUs";
import DiscoverSection from "../components/Home/DiscoverSection";
import HeroSection from "../components/Home/HeroSection";
import Partners from "../components/Home/Partners";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <DiscoverSection />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
