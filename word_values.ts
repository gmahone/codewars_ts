export function wordCalc(str: string): number {
  let result: number = str.split(" ")
  .join("")
  .split("")
  .reduce((acc,c) => acc + (c.charCodeAt(0) - 96),0);
  return result;
}

export function wordValue(arr: string[]): number[] {
  return arr.map((a,i) => wordCalc(a)*(i+1));
}
