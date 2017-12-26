var allowedGuesses;
var correctGuesses;
var incorrectGuesses;
var lettersGuessed;
var numLettersGuessed;
var counter = 0;
messages = {
	win: "You win!",
	lose: "Game over! Play again.",
};
messages = document.getElementById("messages");



// Create a function to initialize the game variables to start or restart.
function initializeGame() {
	phrase = [];
	image =[0];
	allowedGuesses = 15;
	correctGuesses = [];
	incorrectGuesses = [];
	guessesRemaining = 0;
	lettersGuessed = [];
	numLettersGuessed = 0;
	messages.innerHTML = "";

}

// Create an array of images to cycle through based on curPhrase "WIN" status. 
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

//Create an array of Musciians (as phrases) to be guessed & save array in a variable.
var phrase = [
	"Willie Nelson",
	"Johnny Cash",
	"Patsy Cline",
	"Mary Chapin Carpenter",
	"Iris DeMent",
	"John Prine"
];

console.log(phrase[3]);

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

//Parameter "letter" is letter the user guesses & is initialized to empty.
function displayWord(letter = "") {

	console.log("this is the letter:", letter);
	console.log("This is the guess:", randPhrase);
	var wordContainer = document.getElementById("word");
	wordContainer.innerHTML = "";

	for (var i = 0; i < randPhrase.length; i++) {
		var lowerCaseLetter = letter.toLowerCase();
		var letterInsidePhrase = randPhrase[i].toLowerCase();
		console.log(letterInsidePhrase, lowerCaseLetter);

	// Check if the letter passed in is equal to the current letter of the 
	// random phrase and set the letter guessed to the array for displaying.
	// The JS test() method tests for a regular expression (object) match in a string & returns true if found.
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

		if (letterInsidePhrase === phrase.toLowerCase) {
			console.log("win");
		}
		// }

	console.log(blankPhrase, "This is the blank phrase");
    wordContainer.innerHTML = blankPhrase.join(" ");


	allowedGuesses--; //decrement guesses left
	console.log(allowedGuesses);
	lettersGuessedElement.innerHTML = allowedGuesses;
}

document.addEventListener("DOMContentLoaded", function(event) {
	displayWord()
});



function changeImage() {
	var image = [0];
	// if user solves phrase then change image to phrase of musician selected
	// First image is the default image displayed prior to solving the phrase, e.g. generic country picture.
	
}

document.onkeyup = function(event) {
  var lettersGuessed = [];
  var keyCount;
	var lettersGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	var lettersGuessedElement = document.getElementById("lettersGuessed");
	console.log(lettersGuessed);
	displayWord(lettersGuessed);


	lettersGuessedElement.innerHTML = lettersGuessed + ",";

}


// var Guessed = [];
// 	document.onkeyup = function (e){

// 		var keyCount = document.getElementById("lettersGuessed");

// 		if (typeof event !== "undefined") {

// 		}
// 		else if (e) {
// 			keyCount = e.which;
// 		}
// 		lettersGuessed.push(String.fromCharCode(keyCount));
			

// 		return false; //prevents default action
// 	};


	// var guessesRemaining = allowedGuesses - document.onkeyup();

// document.getElementById("guessesRemaining").onkeyup = function() {

// }

// function gameOver(win) {
// 	var messagesElement = document.getElementById("messages");
// 	var numLettersGuessed = document.onkeyup(e);
// 	var allowedGuesses = 15;

// 	console.log(numLettersGuessed);


//   //       if (win) {
//   //           messages.innerHTML = messages.win;
        
//   //       } else {
//   //           messages.innerHTML = messages.lose;
//   //       }
//     }


// $('input').keyup(function(e) {
// 	var keyCount = allowedGuesses--;
// 	console.log(keyCount);


	
// document.onkeyup = function(event) {
// 	var guessesRemaining = keyCount ++;
// 	guessesRemaining = allowedGuesses - keyCount;
// 	console.log(keyCount, "This is the keyCount");
// 	console.log(allowedGuesses);
// };

// function displayKeyCount(keyCount = 0) {
// 	var guessesRemainingElement = document.getElementById("guessesRemaining");
// 	guessesRemainingElement.innerHTML = 0;
// // var lettersGuessed = String.fromCharCode(event.keyCode).toUpperCase();
// // var keyCount = 0;



// Create variable to track guessesRemaining. Decrement this variable for each correct guess.
// var guessesRemaining;
// // lettersGuessed = parseInt(lettersGuessed);
// guessesRemaining = randPhrase.length - lettersGuessed;
// guessesRemaining = document.getElementById("guessesRemaining");
// // guessesRemaining.innerHTML = 
// guessesRemaining-- ;


		 // if (letterGuessed == 'randPhrase')
		// $('#curPhrase strong').text("damnnnnnnnnnnn cdnsdamnnnnnnnnnnn cdnsdamnnnnnnnnnnn cdnsdamnnnnnnnnnnn cdnsdamnnnnnnnnnnn cdns")

		// } else {
		// 	$('#curPhrase strong').text("damnnnnnnnnnnn cdns")

  //    }
		//if false
		// place guess into guessed letter


