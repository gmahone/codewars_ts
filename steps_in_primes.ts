export function isPrime(p:number): boolean {
  for(let i: number = 2; i < Math.floor(p/2); i++){
    if(p % i == 0){
      return false;
    }
  }
  return true;
}

export function step(g:number, m:number, n:number): [number,number]|null {
  return null
}
