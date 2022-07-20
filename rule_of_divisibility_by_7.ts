export function seven(m: number): number[]{
  let i = 0;
  let strArray;
  let strArrayEnd;
  while(m >= 100){
    strArray = String(m).split("");
    strArrayEnd = strArray.pop();
    m = Number(strArray.join("")) - (2 * Number(strArrayEnd));
    i++;
  }
  return [m, i];
}
