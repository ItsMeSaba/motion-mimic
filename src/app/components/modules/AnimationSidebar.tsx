"use client";

import { useState } from "react";

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

const categories: Category[] = [
  { id: "all", name: "All Animations", count: 24, icon: "🎨" },
  { id: "entrance", name: "Entrance Effects", count: 8, icon: "✨" },
  { id: "hover", name: "Hover Effects", count: 6, icon: "👆" },
  { id: "loading", name: "Loading States", count: 4, icon: "⏳" },
  { id: "transitions", name: "Page Transitions", count: 3, icon: "🔄" },
  { id: "micro", name: "Micro Interactions", count: 3, icon: "⚡" },
];

export default function AnimationSidebar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <aside className="w-80">
      <div className="bg-gray-900 border-r border-gray-800 fixed h-screen p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>

          {/* Search */}
          <div className="relative mb-6">
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

          {/* Categories */}
          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left group ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedCategory === category.id
                      ? "bg-purple-700 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Filters</h3>

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="text-gray-300">CSS Only</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="text-gray-300">JavaScript</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="text-gray-300">React Components</span>
            </label>
          </div>
        </div>

        {/* Recent */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Recently Viewed
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
              <span className="text-gray-300 text-sm">Fade In Effect</span>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded"></div>
              <span className="text-gray-300 text-sm">Bounce Animation</span>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
              <span className="text-gray-300 text-sm">Slide Transition</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
