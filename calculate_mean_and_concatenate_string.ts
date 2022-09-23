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



// for loop solution
export function mean(lst: string[]): [number, string] { //output was : any
  let sum: number = 0;
  let count: number = 0;
  let str: string = "";
  for (let ch of lst) {
    if (ch >= '0' && ch <= '9') {
      sum += +ch;
      count += 1;
    }
    else {
      str += ch;
    }
  }
  return [sum / count, str];
}


// using isFinite
export function mean(lst: string[]): [number, string] {
  let numbers: number[] = []; //any[]
  let strings: string[] = []; //any[]
  lst.forEach((it: any) => {
    Number.isFinite(+it) ? numbers.push(+it) : strings.push(it);
  });
  return [numbers.reduce((n1, n2) => n1 + n2) / numbers.length, strings.join("")];
}
