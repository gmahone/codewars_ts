export function correct(s: string): string{
  s.replace(/5/g, "S");
  s.replace(/0/g, "O");
  s.replace(/1/g, "I");
  return s;
}
