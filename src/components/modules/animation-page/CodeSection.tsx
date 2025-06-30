import { Animation } from "@/types/animation";

export function CodeSection({ animation }: { animation: Animation }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Code</h2>
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <pre className="text-gray-300 text-sm overflow-x-auto">
          <code>
            {/* TODO: Add actual code content based on animation type */}
            {/* {`// ${animation.name} Animation Code */}
            {/* // This is a placeholder for the actual implementation
// Code will be dynamically loaded based on animation type and configuration`} */}
          </code>
        </pre>
      </div>
    </div>
  );
}
