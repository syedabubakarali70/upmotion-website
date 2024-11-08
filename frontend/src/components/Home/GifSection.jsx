import { Box, Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    number: "01",
    heading: "Participation",
    content:
      "Join tight-knit communities around your favorite creators, thoughtleaders, products, and experiences.",
  },
  {
    number: "02",
    heading: "Distribution",
    content:
      "Sell digital products and amplify your reach through a new network typology. Manage product fulfillment with off-chain compute.",
  },
  {
    number: "03",
    heading: "Revenue-Sharing",
    content:
      "Split royalties amongst thousands of users and seamlessly route payments across networks.",
  },
  {
    number: "04",
    heading: "Ownership",
    content:
      "Sub-license your work and set your own terms around price, access, availability, and licensing. Manage rights with transparent, on-chain transactions across multiple blockchains.",
  },
];

const GifSection = () => {
  const containerRef = useRef(null);
  const [isParentInView, setIsParentInView] = useState(false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Check if the container is fully visible in the viewport
    setIsParentInView(rect.top <= 0 && rect.bottom >= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <PaddingBlock>
      <Box ref={containerRef} position="relative" p={3} height={"200vh"}>
        <Stack
          flexDirection={{ mobile: "column", laptop: "row" }}
          maxHeight="100vh"
          position="sticky"
          top={0}
        >
          <Stack
            sx={{
              height: { mobile: "50vh", laptop: "100vh" },
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img src="/section/NTHO.gif" alt="" />
          </Stack>
          <Stack
            sx={{
              overflowY: isParentInView ? "scroll" : "hidden", // Lock until full view
              scrollbarWidth: "none",
              scrollSnapType: "y mandatory",
            }}
            flexDirection={{ mobile: "row", laptop: "column" }}
            width="100%"
            minHeight="100%"
          >
            {sections.map(section => (
              <Stack
                key={section.number}
                minWidth="100%"
                minHeight="100%"
                justifyContent="center"
                sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
                gap={3}
              >
                <Typography variant="h1">{section.number}</Typography>
                <Typography variant="h1">{section.heading}</Typography>
                <Typography>{section.content}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </PaddingBlock>
  );
};

export default GifSection;
