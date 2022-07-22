export function parseF(s:string): number|null {
  let result: number | NaN = parseFloat(s);
  return result == NaN ? null : result;
}
