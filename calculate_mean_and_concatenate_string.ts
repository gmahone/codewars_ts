export function notNumber(x: string): boolean {
  return !(Number(x)) && x != "0"
}

export function mean(lst: string[]): [number, string] {
  let listNum: number[] = lst.filter(Number).map(a => +a);
  let listMean: number = listNum.reduce((acc,c) => acc + Number(c)) / 10;
  let listString: string[] = lst.filter(notNumber);
  let listConcat: string = listString.join("")
  return [listMean, listConcat];
}
