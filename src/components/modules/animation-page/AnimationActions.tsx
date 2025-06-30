"use client";

import { Animation } from "@/types/animation";

export function AnimationActions({ animation }: { animation: Animation }) {
  return (
    <div className="flex space-x-4 mb-8">
      {/* <button
        onClick={handleViewDemo}
        className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
      >
        View Live Demo
      </button> */}

      {/* <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors">
        Copy Code
      </button> */}

      <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors">
        Download Source
      </button>
    </div>
  );
}
