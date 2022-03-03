var guess = 0;
var currentLetterGuess = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function enterLetter(letter,space) { // Input a letter, and it's space
    const box = document.getElementById(`box${guess}-${space}`);
    letter = letter.toUpperCase();
    console.log(`box${guess}-${space}`);
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

function mainGameLoop() {
    
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            alert('Enter was pressed');
        }
        else if (event.key === 'Backspace') {
            alert('Backspace was pressed');
        }
        else if(event.key && (alphabet.indexOf(String(event.key)) != -1) && currentLetterGuess < 7) {
            enterLetter(event.key,currentLetterGuess);
            currentLetterGuess += 1;
        }

        if (currentLetterGuess < 7){ // Do Screenshake
            
        }
    });
}

createDivGuess()
mainGameLoop()
