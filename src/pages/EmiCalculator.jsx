import { useState } from "react";
import "../styles/Dashboard.css";

function EmiCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const [emi, setEmi] = useState(null);
  const [total, setTotal] = useState(null);
  const [interest, setInterest] = useState(null);

  const calculateEMI = () => {
    let P = Number(amount);
    let R = Number(rate) / 12 / 100;
    let N = Number(years) * 12;

    if (!P || !R || !N) return;

    let emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    let totalPayment = emiValue * N;
    let totalInterest = totalPayment - P;

    setEmi(emiValue.toFixed(0));
    setTotal(totalPayment.toFixed(0));
    setInterest(totalInterest.toFixed(0));
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>EMI Calculator</h1>
          <p>Calculate your monthly loan payments instantly</p>
        </div>

        <button onClick={calculateEMI}>
          Calculate
        </button>
      </div>

      {/* Inputs */}
      <div className="stats-container">

        <div className="stat-card">
          <p>Loan Amount (₹)</p>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500000"
          />
        </div>

        <div className="stat-card">
          <p>Interest Rate (%)</p>
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 12"
          />
        </div>

        <div className="stat-card">
          <p>Tenure (Years)</p>
          <input
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="e.g. 5"
          />
        </div>

      </div>

      {/* Results */}
      {emi && (
        <div className="analytics-section">

          <h2>Results</h2>

          <div className="stats-container">

            <div className="stat-card">
              <p>Monthly EMI</p>
              <h2>₹{emi}</h2>
            </div>

            <div className="stat-card">
              <p>Total Payment</p>
              <h2>₹{total}</h2>
            </div>

            <div className="stat-card">
              <p>Total Interest</p>
              <h2>₹{interest}</h2>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default EmiCalculator;