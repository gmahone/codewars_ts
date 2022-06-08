export const centuryFromYear = (year: number): number => {
    let result = Math.floor( year / 100 );
    if( year % 100 ) {
        result++;
    }
    return result;
};

// easier solution using Math.ceil
export const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
};
