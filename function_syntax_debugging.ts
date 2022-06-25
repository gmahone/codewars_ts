export function main(verb: string, noun: string): string {
  return(verb + noun);
}

// arrow function version
export const main = (verb: string, noun: string): string => verb + noun
