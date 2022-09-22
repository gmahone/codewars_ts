export function mean(lst: string[]): [number, string] {
  let listMean: number = lst.filter(e => e == Number(e)).reduce((acc, c) => acc + Number(c), 0)/10
  let listConcat: string = lst.filter(e => e != Number(e)).join("")
  return [listMean, listConcat];
}
