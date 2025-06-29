import ScratchRevealGif from "@/assets/animations/scratch-reveal.gif";

export const animations = [
  {
    id: "scratch-reveal",
    name: "Scratch Reveal",
    description: "Scratch reveal animation with customizable duration",
    category: "entrance",
    tags: ["scratch", "reveal", "animation"],
    preview: ScratchRevealGif,
    icon: "🔍",
    difficulty: "medium" as const,
    type: "css" as const,
  },
];
