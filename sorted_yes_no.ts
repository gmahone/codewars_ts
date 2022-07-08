export function isSortedAndHow(array:number[]): string {
  let result: string = "no"
  if(array.join("") === array.sort((a,z) => a - z).join("")){
    result = "yes, ascending";
  }
  if(array.join("") === array.sort((a,z) => z - a).join("")){
    result = "yes, descending";
  }
  return result;
}
