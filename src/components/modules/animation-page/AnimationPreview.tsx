import { Animation } from "@/types/animation";
import Image from "next/image";

export function AnimationPreview({ animation }: { animation: Animation }) {
  return (
    <div className="mb-8">
      <div className="rounded-xl border-4 border-gray-800 overflow-hidden">
        <div className="h-[600px] flex items-center justify-center relative">
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
