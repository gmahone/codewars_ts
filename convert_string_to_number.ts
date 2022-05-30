export function stringToNumber(str: string): number {
  return Number(str);
}


// arrow function version
export const stringToNumber = (str: string): number => Number(str);


// other solutions
export const stringToNumber = (str: string): number => +str;
