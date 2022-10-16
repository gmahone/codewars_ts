export function sortMe (names: string[]): string[] {
  const result: string[] = names.sort((a,z) => a - z);
  return(result);
}
