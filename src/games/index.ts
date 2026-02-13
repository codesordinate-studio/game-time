import { MemoryMatchConfig } from "./memory_match/memory_match.config";
import { SwapPuzzleConfig } from "./swap_puzzle/swap_puzzle.config";

export const Games = [
  {
    name: "Swap Puzzle",
    alias: "swap_puzzle",
    config: SwapPuzzleConfig,
    category: "puzzle",
    logo: require("../../assets/games/swap_puzzle/swap_logo.webp"),
  },
  {
    name: "Slide Puzzle",
    alias: "slide_puzzle",
    config: SwapPuzzleConfig,
    category: "puzzle",
    logo: require("../../assets/games/slide_puzzle/slide_puzzle.webp"),
  },
  {
    name: "Memory Match",
    alias: "memory_match",
    config: MemoryMatchConfig,
    category: "memory",
    logo: require("../../assets/games/swap_puzzle/swap_logo.webp"),
  },

  {
    name: "Crossword Puzzle",
    alias: "crossword_puzzle",
    config: SwapPuzzleConfig,
    category: "puzzle",
    logo: require("../../assets/games/crosswords/crosswords.webp"),
  },
  {
    name: "Color Matcher",
    alias: "color_matcher",
    config: SwapPuzzleConfig,
    category: "memory",
    logo: require("../../assets/games/color_matcher/color_matcher.webp"),
  },
  {
    name: "Where's Wally",
    alias: "wheres_wally",
    config: SwapPuzzleConfig,
    category: "puzzle",
    logo: require("../../assets/games/swap_puzzle/swap_logo.webp"),
  },
];
