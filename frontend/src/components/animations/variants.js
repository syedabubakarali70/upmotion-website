export const duration = 1;
export const type = "spring";
export const once = true;
export const amount = "some";

export const fadeUpVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      duration,
    },
  },
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
export const fadeRightVariants = {
  initial: { x: -100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};
export const fadeLeftVariants = {
  initial: { x: 100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

export const flipLeftVariants = {
  initial: {
    rotateY: -90,
    opacity: 0,
  },
  whileInView: {
    rotateY: 0,
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
    // transition: {
    //   type,
    //   duration,
    // },
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
