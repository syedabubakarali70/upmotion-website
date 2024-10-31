import { Stack, Typography } from "@mui/material";
// import RotatingLogo from "../icons/RotatingImage";
import { FadeUp, ScaleIn } from "../animations";
import PropTypes from "prop-types";
import ContactUsBtn from "./ContactUsBtn";
import Container from "./Container";
const HeroSection = ({ heading, content }) => {
  return (
    <Container>
      <Stack
        alignItems="center"
        component="section"
        justifyContent="center"
        pt={{ mobile: "6rem", tablet: "10rem" }}
        pb={{ mobile: "10rem", tablet: "11rem" }}
        minHeight="100vh"
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
                mobile: "3rem",

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
            sx={{
              width: { mobile: "90%", tablet: "70%" },
              textAlign: "center",
              mx: "auto",
            }}
          >
            {content}
          </Typography>
        </FadeUp>
        <FadeUp>
          <ContactUsBtn content="Begin Your Tech Journey" />
        </FadeUp>
      </Stack>
    </Container>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeroSection;
