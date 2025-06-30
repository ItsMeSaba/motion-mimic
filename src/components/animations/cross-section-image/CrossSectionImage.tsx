"use client";

import { getValuesFromPercentage } from "./utils/calculate-value-from-percentage";
import { BottomSection } from "./components/BottomSection";
import { UpperSection } from "./components/UpperSection";
import { useEffect, useRef, useState } from "react";

export function CrossSectionImage() {
  const parentDiv = useRef<HTMLDivElement>(null);
  const startingDiv = useRef<HTMLDivElement>(null);
  const targetDiv = useRef<HTMLDivElement>(null);

  const [imageWidth, setImageWidth] = useState(270);
  const [imageHeight, setImageHeight] = useState(270);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const [isImageDisplayed, setIsImageDisplayed] = useState(false);

  useEffect(() => {
    function animateHero() {
      if (!startingDiv.current || !targetDiv.current || !parentDiv.current) {
        return;
      }

      const { currentWidth, currentHeight, currentX, currentY } =
        getValuesFromPercentage(
          startingDiv as React.RefObject<HTMLDivElement>,
          targetDiv as React.RefObject<HTMLDivElement>,
          parentDiv as React.RefObject<HTMLDivElement>
        );

      setImageWidth(currentWidth);
      setImageHeight(currentHeight);
      setImageX(currentX);
      setImageY(currentY);
    }

    window.addEventListener("scroll", animateHero);
    window.addEventListener("resize", animateHero);

    animateHero();

    setTimeout(() => setIsImageDisplayed(true), 10); // To prevent initial placement being animated

    return () => {
      window.removeEventListener("scroll", animateHero);
      window.removeEventListener("resize", animateHero);
    };
  }, []);

  return (
    <div className="relative" ref={parentDiv}>
      <UpperSection
        startingDiv={startingDiv}
        imageProperties={{
          width: imageWidth,
          height: imageHeight,
          x: imageX,
          y: imageY,
        }}
        isImageDisplayed={isImageDisplayed}
      />

      <BottomSection targetDiv={targetDiv} />
    </div>
  );
}
