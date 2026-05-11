import { agentApi, agentResume } from "../api/apiSvc";
import type { AgentStore } from "../store";

export function NSbutton({
  title,
  st,
  setState,
  handleClick,
}: {
  title: string;
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {

  return (
   
     <div  className="i-item-2">
      <button type="button" className="btn btn-secondary" onClick={handleClick}>{title}</button>
      </div>
    
  );
}
