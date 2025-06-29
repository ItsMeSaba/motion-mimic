export function calculatePercentage(
  startingDiv: React.RefObject<HTMLDivElement | null>,
  targetDiv: React.RefObject<HTMLDivElement | null>,
  parentDiv: React.RefObject<HTMLDivElement | null>
) {
  if (!startingDiv.current || !targetDiv.current || !parentDiv.current) {
    return 0;
  }

  const startingDivScrollY =
    startingDiv.current.offsetTop + parentDiv.current.offsetTop - 300;

  const targetDivScrollY =
    targetDiv.current.offsetTop + parentDiv.current.offsetTop - 350;

  if (window.scrollY < startingDivScrollY) return 0;
  if (window.scrollY > targetDivScrollY) return 100;

  const multiplier = 100 / (targetDivScrollY - startingDivScrollY);
  const percentage = Math.round(
    (window.scrollY - startingDivScrollY) * multiplier
  );

  return percentage;
}
