export const head =(arr)=>{
  return arr.slice(0, 1);
}

export const tail =(arr)=>{
  return arr.slice(1);
}

export const init =(arr)=>{
  return arr.slice(0,arr.length); 
}

export const last =()=>{
  throw new Error('Todo, as well as the other functions...')
}
