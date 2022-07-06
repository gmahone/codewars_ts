export function factorial(n: number): number {
  if(n > 1){
    return(n * factorial(n - 1));
  } else {
    return 1
  }           
}

export const strongNumber = (num: number): string => {
  let calcStrong: number = String(num).split("").reduce((acc,c) => acc + factorial(+c), 0);
  return calcStrong === num ? "STRONG!!!!" : "Not Strong !!";
};
