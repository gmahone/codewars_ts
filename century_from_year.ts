export const centuryFromYear = (year: number): number => {
    let result = Math.floor( year / 100 ) + 1;
    if( year % 100 ) {
        result -= 1;
    }
    return result;
};
