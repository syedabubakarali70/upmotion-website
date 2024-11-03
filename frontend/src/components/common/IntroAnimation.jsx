import { motion } from "framer-motion";
import Upmotion from "../icons/Upmotion";

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
  animate: {
    y: "-100vh",
    transition: {
      duration: 4,
      type: "tween",
      //   ease: [0.405, 0.95, 1.0, -0.02],
      ease: [0.272, 1.011, 0.779, -0.05],
    },
  },
};

const IntroAnimation = () => {
  return (
    <motion.div
      variants={backgroundVariants}
      animate="animate"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        background:
          "radial-gradient(circle, rgb(9, 11, 9) 9%, rgba(0, 0, 0, 1) 96%)",
        backgroundSize: "100% 100vh",
        zIndex: "2000",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "45vh",
          //   border: "1px solid white",
          marginBottom: "-10vh",
          backgroundColor: "black",
          zIndex: 2001,
        }}
      ></div>
      <motion.div
        style={{ width: "50%" }}
        variants={logoVariants}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Upmotion width={"100%"} height={"10vh"} />
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
