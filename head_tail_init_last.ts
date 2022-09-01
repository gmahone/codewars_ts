export const head =(arr)=>{
  return arr.slice(0, 1);
}

export const tail =(arr)=>{
  return arr.slice(1);
}

export const init =(arr)=>{
  return arr.slice(0,arr.length-1); 
}

export const last =(arr)=>{
  return arr.slice(arr.length-1);
}
