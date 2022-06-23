export class G964 {

    public static gps = (s, x) => {
        speedArray = [];
        for(let i = 1; i < x.length; i++){
            speedArray.push(3600 * (x[i] - x[i-1]) / s);
        }
        return speedArray;
    }  
}
