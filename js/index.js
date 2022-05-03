//~ game variables

let mysteryNumber = 50;
let playerGuess = 0;

let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";

let gameWon = false;

//~ the input and output fields

let input = document.querySelector("#input");
let output = document.querySelector("#output");

//~ the button

let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

function clickHandler() {
	playGame();
	}
	
function playGame() {
	
	guessesRemaining = guessesRemaining - 1;
	guessesMade = guessesMade + 1;
	gameState = "Guess: " + guessesMade + " Remaining: " + guessesRemaining;
	
	playerGuess = parseInt(input.value);
	
	if(playerGuess > mysteryNumber) {
		output.innerHTML = "that's too high. " + gameState;
		
		//~ check for the end of the game
		if(guessesRemaining < 1) {
			endGame();
			}
		}
	else if(playerGuess < mysteryNumber) {
		output.innerHTML = "that's too low. " + gameState;
		
		//~ check for the end of the game
		if(guessesRemaining < 1) {
			endGame();
			}
		}
	else if(playerGuess === mysteryNumber) {
		gameWon = true;
		endGame();
		}
	}

function endGame() {
	if(gameWon) {
		output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
		}
	else {
		output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
		}
	}












