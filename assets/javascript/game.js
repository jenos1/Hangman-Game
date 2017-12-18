var allowedGuesses;
var correctGuesses;
var incorrectGuesses;
var phraseElement = document.getElementById("phrase");

var phrase = [
	"Willie Nelson",
	"Johnny Cash",
	"Patsy Cline",
	"Mary Chapin Carpenter",
	"Iris DeMent",
	"John Prine"
];

console.log(phrase[2]);

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

var ranPhrase = phrase[Math.floor(Math.random() * phrase.length)];
	console.log(ranPhrase);

var curPhrase = [];
	for (var i = 0; i < ranPhrase.length; i++) {
		ranPhrase[i] = "_";
	}

	console.log(phrase);

var correctGuesses = phrase.length;

// function curPhrase() {
// 	curPhrase = phrase[Math.floor(Math.random() * phrase[]];
// 	console.log(curPhrase);
// 	return curPhrase; }


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



