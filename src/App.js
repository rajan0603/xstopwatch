import './App.css';

import React, { useState, useEffect } from "react";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); // Cleanup the interval on unmount
  }, [isRunning]);

  const timerFunction = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const reset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {timerFunction(timer)}</p>
      <button onClick={startStop}>{isRunning ? "stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

