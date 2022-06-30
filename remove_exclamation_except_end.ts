export function remove(s: string): string {
  return s.split("!").join("") + "!";
}

export const remove = (s: string): string => s.split("!").join("") + "!";
