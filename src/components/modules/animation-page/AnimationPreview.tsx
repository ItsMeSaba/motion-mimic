import { Animation } from "@/types/animation";
import Image from "next/image";

export function AnimationPreview({ animation }: { animation: Animation }) {
  return (
    <div className="mb-8">
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
          <Image
            src={animation.preview}
            alt={animation.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
