import { useState } from "react";
import "../styles/Dashboard.css";

function Cards() {
  const [cards, setCards] = useState([
    {
      name: "HDFC Regalia",
      number: "**** **** **** 4582",
      spent: "₹45,000",
      limit: "₹1,00,000",
      color: "blue",
    },
    {
      name: "SBI Cashback",
      number: "**** **** **** 8124",
      spent: "₹30,000",
      limit: "₹80,000",
      color: "purple",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    spent: "",
    limit: "",
    color: "blue",
  });

  const handleAddCard = () => {
    setCards([...cards, formData]);
    setShowForm(false);
    setFormData({
      name: "",
      number: "",
      spent: "",
      limit: "",
      color: "blue",
    });
  };

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Your Cards</h1>
          <p>Manage all your credit cards</p>
        </div>

        <button onClick={() => setShowForm(true)}>
          Add New Card
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div style={{
          background: "#1a1d26",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "30px"
        }}>

          <input
            placeholder="Card Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            placeholder="Card Number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />

          <input
            placeholder="Spent"
            value={formData.spent}
            onChange={(e) =>
              setFormData({ ...formData, spent: e.target.value })
            }
          />

          <input
            placeholder="Limit"
            value={formData.limit}
            onChange={(e) =>
              setFormData({ ...formData, limit: e.target.value })
            }
          />

          <button onClick={handleAddCard}>
            Save Card
          </button>
        </div>
      )}

      {/* CARDS */}
      <div className="cards-container">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`credit-card ${card.color}-card`}
          >
            <div className="card-top">
              <span>{card.name}</span>
              <span>ACTIVE</span>
            </div>

            <div className="card-number">
              {card.number}
            </div>

            <div className="card-bottom">
              <div>
                <p>Spent</p>
                <h3>{card.spent}</h3>
              </div>
              <div>
                <p>Limit</p>
                <h3>{card.limit}</h3>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Cards;