import { Box, Paper, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import GridContainer from "../common/GridContainer";
import Grid from "@mui/material/Grid2";
import { FadeUp } from "../animations";
const teamData = [
  {
    image: "/ShadowMale.webp",
    role: "CEO & Founder",
    name: "Mr. Asif Ashiq Rana",
  },
  {
    image: "/ShadowMale.webp",
    role: "MD (Global)",
    name: "Humza Chishty",
  },
  {
    image: "/ShadowMale.webp",
    name: "Eric R. Smithers",
    role: "MD (USA)",
  },
  {
    image: "/ShadowMale.webp",
    name: "Barry Perkins",
    role: "SVP (USA)",
  },
  {
    image: "/ShadowMale.webp",
    name: "Temur Khan",
    role: "Chief Technology Officer",
  },
  {
    image: "/ShadowMale.webp",
    name: "Mughees Ahmad",
    role: "Head of Business Development",
  },
  {
    image: "/ShadowMale.webp",
    name: "Gul Afshan",
    role: "Head of Engineering (AI)",
  },
  {
    image: "/ShadowMale.webp",
    name: "Ammar Hanif",
    role: "Head of Engineering (Blockchain)",
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
          <Grid key={index} size={1} sx={{ p: "1px" }}>
            <FadeUp style={{ height: "100%" }}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
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
                <Typography
                  variant="h5"
                  fontWeight={500}
                  fontFamily="Poppins-Medium"
                >
                  {member.name}
                </Typography>
                <Typography variant="body1" fontFamily="Poppins-Medium">
                  {member.role}
                </Typography>
              </Paper>
            </FadeUp>
          </Grid>
        ))}
      </GridContainer>
    </PaddingBlock>
  );
};

export default Team;
