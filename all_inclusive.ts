export function containAllRots(str: string, arr: string[]): boolean {
  let result: boolean = true;
  if(str === ""){
    return result;
  }
  for(let i: number = 0; i < arr.length; i++){
    console.log(str)
    if(!arr.includes(str)){
      return false;
    }
    str = str.substring(1) + str.substring(0,1);
  }
  return result;
}
