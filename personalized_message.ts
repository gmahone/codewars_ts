export function greet(name: string, owner: string): string{
  return "Hello " + (name === owner ? "boss" : "guest");
}


// other solutions

// template literal solution
export function greet(name: string, owner: string): string{
  return `Hello ${name === owner ? 'boss': 'guest'}`;
}

// arrow function version
export const greet = (name: string, owner: string): string => "Hello " + (name === owner ? "boss" : "guest");
