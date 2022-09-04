import React from 'react';
// import ReactDom from 'react-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './Timer.css';

const formatRemainingTime = time => {
    const minutes = Math.floor((time % 300) / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds}`
};


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Game Over!!</div>
    }

    return (
        <div className="timer">
            <div className="text">Remaining Time:</div>
            <div className="value">{formatRemainingTime(remainingTime)}</div>
        </div>
    )
};

function Timer() {
    return (
        <div className="time-wrapper">
            <CountdownCircleTimer> is playing duration {300} colors = {["9CC69B"]} onComplete={() => [true, 1000]} {renderTime} </CountdownCircleTimer>
        </div>,
        <p className="info"> Change component properties in the code filed on the right to try difference functionalities.</p>

    )};

    export default Timer;
    // const rootElement = document.getElementById("root");
    //     ReactDOM.render(<App />, rootElement);