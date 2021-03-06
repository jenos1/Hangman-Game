// $(document).ready(function() {

var guessesRemaining = 15;
var lettersGuessed;
var lettersGuessedArr = [];
var wins = 0;
var winsElement = document.getElementById("wins");
var messages;
messages = {
	win: "Congratulations! You win! Listen to the Music then Play again.",
	lose: "Game over! Play again.",
};

// Restart game. 
function initializeGame() {
	guessesRemaining = 15;
	winsElement.innerHTML = "WINS: " + wins;
	lettersGuessedArr = [];
	blankPhrase = [];
	displayImage();
	randPhrase = phrase[Math.floor(Math.random() * phrase.length)];
	displayWord();
	
}

// Create an array of images to cycle through based on Phrase "WIN" status. 
// Default will be first image stored in html.

var media = [
	{
		image: "http://calcoastnews.com/images/2011/01/willie_nelson1.jpg", 
		audio: "assets/audio/On_The_Road_Again.mp3",
		name: "Willie Nelson",
		history: "Patsy Cline recorded his song 'Crazy,' which became a huge hit for her in 1962. He wrote ‘On The Road Again’ for the country music film 'Honeysuckle Rose' in which he starred in 1980."
	},

	{
		image: "https://cdn.smehost.net/legacyrecordingscom-hydricprod/wp-content/uploads/2011/12/johnnycash.jpg", 
		audio: "assets/audio/Wayfaring_Stranger.mp3",
		name: "Johnny Cash",
		history: "He was the youngest living inductee into the Country Music Hall of Fame in 1980. In 1985, Cash joined friends Willie Nelson, Waylon Jennings and Kris Kristofferson to form 'The Highwaymen'. This supergroup released three albums between 1985 and 1995, scoring a No. 1 hit with the single 'Highwayman' from their first album, 'The Highwaymen'. "
	},

	{
		image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Patsy_Cline_II.jpg", 
		audio: "assets/audio/Crazy.mp3",
		name: "Patsy Cline",
		history: "A celebrated country singer best known for her crossover hits, including 'Crazy' and 'Walking After Midnight'."
	},

	{
		image: "http://www.marychapincarpenter.com/wp-content/uploads/2012/05/Mary_Chapin_Shot_C_0486_Final1.jpg", 
		audio: "assets/audio/Down_At_The_Twist_And_Shout.mp3",
		name: "Mary Chapin Carpenter",
		history: "'Shut Up and Kiss Me,' became Carpenter's first song to hit number one on the Billboard Hot Country Songs chart and won her a Grammy for Best Female Country Performance."
	},

 	{
	  image: "http://thecatholiccatalogue.com/wp-content/uploads/2015/06/Iris-2-High-Rez-Adjusted2.jpg", 
	  audio: "assets/audio/Let_the_Mystery_Be.mp3",
	  name: "Iris Dement",
	  history: "The youngest of fourteen children, Iris first began composing songs at the age of 25. In 1999, she collaborated with countryman John Prine on his album 'In Spite of Ourselves'. She recorded four duets with Prine that earned her a Grammy. "
	},

	{
		image: 
		"https://upload.wikimedia.org/wikipedia/commons/0/01/John_Prine_by_Ron_Baker.jpg",
		audio: "assets/audio/All_The_Best.mp3",
		name: "John Prine",
		history: "Learned to play the guitar at the age of 14 and is known as a songwriter's songwriter. Performers from Johnny Cash to Joan Baez and Carly Simon have recorded his songs. Kris Kristofferson once said, 'He's so good, we're gonna have to break his fingers.'"
	}
]

// Replace current display with image of winning phrase. 
function displayImage() {
	var mediaIndex = phrase.indexOf(randPhrase);
	console.log(mediaIndex);
	$(".countryPic").attr("src", media[mediaIndex].image);
	$(".player").attr("src", media[mediaIndex].audio);
	$(".name").text(media[mediaIndex].name);
	$(".history").text(media[mediaIndex].history);
}

//Create an array of Muscians (as phrases) to be guessed & save array in a variable.
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

// Create an empty array to use as the currentPhrase to solve for Hangman &
// fill it with underscores to match the number of letters in the random phrase chosen.
// When the loop finishes, blankPhrase array (underscores) will be the same length as the phrase.
// Print it to the html document where <p> id = word. Make sure DOM is ready before calling script.

var blankPhrase = [];

//User guesses "letter".
function displayWord(letter = "") {
	var wordContainer = document.getElementById("word");
	var numGuessesRemainingElement = document.getElementById("guessesRemaining");
	wordContainer.innerHTML = "";

	for (var i = 0; i < randPhrase.length; i++) {
		var lowerCaseLetter = letter.toLowerCase();
		var letterInsidePhrase = randPhrase[i].toLowerCase();

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
	displayWord(lettersGuessed);
	checkWin();	
}

function checkWin() {
	//Check user lose.
	var messagesElement = document.getElementById("messages");
	
	winsElement.innerHTML = "WINS: " + wins;

	if (guessesRemaining === 0) {
		//Reset game.
		messagesElement.innerHTML = messages.lose;
		initializeGame();
		return 
	}

	//Check user win. If user selected letters match random phrase
	//and phrase has only underscores between the words, then user wins.
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

// })


