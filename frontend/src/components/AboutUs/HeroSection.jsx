import HeroSectionContainer from "../common/HeroSection";

const heading = "Who We Are";
const content =
  "At Upmotion Tech, we are a passionate team of innovators dedicated to providing top-notch software solutions. Founded on the principles of quality, creativity, and collaboration, we specialize in web and app development, IT outsourcing, and SEO services. Our mission is to empower businesses to thrive in the digital era by leveraging our expertise and cutting-edge technologies. With a client-centric approach, we believe in building lasting partnerships that drive success and inspire growth. Join us on this journey to elevate your business to new heights!";

const HeroSection = () => {
  return <HeroSectionContainer heading={heading} content={content} />;
};

export default HeroSection;
