var spaceWord = 
["space", "earth", "solarSystem", "jupiter","mars", "quartermoon", "septune", "moon", "gibbousmoon", "mercury", "pluto", "halfmoon", "saturn", "Venus", "crescentmoon", "uranus", "planet", "axialtilt", "waning", "waxing", "asteroidbelt", "asteroid", "black hole", "bigbangtheory", "astronaut", "comet", "binarystar", "astronomer", "astronomy", "ellipticalorbit", "density", "constellation", "deepspace", "cosmonaut", "cosmos", "dwarfplanet", "crater","day", "dwarfstar", "dust", "equinox", "innerplanets", "eclipse", "ecliptic", "inferiorplanets", "galaxy", "lunar", "fallingstar", "meteorite", "meteor", "meteorshower", "meteoroid", "lens", "gravity", "fullmoon", "inertia", "milkyway", "mass", "magnitude", "outerplanets", "nebula", "orbit", "shootingstar", "rocket", "solar", "spaceexploration", "solstice", "star", "totaleclipse", "umbra", "space", "vernalequinox", "sky", "satellite", "new moon", "penumbra", "solarwind", "lightyear", "rings","partialeclipse", "observatory", "phase", "orbital inclination", "universe", "zodiac", "spacestation", "sun", "starlight", "telescope"];

var randomSpaceWord = "";
var letterOfSpaceWord = [];
var blankSpace = 0;
var blankCorrectSpace = [];
var wrongGuess = [];

var win = 0;
var remainingGuesses = 15;

function gameEngine() {

    randomSpaceWord = spaceWord[Math.floor(Math.random() * spaceWord.length)];
    console.log(randomSpaceWord);

    letterOfSpaceWord = randomSpaceWord.split("");
    console.log(letterOfSpaceWord);

    blankSpace = letterOfSpaceWord.length;
    console.log(blankSpace);

    for(var i = 0; i < blankSpace; i++) {
        blankCorrectSpace.push("_");
    }
    console.log(blankCorrectSpace);

    document.getElementById("currentSpaceWorld").textContent = "  " + blankCorrectSpace.join("  ");
    
}

function reset() {
    remainingGuesses = 15;
    wrongGuess = [];
    blankCorrectSpace = [];
    gameEngine ()
}

function letterMarching (letter) {
    var indLetter = false;
    // console.log("indLetter: " + indLetter);

    for (var i = 0; i < blankSpace; i++) {
        if (randomSpaceWord[i] == letter) {
            indLetter = true;
        }
    }

    if (indLetter) {
        for (var i = 0; i < blankSpace; i++) {
            if (randomSpaceWord[i] == letter) {
                blankCorrectSpace[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        remainingGuesses--;
    }
    document.getElementById("guessesLeft").textContent = remainingGuesses;
    console.log(blankCorrectSpace);
    document.getElementById("currentSpaceWorld").textContent = "  " + blankCorrectSpace.join("  ")
    
}


function blackhole () {
    console.log("wins:" + win + "| guesses left:" + remainingGuesses)

    if (letterOfSpaceWord.toString() == blankCorrectSpace.toString()) {
        win++
        reset()

        document.getElementById ("numberOfWins").textContent = " " + win;

    }else if (remainingGuesses === 0) {
        reset ()
    }
}

    document.getElementById("currentSpaceWorld").textContent + "  " + blankCorrectSpace.join (" ");


gameEngine ()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    letterMarching(guesses);
    blackhole();
    
    console.log(guesses);

    document.getElementById("lettersGuessed").textContent = "  " + wrongGuess.join(" ");
}