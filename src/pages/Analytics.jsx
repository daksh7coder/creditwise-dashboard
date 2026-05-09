import "../styles/Dashboard.css";

function Analytics() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Analytics</h1>
          <p>Track your spending behavior and insights</p>
        </div>

        <button>Export Report</button>
      </div>

      {/* Summary Cards */}
      <div className="stats-container">

        <div className="stat-card">
          <p>Total Spent This Month</p>
          <h2>₹1,25,000</h2>
        </div>

        <div className="stat-card">
          <p>Highest Category</p>
          <h2>Shopping</h2>
        </div>

        <div className="stat-card">
          <p>Avg Daily Spend</p>
          <h2>₹4,200</h2>
        </div>

      </div>

      {/* Fake Chart Section (visual placeholder) */}
      <div className="analytics-section">

        <h2>Spending Trend</h2>

        <div className="chart-card">

          <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", height: "200px" }}>

            <div style={{ width: "40px", height: "80px", background: "#3b82f6", borderRadius: "8px" }}></div>
            <div style={{ width: "40px", height: "120px", background: "#3b82f6", borderRadius: "8px" }}></div>
            <div style={{ width: "40px", height: "60px", background: "#3b82f6", borderRadius: "8px" }}></div>
            <div style={{ width: "40px", height: "150px", background: "#3b82f6", borderRadius: "8px" }}></div>
            <div style={{ width: "40px", height: "100px", background: "#3b82f6", borderRadius: "8px" }}></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;