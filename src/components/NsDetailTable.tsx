import type { AgentStore } from "../store";

export function NSDetailTable({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
 
  
  let records=typeof st.search=='string' &&  st.search !="" ?JSON.parse(st.search):st.search;
  return (
    <div className="item-ai-dtl-tbl">
      
      <table className="table table-sm">
        {records && records.length > 0 && (
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Status</th>
              <th scope="col">Mac</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Actual value</th>
            </tr>
          </thead>
        )}
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
