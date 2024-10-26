import { motion } from "framer-motion";
import PropTypes from "prop-types";
import UpmotionLogo from "./UpmotionLogo";

const RotatingImage = ({
  duration = 4,
  direction = "clockwise",
  top,
  right,
  bottom,
  left,
  width = "80",
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
      }}
    >
      <UpmotionLogo width={width} />
    </motion.div>
  );
};
RotatingImage.propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["clockwise", "counterclockwise"]),
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
};

export default RotatingImage;
