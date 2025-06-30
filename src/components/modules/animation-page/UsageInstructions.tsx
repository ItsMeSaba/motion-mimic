export function UsageInstructions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">How to Use</h2>
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <div className="prose prose-invert max-w-none">
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Copy the animation code to your project</li>
            <li>Include the necessary dependencies</li>
            <li>Apply the animation to your target element</li>
            <li>Customize the animation parameters as needed</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
