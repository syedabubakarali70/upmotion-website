// import HeroSectionContainer from "../common/HeroSection";

import { Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import { FadeLeft, FadeRight, FadeUp } from "../animations";
import { useDelay } from "../../Context/DelayContext";
import ContactUsBtn from "../common/ContactUsBtn";
const duration = 2;
const heading = "Transforming Ideas Into Digital Excellence";
const content =
  "At Upmotion Tech, we deliver custom web and app development, IT outsourcing, and SEO solutions tailored to fuel your business growth. Our team of experts harnesses cutting-edge technology and industry insights to drive impactful results, helping you scale with confidence in an ever-evolving digital landscape.";

const HeroSection = () => {
  const { delay } = useDelay();
  return (
    <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <Stack
          component="section"
          flexDirection={{ mobile: "column", laptop: "row" }}
          pt={{ mobile: "6rem", laptop: 0 }}
          mb={{ mobile: "2rem", laptop: 0 }}
          gap={4}
        >
          <Stack sx={{ flex: 1 }} justifyContent="flex-start" gap={6}>
            <FadeRight
              style={{ width: "100%", zIndex: 5 }}
              extraAnimationProps={{ delay: delay }}
              duration={2}
            >
              <Typography
                variant="h1"
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
                }}
              >
                {heading}
              </Typography>
            </FadeRight>

            <FadeRight
              style={{ width: "100%", zIndex: 5 }}
              duration={2}
              extraAnimationProps={{ delay: delay }}
            >
              <Typography
                variant="body1"
                sx={{
                  mx: "auto",
                }}
              >
                {content}
              </Typography>
            </FadeRight>
          </Stack>
          <Stack sx={{ flex: 1 }} justifyContent={"center"}>
            <FadeLeft
              extraAnimationProps={{ delay: delay }}
              duration={duration}
            >
              {/* <img src="/coding.gif" width={"100%"} /> */}
              <div
                style={{
                  width: "70%",
                  marginInline: "auto",
                  height: 0,
                  paddingBottom: "56%",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://giphy.com/embed/26tn33aiTi1jkl6H6"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  allowFullScreen
                  title="Embedded Giphy"
                ></iframe>
              </div>
              {/* <>
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "100%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/hvEdKpliYKcY0s4Pak"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder={0}
                className="giphy-embed"
                allowFullScreen=""
              />
            </div>
          </> */}
            </FadeLeft>
          </Stack>
        </Stack>
        <Stack pb={{ mobile: "4rem", laptop: 0 }}>
          <FadeUp extraAnimationProps={{ delay: delay }}>
            <ContactUsBtn content="Begin Your Tech Journey" />
          </FadeUp>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default HeroSection;
