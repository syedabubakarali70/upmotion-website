import { Stack, Typography } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import Hr from "./Hr";
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
      { name: "Pixelette Research" },
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

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // duration: 0.5,
      type: "spring",
    },
  },
};

const Footer = () => {
  return (
    <footer>
      <motion.div variants={variants} initial="initial" animate="animate">
        <Grid
          container
          columns={{ mobile: 1, tablet: 2, laptop: 4 }}
          spacing={4}
        >
          <Grid
            size={1}
            justifyContent={{ mobile: "center", laptop: "flex-start" }}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Upmotion width={"140px"} />
            <Stack flexDirection="row" gap={1}>
              {socialMediaLinks.map(media => (
                <a key={media.name}>
                  <Stack
                    p={1}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius={"50%"}
                    sx={{ backgroundColor: "#fff" }}
                  >
                    {media.icon}
                  </Stack>
                </a>
              ))}
            </Stack>
          </Grid>
          {footerLinks.map(mainLinks => (
            <Grid size={1} key={mainLinks.name}>
              <Typography fontWeight={700} mb={2}>
                {mainLinks.name}
              </Typography>
              {mainLinks.childLinks.map(link => (
                <Typography
                  key={link.name}
                  mb={1}
                  sx={{ cursor: "pointer" }}
                  color="text-secondary"
                  variant="body2"
                >
                  {link.name}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Hr />
        <Stack alignItems="center">
          Copyright © 2024 Upmotion Technologies | All Rights Reserved
        </Stack>
      </motion.div>
    </footer>
  );
};

export default Footer;
