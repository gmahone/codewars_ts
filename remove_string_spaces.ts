export function noSpace(x:string):string {
  return x.split(" ").join("");
}

// arrow function version
export const noSpace = (x: string):string => x.split(' ').join('');


// add regex solution
export function noSpace(x:string):string {
  return x.replace(/\s/g, "");
}
