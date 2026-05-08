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
      <ul>
        <li>nav1</li>
        <li>nav2</li>
        <li>nav3</li>
      </ul>
    </div>
  );
}
