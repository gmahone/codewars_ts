export function rps(p1: string, p2: string): string{
  let winner: string;
  if(p1 === p2){
    return("Draw");
  }
  if(p1 === "rock"){
    switch(p2){
      case "paper":
        winner = "2";
      case "scissors":
        winner = "1";
    }
  } else if(p1 === "paper"){
    switch(p2){
      case "rock":
        winner = "1";
      case "scissors":
        winner = "2";
    }
  } else if(p1 === "scissors"){
    switch(p2){
      case "rock":
        winner = "2";
      case "paper":
        winner = "1";
    }
  }
  return `Player ${winner} won!`;
}
