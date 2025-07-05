"use client";

import { animations } from "@/data/animations";
import { Animation } from "@/types/animation";
import Image from "next/image";
import Link from "next/link";

export default function AnimationGrid() {
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
        <Link
          key={animation.id}
          href={`/animations/${animation.id}`}
          className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group cursor-pointer block"
        >
          {/* Preview Area */}
          <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <Image src={animation.preview} alt={animation.name} />
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
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                    animation.type
                  )}`}
                >
                  {animation.type.toUpperCase()}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(
                    animation.difficulty
                  )}`}
                >
                  {animation.difficulty}
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/api/download-source?animation-id=${animation.id}`;
                }}
                className="flex-1 cursor-pointer px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Download Source
              </button>

              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Implement external link functionality
                  console.log("External link for:", animation.id);
                }}
                className="px-3 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors"
              >
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
              </button> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
