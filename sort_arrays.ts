export function sortMe (names: string[]): string[] {
  const result = names.sort((a,z) => a - z);
  return(result);
}
