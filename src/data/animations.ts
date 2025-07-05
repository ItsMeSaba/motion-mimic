import ScratchRevealGif from "@/assets/animations/scratch-reveal-preview.gif";
import CrossSectionImageGif from "@/assets/animations/cross-section-image-preview.gif";
import ImageRevealGif from "@/assets/animations/image-reveal-preview.gif";

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
  {
    id: "cross-section-image",
    name: "Cross Section Image",
    description: "Cross section image animation",
    category: "entrance",
    tags: ["cross", "section", "image"],
    preview: CrossSectionImageGif,
    icon: "🔍",
    difficulty: "medium" as const,
    type: "css" as const,
  },
  {
    id: "image-reveal",
    name: "Image Reveal",
    description: "Image reveal animation",
    category: "entrance",
    tags: ["image", "reveal", "animation"],
    preview: ImageRevealGif,
    icon: "🔍",
    difficulty: "medium" as const,
    type: "css" as const,
  },
];
