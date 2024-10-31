import Marquee from "react-fast-marquee";
import Upmotion from "../icons/Upmotion";
import { Box, Typography } from "@mui/material";
import { FadeUp } from "../animations";
import PaddingBlock from "../common/PaddingBlock";
import UpmotionLogo from "../icons/UpmotionLogo";
const Partners = () => {
  return (
    <>
      <FadeUp style={{ width: "100%" }}>
        <PaddingBlock>
          <Typography variant="h2" textAlign="center" mb={2}>
            Our Trusted Partners
          </Typography>
          <Marquee autoFill>
            <Box mx={6}>
              <Upmotion />
            </Box>
            <Box mx={6}>
              <UpmotionLogo />
            </Box>
          </Marquee>
        </PaddingBlock>
      </FadeUp>
    </>
  );
};

export default Partners;
