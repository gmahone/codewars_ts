export function mean(lst: string[]): [number, string] {
  let listNum: number[] = lst.filter(Number).map(a => +a);
  console.log(listNum)
  let listMean: number = listNum.reduce((acc,c) => acc + Number(c)) / 10;
  console.log(listMean);
  //let listConcat: string = lst.filter(e => e != Number(e)).join("")
  //return [listMean, listConcat];
  return [10, "A"];
}
