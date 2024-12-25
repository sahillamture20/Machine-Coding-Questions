import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emi, setEmi] = useState(0);
  const [ans, setAns] = useState(false);
  const [fields, setFields] = useState({
    loanAmount: "",
    interest: "",
    years: "",
  });
  const { loanAmount, interest, years } = fields;

  const handleFields = (e) => {
    const { id, value } = e.target;
    setFields((prevState) => ({ ...prevState, [id]: parseInt(value) }));
  };
  // P(r(1+r)^n/((1+r)^n)-1))
  const calculateEmi = () => {
    // console.log(fields)
    let r = interest;
    r = r / (100 * 12); // converting percentage to decimal and monthly
    const calcPow = Math.pow(1 + r, years * 12);
    const amount = Math.round(loanAmount * ((r * calcPow) / (calcPow - 1)));
    setEmi(amount);
  };

  useEffect(() => {
    calculateEmi();
  }, [fields]);

  const handleEmi = () => {
    setAns(true);
  };
  return (
    <>
      <h1>Mortgage Calculator</h1>
      <div className="calc">
        <label>Principal Amount</label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          required
          onChange={handleFields}
        />
        <label>Rate of Interest</label>
        <input
          type="number"
          id="interest"
          name="interest"
          required
          onChange={handleFields}
        />
        <label>Number of Years</label>
        <input
          type="number"
          id="years"
          name="years"
          required
          onChange={handleFields}
        />
        <button onClick={handleEmi}>Calculate</button>
      </div>
      {ans && (
        <p className="emi">{`Your monthly EMI will be Rs.${emi} only.`}</p>
      )}
    </>
  );
}

export default App;
