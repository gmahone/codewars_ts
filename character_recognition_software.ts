export function correct(s: string): string{
  s.replaceAll("5", "S");
  s.replaceAll("0", "O");
  s.replaceAll("1", "I");
  return s;
}
