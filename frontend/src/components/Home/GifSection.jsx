import { Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";

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
  return (
    <PaddingBlock>
      <Stack
        flexDirection={{ mobile: "column", laptop: "row" }}
        maxHeight="100vh"
        alignItems="center"
        sx={{ overflowY: "scroll", scrollbarWidth: "none" }}
        py={2}
        // position={"relative"}
      >
        <Stack
          sx={{
            position: "sticky",
            top: 0,
            height: { mobile: "50vh", laptop: "100vh" },
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src="/section/NTHO.gif" alt="" />
        </Stack>
        <Stack
          sx={{ overflow: "scroll", scrollbarWidth: "none" }}
          flexDirection={{ mobile: "row", laptop: "column" }}
          width={"100%"}
          //   maxHeight={"100%"}
          border={"2px solid white"}
        >
          {sections.map(section => (
            <Stack
              key={section.number}
              minWidth={"100%"}
              height="70vh"
              justifyContent="center"
              sx={{ border: "1px solid white" }}
            >
              <Typography variant="h1">{section.number}</Typography>
              <Typography>{section.heading}</Typography>
              <Typography>{section.content}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default GifSection;
