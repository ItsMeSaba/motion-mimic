import AnimationSidebar from "../../components/modules/AnimationSidebar";
import AnimationGrid from "../../components/modules/AnimationGrid";

export default function AnimationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        {/* Sidebar */}
        <AnimationSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Animation Library
              </h1>
              <p className="text-gray-400 text-lg">
                Explore our collection of beautiful animations
              </p>
            </div>

            <AnimationGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
