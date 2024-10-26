export const fadeUpVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
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
  },
};

export const underlineVariants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
  },
};
