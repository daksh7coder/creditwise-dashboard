import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">CreditWise</h2>

      <nav className="nav">

        <NavLink to="/" className="link">Dashboard</NavLink>
        <NavLink to="/cards" className="link">Cards</NavLink>
        <NavLink to="/analytics" className="link">Analytics</NavLink>
        <NavLink to="/emi" className="link">EMI Calculator</NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;