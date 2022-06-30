export function stairsIn20(stairs:number[][]) {
  let result = stairs.flat().reduce((acc,c) => acc+c, 0) * 20;
  return result;
}
