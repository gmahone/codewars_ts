export function usdcny(usd: number): string {
  let convertedValue = (usd * 6.75).toFixed(2)
  return `${convertedValue} Chinese Yuan`;
}

// one line
export function usdcny(usd: number): string {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

// arrow function version
export const usdcny = (bucks: number): string => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
