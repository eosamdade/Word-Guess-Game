var spaceWord = 
["Space", "Earth", "Solar System", "Jupiter","Mars", "quarter moon", "Neptune", "moon", "gibbous moon", "Mercury", "Pluto", "half moon", "Saturn", "Venus", "crescent moon", "Uranus", "planet", "axial tilt", "waning", "waxing", "asteroid belt", "asteroid", "black hole", "big bang theory", "astronaut", "comet", "binary star", "astronomer", "astronomy", "elliptical orbit", "density", "constellation", "deep space", "cosmonaut", "cosmos", "dwarf planet", "crater","day", "dwarf star", "dust", "equinox", "inner planets", "eclipse", "ecliptic", "inferior planets", "galaxy", "lunar", "falling star", "meteorite", "meteor", "meteor shower", "meteoroid", "lens", "gravity", "full moon", "inertia", "Milky Way", "mass", "magnitude", "outer planets", "nebula", "orbit", "shooting star", "rocket", "solar", "space exploration", "solstice", "star", "total eclipse", "umbra", "space", "vernal equinox", "sky", "satellite", "new moon", "penumbra", "solar wind", "light-year", "rings","partial eclipse", "observatory", "phase", "orbital inclination", "universe", "zodiac", "space station", "sun", "starlight", "telescope"];

var randomSpaceWord = "";
var letterOfSpaceWord = [];
var blankSpace = 0;
var blankCorrectSpace = [];
var wrongGuess = [];

var win = 0;
var remainingGuesses = 15;

function gameEngine() {

    randomSpaceWord = spaceWord[Math.floor(Math.random() * spaceWord.length)];

    letterOfSpaceWord = randomSpaceWord.split("");
    console.log(letterOfSpaceWord);

    blankSpace = letterOfSpaceWord.length;
    console.log(blankSpace);

    for(var i = 0; i < blankSpace; i++){
        blankCorrectSpace.push("_");
    }
    console.log(blankCorrectSpace);

    document.getElementById("currentSpaceWorld").textContent = "  " + blankCorrectSpace.join(" ");
}
    
var spaceSounds = document.getElementById("audio1");
var spacemusic = document.getElementById("audio2");

function audio() {
    if (randomSpaceWord ===spaceWord
        [0-20]){
        audio1.pause();
        audio2.play();
        document.getElementById("bigbang").src = "assets/images/PIA01384_large.jpg";
    }

    else if (randomSpaceWord ===spaceWord 
        [21-40]) {
        audio1.play();
        audio2.pause();
        document.getElementById("bigbang").src = "assets/images/PIA10399_orig.jpg";
    }

    else if (randomSpaceWord ===spaceWord 
        [41-60]) {
        audio1.pause();
        audio2.play();
        document.getElementById("bigbang").src = "assets/images/PIA09178_orig.jpg";
    }
    else if (randomSpaceWord ===spaceWord 
        [61-84]) {
        audio1.play();
        audio2.pause();
        document.getElementById("bigbang").src = "assets/images/PIA03654_orig.jpg";
    }
    
};

function reset() {
    guessesRemaining = 15;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function letterMarching (letter) {
    var indLetter = false;

    for (var i = 0; i < blankSpace; i++) {
        if (randomSpaceWord[i]== letter) {
            indLetter = true;
        }
    }

    if (indLetter) {
        for (var i=0; i < blankSpace; i++) {
            if (randomSpaceWord[i]== letter) {
                blankCorrectSpace[i] =letter;
            }
        }
    }
    else {
        wrongGuess.push (letter);
        remainingGuesses --;
    }

    console.log(blankCorrectSpace);
}

function blackhole () {
    if (letterOfSpaceWord.toSting() == blankCorrectSpace.toString()) {
        wins++
        audio()
        reset()

        document.getElementById ("numberOfWins").textContent = " " + wins
    }
}

document.getElementById("currentSpaceWorld").textContent + "  " + blankCorrectSpace.join (" ");
gameEngine(spaceWord);
document.getElementById("guessesLeft"). textContent = " " + remainingGuesses;


gameEngine ()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keycode).toLowerCase ();
    letterMarching(guesses);
    blackhole();
    console.log(guesses);

    document.getElementById("lettersGuessed").textContent = "  " + wrongGuess.join(" ");
}