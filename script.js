let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (numberA, numberB) => {
  let numberC = numberA - numberB;
  if (numberC < 0) {
  return numberC *= -1;
    } else {
    return numberC;
    }
  } 

const compareGuesses = (humanGuess, computerGuess, secretTargetGuess) => getAbsoluteDistance(humanGuess,secretTargetGuess) <= getAbsoluteDistance(computerGuess,secretTargetGuess) ? true : false 


updateScore = winner => {
  if (winner === "human") {
  humanScore += 1
  }else if (winner === "computer"){
  computerScore += 1
  }
}

advanceRound = () => currentRoundNumber += 1; 

