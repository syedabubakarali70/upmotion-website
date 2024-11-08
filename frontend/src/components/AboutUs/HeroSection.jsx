import HeroSectionContainer from "../common/HeroSection";

const heading = "Who We Are";
const content =
  "Upmotion Tech: a passionate team delivering innovative software solutions in web development, IT outsourcing, and SEO—empowering businesses to thrive in the digital era.";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
