import { Paper, Stack, Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import { FadeUp } from "../animations";
import Grid from "@mui/material/Grid2";
import Count from "../common/Count";
const plus = "+";

const stats = [
  {
    value: 200,
    title: "Projects Completed",
    unit: plus,
    duration: 5,
  },
  {
    value: 210,
    title: "Global Team Members",
    unit: plus,
    duration: 5,
  },
  {
    value: 30000,
    title: "Hours in Development",
    unit: plus,
    duration: 10,
  },
  {
    value: 100,
    title: "Happy Clients",
    unit: plus,
    duration: 5,
  },
  {
    value: 97,
    title: "Customer Satisfaction",
    unit: "%",
    duration: 5,
  },
  {
    value: 13,
    title: "Global Locations",
    unit: "",
    duration: 3,
  },
];

const DiscoverSection = () => {
  return (
    <PaddingBlock>
      <Stack textAlign="center" gap={3} mb={4}>
        <FadeUp>
          <Typography variant="h2">Discover Upmotion Technologies</Typography>
        </FadeUp>
        <FadeUp>
          <Typography width={{ tablet: "80%" }} mx={"auto"}>
            At Upmotion Technologies, we pioneer advanced blockchain, AI, and
            metaverse solutions across the globe. Our team of experts craft
            bespoke strategies that empower businesses to excel in a
            digital-first world.
          </Typography>
        </FadeUp>
      </Stack>
      <FadeUp>
        <Paper
          sx={{
            borderRadius: 4,
            p: { mobile: 2, tablet: 4, laptop: 6 },
            display: "flex",
            flexDirection: { mobile: "column", laptop: "row" },
            gap: 3,
            justifyContent: { laptop: "space-between" },
            alignItems: "center",
          }}
        >
          <Stack
            justifyContent="center"
            gap={2}
            alignItems={{ mobile: "center", laptop: "flex-start" }}
          >
            <Typography variant="h3">Snapshot of Success</Typography>
            <Typography>
              With years of global experience and a track record of successful
              projects, our stats are a testament to our excellence in the tech
              industry.
            </Typography>
          </Stack>
          <Grid container columns={2} spacing={1} maxWidth={"430px"}>
            {stats.map((stat, index) => (
              <Grid key={index} size={1} textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight={500}
                  fontFamily="Poppins-Medium"
                >
                  <Stack flexDirection="row" justifyContent="center">
                    <Count value={stat.value} duration={stat.duration} />

                    {stat.unit}
                  </Stack>
                </Typography>
                <Typography variant="subtitle2" sx={{ letterSpacing: 0 }}>
                  {stat.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </FadeUp>
    </PaddingBlock>
  );
};

export default DiscoverSection;
