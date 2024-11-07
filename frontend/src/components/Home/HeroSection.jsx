// import HeroSectionContainer from "../common/HeroSection";

import { Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
import { FadeLeft, FadeRight } from "../animations";
import { useDelay } from "../../Context/DelayContext";
import { motion } from "framer-motion";
import { fadeRightVariants } from "../animations/variants";
const duration = 2;
const HeroSection = () => {
  const { delay } = useDelay();
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
      <Stack
        minHeight="100vh"
        alignItems="center"
        pt={"max(calc(50vh - 200px), 125px)"}
        width={{ mobile: "100%", laptop: "1000px", desktop: "1240px" }}
        mx="auto"
        gap={3}
      >
        <Stack
          flexDirection={{ mobile: "column", laptop: "row" }}
          gap={8}
          justifyContent={"space-between"}
          width="100%"
        >
          <Stack alignSelf={{ mobile: "flex-start", laptop: "flex-end" }}>
            <FadeRight
              extraAnimationProps={{ delay: delay }}
              duration={duration}
            >
              <Typography variant="h1">Share your dreams.</Typography>
            </FadeRight>
          </Stack>
          <FadeLeft extraAnimationProps={{ delay: delay }} duration={duration}>
            <Stack flex={1} gap={8} maxWidth={"500px"}>
              <Typography variant="h5" fontFamily="Poppins-Medium">
                Upmotion is a decentralized network and digital space that
                empowers individuals to connect, create, collaborate and share
                in a multiplayer digital economy.
              </Typography>
              <Typography>Contact Us</Typography>
            </Stack>
          </FadeLeft>
        </Stack>
        <Stack
          flexDirection="row"
          display="flex"
          mt="auto"
          mb="100px"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div
            style={{ paddingTop: "8px" }}
            variants={fadeRightVariants}
            initial="initial"
            animate="whileInView"
            transition={{ delay: delay, duration: duration, type: "spring" }}
          >
            <UpmotionLogo height="100%" width="13vw" />
          </motion.div>
          <FadeLeft extraAnimationProps={{ delay: delay }} duration={duration}>
            <Typography variant="h1" fontSize={"13vw"}>
              PMOTION
            </Typography>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default HeroSection;
