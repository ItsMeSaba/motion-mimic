interface Circle {
  x: number;
  y: number;
  radius: number;
  timestamp: number;
}

export function draw(
  e: MouseEvent,
  isDrawing: React.RefObject<boolean>,
  circlesQueue: React.RefObject<Circle[]>,
  lastX: React.RefObject<number>,
  lastY: React.RefObject<number>
) {
  if (!isDrawing.current) return;

  const newCircle: Circle = {
    x: e.offsetX,
    y: e.offsetY,
    radius: 15,
    timestamp: Date.now(),
  };

  circlesQueue.current.push(newCircle);

  setTimeout(() => {
    circlesQueue.current = circlesQueue.current.filter(
      (circle) => circle.timestamp !== newCircle.timestamp
    );
  }, 2000);

  [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
}
