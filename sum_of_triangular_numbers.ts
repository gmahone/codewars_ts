export function sumTriangularNumbers(n:number):number {
  var result:number = 0;
  var triArray:number[] = [0];
  for(let i = 1; i < (n + 1); i++){
    result += i;
    triArray[i-1] = result;
  }
  return triArray.reduce((acc,c) => acc + c)
}
