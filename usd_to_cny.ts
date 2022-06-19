export function usdcny(usd: number): string {
  let convertedValue = (usd * 6.75).toFixed(2)
  return `${convertedValue} Chinese Yuan`;
}
