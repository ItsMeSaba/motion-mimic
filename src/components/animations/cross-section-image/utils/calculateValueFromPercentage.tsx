export function calculateValueFromPercentage(
  start: number,
  end: number,
  percentage: number
) {
  return start + ((end - start) * percentage) / 100;
}
