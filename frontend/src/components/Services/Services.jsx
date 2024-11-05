import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PaddingBlock from "../common/PaddingBlock";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../animations/variants";
import { staggerParentValues } from "../animations/StaggerParent";
import GridContainer from "../common/GridContainer";

const MotionGrid = motion.create(Grid);

// const baseObject = {
//   icon: <UpmotionLogo />,
//   heading: "Web Development",
//   content:
//     "Build dynamic, user-centric websites that serve as powerful digital hubs for your brand.",
// };

// const headings = [
//   "Web Development",
//   "App Development",
//   "UI/UX Design",
//   "Digital Marketing",
//   "SEO Optimization",
//   "E-commerce Solutions",
// ];

// const contents = [
//   "Build dynamic, user-centric websites that serve as powerful digital hubs for your brand.",
//   "Develop engaging and high-performance mobile applications tailored to your business needs.",
//   "Craft intuitive and visually appealing designs to enhance user experience and engagement.",
//   "Create data-driven strategies to boost your online presence and connect with your audience.",
//   "Enhance website visibility on search engines to drive organic traffic and improve rankings.",
//   "Build and optimize e-commerce platforms that provide seamless shopping experiences for users.",
// ];

// Generate the array by mapping through headings and contents
// const services = headings.map((heading, index) => ({
//   ...baseObject,
//   heading: heading,
//   content: contents[index],
// }));

const services = [
  {
    title: "Software Development",
    img: "/services/webdev.svg",
    desc: "Unlock your vision with our tailored software development services. Whether you need a robust web application or a mobile solution, our expert developers leverage the latest technologies to create custom software that not only meets your business needs but also scales with your growth. With a focus on quality and user experience, we transform your ideas into high-performing, innovative solutions that drive results.",
  },
  {
    title: "No-Code Development",
    img: "/services/no-code.png",
    desc: "Empower your team with our no-code development services! We simplify the app creation process, enabling you to build powerful applications without writing a single line of code. With intuitive drag-and-drop interfaces and a wealth of pre-built templates, we help you accelerate your digital transformation. Say goodbye to lengthy development cycles and helloto rapid prototyping and deployment, all while keeping control over your project.",
  },
  {
    title: "SEO",
    img: "/services/seo.png",
    desc: "Elevate your online presence with our expert SEO services. In today’s digital landscape, visibility is everything. Our tailored strategies combine keyword optimization, technical SEO, and high-quality content to improve your search engine rankings and attract the right audience. Let us help you turn clicks into customers by enhancing your website’s performance and driving organic traffic that converts.",
  },
  {
    title: "IT Outsourcing",
    img: "/services/outsourcing.png",
    desc: "Focus on your core business while we take care of your IT needs! Our IT outsourcing services provide you with access to a dedicated team of experts, ready to handle everything from infrastructure management to software support. With our cost-effective solutions, you can enhance productivity, reduce operational costs, and ensure that your technology runs smoothly. Partner with us to gain flexibility and expertise without the overhead.",
  },
  {
    title: "Emerging Technologies",
    img: "/services/emerging-tech.png",
    desc: "Stay ahead of the curve with our insights into emerging technologies! From AI and machine learning to blockchain and IoT, we help you harness the power of the latest innovations to drive efficiency and create new opportunities. Our team is dedicated to exploring how these technologies can transform your business processes, enhance customer experiences, and give you a competitive edge in a rapidly evolving landscape.",
  },
  {
    title: "Advisory",
    img: "/services/advisory.png",
    desc: "Navigate the complexities of the IT landscape with our advisory services. Our experienced consultants work closely with you to understand your unique challenges and goals. We provide strategic guidance, best practices, and actionable insights that empower you to make informed decisions. Whether you’re looking to optimize your IT infrastructure or explore new technologies, we’re here to help you chart a path to success.",
  },
];

const Services = () => {
  return (
    <PaddingBlock>
      <Typography variant="h2" textAlign="center" mb={2}>
        Featured Services
      </Typography>
      <Typography variant="body1" textAlign="center" mb={4}>
        Upmotion Technologies delivers specialised services designed to enhance
        your digital transformation journey.
      </Typography>
      <GridContainer>
        {services.map(service => (
          <MotionGrid
            variants={fadeUpVariants}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ y: -10 }}
            viewport={{ once: staggerParentValues.once }}
            key={service.title}
            size={1}
          >
            <Paper
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                gap: 2,
                p: { mobile: 2, laptop: 4 },
                borderRadius: 4,
                ":hover": {
                  boxShadow: "0 0.4rem 3rem #aaa",
                  outline: "0.1rem solid rgba(255, 255, 255, 0.288)",
                },
              }}
            >
              <Box
                sx={{
                  width: { mobile: "40px", laptop: "64px" },
                  height: { mobile: "40px", laptop: "64px" },
                  backgroundColor: "var(--palette-green-main)",
                  mask: `url(${service.img}) no-repeat center / contain`,
                  WebkitMask: `url(${service.img}) no-repeat center / contain`,
                }}
              />
              <Typography fontWeight={700} variant="h4">
                {service.title}
              </Typography>
              <Typography variant="body2" color="var(--palette-text-secondary)">
                {service.desc}
              </Typography>
            </Paper>
          </MotionGrid>
        ))}
      </GridContainer>
    </PaddingBlock>
  );
};

export default Services;
