import type { AgentStore } from "../store";

export function NSSearchTable({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  console.log("1111", st);
  
  let records=typeof st.search=='string' &&  st.search !="" ?JSON.parse(st.search):st.search;
  return (
    <div className="item-ai-srch-tbl">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Statu1s</th>
            <th scope="col">Override</th>
             <th scope="col">Server</th>            
            <th scope="col">Expected value</th>
            <th scope="col">Actual value</th>
          </tr>
        </thead>
        <tbody>

          {records && records.map((item, index) => (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
               <td style={{ color: item.result === 'found' ? 'green' : 'red' }} >{item.result}</td>
              <td>{item.mac}</td>
              <td>{item.brand}</td>             
              <td>{item.model}</td>
              <td>{item.model}</td>
            </tr>
          ))}      
       
        </tbody>
      </table>
    </div>
  );
}
