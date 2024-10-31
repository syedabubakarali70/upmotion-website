import { Stack, Typography } from "@mui/material";
// import RotatingLogo from "../icons/RotatingImage";
import { FadeUp, ScaleIn } from "../animations";
import PropTypes from "prop-types";
import ContactUsBtn from "./ContactUsBtn";
const HeroSection = ({ heading, content }) => {
  return (
    <Stack
      alignItems="center"
      component="section"
      justifyContent="center"
      pt={{ mobile: "4rem", tablet: "10rem" }}
      pb={{ mobile: "4rem", tablet: "11rem" }}
      gap={4}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -200,
        }}
      >
        <RotatingLogo top="10%" right="20%" />
        <RotatingLogo top="50%" right="10%" />
        <RotatingLogo top="10%" left="20%" />
        <RotatingLogo top="80%" right="20%" />
        <RotatingLogo top="50%" left="10%" />
        <RotatingLogo top="80%" left="20%" />
      </Box> */}
      <ScaleIn style={{ width: "100%" }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            fontSize: {
              laptop: "4rem",
            },
            lineHeight: {
              mobile: "3rem",
              laptop: "5rem",
            },
            mx: "auto",
            width: { tablet: "80%" },
          }}
        >
          {heading}
        </Typography>
      </ScaleIn>
      <FadeUp style={{ width: "100%" }}>
        <Typography
          variant="body1"
          sx={{ width: "70%", textAlign: "center", mx: "auto" }}
        >
          {content}
        </Typography>
      </FadeUp>
      <FadeUp>
        <ContactUsBtn content="Begin Your Tech Journey" />
      </FadeUp>
    </Stack>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeroSection;
