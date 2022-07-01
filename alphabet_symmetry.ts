export function comparePosition(str: string): number {
  return str.toLowerCase().split("").map((e,i) => charCodeAt(e) - 97 === i ? 1 : 0).reduce((acc,c) => acc + c, 0);
}


export function solve(arr: string[]): number[] {
  return arr.map(a => comparePosition(a));
}
