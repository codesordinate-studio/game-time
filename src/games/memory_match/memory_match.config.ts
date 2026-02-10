export const MemoryMatchConfig = {
  title: "Memory Match",
  description: "Match pairs of cards to reveal hidden symbols.",
  logo: require("../../../assets/games/swap_puzzle/swap_logo.webp"),
  splits: [9, 16, 25, 36, 49],

  colors: {
    primary: "#AE8D06",

    dark: {
      bg_background: "#838383",
      bg_content: "F4E7BF",
    },
    light: {
      bg_background: "#F4E7BF",
      bg_content: "#838383",
    },
  },

  screens: {
    intro: "",
    home: "",
    start: "",
    play: "",
    end: "",
  },
};
