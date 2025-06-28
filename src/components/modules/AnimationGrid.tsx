"use client";

import { useState } from "react";

interface Animation {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  preview: string;
  difficulty: "easy" | "medium" | "hard";
  type: "css" | "js" | "react";
}

const animations: Animation[] = [
  {
    id: "fade-in",
    name: "Fade In Effect",
    description: "Smooth fade in animation with customizable duration",
    category: "entrance",
    tags: ["fade", "entrance", "smooth"],
    preview: "✨",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "bounce",
    name: "Bounce Animation",
    description:
      "Playful bounce effect perfect for attention-grabbing elements",
    category: "entrance",
    tags: ["bounce", "fun", "attention"],
    preview: "🎾",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "slide-in",
    name: "Slide In Transition",
    description: "Elegant slide animation from different directions",
    category: "entrance",
    tags: ["slide", "transition", "elegant"],
    preview: "➡️",
    difficulty: "medium",
    type: "css",
  },
  {
    id: "hover-scale",
    name: "Hover Scale Effect",
    description: "Interactive scale animation on hover",
    category: "hover",
    tags: ["hover", "scale", "interactive"],
    preview: "🔍",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    description: "Smooth rotating spinner for loading states",
    category: "loading",
    tags: ["loading", "spinner", "rotation"],
    preview: "🌀",
    difficulty: "medium",
    type: "css",
  },
  {
    id: "pulse",
    name: "Pulse Animation",
    description: "Gentle pulse effect for highlighting elements",
    category: "micro",
    tags: ["pulse", "highlight", "gentle"],
    preview: "💓",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "flip-card",
    name: "Flip Card Effect",
    description: "3D flip animation for card interactions",
    category: "hover",
    tags: ["flip", "3d", "card"],
    preview: "🃏",
    difficulty: "hard",
    type: "css",
  },
  {
    id: "typing",
    name: "Typing Animation",
    description: "Typewriter effect for text elements",
    category: "entrance",
    tags: ["typing", "text", "typewriter"],
    preview: "⌨️",
    difficulty: "medium",
    type: "js",
  },
  {
    id: "parallax",
    name: "Parallax Scroll",
    description: "Smooth parallax scrolling effect",
    category: "transitions",
    tags: ["parallax", "scroll", "smooth"],
    preview: "📜",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "morphing",
    name: "Shape Morphing",
    description: "Smooth shape transformation animation",
    category: "micro",
    tags: ["morph", "shape", "transform"],
    preview: "🔄",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "ripple",
    name: "Ripple Effect",
    description: "Material design inspired ripple animation",
    category: "micro",
    tags: ["ripple", "material", "touch"],
    preview: "🌊",
    difficulty: "medium",
    type: "js",
  },
  {
    id: "accordion",
    name: "Smooth Accordion",
    description: "Fluid accordion expansion animation",
    category: "transitions",
    tags: ["accordion", "expand", "smooth"],
    preview: "📁",
    difficulty: "medium",
    type: "react",
  },
];

export default function AnimationGrid() {
  const [selectedAnimation, setSelectedAnimation] = useState<string | null>(
    null
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "css":
        return "bg-blue-500";
      case "js":
        return "bg-yellow-500";
      case "react":
        return "bg-cyan-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {animations.map((animation) => (
        <div
          key={animation.id}
          className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group cursor-pointer"
          onClick={() => setSelectedAnimation(animation.id)}
        >
          {/* Preview Area */}
          <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
              {animation.preview}
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                {animation.name}
              </h3>
              <div className="flex space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(
                    animation.difficulty
                  )}`}
                >
                  {animation.difficulty}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                    animation.type
                  )}`}
                >
                  {animation.type.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {animation.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {animation.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {animation.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                  +{animation.tags.length - 3}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                Copy Code
              </button>
              <button className="px-3 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
