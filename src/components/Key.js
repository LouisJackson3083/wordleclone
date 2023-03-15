import React, { useContext } from 'react';
import { AppContext } from "../App";

function Key({keyVal, bigKey}) {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext);

    const selectLetter = () => {
        if (currAttempt.letterPos > 5) return;

        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    }

    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key