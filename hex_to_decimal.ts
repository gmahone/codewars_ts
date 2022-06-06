export function hexToDec(hexString:string):number{
  return parseInt(hexString, 16);
}

// arrow function version
export const hexToDec = (hexString:string):number => parseInt(hexString, 16);
