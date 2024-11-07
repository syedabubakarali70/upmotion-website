// import HeroSectionContainer from "../common/HeroSection";

import { Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
import { FadeLeft, FadeRight } from "../animations";
import { useDelay } from "../../Context/DelayContext";
// import { FadeLeft, FadeRight, FadeUp } from "../animations";
// import { useDelay } from "../../Context/DelayContext";
// import ContactUsBtn from "../common/ContactUsBtn";
// import { useEffect } from "react";
// const duration = 2;
// const heading = "Transforming Ideas Into Digital Excellence";
// const content =
//   "At Upmotion Tech, we deliver custom web and app development, IT outsourcing, and SEO solutions tailored to fuel your business growth. Our team of experts harnesses cutting-edge technology and industry insights to drive impactful results, helping you scale with confidence in an ever-evolving digital landscape.";

const HeroSection = () => {
  const { delay } = useDelay();
  // useEffect(() => {
  //   const textElement = document.querySelector(".full-width-text");
  //   const parentWidth = textElement.parentElement.offsetWidth;
  //   const textWidth = textElement.offsetWidth;
  //   const scale = parentWidth / (textWidth * 1.5);

  //   textElement.style.transform = `scale(${scale})`;
  // }, []);
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
      <Stack
        minHeight="100vh"
        alignItems="center"
        // justifyContent="center"
        pt={"max(calc(50vh - 200px), 125px)"}
        width={{ mobile: "100%", laptop: "1000px", desktop: "1240px" }}
        mx="auto"
        gap={3}
      >
        <Stack
          flexDirection={{ mobile: "column", laptop: "row" }}
          // alignItems={"flex-end"}
          // sx={{ border: "1px solid white" }}
          gap={8}
          justifyContent={"space-between"}
          width="100%"
        >
          <Stack alignSelf={{ mobile: "flex-start", laptop: "flex-end" }}>
            <FadeRight extraAnimationProps={{ delay: delay }}>
              <Typography variant="h1">Share your dreams.</Typography>
            </FadeRight>
          </Stack>
          <FadeLeft extraAnimationProps={{ delay: delay }}>
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
          // display={{ mobile: "none", laptop: "flex" }}
          display="flex"
          // width={"100%"}
          mt="auto"
          mb="100px"
          alignItems="center"
          justifyContent="center"
        >
          <FadeRight extraAnimationProps={{ delay: delay }}>
            <UpmotionLogo
              height="100%"
              width="12vw"
              // color="var(--palette-primary-light)"
            />
          </FadeRight>
          <FadeLeft extraAnimationProps={{ delay: delay }}>
            <Typography
              variant="h1"
              className="full-width-text "
              fontSize={"12vw"}
            >
              PMOTION
            </Typography>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default HeroSection;
