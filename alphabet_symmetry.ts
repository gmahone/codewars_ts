export function comparePosition(str: string): number {
  var strArray : string[] = str.toLowerCase().split("");
  var result : number = 0;
  for(let i = 0; i < strArray.length; i++){
    if((strArray[i].charCodeAt(0)-97) === i){
      result++;
    }
  }
  return result;
}

export function solve(arr: string[]): number[] {
  return arr.map(a => comparePosition(a));
}
