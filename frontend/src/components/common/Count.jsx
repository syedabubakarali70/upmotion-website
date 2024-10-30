import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Count = ({ value, duration = 10 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  useEffect(() => {
    let animation;
    if (isInView)
      animation = animate(count, value, {
        duration,
        type: "tween",
        ease: [0.16, 1, 0.3, 1],
      });

    return animation && animation.stop;
  }, [isInView, count, duration, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

Count.propTypes = {
  value: PropTypes.number,
  duration: PropTypes.number,
};
export default Count;
