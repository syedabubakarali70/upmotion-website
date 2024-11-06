import { motion } from "framer-motion";
import Upmotion from "../icons/Upmotion";
import { useState } from "react";

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
  // const [opacity, setOpacity] = useState(1);
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
          background: "var(--palette-primary-light)",
          backgroundSize: "100% 100vh",
          zIndex: "1005",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      ></motion.div>
      <motion.div
        style={{
          width: "100vw",
          position: "fixed",
          display: display,
          zIndex: 1010,
          top: 0,
          paddingInline: "2vw",
          justifyContent: justifyContent,
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
          // transition={{ type: "spring", duration: 1 }}
          onAnimationComplete={() => {
            setJustifyContent("flex-start");
          }}
          // onLayoutAnimationComplete={() => setOpacity(0)}
        >
          <motion.div
            variants={{ initial: { opacity: 1 }, animate: { opacity: 0 } }}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.5, duration: 2 }}
            onAnimationComplete={() => setDisplay("none")}
          >
            <Upmotion width={140} height={40} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroAnimation;
