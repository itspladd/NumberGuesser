let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget: Returns a random number between 0 and 9.
const generateTarget = () => Math.floor(Math.random() * 10);

function compareGuesses(humanGuess, computerGuess, targetNumber) {
	let humanDistance = humanGuess > targetNumber ? (humanGuess - targetNumber) : (targetNumber - humanGuess)
	let computerDistance = computerGuess > targetNumber ? (computerGuess - targetNumber) : (targetNumber - computerGuess);
	console.log( humanDistance <= computerDistance ? true : false);
	}

function updateScore(winner) {
	if (winner === 'human')
		humanScore++;
	else if (winner === 'computer')
		computerScore++;
	else
		console.log(`Error updating score. String passed in was '${winner}'`);
	}
