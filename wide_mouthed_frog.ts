export function mouthSize(animal: string): string {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}


// arrow function version
export const mouthSize = (animal: string): string => animal.toLowerCase() === "alligator" ? "small" : "wide";
