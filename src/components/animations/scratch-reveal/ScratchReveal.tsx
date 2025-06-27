"use client";

import { useEffect, useRef } from "react";
import { animate } from "./utils/animate";
import { draw } from "./utils/draw";

interface Circle {
  x: number;
  y: number;
  radius: number;
  timestamp: number;
}

export function ScratchReveal() {
  const isDrawing = useRef(true); // currently not used as we want to draw on hover
  const lastX = useRef(0);
  const lastY = useRef(0);
  const circlesQueue = useRef<Circle[]>([]);
  const animationId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = document.getElementById(
      "scratch-canvas"
    ) as HTMLCanvasElement;

    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      if (!ctx) return;

      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animate(ctx, canvas, circlesQueue, animationId);

      function onMouseDown(e: MouseEvent) {
        isDrawing.current = true;
        [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
      }

      function onMouseEnd() {
        // isDrawing.current = false;
      }

      canvas.addEventListener("mousedown", onMouseDown);
      canvas.addEventListener("mousemove", (e) =>
        draw(e, isDrawing, circlesQueue, lastX, lastY)
      );
      canvas.addEventListener("mouseup", onMouseEnd);
      canvas.addEventListener("mouseout", onMouseEnd);

      return () => {
        if (animationId.current) {
          cancelAnimationFrame(animationId.current);
        }

        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.removeEventListener("mousemove", (e) =>
          draw(e, isDrawing, circlesQueue, lastX, lastY)
        );
        canvas.removeEventListener("mouseup", onMouseEnd);
        canvas.removeEventListener("mouseout", onMouseEnd);
      };
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center relative bg-black">
      <h1 className="text-[160px] max-w-[600px] text-center leading-44 text-white">
        Scratch To Win
      </h1>

      <canvas id="scratch-canvas" className="absolute w-full h-full" />
    </div>
  );
}
