import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Analytics from "./pages/Analytics";
import EmiCalculator from "./pages/EmiCalculator";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/emi" element={<EmiCalculator />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;