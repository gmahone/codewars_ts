export const factorial = (n: number): number => {
  if(n > 1){
    return n * factorial(n-1);
  }
  else return 1;
};


// solution with ternary
