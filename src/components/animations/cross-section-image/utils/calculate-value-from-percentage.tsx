import { calculatePercentage } from "./calculate-percentage";

export function calculateValueFromPercentage(
  start: number,
  end: number,
  percentage: number
) {
  return start + ((end - start) * percentage) / 100;
}

export function getValuesFromPercentage(
  startingDiv: React.RefObject<HTMLDivElement>,
  targetDiv: React.RefObject<HTMLDivElement>,
  parentDiv: React.RefObject<HTMLDivElement>
) {
  const { offsetLeft: startingX, offsetTop: startingY } = startingDiv.current;
  const { offsetLeft: targetX, offsetTop: targetY } = targetDiv.current;

  const { width: startingWidth, height: startingHeight } =
    startingDiv.current.getBoundingClientRect();

  const { width: targetWidth, height: targetHeight } =
    targetDiv.current.getBoundingClientRect();

  const percentage = calculatePercentage(startingDiv, targetDiv, parentDiv);

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

  const currentX = calculateValueFromPercentage(startingX, targetX, percentage);

  const currentY = calculateValueFromPercentage(startingY, targetY, percentage);

  return {
    currentWidth,
    currentHeight,
    currentX,
    currentY,
  };
}
