export function stairsIn20(stairs:number[][]) {
  let result = stairs.flat().reduce((acc,c) => acc+c, 0) * 20;
  return result;
}


// arrow function version
export const stairsIn20 = (stairs:number[][]): number => stairs.flat().reduce((acc,c) => acc+c, 0) * 20;
