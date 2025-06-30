import { RelatedAnimations } from "@/components/modules/animation-page/RelatedAnimations";
import { UsageInstructions } from "@/components/modules/animation-page/UsageInstructions";
import { AnimationSidebar } from "@/components/modules/animation-page/AnimationSidebar";
import { AnimationActions } from "@/components/modules/animation-page/AnimationActions";
import { AnimationPreview } from "@/components/modules/animation-page/AnimationPreview";
import { AnimationHeader } from "@/components/modules/animation-page/AnimationHeader";
import { CodeSection } from "@/components/modules/animation-page/CodeSection";
import { animations } from "@/data/animations";
import { notFound } from "next/navigation";

interface AnimationPageProps {
  params: {
    id: string;
  };
}

export default async function AnimationPage({ params }: AnimationPageProps) {
  const { id } = await params;
  const animation = animations.find((anim) => anim.id === id);

  if (!animation) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen flex">
        <AnimationSidebar animation={animation} />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <AnimationHeader animation={animation} />
            <AnimationPreview animation={animation} />
            <AnimationActions animation={animation} />
            {/* <CodeSection animation={animation} /> */}
            <UsageInstructions />
            <RelatedAnimations currentAnimationId={animation.id} />
          </div>
        </main>
      </div>
    </div>
  );
}
