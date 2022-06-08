export const centuryFromYear = (year: number): number => {
    let result = Math.floor( year / 100 );
    if( year % 100 ) {
        result++;
    }
    return result;
};
