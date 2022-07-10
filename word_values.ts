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


// solution using prebuilt index array
export function wordValue(arr: string[]): number[] {
  const w : string = " abcdefghijklmnopqrstuvwxyz"
  return arr.map((x, i) => x.split("").reduce((sum, y) => sum + w.indexOf(y) , 0) * (i + 1))
}
