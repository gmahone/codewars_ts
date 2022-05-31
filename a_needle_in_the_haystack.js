export function findNeedle(haystack: any[]):string {
  let haystackIndex = haystack.indexOf("needle");
  return `found the needle at position ${haystackIndex}`;
}

// other solutions

// one line without template literal
export function findNeedle(haystack: any[]):string {
  return "found the needle at position " + haystack.indexOf('needle');
}

// one line with template literal
export function findNeedle(haystack: any[]): string {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
