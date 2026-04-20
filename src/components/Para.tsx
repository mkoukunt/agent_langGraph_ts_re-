import type { AgentStore } from "../store";

export function NSPara({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  return (
    <div className="item">
     {st.ans}
    </div>
  );
}
