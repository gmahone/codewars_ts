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

// cleaned up initial solution
export const head = (a: number[]) => a[0];
export const tail = (a: number[]) => a.slice(1);
export const init = (a: number[]) => a.slice(0, a.length-1);
export const last = (a: number[]) => a[a.length-1];


// another solution with explicit input calling
   export const last = (xs: number[]) => xs[xs.length - 1];
   export const init = (xs: number[]) => xs.slice(0, -1);
   export const head = ([x, ...xs]: number[]) => x;
   export const tail = ([x, ...xs]: number[]) => xs;
