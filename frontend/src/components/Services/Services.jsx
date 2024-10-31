import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../animations/variants";
import { staggerParentValues } from "../animations/StaggerParent";
import GridContainer from "../common/GridContainer";

const MotionGrid = motion.create(Grid);

const baseObject = {
  icon: <UpmotionLogo />,
  heading: "Web Development",
  content:
    "Build dynamic, user-centric websites that serve as powerful digital hubs for your brand.",
};

const headings = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "E-commerce Solutions",
];

const contents = [
  "Build dynamic, user-centric websites that serve as powerful digital hubs for your brand.",
  "Develop engaging and high-performance mobile applications tailored to your business needs.",
  "Craft intuitive and visually appealing designs to enhance user experience and engagement.",
  "Create data-driven strategies to boost your online presence and connect with your audience.",
  "Enhance website visibility on search engines to drive organic traffic and improve rankings.",
  "Build and optimize e-commerce platforms that provide seamless shopping experiences for users.",
];

// Generate the array by mapping through headings and contents
const services = headings.map((heading, index) => ({
  ...baseObject,
  heading: heading,
  content: contents[index],
}));

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
            key={service.heading}
            size={1}
          >
            <Paper
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                gap: 2,
                p: 2,
                borderRadius: 4,
                ":hover": {
                  boxShadow: "0 0.4rem 7rem #e2e2e233",
                  outline: "0.1rem solid rgba(255, 255, 255, 0.288)",
                },
              }}
            >
              {service.icon}
              <Typography fontWeight={700} variant="h5">
                {service.heading}
              </Typography>
              <Typography>{service.content}</Typography>
            </Paper>
          </MotionGrid>
        ))}
      </GridContainer>
    </PaddingBlock>
  );
};

export default Services;
