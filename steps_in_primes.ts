export function isPrime(p:number): boolean {
  for(let i: number = 2; i < Math.floor(p/2); i++){
    if(p % i == 0){
      return false;
    }
  }
  return true;
}

export function step(g:number, m:number, n:number): [number,number]|null {
  let primeMap = new Map<number, number>();
  for(let i: number; i < n+1; i++){
    if(isPrime(i)){
      primeMap.set(i, i + g);
      if(primeMap.has(i - g)){
        return([primeMap[i], i]);
      }
    }
  }
  return null
}
