var fs = require("fs");
fs.readFile("./mytext.txt", function(text){
    var textByLine = text.split("\n")
});

var guess = 0;
var currentGuess = '';
var currentGuessIndex = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function enterLetter(letter,space) { // Input a letter, and it's space
    const box = document.getElementById(`box${guess}-${space}`);
    letter = letter.toUpperCase();
    // console.log(`box${guess}-${space}`);
    box.innerHTML = `${letter}`;
}

function createDivGuess() {
    const gamecontainer = document.getElementsByClassName('game-container');

    for (let i=0; i < 7; i++) {
        const guess = document.createElement('div');
        guess.classList.add('game-guess-container');
        for (let j=0; j < 7; j++) {
            const box = document.createElement('div');
            box.classList.add('game-guess-box');
            box.id = (`box${i}-${j}`)
            guess.appendChild(box); 
        }
        document.querySelector('.game-container').appendChild(guess); 
    }
    
}

function checkGuess() {
    console.log(currentGuess);

}

function mainGameLoop() {
    
    document.addEventListener('keydown', function(event) { // If the player presses a key
        if(event.key === 'Enter') { // If the player presses enter, check if the word is a real word, and then reveal colours
            checkGuess();
        }
        else if (event.key === 'Backspace') { // If the player presses backspace remove a letter
            currentGuess = currentGuess.slice(0, currentGuess.length - 1)
            currentGuessIndex -= 1;
            enterLetter('',currentGuessIndex);
            const title = document.getElementById('big-title');
            title.innerHTML = `<h1>${currentGuess}</h1>`;
        }
        else if(event.key && (alphabet.indexOf(String(event.key)) != -1) && currentGuessIndex < 7) { // If the player presses a key of the alphabet add to guess
            enterLetter(event.key,currentGuessIndex);
            currentGuess += String(event.key);
            currentGuessIndex += 1;
            const title = document.getElementById('big-title');
            title.innerHTML = `<h1>${currentGuess}</h1>`;
        }

        if (currentGuessIndex < 7){ // Do Screenshake
            
        }
    });
}

createDivGuess()
mainGameLoop()
