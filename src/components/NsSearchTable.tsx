import React from "react";
import type { AgentStore } from "../store";

export function NSSearchTable({
  st,
  setState,
}: {
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  const [selected, setSelected] = React.useState<any | null>(null);

  let records =
    typeof st.search == "string" && st.search != ""
      ? JSON.parse(st.search)
      : st.search;

  const handleRowClick = (item: any, index: number) => {
    console.log("row clicked", index, item);
    setSelected(item);
    
  };

  const handleClose = () => setSelected(null);

  return (
    <div className="item-ai-srch-tbl">
      <table className="table">
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
          {records &&
            records.map((item, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleRowClick(item, index)}
              >
                <td scope="row">{index + 1}</td>
                <td
                  style={{ color: item.result === "found" ? "green" : "red" }}
                >
                  {item.result}
                </td>
                <td>{item.mac}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.model}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {selected && (
        <>
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{ width: "1000px" }}>
                <div className="modal-header">
                  <h5 className="modal-title">Row Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div
                  className="modal-body"
                  style={{ height: "500px",overflowY: "auto" }}
                >
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>  
                         <th scope="col">Name</th> 
                         <th scope="col">Server</th> 
                        <th scope="col">Expected value</th>                     
                        <th scope="col">Actual value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(selected.results) &&
                        selected.results.map((item: any, index: number) => (
                          <tr key={index}>
                            <td scope="row">{index + 1}</td>
                            <td
                              style={{
                                color: item.result === "found" ? "green" : "red",
                              }}
                            >
                              {item.result}
                            </td>
                            <td>{item.name}</td>
                            <td>{item.server}</td>
                            <td>{item.expValue}</td>
                            <td>{item.line}</td>                          
                           
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleClose}></div>
        </>
      )}
    </div>
  );
}
