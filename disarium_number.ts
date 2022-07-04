export function disariumNumber(n: number) {
  return n.reduce((acc,c,i) => acc + c**(i+1), 0) === n ? "Disarium !!" : "Not !!";
}
