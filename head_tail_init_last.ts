export const head =(arr: number[]): number =>{
  return arr.slice(0, 1)[0];
}

export const tail =(arr: number[]): number[] =>{
  return arr.slice(1);
}

export const init =(arr: number[]): number[] =>{
  return arr.slice(0,arr.length-1); 
}

export const last =(arr: number[]): number =>{
  return arr.slice(arr.length-1)[0];
}


// another solution with explicit input calling
   export const last = (xs: number[]) => xs[xs.length - 1];
   export const init = (xs: number[]) => xs.slice(0, -1);
   export const head = ([x, ...xs]: number[]) => x;
   export const tail = ([x, ...xs]: number[]) => xs;
