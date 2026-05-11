import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { Agent } from "./components/Agent";
import { TestResults } from "./components/TestResults";

function App() {
  return ( 
    <BrowserRouter>
      {/* Navigation */}
    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Agent title="Agent" />} />       
        <Route path="/searchAI" element={<TestResults  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
