import { Button, Stack, Typography } from "@mui/material";
import PaddingBlock from "./PaddingBlock";
import LabelledInput from "./LabelledInput";
import { FadeLeft, FadeRight } from "../animations";
import Paper from "@mui/material/Paper";
import { z } from "zod";
const ContactUs = () => {
  return (
    <PaddingBlock id="contact-us">
      <Stack
        gap={4}
        sx={{
          flexDirection: { mobile: "column", tablet: "row" },
          overflowX: "hidden",
        }}
        width="100%"
        justifyContent="space-between"
      >
        <Stack
          sx={{
            width: { mobile: "100%", tablet: "40%" },
            justifyContent: "center",
          }}
        >
          <FadeRight>
            <Typography variant="h2">Elevate Your Business Today</Typography>
            <Typography>
              Complete the form to collaborate with our specialists and develop
              a customised solution that brings your vision alive.
            </Typography>
          </FadeRight>
        </Stack>
        <Stack sx={{ flex: 1, alignItems: "center" }}>
          <FadeLeft>
            <Paper
              sx={{
                borderRadius: 4,
                width: { mobile: "100%" },
                maxWidth: "600px",
                ml: "auto",
                p: { mobile: 2, tablet: 2, laptop: 4 },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">Book a Discovery Session</Typography>
              <Stack
                flexDirection="row"
                gap={1}
                sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
              >
                <LabelledInput
                  label="Full Name"
                  placeholder="Enter your full name"
                />
                <LabelledInput label="Email" placeholder="Enter your email" />
              </Stack>
              <LabelledInput
                placeholder="Enter Phone Number"
                label="Phone Number"
              />
              <LabelledInput
                multiLine
                placeholder="Enter your message"
                label="Message"
              />
              <Button variant="contained">Submit</Button>
            </Paper>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default ContactUs;
