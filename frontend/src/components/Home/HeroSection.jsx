import { Stack, Typography } from "@mui/material";
// import RotatingLogo from "../icons/RotatingImage";
import { FadeUp, ScaleIn } from "../animations";

const HeroSection = () => {
  return (
    <Stack
      py={{ mobile: 6, tablet: 8 }}
      alignItems="center"
      component="section"
      gap={2}
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
      <ScaleIn>
        <Typography variant="h1" textAlign="center">
          Upmotion Tech
        </Typography>
      </ScaleIn>
      <FadeUp style={{ width: "100%", opacity: 1 }}>
        <Typography
          variant="body1"
          sx={{ width: "70%", textAlign: "center", mx: "auto" }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          perspiciatis assumenda corporis atque alias? Fugiat, cupiditate
          quisquam vero pariatur aperiam quo quidem obcaecati vitae doloribus
          quis atque incidunt assumenda odit.
        </Typography>
      </FadeUp>
    </Stack>
  );
};

export default HeroSection;
