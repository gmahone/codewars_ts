export function noSpace(x:string):string {
  return x.split(" ").join("");
}


// add regex solution
export function noSpace(x:string):string {
  return x.replace(/\s/g, '');
}
