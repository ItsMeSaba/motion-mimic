"use client";

import { animations } from "@/data/animations";
import { notFound } from "next/navigation";
import { useState } from "react";

import { AnimationSidebar } from "@/components/modules/animation-page/AnimationSidebar";
import { CodeSection } from "@/components/modules/animation-page/CodeSection";
import { AnimationActions } from "@/components/modules/animation-page/AnimationActions";
import { AnimationHeader } from "@/components/modules/animation-page/AnimationHeader";
import { RelatedAnimations } from "@/components/modules/animation-page/RelatedAnimations";

interface AnimationPageProps {
  params: {
    id: string;
  };
}

export default function AnimationPage({ params }: AnimationPageProps) {
  const animation = animations.find((anim) => anim.id === params.id);

  if (!animation) {
    notFound();
  }

  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen flex">
        <AnimationSidebar animation={animation} />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <AnimationHeader animation={animation} />
            {/* <AnimationPreview animation={animation} /> */}
            <AnimationActions
              animation={animation}
              isCodeVisible={isCodeVisible}
              setIsCodeVisible={setIsCodeVisible}
            />
            <CodeSection animation={animation} isCodeVisible={isCodeVisible} />
            <UsageInstructions />
            <RelatedAnimations currentAnimationId={animation.id} />
          </div>
        </main>
      </div>
    </div>
  );
}
