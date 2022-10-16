export function sortMe (names: string[]): string[] {
  const result: string[] = names.sort((n1,n2) => {
    if (n1 > n2) {
        return 1;
    }
    if (n1 < n2) {
        return -1;
    }
    return 0;
  });
  return(result);
}
