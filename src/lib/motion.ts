export const motionTokens = {
  duration: {
    fast: 0.35,
    medium: 0.7,
    slow: 1.0,
  },
  ease: {
    luxury: [0.22, 1, 0.36, 1],
    soft: [0.25, 0.1, 0.25, 1],
    glide: [0.16, 1, 0.3, 1],
  },
  stagger: {
    small: 0.06,
    medium: 0.12,
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.96, rotateX: 6 },
  show: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
};

export const heroWord = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};
