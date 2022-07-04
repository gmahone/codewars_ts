export function containAllRots(str: string, arr: string[]): boolean {
  let result: boolean = True;
  for(let i: number = 0; i < arr.length; i++){
    if(!arr.includes(str)){
      return False;
    }
    str = str.substring(1) + str.substring(0,1);
  }
  return result;
}
