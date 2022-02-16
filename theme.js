const animationSpeedFast = "0.75s";
const animationSpeedSlow = "1.75s";
const animationDelay = "0.25s";
const easingFunction = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const THEME = {
  colors: {
    brand: "#112CAE",
  },
  letterSpacing: {
    brand: ".25em",
    "brand-lg": ".36em",
  },
  transitionTimingFunction: {
    "in-cubic": easingFunction,
  },
  keyframes: {
    "fade-in": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
    "slide-in-right": {
      "0%": {
        opacity: "0",
        transform: "translateX(100px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
    "slide-in-left": {
      "0%": {
        opacity: "0",
        transform: "translateX(-100px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
  },
  animation: {
    "fade-in": `fade-in ${animationSpeedSlow} ${easingFunction} ${animationDelay} forwards`,
    "fade-in-fast": `fade-in ${animationSpeedFast} ${easingFunction} ${animationDelay} forwards`,
    "slide-in-right": `slide-in-right ${animationSpeedSlow} ${easingFunction} ${animationDelay} forwards`,
    "slide-in-left": `slide-in-left ${animationSpeedSlow} ${easingFunction} ${animationDelay} forwards`,
  },
};

module.exports = THEME;
