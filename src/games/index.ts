import { MemoryMatchConfig } from "./memory_match/memory_match.config";
import { SwapPuzzleConfig } from "./swap_puzzle/swap_puzzle.config";

export const Games = [
  {
    name: "Swap Puzzle",
    alias: "swap_puzzle",
    config: SwapPuzzleConfig,
  },
  {
    name: "Memory Match",
    alias: "memory_match",
    config: MemoryMatchConfig,
  },
];
