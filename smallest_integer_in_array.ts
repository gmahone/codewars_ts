/**
export function findSmallestInt(args: number[]): number {
  throw new Error("This method or operation is not implemented.");
}
**/

export function findSmallestInt(args: number[]): number {
  return Math.min(...args);
}

// other solutions

// arrow function version
export const findSmallestInt = (args: number[]): number => Math.min(...args);
