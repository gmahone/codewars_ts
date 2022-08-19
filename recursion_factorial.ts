export const factorial = (n: number): number => {
  if(n > 1){
    return n * factorial(n-1);
  }
  else return 1;
};


// solution with ternary
export const factorial = (n: number): number => {
  return n<=1 ? 1 : n * factorial(n-1);
};
