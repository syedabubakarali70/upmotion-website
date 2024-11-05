import HeroSectionContainer from "../common/HeroSection";

const heading = "Our Success Stories";
const content =
  "At Upmotion Tech, we believe that every project is an opportunity to create lasting impact. Our portfolio showcases the diverse solutions we've crafted for clients across industries, each tailored to meet unique goals and overcome challenges. From transformative web and app development to data-driven IT solutions and SEO campaigns, our projects demonstrate our commitment to innovation, quality, and client success. Take a look at some of our favorite projects and discover how Upmotion Tech can bring your vision to life.";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
