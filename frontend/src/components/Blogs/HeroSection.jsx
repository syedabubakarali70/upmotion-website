import HeroSectionContainer from "../common/HeroSection";

const heading = "Insights and Innovations";
const content =
  "Welcome to the Upmotion Tech blog, your go-to resource for the latest trends, insights, and expert advice in the world of technology and digital solutions. Our team is dedicated to sharing knowledge that empowers businesses and individuals alike. From in-depth tutorials and industry news to thought-provoking articles on software development, SEO strategies, and IT outsourcing, we cover a wide range of topics to keep you informed and inspired. Join us on this journey as we explore the ever-evolving digital landscape and share our passion for innovation.";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
