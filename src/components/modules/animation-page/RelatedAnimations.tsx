import { animations } from "@/data/animations";
import Link from "next/link";

export function RelatedAnimations({
  currentAnimationId,
}: {
  currentAnimationId: string;
}) {
  const relatedAnimations = animations
    .filter((anim) => anim.id !== currentAnimationId)
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Related Animations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedAnimations.map((relatedAnim) => (
          <Link
            key={relatedAnim.id}
            href={`/animations/${relatedAnim.id}`}
            className="bg-gray-900 rounded-xl border border-gray-800 p-4 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{relatedAnim.icon}</span>
              <h3 className="text-white font-medium">{relatedAnim.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{relatedAnim.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
