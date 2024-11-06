import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import RotatingLogo from "../icons/RotatingImage";
import { FadeUp, ScaleIn } from "../animations";
import PropTypes from "prop-types";
import ContactUsBtn from "./ContactUsBtn";
import PaddingBlock from "./PaddingBlock";
import { useTheme } from "@mui/material/styles";
const HeroSection = ({ heading, content }) => {
  const theme = useTheme();
  const aboveMobile = useMediaQuery(theme.breakpoints.up("tablet"));
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
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
            zIndex: 0,
          }}
        >
          <RotatingLogo
            top="10%"
            right={aboveMobile ? "20%" : "20px"}
            direction="anticlockwise"
            duration={20}
          />
          <RotatingLogo
            top="50%"
            right={aboveMobile ? "10%" : "10px"}
            duration={8}
          />
          <RotatingLogo
            top="10%"
            left={aboveMobile ? "20%" : "20px"}
            direction="anticlockwise"
          />
          <RotatingLogo
            top="80%"
            right={aboveMobile ? "20%" : "20px"}
            direction="anticlockwise"
            duration={10}
          />
          <RotatingLogo top="50%" left={aboveMobile ? "10%" : "10px"} />
          <RotatingLogo
            top="80%"
            left={aboveMobile ? "20%" : "20px"}
            duration={15}
          />
        </Box> */}

        <ScaleIn style={{ width: "100%", zIndex: 5 }}>
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

        <FadeUp style={{ width: "100%", zIndex: 5 }}>
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

        <FadeUp style={{ zIndex: 5 }}>
          <ContactUsBtn content="Begin Your Tech Journey" />
        </FadeUp>
      </Stack>
    </PaddingBlock>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeroSection;

{
  /* <motion.div
        variants={{ initial: { y: "100vh" }, animate: { y: 0 } }}
        initial="initial"
        animate="animate"
        transition={{ delay: 2, type: "spring", bounce: 0.1 }}
        style={{ position: "relative", overflow: "hidden" }}
      > */
}
