import type { AgentStore } from "../store";

 export function NSInput({ label ,inputName,st,setState    }: { label: string; inputName: string; st: AgentStore; setState: React.Dispatch<React.SetStateAction<AgentStore>> }) {

  function onchange(event: React.ChangeEvent<HTMLInputElement>) {    
    setState(prevState => ({ ...prevState, [inputName]: event.target.value }));
  }
  return (
    <div>
      <label >{label}</label>
  <input type="text" name={inputName}   onChange={onchange}      placeholder="Enter your question here" style={{ width: '400px', height: '50px' }} />
  </div>
  );
}