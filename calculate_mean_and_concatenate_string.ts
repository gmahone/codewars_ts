export function mean(lst: string[]): [number, string] {
  let listNum: number[] = lst.filter(Number).map(a => +a);
  let listMean: number = listNum.reduce((acc,c) => acc + Number(c)) / 10;
  console.log(listMean);
  let listString: string[] = lst.filter(!Number);
  let listConcat: string = listString.join("");
  console.log(listConcat);
  return [10, "A"];
}
