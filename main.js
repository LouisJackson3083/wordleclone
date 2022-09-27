var guess = 0;
var currentGuess = '';
var currentGuessIndex = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const title = document.getElementById('big-title');
// $.get('500words.txt', function(data) {
//     const words = data;
//  }, 'text');

const file = "file:///C:/Users/neoni/OneDrive/Documents/wordleclone/500words.txt";
let reader = new FileReader();
let textarea = document.querySelector('textarea');
reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    textarea.value = lines.join("\n");
    textarea.value="PIS";
};

function screenshake(amount) { // Shake the screen!
    for (let j=0; j < 7; j++) {
        const box = document.getElementById(`box${guess}-${j}`);
        box.classList.add('game-guess-box');
    }
}

function updateBoxes() { // update the box colours!
    const septdle = document.getElementById('big-title2').innerText;
    var finalguess = true;

    for (let j=0; j < 7; j++) {
        const box = document.getElementById(`box${guess}-${j}`);
        if (currentGuess[j] == septdle[j]){
            box.classList.add('box-correct');
        }
        else {
            finalguess = false;
            box.classList.add('box-incorrect');
        }
    }

}


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
    console.log(currentGuess,guess);
    
    // const title = document.getElementById('big-title');
    // title.innerHTML = `<h1>${words}</h1>`;

    return true;
}

function mainGameLoop() {
    
    document.addEventListener('keydown', function(event) { // If the player presses a key
        if(event.key === 'Enter' && currentGuessIndex == 7) { // If the player presses enter, check if the word is a real word, and then reveal colours
            if (checkGuess()){
                updateBoxes();
                currentGuessIndex = 0;
                currentGuess = '';
                guess+=1;
            }
        }
        else if (event.key === 'Backspace') { // If the player presses backspace remove a letter
            if (currentGuess <= 0) { return; }
            currentGuess = currentGuess.slice(0, currentGuess.length - 1)
            currentGuessIndex -= 1;
            enterLetter('',currentGuessIndex);

            // Control the title/word at the top
            if (currentGuess <= 0) {
                title.innerHTML = `<h1>Septdle</h1>`;
            }
            else {
                title.innerHTML = `<h1>${currentGuess}</h1>`;
            }
        }
        else if(event.key && (alphabet.indexOf(String(event.key)) != -1) && currentGuessIndex < 7) { // If the player presses a key of the alphabet add to guess
            enterLetter(event.key,currentGuessIndex);
            currentGuess += String(event.key);
            currentGuessIndex += 1;
            title.innerHTML = `<h1>${currentGuess}</h1>`;
        }

        if (currentGuessIndex < 7){ // Do Screenshake
        }
    });
}

createDivGuess()
mainGameLoop()
