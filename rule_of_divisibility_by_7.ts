export function seven(m: number): number[]{
  let i: number = 0;
  let strArray: string[];
  let strArrayEnd: any;
  while(m >= 100){
    strArray = String(m).split("");
    strArrayEnd = strArray.pop();
    m = Number(strArray.join("")) - (2 * Number(strArrayEnd));
    i++;
  }
  return [m, i];
}


// recursive solution version
export function seven(num: number, steps = 0): number[] {
  if (num < 100) return [num, steps];
  return seven(Math.trunc(num / 10) - 2 * (num % 10), steps++);
}
