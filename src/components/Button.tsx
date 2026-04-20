import { getreasoning } from "../api/apiSvc";
import type { AgentStore } from "../store";
import { helloWorldGraph } from "../api/graph";

const graphState = {
  messages: {
    value: (x, y) => x.concat(y),
    default: () => [],
  },
};

export function NSbutton({
  title,
  st,
  setState,
}: {
  title: string;
  st: AgentStore;
  setState: React.Dispatch<React.SetStateAction<AgentStore>>;
}) {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("React button clicked");
    console.log("API Host:", st.apiHost);
    console.log("Access Token:", st.accessToken);
    console.log("Question:", st.qn);
    const result = await helloWorldGraph.invoke({
      messages: [{ role: "user", content: st.qn, apiHost:st.apiHost, accessToken: st.accessToken }],
    });
    console.log("\n=====START======");
    console.log("Graph result: ", result);
    console.log("\n=====END======");
    console.log(result["messages"][3]["content"]);
    setState((prevState) => ({
      ...prevState,
      ans: JSON.stringify(result["messages"][3]["content"]),
    }));
  };
  return (
    <div className="item">
      <button onClick={handleClick}>{title}</button>
    </div>
  );
}
