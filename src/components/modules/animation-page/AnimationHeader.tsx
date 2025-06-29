import { Animation } from "@/types/animation";

export function AnimationHeader({ animation }: { animation: Animation }) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{animation.icon}</span>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {animation.name}
          </h1>
          <p className="text-gray-400 text-lg">{animation.description}</p>
        </div>
      </div>
    </div>
  );
}
