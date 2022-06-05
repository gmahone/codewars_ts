export function correct(s: string): string{
  s = s.replace(/5/g, "S");
  s = s.replace(/0/g, "O");
  s = s.replace(/1/g, "I");
  return s;
}

// other solutions

// simpler solution
export function correct(s: string): string{
  return s.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O')
}

// arrow function version
export const correct = (s: string) => s.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O');


// using an object mapping
export function correct(s: string): string{
  const mistakes: {[key: string]: string} = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  return [...s].map(ch => {
    if (/\d/.test(ch)) return mistakes[ch];
    return ch;
  }).join('');
}
