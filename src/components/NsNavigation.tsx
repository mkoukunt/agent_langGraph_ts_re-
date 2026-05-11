import { Link } from "react-router-dom";
import type { AgentStore } from "../store";

export function NsNavigation({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  let mac = "";
  mac = st.ans ? JSON.parse(st.ans).mac : "";
  return (
    <div className="item-nav">
      <nav>
              <Link to="/">Home</Link> {" "}
              <Link to="/searchAI">Reports</Link> {" "}
              <Link to="/contact">Contact</Link>
            </nav>
    </div>
  );
}
