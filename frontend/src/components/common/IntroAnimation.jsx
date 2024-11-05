import { motion } from "framer-motion";
import Upmotion from "../icons/Upmotion";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

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
  const handleLogoClick = e => {
    e.preventDefault();
    Navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.location.reload();
  };
  const [justifyContent, setJustifyContent] = useState("center");
  const [width, setWidth] = useState("100vw");
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
          background:
            "radial-gradient(circle, rgb(9, 11, 9) 9%, rgba(0, 0, 0, 1) 96%)",
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
          width: width,
          position: "fixed",
          display: "flex",
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
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          layout
          onAnimationComplete={() => {
            setJustifyContent("flex-start");
            setWidth("150px");
          }}
        >
          <Link to="/" onClick={handleLogoClick}>
            <Upmotion width={140} height={40} />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroAnimation;
