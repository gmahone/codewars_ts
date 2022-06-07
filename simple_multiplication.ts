export function simpleMultiplication(num: number): number{
  return num & 1 ? num * 9 : num * 8;
}

// other solutions

// arrow function with ternary multiplication
export const simpleMultiplication = (num: number): number =>
  num * (num % 2 === 0 ? 8 : 9);

// normal function with ternary multiplication
export function simpleMultiplication(num: number): number{
  return num * (num % 2 ? 9 : 8);
}
