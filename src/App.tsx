import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { Agent } from "./components/Agent";

function App() {
  return ( 
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Agent title="Agent" />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
