export function isPalindrome(line: string): boolean {
  return line === line.split("").reverse().join("")
}


// arrow function version
export const isPalindrome = (line: string): boolean => line === line.split("").reverse().join("");
