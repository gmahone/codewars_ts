export function seven(m: number): number[] {
  let i: number = 0;
  let strArray: string[];
  let strArrayEnd : string[];
  while(number >= 100){
    strArray = String(number).split("")
    strArrayEnd = strArray.pop()
    number = Number(strArray.join("")) - (2 * Number(strArrayEnd));
    i++;
  }
  return [i, number];
}
