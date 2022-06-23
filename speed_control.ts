export class G964 {

    public static gps = (s, x) => {
      let speedArray = [];
      let currSpeed;
      if(x.length < 2){
        return 0;
      }
      for(let i = 1; i < x.length; i++){
          currSpeed = 3600 * (x[i] - x[i-1]) / s;
          speedArray.push(Math.floor(currSpeed));
      }
      return Math.max(...speedArray);
    }  
}
