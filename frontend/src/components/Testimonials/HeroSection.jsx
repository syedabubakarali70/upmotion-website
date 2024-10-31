import HeroSectionContainer from "../common/HeroSection";

const heading = "What Our Clients Say";
const content =
  "At Upmotion Tech, our clients are at the heart of everything we do. We take pride in delivering exceptional service and solutions that drive real results. Don’t just take our word for it—read what our satisfied clients have to say about their experiences working with us. Their success stories inspire us to continue pushing the boundaries of innovation and excellence.";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
