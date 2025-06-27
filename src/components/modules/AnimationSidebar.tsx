"use client";

import { useState } from "react";

interface Animation {
  id: string;
  name: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  type: "css" | "js" | "react";
}

const animations: Animation[] = [
  {
    id: "fade-in",
    name: "Fade In Effect",
    category: "entrance",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "bounce",
    name: "Bounce Animation",
    category: "entrance",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "slide-in",
    name: "Slide In Transition",
    category: "entrance",
    difficulty: "medium",
    type: "css",
  },
  {
    id: "hover-scale",
    name: "Hover Scale Effect",
    category: "hover",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    category: "loading",
    difficulty: "medium",
    type: "css",
  },
  {
    id: "pulse",
    name: "Pulse Animation",
    category: "micro",
    difficulty: "easy",
    type: "css",
  },
  {
    id: "flip-card",
    name: "Flip Card Effect",
    category: "hover",
    difficulty: "hard",
    type: "css",
  },
  {
    id: "typing",
    name: "Typing Animation",
    category: "entrance",
    difficulty: "medium",
    type: "js",
  },
  {
    id: "parallax",
    name: "Parallax Scroll",
    category: "transitions",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "morphing",
    name: "Shape Morphing",
    category: "micro",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "ripple",
    name: "Ripple Effect",
    category: "micro",
    difficulty: "medium",
    type: "js",
  },
  {
    id: "accordion",
    name: "Smooth Accordion",
    category: "transitions",
    difficulty: "medium",
    type: "react",
  },
  {
    id: "parallax-2",
    name: "Parallax Scroll",
    category: "transitions",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "morphing-2",
    name: "Shape Morphing",
    category: "micro",
    difficulty: "hard",
    type: "js",
  },
  {
    id: "ripple-2",
    name: "Ripple Effect",
    category: "micro",
    difficulty: "medium",
    type: "js",
  },
  {
    id: "accordion-2",
    name: "Smooth Accordion",
    category: "transitions",
    difficulty: "medium",
    type: "react",
  },
];

export default function AnimationSidebar() {
  const [selectedAnimation, setSelectedAnimation] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredAnimations = animations.filter((animation) =>
    animation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-80 relative overflow-hidden">
      <div className="bg-gray-900 border-r border-gray-800 p-4 px-2 pb-1 w-80 max-h-screen fixed grid grid-rows-[auto_1fr]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Animations</h2>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search animations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Animations List */}
        <div className="space-y-2 overflow-y-auto h-full pr-2 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-600">
          {filteredAnimations.map((animation) => (
            <button
              key={animation.id}
              onClick={() => setSelectedAnimation(animation.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left group ${
                selectedAnimation === animation.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <span className="text-lg">
                  {getAnimationIcon(animation.category)}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{animation.name}</div>
                  <div className="text-xs text-gray-400 capitalize">
                    {animation.category}
                  </div>
                </div>
              </div>
              <div className="flex space-x-1 ml-2">
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
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function getAnimationIcon(category: string): string {
  switch (category) {
    case "entrance":
      return "✨";
    case "hover":
      return "👆";
    case "loading":
      return "⏳";
    case "transitions":
      return "🔄";
    case "micro":
      return "⚡";
    default:
      return "🎨";
  }
}
