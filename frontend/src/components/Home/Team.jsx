import { Box, Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import GridContainer from "../common/GridContainer";
import Grid from "@mui/material/Grid2";
import { FadeUp } from "../animations";

export const teamData = [
  {
    image: "/ShadowMale.jpg",
    role: "CEO & Founder",
    name: "Mr. Asif Ashiq Rana",
  },
  {
    image: "/ShadowMale.jpg",
    role: "MD (Global)",
    name: "Humza Chishty",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Eric R. Smithers",
    role: "MD (USA)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Barry Perkins",
    role: "SVP (USA)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Temur Khan",
    role: "Chief Technology Officer",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Mughees Ahmad",
    role: "Head of Business Development",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Gul Afshan",
    role: "Head of Engineering (AI)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Ammar Hanif",
    role: "Head of Engineering (Blockchain)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Ayesha Yaqoob",
    role: "Solutions Architect (Blockchain)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Kainat Mansoor",
    role: "Solutions Architect (AI)",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Muhammad Jawad",
    role: "Head of Project Management",
  },
  {
    image: "/ShadowMale.jpg",
    name: "Ghulam Mustafa",
    role: "Head of Product Design",
  },
];
const Team = () => {
  return (
    <PaddingBlock>
      <Typography variant="h2" textAlign="center" mb={2}>
        Our Team
      </Typography>
      <Typography textAlign="center" mb={3}>
        The people behind the work. <br /> 90% of our team ranks among the
        global top 5 in their fields.
      </Typography>
      <GridContainer desktop={4}>
        {teamData.map((member, index) => (
          <Grid key={index} size={1}>
            <FadeUp style={{ height: "100%" }}>
              <Stack
                gap={1}
                p={2}
                sx={{
                  border: "1px solid black",
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    border: "1px solid black",
                    overflow: "hidden",
                    aspectRatio: 0.8,
                    objectFit: "cover",
                    height: "20rem",
                    filter: "grayScale(100%)",
                    transition: "0.5s ease-in-out",
                    ":hover": {
                      filter: "grayScale(0%)",
                    },
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Typography variant="h4" fontWeight={700}>
                  {member.name}
                </Typography>
                <Typography variant="h6">{member.role}</Typography>
              </Stack>
            </FadeUp>
          </Grid>
        ))}
      </GridContainer>
    </PaddingBlock>
  );
};

export default Team;
