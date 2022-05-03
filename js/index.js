//~ game variables

let mysteryNumber = 50;
let playerGuess = 0;

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
	playerGuess = parseInt(input.value);
	
	if(playerGuess > mysteryNumber) {
		output.innerHTML = "that's too high.";
		}
	else if(playerGuess < mysteryNumber) {
		output.innerHTML = "that's too low";
		}
	else if(playerGuess === mysteryNumber) {
		output.innerHTML = "you got it!";
		}
	}














