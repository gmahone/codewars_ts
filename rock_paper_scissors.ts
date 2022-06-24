export function rps(p1: string, p2: string): string{
  let winner;
  if(p1 === p2){
    return("Draw!");
  }
  if(p1 === "rock"){
    switch(p2){
      case "paper":
        winner = "2";
        break;
      case "scissors":
        winner = "1";
        break;
    }
  } else if(p1 === "paper"){
    switch(p2){
      case "rock":
        winner = "1";
        break;
      case "scissors":
        winner = "2";
        break;
    }
  } else if(p1 === "scissors"){
    switch(p2){
      case "rock":
        winner = "2";
        break;
      case "paper":
        winner = "1";
        break;
    }
  }
  return `Player ${winner} won!`;
}

// more explicit solution rather than endless tests
export function rps(p1: string, p2: string): string{
  if (p1 === p2) {
    return 'Draw!'
  } else if (p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  } 
}


// add OOP solution
interface Game{
  rock : string;
  paper : string;
  scissors : string;
}
export function rps(p1: string, p2: string): string{
  let game = {
    rock : {beats : 'scissors'},
    paper : {beats : 'rock'},
    scissors : {beats : 'paper'}
  };
  if(p1 === p2){
    return 'Draw!';
  }
  let message = (n:string)=> `Player ${n} won!`;
  if(game[p1 as keyof Game].beats === p2){
    return message('1');
  }
  if(game[p2 as keyof Game].beats === p1){
    return message('2');
  }
  return ''
}
