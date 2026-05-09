import { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {

  // =========================
  // 🟢 STATE (DYNAMIC CARDS)
  // =========================
  const [cards, setCards] = useState([
    { name: "HDFC Regalia", spent: 45000, limit: 100000 },
    { name: "SBI Cashback", spent: 70000, limit: 80000 }
  ]);

  // =========================
  // 🟢 ADD CARD INPUT STATE
  // =========================
  const [name, setName] = useState("");
  const [spent, setSpent] = useState("");
  const [limit, setLimit] = useState("");

  // =========================
  // 🟢 ADD CARD FUNCTION
  // =========================
  const addCard = () => {
    if (!name || !spent || !limit) return;

    const newCard = {
      name,
      spent: Number(spent),
      limit: Number(limit)
    };

    setCards([...cards, newCard]);

    setName("");
    setSpent("");
    setLimit("");
  };

  // =========================
  // 🧠 SMART PLANNER LOGIC
  // =========================
  const getPlannerData = (cards) => {
    return cards
      .map(card => {
        const utilization = card.spent / card.limit;

        return {
          ...card,
          utilization
        };
      })
      .sort((a, b) => b.utilization - a.utilization);
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>CreditWise Dashboard</h1>
          <p>Smart financial management system</p>
        </div>

        <button>Add Card</button>
      </div>

      {/* STATS */}
      <div className="stats-container">

        <div className="stat-card">
          <p>Total Spending</p>
          <h2>₹1,25,000</h2>
        </div>

        <div className="stat-card">
          <p>Credit Limit</p>
          <h2>₹3,00,000</h2>
        </div>

        <div className="stat-card">
          <p>Utilization</p>
          <h2>41%</h2>
        </div>

      </div>

      {/* =========================
          🟢 ADD CARD SECTION
      ========================= */}
      <div className="add-card-section">

        <h2>Add New Card</h2>

        <input
          placeholder="Card Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Spent Amount"
          type="number"
          value={spent}
          onChange={(e) => setSpent(e.target.value)}
        />

        <input
          placeholder="Limit"
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />

        <button onClick={addCard}>
          Add Card
        </button>

      </div>

      {/* =========================
          🟢 CREDIT CARDS
      ========================= */}
      <div className="cards-section">

        <h2>Your Credit Cards</h2>

        <div className="cards-container">

          {cards.map((card, index) => (
            <div key={index} className="credit-card blue-card">

              <div className="card-top">
                <span>{card.name}</span>
                <span>ACTIVE</span>
              </div>

              <div className="card-number">
                **** **** **** {index + 1000}
              </div>

              <div className="card-bottom">

                <div>
                  <p>Spent</p>
                  <h3>₹{card.spent}</h3>
                </div>

                <div>
                  <p>Limit</p>
                  <h3>₹{card.limit}</h3>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* =========================
          🧠 SMART PAYMENT PLANNER
      ========================= */}
      <div className="analytics-section">

        <h2>🧠 Smart Payment Planner</h2>

        {getPlannerData(cards).map((card, index) => (
          <div key={index} className="stat-card">

            <h3>{card.name}</h3>

            <p>
              Utilization: {(card.utilization * 100).toFixed(0)}%
            </p>

            <p>
              Suggested Payment: ₹{Math.round(card.spent * 0.4)}
            </p>

            <p>
              Priority Rank: #{index + 1}
            </p>

            <p>
              {card.utilization > 0.7
                ? "🔴 Pay First (High Risk)"
                : card.utilization > 0.4
                ? "🟡 Medium Risk"
                : "🟢 Safe Card"}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;