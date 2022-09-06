export function isPrime(p:number): boolean {
  for(let i: number = 3; i < Math.floor(p/2); i += 2){
    if(p % i == 0){
      return false;
    }
  }
  return true;
}

export function step(g:number, m:number, n:number): [number,number]|null {
  let primeMap = new Map<number, number>();
  if(m % 2 == 0){
    m++;
  }
  if(n % 2 == 0){
    n--;
  }
  for(let i: number = m; i <= n; i += 2){
    if(isPrime(i)){
      primeMap.set(i, i - g);
      if(primeMap.has(i - g)){
        return([i - g, i]);
      }
    }
  }
  return null
}




// trying an array version
// this is slower than a map version above
export function isPrime(p:number): boolean {
  for(let i: number = 3; i < Math.floor(p/2); i += 2){
    if(p % i == 0){
      return false;
    }
  }
  return true;
}

export function step(g:number, m:number, n:number): [number,number]|null {
  let primeArray: number[] = [];
  if(m % 2 == 0){
    m++;
  }
  if(n % 2 == 0){
    n--;
  }
  for(let i: number = m; i <= n; i += 2){
    if(isPrime(i)){
      primeArray.push(i);
      if(primeArray.includes(i - g)){
        return([i - g, i]);
      }
    }
  }
  return null
}



// my solution but won't pass based on time
export function isPrime(p:number): boolean {
  for(let i: number = 3; i < Math.floor(p/2); i += 2){
    if(p % i == 0){
      return false;
    }
  }
  return true;
}

export function step(g:number, m:number, n:number): [number,number]|null {
  let primeMap = new Map<number, number>();
  if(m % 2 == 0){
    m++;
  }
  for(let i: number = m; i <= n; i += 2){
    if(isPrime(i)){
      primeMap.set(i, i - g);
      if(primeMap.has(i - g)){
        return([i - g, i]);
      }
    }
  }
  return null
}
