import { useState, useRef } from "react";
import Timer from "./Timer";
import Button from "./TimerControls";

const Display = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="max-w-xl mt-20 p-10 bg-gray-100 rounded-md shadow-lg mx-auto">
      <Timer time={time} />
      <div className="flex justify-between">
        <Button onchange={toggleTimer} isRunning={isRunning} />
        <Button onchange={resetTimer} text="Reset" />
      </div>
    </div>
  );
};

export default Display;
