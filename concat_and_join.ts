export function bigToSmall(arr: number[][]): string {  
  let result: number[] = [];
  for(let i = 0; i < arr.length; i++){
    result = result.concat(arr[i]);
  }
  result.sort((a,z) => z - a);
  return "";
}
