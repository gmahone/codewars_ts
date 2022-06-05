export function isUpperCase(str: string) {
  return str === str.toUpperCase();
}

// arrow function version
export const isUpperCase = (str: string): boolean => str === str.toUpperCase();
