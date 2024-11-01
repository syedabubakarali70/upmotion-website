import { Stack, Typography } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Hr from "./Hr";
import { FadeUp, FlipLeft, StaggerParent } from "../animations";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../animations/variants";
import PaddingBlock from "./PaddingBlock";
const socialMediaLinksColor = "var(--palette-background)";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <FacebookIcon sx={{ fill: socialMediaLinksColor }} />,
    link: "https://www.facebook.com/yourpage",
  },
  {
    name: "Twitter",
    icon: <XIcon sx={{ fill: socialMediaLinksColor }} />,
    link: "https://twitter.com/yourprofile",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon sx={{ fill: socialMediaLinksColor }} />,
    link: "https://www.instagram.com/yourprofile",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon sx={{ fill: socialMediaLinksColor }} />,
    link: "https://www.linkedin.com/in/yourprofile",
  },
];
const footerLinks = [
  {
    name: "Quick Links",
    childLinks: [
      { name: "About Us" },
      { name: "Case Studies" },
      { name: "Upmotion Research" },
      { name: "Start-Ups" },
    ],
  },
  {
    name: "Company Info",
    childLinks: [
      { name: "Blogs" },
      { name: "Privacy Policy" },
      { name: "Terms & Conditions" },
      { name: "Cancellation & Refund Policy" },
      { name: "Careers" },
    ],
  },
  {
    name: "Contact Us",
    childLinks: [
      { name: "sales@upmotiontech.com" },
      { name: "+44 2045188226" },
      { name: "+1 7732709034" },
      { name: "71-75 Shelton Street, WC2 H9J, London, UK (Headquarter)" },
      { name: "2335. W. Devon, Ave, IL 6065, Chicago, USA (Headquarter)" },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
        <Grid
          container
          columns={{ mobile: 1, tablet: 2, laptop: 4 }}
          spacing={4}
          borderTop={"1px solid var(--palette-text-secondary)"}
          py={4}
        >
          <Grid
            size={1}
            justifyContent={{ mobile: "center", laptop: "flex-start" }}
          >
            <FlipLeft
              style={{ width: "140px" }}
              type="tween"
              extraAnimationProps={{ ease: "easeInOut" }}
            >
              <Upmotion width={"140px"} />
            </FlipLeft>
            <FadeUp>
              <StaggerParent>
                <Stack flexDirection="row" gap={1}>
                  {socialMediaLinks.map(media => (
                    <a key={media.name}>
                      <motion.div variants={fadeUpVariants}>
                        <Stack
                          p={1}
                          justifyContent="center"
                          alignItems="center"
                          borderRadius={"50%"}
                          sx={{
                            backgroundColor: "#fff",
                            border: "1px solid",
                            borderColor: "var(--palette-primary-dark)",
                          }}
                        >
                          {media.icon}
                        </Stack>
                      </motion.div>
                    </a>
                  ))}
                </Stack>
              </StaggerParent>
            </FadeUp>
          </Grid>
          {footerLinks.map(mainLinks => (
            <Grid size={1} key={mainLinks.name}>
              <FadeUp>
                <Typography fontWeight={700} mb={2}>
                  {mainLinks.name}
                </Typography>
              </FadeUp>
              {mainLinks.childLinks.map(link => (
                <FadeUp
                  key={link.name}
                  amount={0}
                  margin={"1900px 0px 0px 0px"}
                >
                  <Typography
                    mb={1}
                    sx={{ cursor: "pointer" }}
                    color="text-secondary"
                    variant="body2"
                  >
                    {link.name}
                  </Typography>
                </FadeUp>
              ))}
            </Grid>
          ))}
        </Grid>
        <Hr />
        <Stack alignItems="center">
          <Typography variant="body2" textAlign="center" mt={2} mb={4}>
            Copyright © 2024 Upmotion Technologies | All Rights Reserved
          </Typography>
        </Stack>
      </PaddingBlock>
    </footer>
  );
};

export default Footer;
