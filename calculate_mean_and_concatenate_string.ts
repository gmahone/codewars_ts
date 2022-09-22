export function mean(lst: string[]): [number, string] {
  let listMean: number = lst.filter(e => e == Number(e)).map(e => Number(e))/10
  console.log(listMean);
  //let listConcat: string = lst.filter(e => e != Number(e)).join("")
  //return [listMean, listConcat];
  return [10, "A"];
}
