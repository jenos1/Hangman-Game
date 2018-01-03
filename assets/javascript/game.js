var guessesRemaining = 15;
var lettersGuessed;
var lettersGuessedArr = [];
var wins = 0;
var messages;
messages = {
	win: "Congratulations! You win! Play again.",
	lose: "Game over! Play again.",
};

// Restart game. 
function initializeGame() {
	guessesRemaining = 15;
	wins = 0;
	lettersGuessedArr = [];
	blankPhrase = [];
}
// Create an array of images to cycle through based on Phrase "WIN" status. 
// Default will be first image listed.

var image = [
	"http://d2s4ckmcfyogn8.cloudfront.net/sites/default/files/header_main_images/country-western-music-eps-23986846.jpg",
	"http://calcoastnews.com/images/2011/01/willie_nelson1.jpg",
	"https://cdn.smehost.net/legacyrecordingscom-hydricprod/wp-content/uploads/2011/12/johnnycash.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/8/8f/Patsy_Cline_II.jpg",
	"http://www.marychapincarpenter.com/wp-content/uploads/2012/05/Mary_Chapin_Shot_C_0486_Final1.jpg",
	"http://thecatholiccatalogue.com/wp-content/uploads/2015/06/Iris-2-High-Rez-Adjusted2.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/0/01/John_Prine_by_Ron_Baker.jpg"
];

var audio = [
	"assets/audio/On_The_Road_Again.mp3",
	"assets/audio/Wayfaring_Stranger.mp3",
	"assets/audio/Crazy.mp3",
	"assets/audio/Down_At_The_Twist_And_Shout.mp3",
	"assets/audio/Let_The_Mystery_Be.mp3",
	"assets/audio/All_The_Best.mp3"
];

//Create an array of Musciians (as phrases) to be guessed & save array in a variable.
var phrase = [
	"Willie Nelson",
	"Johnny Cash",
	"Patsy Cline",
	"Mary Chapin Carpenter",
	"Iris DeMent",
	"John Prine"
];

//Use Math.floor/Math.random to pick a random phrase from the array to display to user.
var randPhrase = phrase[Math.floor(Math.random() * phrase.length)];
console.log(randPhrase);

// Create an empty array to use as the currentPhrase to solve for Hangman &
// fill it with underscores to match the number of letters in the random phrase chosen.
// The For loop creates a looping variable i that starts at 0 and goes up to (but does not include) randPhrase.length. 
// Each time around the loop, we add a new element to blankPhrase array, at blankPhrase[i]. 
// When the loop finishes, blankPhrase array (underscores) will be the same length as the phrase.
// Print it to the html document where <p> id = word. Make sure DOM is ready before calling script.

var blankPhrase = [];

//User guesses "letter".
function displayWord(letter = "") {

	console.log("this is the letter:", letter);
	console.log("This is the guess:", randPhrase);
	var wordContainer = document.getElementById("word");
	var numGuessesRemainingElement = document.getElementById("guessesRemaining");
	wordContainer.innerHTML = "";

	for (var i = 0; i < randPhrase.length; i++) {
		var lowerCaseLetter = letter.toLowerCase();
		var letterInsidePhrase = randPhrase[i].toLowerCase();
		console.log(letterInsidePhrase, lowerCaseLetter);

		// Does user guess match phrase? 
		if (letter.toLowerCase() === randPhrase[i].toLowerCase()) {
			blankPhrase[i] = letter;

		} else {
			if (/[a-zA-Z]/.test(blankPhrase[i]) && blankPhrase[i]) {
				blankPhrase[i] = blankPhrase[i];
			} else {
				blankPhrase[i] = "_";
			}
		}
	}

	console.log(blankPhrase, "This is the blank phrase");
	wordContainer.innerHTML = blankPhrase.join(" ");

	numGuessesRemainingElement.innerHTML = guessesRemaining;
	guessesRemaining--;
}

document.addEventListener("DOMContentLoaded", function (event) {
	displayWord()
});

document.onkeyup = function (event) {
	var lettersGuessedElement = document.getElementById("lettersGuessed");
	lettersGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	lettersGuessedArr.push(lettersGuessed);
	lettersGuessedElement.innerHTML = lettersGuessedArr;
	console.log(lettersGuessed);
	displayWord(lettersGuessed);
	checkWin();
	
}

function checkWin() {

	//Check user lose.
	var messagesElement = document.getElementById("messages");
	var winsElement = document.getElementById("wins");
	winsElement.innerHTML = "WINS: " + wins;

	if (guessesRemaining === 0) {
		//Reset game.
		messagesElement.innerHTML = messages.lose;
		initializeGame();
		return 
	}

	//Check user win. If user selected letters match random phrase
	//and phrase has only underscores between the words, then user wins.
	//Split blankPhrase into words on underscore? Then see if it matches randomPhrase?
	//
	var blankLetter = false;

	for (var i = 0; i < blankPhrase.length; i++) {
		if (blankPhrase[i] === "_" && randPhrase[i] !== " ") {
			blankLetter = true;
		}
	}

		if (blankLetter === false) {
	
	

			//Reset game.
			messagesElement.innerHTML = messages.win;
			wins++;
			winsElement.innerHTML = "WINS: " + wins;
			initializeGame();
		}
			
	}


function changeImage() {
	var image = [];
	// First image is the default image displayed prior to solving the phrase.
	// If user solves phrase then change image to phrase of Current Musician.
}


