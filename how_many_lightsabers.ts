export function howManyLightsabersDoYouOwn(name?: any): number {
    return name === "Zach" ? 18 : 0;
}

// other solutions

// arrow function version
export const howManyLightsabersDoYouOwn = (name?: any): number => name === 'Zach' ? 18 : 0;
