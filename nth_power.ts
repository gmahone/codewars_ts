export function index(array: number[], n: number): number {
  return array.length < n+1 ? -1 : array[n]**n;
}


// comparing truthy/falsy values
export const index = (array: number[], n: number): number => array[n] ** n || -1;
