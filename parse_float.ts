export function parseF(s:string): number|null {
  let result: number = parseFloat(s);
  return isNaN(result) ? null : result;
}
