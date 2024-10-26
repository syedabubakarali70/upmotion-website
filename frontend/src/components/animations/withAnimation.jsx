import { motion } from "framer-motion";
import PropTypes from "prop-types";

const withAnimation = variants => {
  const AnimatedComponent = ({
    children,
    style,
    initial = "initial",
    animate = "animate",
    whileInView = "whileInView",
    duration = 0.5,
    type = "spring",
    extraAnimationProps = {},
    layout = false,
    layoutId,
  }) => {
    // const updatedVariants = {
    //   ...variants,
    //   whileInView: variants.whileInView && {
    //     ...variants[whileInView],
    //     transition: {
    //       ...variants.whileInView.transition,
    //       ...extraAnimationProps,
    //     },
    //   },
    //   animate: variants[animate] && {
    //     ...variants[animate],
    //     transition: {
    //       ...variants.animate.transition,
    //       ...extraAnimationProps,
    //     },
    //   },
    // };

    return (
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate}
        transition={{ duration, type, ...extraAnimationProps }}
        whileInView={whileInView}
        viewport={{ once: true }}
        layout={layout}
        layoutId={layoutId}
        style={style}
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
    layoutId: PropTypes.string,
    layout: PropTypes.bool,
  };

  return AnimatedComponent;
};

export default withAnimation;
