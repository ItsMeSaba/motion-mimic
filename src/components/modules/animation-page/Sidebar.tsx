import { Animation } from "@/types/animation";
import Link from "next/link";

export const AnimationSidebar = ({ animation }: { animation: Animation }) => {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-6">
      <Link
        href="/animations"
        className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Catalog
      </Link>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Category</h3>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
            {animation.category}
          </span>
        </div>

        {/* {animation.difficulty && (
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">
              Difficulty
            </h3>
            <span
              className={`px-3 py-1 text-white text-sm rounded-full ${getDifficultyColor(
                animation.difficulty
              )}`}
            >
              {animation.difficulty}
            </span>
          </div>
        )}

        {animation.type && (
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Type</h3>
            <span
              className={`px-3 py-1 text-white text-sm rounded-full ${getTypeColor(
                animation.type
              )}`}
            >
              {animation.type.toUpperCase()}
            </span>
          </div>
        )} */}

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {animation.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
