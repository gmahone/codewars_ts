export function noOdds(values: number[]): number[] {
  return values.filter(e => e % 2 === 0)
}
