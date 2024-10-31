import {
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Rating from "@mui/material/Rating";
import { useTheme } from "@mui/material/styles";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FadeLeft, FadeRight, FadeUp } from "../animations";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const reviews = [
  {
    review:
      "Logicruise is review of the best, hard-working, passionate, and respectful companies you can work with on Fiverr. Their work was exceptional, providing amazing results on a platform they were somewhat unfamiliar with, which utilized the Chrome CEF. Second, the work was done blazing fast, which was unexpected for the amount of work. Third, their prices beat almost everyreview on the market, and for the quality of work, I wouldn't have been surprised if they charged much more. Fourth and final point, Logicruise’s timelines were unbeatable. They wanted to have meetings every day to discuss progress and make revisions as we went, which even I couldn't keep up with. If you need React development, go with Logicruise!",
    rating: 5,
    name: "abdu_sizz",
    place: "Egypt",
  },
  {
    review:
      "Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
    name: "huzaifax",
    rating: 5,
    place: "Canada",
  },
  {
    review:
      "Logicruise is very cooperative and well-behaved company, demonstrating great dedication to the project. They delivered exceptional, high-quality work.",
    name: "t11ger",
    rating: 4.5,
    place: "United Kingdom",
  },
  {
    review:
      "Delivered as per the discussion and recommendations. Absolutely recommended",
    name: "huzaifax",
    rating: 5,
    place: "Canada",
  },
  {
    review:
      "Excellent work, just as I expected. Their dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
    name: "saadmehmood",
    rating: 4,
    place: "Pakistan",
  },
  {
    review:
      "When you work with Logicruise you are working with a group of professionals who ensure they will understand the requirements and make any necessary adjustments to their work to deliver the job as expected. Even though they are new sellers, and sometimes have to discount their services because they are new in Fiverr, I'm sure they will build top ranking quickly. I will come back to them for new jobs. Thank you",
    name: "rad_works",
    rating: 5,
    place: "United States",
  },
  {
    review:
      "Seller did their Best ,very much pleased highly appreciated their efforts and understanding. delivered my project even before deadline, speedy and accurate working.",
    name: "zahreemsyed",
    place: "Australia",
    rating: 5,
  },
  {
    review:
      "Excellent work! Awais worked fast and kept the code in top quality, just like I wanted",
    name: "salman7586",
    rating: 5,
    place: "United Kingdom",
  },
];

function getInitials(name) {
  const names = name.trim().split(" ");
  if (names.length < 2) return names[0][0].toUpperCase();

  const firstInitial = names[0][0].toUpperCase();
  const lastInitial = names[names.length - 1][0].toUpperCase();

  return firstInitial + lastInitial;
}

const Testimonials = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const isTablet = useMediaQuery(theme.breakpoints.between("tablet", "laptop"));

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <PaddingBlock>
      <FadeUp>
        <Stack gap={2} alignItems="center">
          <Typography variant="h2" textAlign="center">
            Success Stories: Hear What Our Clients Have to Say
          </Typography>
          <Stack flexDirection="row" gap={1}>
            <Rating value={4.9} readOnly precision={0.1} />
            <Typography>100+ Client Reviews</Typography>
          </Stack>
          <Swiper
            loop
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            modules={[Navigation, Autoplay]}
            style={{ width: "100%" }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: 4,
                    p: 2,
                    height: 200,
                    overflow: "hidden",
                    justifyContent: "space-between",
                    m: "1px",
                  }}
                >
                  <Stack flexDirection="row" gap={1}>
                    <Rating value={review.rating} readOnly precision={0.5} />
                    <Typography variant="body1" fontWeight={600}>
                      {review.rating}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3, // Limits text to 3 lines
                    }}
                  >
                    {review.review}
                  </Typography>
                  <Stack flexDirection="row" gap={1} alignItems="center">
                    <Stack
                      sx={{
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 16,
                        height: 16,
                        p: 2,
                        backgroundColor:
                          "rgba(var(--palette-primary-mainChannel),0.9)",
                      }}
                    >
                      <Typography color="var(--palette-text-primary)">
                        {getInitials(review.name)}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography>{review.name}</Typography>
                      <Typography
                        variant="body2"
                        color="var(--palette-primary-main)"
                      >
                        {review.position}
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
          <Stack flexDirection="row" gap={1} justifyContent="center">
            <FadeRight>
              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{ border: "1px solid var(--palette-text-primary)" }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </FadeRight>
            <FadeLeft>
              <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{ border: "1px solid var(--palette-text-primary)" }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </FadeLeft>
          </Stack>
        </Stack>
      </FadeUp>
    </PaddingBlock>
  );
};

export default Testimonials;
