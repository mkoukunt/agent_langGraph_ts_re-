import type { AgentStore } from "../store";

export function NsSummary({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  let mac="";
  mac=st.ans ?JSON.parse(st.ans).mac:"";
  return ( 
    <div className="item">
      <span>{mac}</span>
      <span>{mac}</span>
    </div>
  );
}