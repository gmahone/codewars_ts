export function wordCalc(str: string): number {
  return str.split(" ").join("").reduce((acc,c) => acc + (c.charCodeAt() - 96),0);
}

export function wordValue(arr: string[]): number[] {
  return arr.map(a => wordCalc(a));
}
