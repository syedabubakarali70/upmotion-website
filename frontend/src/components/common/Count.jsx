import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Count = ({ value, duration = 10 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration });

    return animation.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

Count.propTypes = {
  value: PropTypes.number,
  duration: PropTypes.number,
};
export default Count;
