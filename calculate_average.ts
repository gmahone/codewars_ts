export function findAverage(array: number[]): number {
  let result: number = array.reduce((acc,c) => acc + c, 0) / (array.length ? array.length : 1);
  return result;
}
