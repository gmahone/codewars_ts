export function correct(s: string): string{
  s = s.replace(/5/g, "S");
  s = s.replace(/0/g, "O");
  s = s.replace(/1/g, "I");
  return s;
}
