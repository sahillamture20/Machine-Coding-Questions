import { useState, useEffect } from "react";
import "./App.css";
import InputTimer from "./component/InputTimer";
import CountDown from "./component/CountDown";

function App() {
  const [counter, setCounter] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [intervalId, setIntervlId] = useState();

  const handleStart = () => {
    if (counter.hours < 0 || counter.minutes < 0 || counter.seconds < 0)
      return alert("Please enter time to start");
    setIsStart(true);
    // console.log(counter);
  };

  const handlePause = () => {
    setIsPause(true);
    clearInterval(intervalId);
  };

  const handleReset = () => {
    setIsStart(false);
    setCounter({ hours: "", minutes: "", seconds: "" });
  };

  const handleResume = () => {
    setIsPause(false);
    timer(counter.hours, counter.minutes, counter.seconds);
  };
  const handleInput = (event) => {
    const { id, value } = event.target;
    // Used Bracket Notation to assign the current value to input field & parseInt() to convert the value to a number
    setCounter((prevState) => ({ ...prevState, [id]: parseInt(value) }));
  };

  // Main logic of timer
  const timer = (hr, min, sec, tId) => {
    if (sec > 0) {
      setCounter((prevState) => ({
        ...prevState,
        seconds: prevState.seconds - 1,
      }));
    } else if (sec === 0 && min > 0) {
      setCounter((prevState) => ({
        ...prevState,
        minutes: prevState.minutes - 1,
        seconds: 59,
      }));
    } else {
      setCounter((prevState) => ({
        ...prevState,
        hours: prevState.hours - 1,
        minutes: 59,
        seconds: 59,
      }));
    }
    if (counter.hours === 0 && counter.minutes === 0 && counter.seconds === 0) {
      handleReset();
      clearInterval(tId);
      alert("Time's up!");
    }
  };

  useEffect(() => {
    let tId;

    if (isStart) {
      tId = setInterval(() => {
        timer(counter.hours, counter.minutes, counter.seconds, tId);
      }, 1000);
      setIntervlId(tId);
    }

    return () => {
      clearInterval(tId);
    };
  }, [isStart, counter]);
  // Timer login is above
  return (
    <>
      {!isStart ? (
        <InputTimer handleInput={handleInput} handleStart={handleStart} />
      ) : (
        <CountDown
          counter={counter}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
          isPause={isPause}
        />
      )}
    </>
  );
}

export default App;