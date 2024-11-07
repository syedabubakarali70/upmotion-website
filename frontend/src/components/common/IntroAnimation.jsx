import { motion } from "framer-motion";
import Upmotion from "../icons/Upmotion";
import { useState } from "react";
import { useDelay } from "../../Context/DelayContext.jsx";
import { Box } from "@mui/material";

const MotionBox = motion.create(Box);

const backgroundVariants = {
  animate: {
    y: "-100vh",
    transition: {
      duration: 1.5,
      delay: 2,
      type: "spring",
    },
  },
};

const logoVariants = {
  initial: {
    y: "90vh",
    // scale: 3,
  },
  animate: {
    // y: [null, "45vh", 0],
    y: 0,
    // scale: [null, 3, 1],
    transition: {
      duration: 2,
      // times: [0, 0.5, 1],
      type: "tween",
      // eases: ["easeInOut", "easeInOut"],
      ease: [0.272, 1.011, 0.779, -0.05],
    },
  },
};

const IntroAnimation = () => {
  const [justifyContent, setJustifyContent] = useState("center");
  const { setDelay } = useDelay();
  const [display, setDisplay] = useState("flex");
  return (
    <>
      <motion.div
        variants={backgroundVariants}
        whileInView="animate"
        viewport={{ once: true }}
        style={{
          minHeight: "100dvh",
          width: "100vw",
          position: "absolute",
          background: "black",
          backgroundSize: "100% 100dvh",
          zIndex: "1005",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      ></motion.div>
      <MotionBox
        sx={{
          width: {
            mobile: "100%",
            laptop: "1000px",
            desktop: "1240px",
          },
          position: "fixed",
          display: display,
          zIndex: 1010,
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          paddingInline: "2vw",
          justifyContent: justifyContent,
          // border: "1px solid white",
          mx: "auto",
          paddingBlock: "1vh",
          height: "60px",
        }}
      >
        <motion.div
          variants={logoVariants}
          style={{ paddingTop: "2px" }}
          initial="initial"
          animate={"animate"}
          layout
          onAnimationComplete={() => {
            setJustifyContent("flex-start");
            // setWidth({ mobile: "140px", laptop: "140px", desktop: "140px" });
          }}
          onLayoutAnimationComplete={() =>
            (document.body.style.overflowY = "auto")
          }
        >
          <motion.div
            variants={{ initial: { opacity: 1 }, animate: { opacity: 0 } }}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.5, duration: 1 }}
            onAnimationComplete={() => {
              setDisplay("none");
              setDelay(0);
            }}
          >
            <Upmotion width={140} height={40} />
          </motion.div>
        </motion.div>
      </MotionBox>
    </>
  );
};

export default IntroAnimation;
