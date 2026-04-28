import type { AgentStore } from "../store";

export function NSTable({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  
  return (
    <div className="item">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Override</th>
             <th scope="col">Server</th>
            
            <th scope="col">Config Line</th>
          </tr>
        </thead>
        <tbody>

          {st.ans && JSON.parse(st.ans).map((item, index) => (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
               <td style={{ color: item.result === 'found' ? 'green' : 'red' }} >{item.result}</td>
              <td>{item.name}</td>
              <td>{item.server}</td>
             
              <td>{item.line}</td>
            </tr>
          ))}      
       
        </tbody>
      </table>
    </div>
  );
}
