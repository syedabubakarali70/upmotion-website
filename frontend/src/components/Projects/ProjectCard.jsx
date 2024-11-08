import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

const ProjectCard = ({ heading, description, index }) => {
  return (
    <>
      <Stack
        sx={{
          height: "100%",
          flexDirection: { mobile: "column", laptop: "row" },
          gap: 2,
          p: { mobile: 2, laptop: 4 },
          py: 10,
          backgroundColor: "background.default",
          borderRadius: 4,
          position: "sticky",
          top: index * 100 + 50,
        }}
      >
        <Stack width={{ mobile: "100%", laptop: "50%" }} gap={2}>
          <Typography fontWeight={700} variant="h3">
            {heading}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
        <Box
          sx={{
            width: "50%",
            flex: 1,
            backgroundColor: "var(--palette-background-default)",
            borderRadius: 4,
            border: "1px solid white",
          }}
        ></Box>
      </Stack>
    </>
  );
};

ProjectCard.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
};

export default ProjectCard;
