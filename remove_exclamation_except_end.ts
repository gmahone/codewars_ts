export function remove(s: string): string {
  return s.split("!").join("") + "!";
}

// arrow function version
export const remove = (s: string): string => s.split("!").join("") + "!";


// regex solution
export function remove(s: string): string {
  return `${s.replace(/!/g, "")}!`;
};
