import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion, useAnimation } from "framer-motion";
import { fadeUpVariants } from "../animations/variants";
const ValueCard = ({ value }) => {
  const controls = useAnimation();
  return (
    <Grid size={1} sx={{ p: "1px" }}>
      <motion.div
        style={{ height: "100%" }}
        variants={fadeUpVariants}
        whileInView="whileInView"
        onAnimationComplete={() => {
          console.log("completed");
          controls.start("whileInView");
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderRadius: 4,
            overflowY: "hidden",
            height: "100%",
          }}
        >
          {/* <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={controls}
            transition={{ staggerChildren: 1, delayChildren: 2 }}
          > */}
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            whileInView={controls}
          >
            <img src={value.icon} />
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            whileInView={controls}
            transition={{ delay: 2 }}
          >
            <Typography
              variant="h4"
              fontWeight={500}
              fontFamily="Poppins-Medium"
            >
              {value.heading}
            </Typography>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            whileInView={controls}
            transition={{ delay: 4 }}
          >
            <Typography variant="body2" fontFamily="Poppins-Medium">
              {value.description}
            </Typography>
          </motion.div>
          {/* </motion.div> */}
        </Paper>
      </motion.div>
    </Grid>
  );
};

export default ValueCard;
