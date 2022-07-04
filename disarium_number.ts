export function disariumNumber(n: number) {
  return String(n).split("").reduce((acc,c,i) => acc + Math.pow(+c, i+1), 0) === n ? "Disarium !!" : "Not !!";
}
