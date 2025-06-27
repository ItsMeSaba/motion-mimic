export function writeText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number
) {
  ctx.font = "bold 48px Arial, sans-serif";
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalCompositeOperation = "source-atop";

  // Fill text (solid)
  ctx.fillText(text, x, y);
}
