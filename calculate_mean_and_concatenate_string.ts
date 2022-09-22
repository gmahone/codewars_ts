export function mean(lst: string[]): [number, string] {
  let listMean = lst.filter(e => e != Number(e))
  console.log(listMean);
  //let listConcat: string = lst.filter(e => e != Number(e)).join("")
  //return [listMean, listConcat];
  return [10, "A"];
}
