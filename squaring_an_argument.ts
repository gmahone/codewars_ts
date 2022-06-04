export const square = (num: number): number => num * num;

// other solutions

// solution with input type any
export const square = (n : any ) : any => n ** 2

// add standard function version
export function square(n: number): number{
  return n * n
}
