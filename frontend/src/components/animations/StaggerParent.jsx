import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { once as defaultOnce } from "./variants";
export const staggerParentValues = {
  staggerDuration: 0.05,
  once: defaultOnce,
  staggerDirection: 1,
};

const StaggerParent = ({
  children,
  staggerDuration = staggerParentValues.staggerDuration,
  once = staggerParentValues.once,
  staggerDirection = staggerParentValues.staggerDirection,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: staggerDuration, staggerDirection }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

StaggerParent.propTypes = {
  children: PropTypes.node.isRequired,
  staggerDuration: PropTypes.number,
  once: PropTypes.bool,
  staggerDirection: PropTypes.number,
};

export default StaggerParent;
