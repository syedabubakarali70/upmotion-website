import HeroSectionContainer from "../common/HeroSection";

const heading = "Our Services";
const content =
  "At Upmotion Tech, we offer a comprehensive suite of services designed to meet your unique business needs. Our expert team is committed to delivering innovative solutions that drive growth and efficiency. From cutting-edge web and app development to strategic IT outsourcing and effective SEO, we ensure your digital presence is impactful and results-driven. Explore our core services below and discover how we can partner with you to achieve your goals.";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
