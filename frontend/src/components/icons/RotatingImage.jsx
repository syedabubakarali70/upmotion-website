import { motion } from "framer-motion";
import PropTypes from "prop-types";
const RotatingImage = ({
  duration = 10,
  direction = "clockwise",
  top,
  right,
  bottom,
  left,
}) => {
  const rotationAngle = direction === "clockwise" ? 360 : -360;

  const svgVariant = {
    animate: {
      rotate: rotationAngle,
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={svgVariant}
      animate="animate"
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left,
        zIndex: -10,
      }}
    >
      <img src="/codeLogo.svg" />
    </motion.div>
  );
};
RotatingImage.propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["clockwise", "anticlockwise"]),
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
};

export default RotatingImage;
