// import HeroSectionContainer from "../common/HeroSection";

import { Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
import { FadeLeft, FadeRight } from "../animations";
import { useDelay } from "../../Context/DelayContext";
import { motion } from "framer-motion";
import { fadeRightVariants } from "../animations/variants";
import ContactUsBtn from "../common/ContactUsBtn";
const duration = 1.75;
const bounce = 0.6;
const HeroSection = () => {
  const { delay } = useDelay();
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
      <Stack
        minHeight="100vh"
        // alignItems="center"
        pt={"max(calc(50vh - 200px), 125px)"}
        // width={{ mobile: "100%", laptop: "1000px", desktop: "1240px" }}
        mx="auto"
        gap={3}
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
              <Typography variant="h1">Share your dreams.</Typography>
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
                Upmotion is a decentralized network and digital space that
                empowers individuals to connect, create, collaborate and share
                in a multiplayer digital economy.
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
          // justifyContent="center"
          // width="100%"
        >
          <motion.div
            // style={{ paddingBottom: 24 }}
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
            <UpmotionLogo height="100%" width="14.5vw" />
          </motion.div>
          <FadeLeft
            extraAnimationProps={{ delay: delay, bounce: bounce }}
            duration={duration}
          >
            <Typography
              variant="h1"
              fontSize={"19vw"}
              // fontFamily={'"Kalam", cursive'}
            >
              pmotion
            </Typography>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default HeroSection;
