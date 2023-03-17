import './App.css';
import Board from './components/Board.js';
import Keyboard from './components/Keyboard.js';
import GameOver from './components/GameOver.js';
import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordSet } from './Words';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetter] = useState([]);
  const [gameOver, setGameOver] = useState( {gameOver: false, guessedWord: false });
  const [correctWord, setCorrectWord] = useState("");
  const [shake, setShake] = useState( -1 );



  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 5) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }
  const onDelete = () => {
    if (currAttempt.letterPos == 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }
  const onEnter = () => {
    if (currAttempt.letterPos != 6) return;

    let currWord = "";
    for (let i = 0; i < 6; i++) {
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }
    if (wordSet.has(currWord)) {
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
    }
    else {
      const timer = setTimeout(() => {
        setShake( -1 );
      }, 750);
      setShake( currAttempt.attempt );
      return;
    }


    if (currWord == correctWord.toLowerCase()) {
      setGameOver({gameOver: true, guessedWord: true});
      return;
    }
    if (currAttempt.attempt == 6) {
      setGameOver({gameOver: true, guessedWord: false});
      return;
    }

  }

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    })
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Hexdle</h1>
      </nav>
      <AppContext.Provider value={{
        board, setBoard, currAttempt, setCurrAttempt,
        onSelectLetter, onDelete, onEnter, correctWord,
        disabledLetters, setDisabledLetter,
        gameOver, setGameOver, shake
        }}>
      <div className="game">
        <Board />
        {gameOver.gameOver? <GameOver /> : <Keyboard />}
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;