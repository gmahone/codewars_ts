export function seven(m: number): number[] {
  let i: number = 0;
  let strArray: string[];
  let strArrayEnd : string;
  while(m >= 100){
    strArray = String(m).split("");
    strArrayEnd = strArray.pop()
    m = Number(strArray.join("")) - (2 * Number(strArrayEnd));
    i++;
  }
  return [i, m];
}
