export function bigToSmall(arr: number[][]): string {  
  let result: number[] = [];
  for(let i = 0; i < arr.length; i++){
    result = result.concat(arr[i]);
  }
  result.sort((a,z) => z - a);
  return result.join(">");
}


// short solution using flat
export function bigToSmall(arr: number[][]): string {
  return arr.flat().sort((a, b) => b - a).join('>')
}


// short solution similar to mine
export function bigToSmall(arr: any[]): string {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}
