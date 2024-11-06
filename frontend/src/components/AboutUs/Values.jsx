import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PaddingBlock from "../common/PaddingBlock";
import { motion } from "framer-motion";
import GridContainer from "../common/GridContainer";
import { fadeUpVariants } from "../animations/variants";
import { StaggerParent } from "../animations";

const values = [
  {
    heading: "Integrity",
    icon: "/values/integrity.png",
    description:
      "We maintain credibility and trust within our office culture, clients, and stakeholders.",
  },
  {
    heading: "Accountability",
    icon: "/values/accountability.png",
    description:
      "All employees are responsible, take complete ownership of their actions, and promote a culture of accountability and trust.",
  },
  {
    heading: "Service",
    icon: "/values/service.png",
    description:
      "We meticulously understand our client’s expectations and then provide tailored solutions to their problems.",
  },
  {
    heading: "Inclusivity",
    icon: "/values/inclusivity.png",
    description:
      "Spadasoft has an inclusive workforce with an emphasis on creating a comfortable environment for them irrespective of gender, caste, race, and religion.",
  },
];

const Values = () => {
  return (
    <PaddingBlock>
      <Typography variant="h2" textAlign="center" mb={2}>
        Our values
      </Typography>
      <Typography textAlign="center" mb={3}>
        The people behind the work. <br /> 90% of our team ranks among the
        global top 5 in their fields.
      </Typography>
      <StaggerParent staggerDuration={0.5}>
        <GridContainer desktop={4}>
          {values.map((value, index) => (
            <Grid key={index} size={1} sx={{ p: "1px" }}>
              <motion.div style={{ height: "100%" }} variants={fadeUpVariants}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    borderRadius: 4,
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <Box>
                    <img src={value.icon} />
                  </Box>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    fontFamily="Poppins-Medium"
                  >
                    {value.heading}
                  </Typography>
                  <Typography variant="body2" fontFamily="Poppins-Medium">
                    {value.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </GridContainer>
      </StaggerParent>
    </PaddingBlock>
  );
};

export default Values;
