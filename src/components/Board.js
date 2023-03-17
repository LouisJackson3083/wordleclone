import React, { useContext } from 'react'
import { boardDefault } from '../Words';
import Letter from './Letter.js';
import { AppContext } from '../App'

function Board() {
    const {shake} = useContext(AppContext);

    return (
        <div className="board" >
            <div className="row" id={shake == 0 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={0}/>
                <Letter letterPos={1} attemptVal={0}/>
                <Letter letterPos={2} attemptVal={0}/>
                <Letter letterPos={3} attemptVal={0}/>
                <Letter letterPos={4} attemptVal={0}/>
                <Letter letterPos={5} attemptVal={0}/>
            </div>
            <div className="row" id={shake == 1 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={1}/>
                <Letter letterPos={1} attemptVal={1}/>
                <Letter letterPos={2} attemptVal={1}/>
                <Letter letterPos={3} attemptVal={1}/>
                <Letter letterPos={4} attemptVal={1}/>
                <Letter letterPos={5} attemptVal={1}/>
            </div>
            <div className="row" id={shake == 2 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={2}/>
                <Letter letterPos={1} attemptVal={2}/>
                <Letter letterPos={2} attemptVal={2}/>
                <Letter letterPos={3} attemptVal={2}/>
                <Letter letterPos={4} attemptVal={2}/>
                <Letter letterPos={5} attemptVal={2}/>
            </div>
            <div className="row" id={shake == 3 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={3}/>
                <Letter letterPos={1} attemptVal={3}/>
                <Letter letterPos={2} attemptVal={3}/>
                <Letter letterPos={3} attemptVal={3}/>
                <Letter letterPos={4} attemptVal={3}/>
                <Letter letterPos={5} attemptVal={3}/>
            </div>
            <div className="row" id={shake == 4 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={4}/>
                <Letter letterPos={1} attemptVal={4}/>
                <Letter letterPos={2} attemptVal={4}/>
                <Letter letterPos={3} attemptVal={4}/>
                <Letter letterPos={4} attemptVal={4}/>
                <Letter letterPos={5} attemptVal={4}/>
            </div>
            <div className="row" id={shake == 5 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={5}/>
                <Letter letterPos={1} attemptVal={5}/>
                <Letter letterPos={2} attemptVal={5}/>
                <Letter letterPos={3} attemptVal={5}/>
                <Letter letterPos={4} attemptVal={5}/>
                <Letter letterPos={5} attemptVal={5}/>
            </div>
            <div className="row" id={shake == 6 ? "shake" : ""}>
                <Letter letterPos={0} attemptVal={6}/>
                <Letter letterPos={1} attemptVal={6}/>
                <Letter letterPos={2} attemptVal={6}/>
                <Letter letterPos={3} attemptVal={6}/>
                <Letter letterPos={4} attemptVal={6}/>
                <Letter letterPos={5} attemptVal={6}/>
            </div>
        </div>
    );
}

export default Board