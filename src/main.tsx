import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Agent } from "./components/Agent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Agent title="Agent" />
  </StrictMode>,
);
