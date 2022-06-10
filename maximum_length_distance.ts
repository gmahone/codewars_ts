// fairly complex solution
export class G964 {
  
    public static mxdiflg = (a1, a2) => {
      let result = -1;
      let a1Lengths = a1.map(a => a.length);
      let a2Lengths = a2.map(a => a.length);
      let a1Maxa2Min = Math.max(...a1Lengths) - Math.min(...a2Lengths);
      let a1Mina2Max = Math.abs(Math.max(...a2Lengths) - Math.min(...a1Lengths));
      let maxDiff = Math.max(a1Maxa2Min, a1Mina2Max);
      if(a1.length && a2.length){
        result = maxDiff;
      }
      return result;
    }
}

// other solutions

// double loop solution i was trying to avoid
export class G964 {
  
    public static mxdiflg = (a1, a2) => {
        let max = -1;
        for (let x of a1) {
          for (let y of a2) {
            max = Math.max(Math.abs(x.length - y.length), max);
          }
        }
        return max;
    }
}
