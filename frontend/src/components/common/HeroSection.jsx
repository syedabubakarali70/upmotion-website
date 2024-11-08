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
