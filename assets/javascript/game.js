// VARIABLES
// track wins
var wins = 0;
// track losses
var losses = 0;
// track remaining guesses
var guessesRemaining = 10;
// track user guesses
var lettersGuessed = [];
// array of possible computer choices
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// begin new game
getLetter ();
	
// choose random letter from alphabet array
function getLetter () {
	
	randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	
	console.log(randomLetter);
	
} 

// when the user presses a key, run this function
document.onkeyup = function(event) {
	
// 	store the user guess
	var userGuess = event.key;

// making a var to track valid guesses. no duplicate letters or special characters.
	var match = false;
	var duplicate = false;

// loop through alphabet to verify no special characters
	for (var i=0; i < alphabet.length; i++) {
		
		if (userGuess === alphabet[i]) {
			match = true;
		}
	}

// loop through letters guessed to find duplicates
	for (var i=0; i < lettersGuessed.length; i++) {
		
		if (userGuess === lettersGuessed[i]) {
			duplicate = true;
		}
	}

// if guess is valid and not a duplicate, run the rest of the function
	if (match === true && duplicate === false) {
	 lettersGuessed.push(userGuess);
	 
// 	handle guesses
	if (userGuess === randomLetter) {
          wins = wins + 1;
          resetGame();
    }
    else {
		guessesRemaining --;
	}
	
// 	check to see if there are guesses left
	if (guessesRemaining === 0) {
		losses = losses + 1;
		resetGame();
	}

// html  
        var html = 	"<p>Guess what letter I'm thinking of. . .</p>" +
					"<p>WINS : " + wins + "</p>" +
					"<p>LOSSES : " + losses + "</p>" +
					"<p>GUESSES LEFT : " + guessesRemaining + "</p>" +
					"<p>YOUR GUESSES : " + lettersGuessed + "</p>";
	
	document.getElementById('game').innerHTML = html;
	
	}
};
          
// game reset
function resetGame() {
	// refresh number of guesses
	guessesRemaining = 10;
// 	refresh letters guessed
	lettersGuessed = [];
	// Start game over by guessing another word
	getLetter();
}