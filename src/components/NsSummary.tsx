import type { AgentStore } from "../store";

export function NsSummary({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  let a=JSON.parse(st.ans);
  return (
    <div className="item">
      {a.mac}
    </div>
  );
}