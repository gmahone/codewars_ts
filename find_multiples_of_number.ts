export function findMultiples(integer: number, limit: number): number[] {
  let loopLimit = int(limit / integer);
  let result = new Array(loopLimit).fill(integer);
  return result.map((e,i) => e * (i+1))
}
