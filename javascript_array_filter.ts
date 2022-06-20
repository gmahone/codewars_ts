export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(a => !(a & 1))
}
