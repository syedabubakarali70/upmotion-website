import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { once as defaultOnce } from "./variants";
export const staggerParentValues = {
  staggerDuration: 0.05,
  once: defaultOnce,
  staggerDirection: 1,
  delayChildren: 0,
};

const StaggerParent = ({
  children,
  staggerDuration = staggerParentValues.staggerDuration,
  once = staggerParentValues.once,
  staggerDirection = staggerParentValues.staggerDirection,
  delayChildren = staggerParentValues.delayChildren,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={{
        staggerChildren: staggerDuration,
        staggerDirection,
        delayChildren: delayChildren,
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

StaggerParent.propTypes = {
  children: PropTypes.node.isRequired,
  staggerDuration: PropTypes.number,
  delayChildren: PropTypes.number,
  once: PropTypes.bool,
  staggerDirection: PropTypes.number,
};

export default StaggerParent;
