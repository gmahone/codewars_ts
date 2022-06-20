export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(a => !(a & 1))
}

// alternative
export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(a => a % 2 === 0)
}
