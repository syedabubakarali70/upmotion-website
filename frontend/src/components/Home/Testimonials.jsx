import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
      "Upmotion delivered a responsive, fast, and modern website that perfectly showcases our brand!",
    rating: 5,
    name: "Alex Morgan",
    position: "Marketing Director, Tech Innovations Co.",
  },
  {
    review:
      "Our mobile app turned out seamless and user-friendly. Upmotion’s attention to detail is impressive!",
    rating: 5,
    name: "Jamie Lee",
    position: "Product Manager, Urban Mobility Ltd.",
  },
  {
    review:
      "We saw a great boost in search rankings thanks to Upmotion’s effective SEO strategies and insights!",
    rating: 4.5,
    name: "Taylor Reed",
    position: "Content Strategist, GreenWorld Media",
  },
  {
    review:
      "Upmotion transformed our e-commerce site – it’s optimized, secure, and visually stunning. Sales are up!",
    rating: 5,
    name: "Morgan Smith",
    position: "E-commerce Lead, FashionFinders Inc.",
  },
  {
    review:
      "The SEO team helped us reach new audiences with higher engagement. Fantastic experience overall!",
    rating: 4,
    name: "Jordan Brown",
    position: "Digital Marketing Specialist, Stellar Solutions",
  },
];

function getInitials(name) {
  const names = name.trim().split(" ");
  if (names.length < 2) return names[0][0].toUpperCase(); // For single name case

  const firstInitial = names[0][0].toUpperCase();
  const lastInitial = names[names.length - 1][0].toUpperCase();

  return firstInitial + lastInitial;
}

const Testimonials = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper instance
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
          <Swiper
            loop
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            modules={[Navigation]}
            style={{ width: "100%" }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Stack
                  gap={2}
                  sx={{
                    border: "1px solid var(--palette-text-primary)",
                    borderRadius: 4,
                    p: 2,
                    height: 200,
                    overflow: "hidden",
                    justifyContent: "space-between",
                    mx: { mobile: "1px", tablet: 0 },
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
                      <Typography color="var(--palette-background-default)">
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
                </Stack>
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
