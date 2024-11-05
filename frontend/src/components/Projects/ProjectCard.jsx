import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { fadeUpVariants } from "../animations/variants";
import { staggerParentValues } from "../animations/StaggerParent";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";

const MotionGrid = motion.create(Grid);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProjectCard = ({ heading, description }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MotionGrid
        onClick={handleOpen}
        variants={fadeUpVariants}
        initial="initial"
        whileInView="whileInView"
        whileHover={{ y: -10 }}
        viewport={{ once: staggerParentValues.once }}
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
              boxShadow: "0 0.4rem 7rem #e2e2e233",
              outline: "0.1rem solid rgba(255, 255, 255, 0.288)",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "20rem",
              border: "1px solid white",
            }}
          ></Box>
          <Typography fontWeight={700} variant="h4" textAlign="center">
            {heading}
          </Typography>
        </Paper>
      </MotionGrid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              height: "20rem",
              border: "1px solid white",
            }}
          ></Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

ProjectCard.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectCard;
