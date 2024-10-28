import { Stack, Typography } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Hr from "./Hr";
import { FadeUp, StaggerParent } from "../animations";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../animations/variants";
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
      { name: "sales@pixelettetech.com" },
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
          <FadeUp>
            <Upmotion width={"140px"} />
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
            <StaggerParent>
              <motion.div variants={fadeUpVariants}>
                <Typography fontWeight={700} mb={2}>
                  {mainLinks.name}
                </Typography>
              </motion.div>
              {mainLinks.childLinks.map(link => (
                <motion.div variants={fadeUpVariants} key={link.name}>
                  <Typography
                    mb={1}
                    sx={{ cursor: "pointer" }}
                    color="text-secondary"
                    variant="body2"
                  >
                    {link.name}
                  </Typography>
                </motion.div>
              ))}
            </StaggerParent>
          </Grid>
        ))}
      </Grid>
      <Hr />
      <FadeUp>
        <Stack alignItems="center">
          <Typography variant="body2" textAlign="center">
            Copyright © 2024 Upmotion Technologies | All Rights Reserved
          </Typography>
        </Stack>
      </FadeUp>
    </footer>
  );
};

export default Footer;
