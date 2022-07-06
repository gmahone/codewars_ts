export function predictAge(age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number{
  let args: number[] = Array.prototype.slice.call(arguments)
  let result: number = Math.floor((args.reduce((acc,c) => acc + c**2, 0)**0.5) / 2);
  return result;
};
