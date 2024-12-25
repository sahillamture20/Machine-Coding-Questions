import PropTypes from "prop-types";

const CountDown = ({counter, handlePause, handleReset, handleResume, isPause}) => {
    const {hours, minutes, seconds} = counter;
  return (
    <div className="timer">
          <h1>
            {(hours < 10 ? `0${hours}` : hours)} <span>:</span> 
            {(minutes < 10 ? `0${minutes}` : minutes)} <span>:</span>
            {(seconds < 10 ? `0${seconds}` : seconds)}
          </h1>
          {
            isPause? (
              <button onClick={handleResume}>Resume</button>
            ) : (
              <button onClick={handlePause}>Pause</button>
            )
          }
          <button onClick={handleReset}>Reset</button>
        </div>
  );
};

CountDown.propTypes = {
    counter: PropTypes.object.isRequired,
    handlePause: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleResume: PropTypes.func.isRequired,
    isPause: PropTypes.bool.isRequired,
}
export default CountDown