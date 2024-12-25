import PropTypes from "prop-types";

const InputTimer = ({handleInput, handleStart}) => {
  return (
    <div className="App">
      <h1>Counter Down Timer</h1>
      <input onChange={handleInput} id="hours" placeholder="HH" />
      <input onChange={handleInput} id="minutes" placeholder="MM" />
      <input onChange={handleInput} id="seconds" placeholder="SS" />
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

// PropTypes validation
InputTimer.propTypes = {
    handleInput: PropTypes.func.isRequired, // Ensure handleInput is a required function
    handleStart: PropTypes.func.isRequired, // Ensure handleStart is a required function
  };

export default InputTimer;
