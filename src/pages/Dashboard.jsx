import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">
        <div>
          <h1>CreditWise Dashboard</h1>
          <p>Smart financial management system</p>
        </div>

        <button>Add Card</button>
      </div>

      {/* Welcome Banner */}

      <div className="welcome-banner">

        <div>
          <h2>Welcome back, Daksh 👋</h2>

          <p>
            Track your spending, optimize your credit usage,
            and make smarter financial decisions.
          </p>
        </div>

        <div className="banner-circle">
          41%
        </div>

      </div>

      {/* Stats Section */}

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

      {/* Credit Cards Section */}

      <div className="cards-section">

        <h2>Your Credit Cards</h2>

        <div className="cards-container">

          <div className="credit-card blue-card">

            <div className="card-top">
              <span>HDFC Regalia</span>
              <span>ACTIVE</span>
            </div>

            <div className="card-number">
              **** **** **** 4582
            </div>

            <div className="card-bottom">

              <div>
                <p>Balance</p>
                <h3>₹45,000</h3>
              </div>

              <div>
                <p>Limit</p>
                <h3>₹1,00,000</h3>
              </div>

            </div>

          </div>

          <div className="credit-card purple-card">

            <div className="card-top">
              <span>SBI Cashback</span>
              <span>ACTIVE</span>
            </div>

            <div className="card-number">
              **** **** **** 8124
            </div>

            <div className="card-bottom">

              <div>
                <p>Balance</p>
                <h3>₹30,000</h3>
              </div>

              <div>
                <p>Limit</p>
                <h3>₹80,000</h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;