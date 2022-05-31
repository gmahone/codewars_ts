export function findNeedle(haystack: any[]):string {
  let haystackIndex = haystack.indexOf("needle");
  return `found the needle at position ${haystackIndex}`;
}
