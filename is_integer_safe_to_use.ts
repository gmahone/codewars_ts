export function SafeInteger(n: number): boolean {
  return Number.isSafeInteger(n);
}

// arrow function overwrite
export const SafeInteger = Number.isSafeInteger;
