export const duration = 0.5;
export const type = "spring";
export const once = true;

export const fadeUpVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: (index = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      // delay: index ? index * staggerParentValues.staggerDuration : null,
      type,
      duration,
    },
  }),
};
export const fadeDownVariants = {
  initial: { y: -100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      duration,
    },
  },
};

export const scaleInVariants = {
  initial: {
    scale: 2,
    opacity: 0,
  },
  whileInView: {
    scale: 1,
    opacity: 1,
    transition: {
      type,
      duration,
    },
  },
};

export const underlineVariants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      type,
      duration,
    },
  },
};
