export function isSortedAndHow(array:number[]): string {
  let result: string = "no"
  let descendingArray: string = array.sort((a,z) => z - a).join("")
  let ascendingArray: string = array.sort((a,z) => a - z).join("")
  if(array.join("") === ascendingArray){
    result = "yes, ascending";
  }
  if(array.join("") === descendingArray){
    result = "yes, descending";
  }
  return result;
}
