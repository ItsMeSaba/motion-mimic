"use client";

import { calculateValueFromPercentage } from "./utils/calculateValueFromPercentage";
import { calculatePercentage } from "./utils/calculatePercentage";
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

  const [startingWidth, setStartingWidth] = useState(270);
  const [startingHeight, setStartingHeight] = useState(270);
  const [targetWidth, setTargetWidth] = useState(270);
  const [targetHeight, setTargetHeight] = useState(270);

  useEffect(() => {
    if (!startingDiv.current || !targetDiv.current || !parentDiv.current) {
      return;
    }

    const { width: startingWidth, height: startingHeight } =
      startingDiv.current.getBoundingClientRect();

    const { width: targetWidth, height: targetHeight } =
      targetDiv.current.getBoundingClientRect();

    setStartingWidth(startingWidth);
    setStartingHeight(startingHeight);
    setTargetWidth(targetWidth);
    setTargetHeight(targetHeight);
  }, [targetDiv, startingDiv]);

  useEffect(() => {
    function animateHero() {
      if (!startingDiv.current || !targetDiv.current || !parentDiv.current) {
        return;
      }

      const percentage = calculatePercentage(startingDiv, targetDiv, parentDiv);

      const { offsetLeft: startingX, offsetTop: startingY } =
        startingDiv.current;

      const { offsetLeft: targetX, offsetTop: targetY } = targetDiv.current;

      const currentWidth = calculateValueFromPercentage(
        startingWidth,
        targetWidth,
        percentage
      );
      const currentHeight = calculateValueFromPercentage(
        startingHeight,
        targetHeight,
        percentage
      );
      const currentX = calculateValueFromPercentage(
        startingX,
        targetX,
        percentage
      );
      const currentY = calculateValueFromPercentage(
        startingY,
        targetY,
        percentage
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
  }, [startingWidth, startingHeight, targetWidth, targetHeight]);

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
