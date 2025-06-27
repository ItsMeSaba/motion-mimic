import { writeText } from "./write-text";

export function animate(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  circlesQueue: React.RefObject<any[]>,
  animationId: React.RefObject<number | undefined>
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circlesQueue.current.forEach((circle) => {
    ctx.beginPath();
    ctx.globalCompositeOperation = "source-over";
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#feca57";
    ctx.lineWidth = 230;
    ctx.lineCap = "round";
    ctx.stroke();
  });

  writeText(
    ctx,
    "You Just Won This Animation",
    canvas.width / 2,
    canvas.height / 4
  );

  writeText(
    ctx,
    "You Just Won This Animation",
    canvas.width / 2,
    canvas.height / 2
  );

  writeText(
    ctx,
    "You Just Won This Animation",
    canvas.width / 2,
    canvas.height / 1.3
  );

  animationId.current = requestAnimationFrame(() =>
    animate(ctx, canvas, circlesQueue, animationId)
  );
}
