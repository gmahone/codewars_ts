export function repeater(str: string, n: number): string {
  var result:string =  new Array(n).fill(str).join("");
  return result;
}
