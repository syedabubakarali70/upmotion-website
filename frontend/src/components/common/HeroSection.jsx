// import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
// import RotatingLogo from "../icons/RotatingImage";
// import { FadeUp, ScaleIn } from "../animations";
// import PropTypes from "prop-types";
// import ContactUsBtn from "./ContactUsBtn";
// import PaddingBlock from "./PaddingBlock";
// import { useTheme } from "@mui/material/styles";
// const HeroSection = ({ heading, content }) => {
//   const theme = useTheme();
//   const aboveMobile = useMediaQuery(theme.breakpoints.up("tablet"));
//   return (
//     <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
//       <Stack
//         alignItems="center"
//         component="section"
//         justifyContent="center"
//         pt={{ mobile: "6rem", tablet: "10rem" }}
//         pb={{ mobile: "10rem", tablet: "11rem" }}
//         minHeight="100vh"
//         gap={4}
//         sx={{ position: "relative", overflow: "hidden" }}
//       >
//         {/* <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 0,
//           }}
//         >
//           <RotatingLogo
//             top="10%"
//             right={aboveMobile ? "20%" : "20px"}
//             direction="anticlockwise"
//             duration={20}
//           />
//           <RotatingLogo
//             top="50%"
//             right={aboveMobile ? "10%" : "10px"}
//             duration={8}
//           />
//           <RotatingLogo
//             top="10%"
//             left={aboveMobile ? "20%" : "20px"}
//             direction="anticlockwise"
//           />
//           <RotatingLogo
//             top="80%"
//             right={aboveMobile ? "20%" : "20px"}
//             direction="anticlockwise"
//             duration={10}
//           />
//           <RotatingLogo top="50%" left={aboveMobile ? "10%" : "10px"} />
//           <RotatingLogo
//             top="80%"
//             left={aboveMobile ? "20%" : "20px"}
//             duration={15}
//           />
//         </Box> */}

//         <ScaleIn style={{ width: "100%", zIndex: 5 }}>
//           <Typography
//             variant="h1"
//             textAlign="center"
//             sx={{
//               fontSize: {
//                 mobile: "3rem",
//                 laptop: "4rem",
//               },
//               lineHeight: {
//                 mobile: "3rem",
//                 laptop: "5rem",
//               },
//               mx: "auto",
//               width: { tablet: "80%" },
//             }}
//           >
//             {heading}
//           </Typography>
//         </ScaleIn>

//         <FadeUp style={{ width: "100%", zIndex: 5 }}>
//           <Typography
//             variant="body1"
//             sx={{
//               width: { mobile: "90%", tablet: "70%" },
//               textAlign: "center",
//               mx: "auto",
//             }}
//           >
//             {content}
//           </Typography>
//         </FadeUp>

//         <FadeUp style={{ zIndex: 5 }}>
//           <ContactUsBtn content="Begin Your Tech Journey" />
//         </FadeUp>
//       </Stack>
//     </PaddingBlock>
//   );
// };

// HeroSection.propTypes = {
//   heading: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

// export default HeroSection;

// {
//   /* <motion.div
//         variants={{ initial: { y: "100vh" }, animate: { y: 0 } }}
//         initial="initial"
//         animate="animate"
//         transition={{ delay: 2, type: "spring", bounce: 0.1 }}
//         style={{ position: "relative", overflow: "hidden" }}
//       > */
// }

import { Box, Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
import { FadeLeft, FadeRight } from "../animations";
import { useDelay } from "../../Context/DelayContext";
import { motion } from "framer-motion";
import { fadeRightVariants } from "../animations/variants";
import ContactUsBtn from "../common/ContactUsBtn";
import PropTypes from "prop-types";
const duration = 1.75;
const bounce = 0.6;
const HeroSection = ({ heading, content }) => {
  const { delay } = useDelay();
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
      <Stack
        minHeight="100vh"
        pt={"max(calc(50vh - 200px), 125px)"}
        mx="auto"
        gap={3}
        sx={{ overflow: "hidden" }}
      >
        <Stack
          flexDirection={{ mobile: "column", laptop: "row" }}
          gap={4}
          justifyContent={"space-between"}
          width="100%"
        >
          <Stack alignSelf={{ mobile: "flex-start", laptop: "flex-end" }}>
            <FadeRight
              extraAnimationProps={{ delay: delay }}
              duration={duration}
            >
              <Typography variant="h1">{heading}</Typography>
            </FadeRight>
          </Stack>
          <FadeLeft extraAnimationProps={{ delay: delay }} duration={duration}>
            <Stack
              flex={1}
              gap={4}
              maxWidth={"500px"}
              alignItems={"flex-start"}
            >
              <Typography variant="h5" fontFamily="Poppins-Medium">
                {content}
              </Typography>
              <ContactUsBtn content="Begin Your Tech Journey" />
            </Stack>
          </FadeLeft>
        </Stack>
        <Stack
          flexDirection="row"
          display="flex"
          mt="auto"
          mb="100px"
          alignItems="flex-end"
        >
          <motion.div
            variants={fadeRightVariants}
            initial="initial"
            animate="whileInView"
            transition={{
              delay: delay,
              duration: duration,
              type: "spring",
              bounce: bounce,
            }}
          >
            <Box
              width={{
                mobile: "17vw",
                desktop: "14rem",
              }}
            >
              <UpmotionLogo height="100%" width="100%" />
            </Box>
          </motion.div>
          <FadeLeft
            extraAnimationProps={{ delay: delay, bounce: bounce }}
            duration={duration}
          >
            <Typography
              variant="h1"
              fontFamily={"Poppins-Medium"}
              fontSize={{
                mobile: "18vw",
                desktop: "14rem",
              }}
            >
              pmotion
            </Typography>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeroSection;
