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

    document.getElementById("currentSpaceWorld").innerHTML = "  " + blankCorrectSpace.join(" ");

}

gameEngine(spaceWord);