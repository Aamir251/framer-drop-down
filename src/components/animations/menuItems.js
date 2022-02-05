export const ulVariants = {
  initial: {
    height: 0,
    opacity: 0
  },

  animate: {
    height: "300px",
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 0.1
    }
  },

  exit: {
    opacity: 0,
    transition: {
      delay: 0.3
    }
  }
};

export const liVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const spanVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 3%, 0 3%)"
  },

  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    transition: { duration: 0.4 }
  }
};
