import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  duration as defaultDuration,
  type as defaultType,
  once as defaultOnce,
  amount as defaultAmount,
} from "./variants";

const withAnimation = variants => {
  const AnimatedComponent = ({
    children,
    style,
    initial = "initial",
    animate = "animate",
    whileInView = "whileInView",
    duration = defaultDuration,
    type = defaultType,
    extraAnimationProps = {},
    layout = false,
    layoutId,
    margin = "0px",
    amount = defaultAmount,
    once = defaultOnce,
  }) => {
    return (
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        transition={{ duration, type, ...extraAnimationProps }}
        viewport={{ once, amount, margin }}
        layout={layout}
        layoutId={layoutId}
        style={{
          ...style,
        }}
      >
        {children}
      </motion.div>
    );
  };

  AnimatedComponent.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    duration: PropTypes.number,
    type: PropTypes.oneOf(["inertia", "spring", "tween", "keyframes"]),
    extraAnimationProps: PropTypes.object,
    initial: PropTypes.string,
    animate: PropTypes.string,
    whileInView: PropTypes.string,
    margin: PropTypes.string,
    layoutId: PropTypes.string,
    once: PropTypes.bool,
    amount: PropTypes.oneOfType([
      PropTypes.oneOf(["all", "some"]),
      PropTypes.number,
    ]),
    layout: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["position", "size", "preserve-aspect"]),
    ]),
  };

  return AnimatedComponent;
};

export default withAnimation;
