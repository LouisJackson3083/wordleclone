import './App.css';
import Board from './components/Board.js';
import Keyboard from './components/Keyboard.js';
import { createContext, useState } from 'react';
import { boardDefault } from './Words';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  return (
    <div className="App">
      <nav>
        <h1>Hexdle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt}}>
      <div className="game">
        <Board />
        <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;