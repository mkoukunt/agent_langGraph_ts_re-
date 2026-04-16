import type { AgentStore } from "../store";

 export function NSTextArea({st, setState }: { st: AgentStore; setState: React.Dispatch<React.SetStateAction<AgentStore>> }) {
  function onchange(event: React.ChangeEvent<HTMLTextAreaElement>) { setState(prevState => ({ ...prevState, qn: event.target.value }))}
  return (
   <textarea rows={10} cols={50} name="qn" ></textarea>
  );
}