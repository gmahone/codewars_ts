export function index(array: number[], n: number): number {
  return array.length > n+1 ? -1 : array[n]**n;
}
