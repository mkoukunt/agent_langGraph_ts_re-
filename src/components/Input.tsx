import type { AgentStore } from "../store";

 export function NSInput({ label ,inputName,st,setState,placeholder   }: { label: string; inputName: string; st: AgentStore; setState: React.Dispatch<React.SetStateAction<AgentStore>>; placeholder: string }) {

  function onchange(event: React.ChangeEvent<HTMLInputElement>) {    
    setState(prevState => ({ ...prevState, [inputName]: event.target.value }));
  }
  return (
    <div className="item">
      <label >{label}</label>
  <input type="text" name={inputName}   onChange={onchange}      placeholder={placeholder} style={{ width: '400px', height: '50px' }} />
  </div>
  );
}