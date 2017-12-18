var allowedGuesses;
var correctGuesses;
var incorrectGuesses;
var guessesRemaining;
var phraseElement = document.getElementById("phrase");

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

var image = [
	"http://d2s4ckmcfyogn8.cloudfront.net/sites/default/files/header_main_images/country-western-music-eps-23986846.jpg",
	"http://calcoastnews.com/images/2011/01/willie_nelson1.jpg",
	"https://cdn.smehost.net/legacyrecordingscom-hydricprod/wp-content/uploads/2011/12/johnnycash.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/8/8f/Patsy_Cline_II.jpg",
	"http://www.marychapincarpenter.com/wp-content/uploads/2012/05/Mary_Chapin_Shot_C_0486_Final1.jpg",
	"http://thecatholiccatalogue.com/wp-content/uploads/2015/06/Iris-2-High-Rez-Adjusted2.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/0/01/John_Prine_by_Ron_Baker.jpg"
]

// var phraseCount = document.getElementById("phraseCount");
// 	console.log(phraseCount);

//Pick a random phrase from the array.
var randPhrase = phrase[Math.floor(Math.random() * phrase.length)];
	console.log(randPhrase);

// Create an empty array to use as the currentPhrase for Hangman &
// fill it with underscores to match the number of letters in the phrase.
// The For loop creates a looping variable i that starts at 0 and goes up to (but does not include) randPhrase.length. 
// Each time around the loop, we add a new element to curPhrase array, at curPhrase[i]. 
// When the loop finishes, curPhrase array will be the same length as the phrase.

var curPhrase = [];
	for (var i = 0; i < randPhrase.length; i++) {
		curPhrase[i] = "_";
	}

	console.log(curPhrase);

var guessesRemaining = randPhrase.length;
	console.log(guessesRemaining);


function InitializeGame() {
	phrase = "Willie Nelson";
	allowedGuesses = 15;
	correctGuesses = [];
	incorrectGuesses = [];

//Set correctGuesses array using underscores.
for (var i = 0; i < phrase.length; i++) {
	correctGuesses.push("_");

}
}

function changeImage() {
	var image = [0];
	// if user solves phrase then change image to phrase of musician selected
	// First image is the default image prior to solving the phrase, e.g. generic country picture.
	
}



