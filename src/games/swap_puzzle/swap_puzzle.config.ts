export const SwapPuzzleConfig = {
  title: "Swap Puzzle",
  description: "Rearrange to solve the puzzle.",
  logo: require("../../../assets/games/swap_puzzle/swap_logo.webp"),
  splits: [9, 16, 25, 36, 49],

  colors: {
    primary: "#AE8D06",
    dark: {
      bg_background: "#323232",
      bg_content: "#F4E7BF",
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
