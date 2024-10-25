import { Stack } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

const Footer = () => {
  return (
    <footer>
      <Stack
        sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
        justifyContent="space-between"
        gap={4}
      >
        <Stack sx={{ width: { mobile: "100%", laptop: "30vw" } }}>
          <Upmotion width={"140px"} />
          <Stack flexDirection="row" gap={2}>
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
        </Stack>
        <Stack></Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
