let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random * 9);
}

function compareGuesses(userGuess, computerGuess, number){
  const humanGuess = Math.abs(number - userGuess);
  const computerGo = Math.abs(number - computerGuess);

  if(humanGuess < computerGo){
    return true;
  }else{
    return false;
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}