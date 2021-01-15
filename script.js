let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget: Returns a random number between 0 and 9.
const generateTarget = () => Math.floor(Math.random() * 10);

//compareGuesses: Takes in three numbers and determines which of the first two numbers is closest to the third.
//		  Returns TRUE if the first number is closest, and FALSE if the second number is closest.
function compareGuesses(humanGuess, computerGuess, targetNumber) {
	if (humanGuess < 0 || humanGuess > 9) {
		alert(`Your number must be between 0 and 9! Your number: ${humanGuess}`);
		return false;
	}
	let humanDistance = getAbsoluteDistance(humanGuess, targetNumber);
	let computerDistance = getAbsoluteDistance(computerGuess, targetNumber);
	//console.log(`Human distance: ${humanDistance}, computer distance: ${computerDistance}`);
	return humanDistance <= computerDistance;
	}

const getAbsoluteDistance = (num1, num2) => Math.abs(num1-num2);

function updateScore(winner) {
	if (winner === 'human')
		humanScore++;
	else if (winner === 'computer')
		computerScore++;
	else
		console.log(`Error updating score. String passed in was '${winner}'`);
	}

const advanceRound = () => currentRoundNumber++;
