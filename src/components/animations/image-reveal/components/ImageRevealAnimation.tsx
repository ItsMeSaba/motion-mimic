"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { ImageProps } from "next/image";
import NextImage from "next/image";
import "../styles.scss";

interface AnimatedImageProps extends ImageProps {
  wrapperClassName?: string;
  speed?: number;
  imgStyleObjectPosition?: string;
  imgStyleObjectPositionVertical?: string;
  threshold?: number;
  delay?: number;
}

export function ImageRevealImage({
  wrapperClassName = "",
  imgStyleObjectPosition = "50%",
  imgStyleObjectPositionVertical = "50%",
  loading = "eager",
  threshold = 0.5,
  delay = 0.5,
  ...imageProps
}: AnimatedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const [ref, isVisible] = useInView({ threshold });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Browser detection for Safari is moved inside useEffect
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (
      isVisible &&
      imageLoaded &&
      imgRef.current &&
      !isSafari &&
      !hasAnimated
    ) {
      // Proceed with the animation only if not Safari and hasn't animated before
      const animationKeyframes = [
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 70%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      ];

      const animationOptions = {
        duration: 1250,
        easing: "cubic-bezier(0.215, 0.61, 0.85, 1)",
        fill: "forwards" as FillMode,
        delay: delay * 1000,
      };

      imgRef.current.animate(animationKeyframes, animationOptions);

      setHasAnimated(true);
    }
  }, [isVisible, imageLoaded, delay, isSafari, hasAnimated]);

  return (
    <div ref={ref} className={wrapperClassName}>
      <div
        ref={imgRef}
        className={`h-full w-full transform-gpu overflow-hidden ${
          !isSafari ? "clip-path-init" : ""
        }`}
        style={{
          objectPosition: `${imgStyleObjectPosition} ${imgStyleObjectPositionVertical}`,
        }}
      >
        <NextImage
          {...imageProps}
          loading={loading}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
}
