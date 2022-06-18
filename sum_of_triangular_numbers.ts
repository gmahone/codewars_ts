export function sumTriangularNumbers(n:number):number {
  let result = 0;
  for(let i = 1; i < (n + 1); i++){
    result += i;
  }
  return result;
}
