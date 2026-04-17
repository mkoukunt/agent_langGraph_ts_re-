 import {getreasoning} from '../api/apiSvc';
import type { AgentStore } from '../store';
import { helloWorldGraph } from '../api/graph';

const graphState = {
  messages: {
    value: (x, y) => x.concat(y),
    default: () => [],
  },
};

 export function NSbutton({  title, st, setState }: {title: string, st: AgentStore, setState: React.Dispatch<React.SetStateAction<AgentStore>>}) {
     const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('React button clicked');
        console.log('API Host:', st.apiHost);
        console.log('Access Token:', st.accessToken);
       console.log('Question:', st.qn);
      let data;
      data  = await getreasoning(st.qn);
      setState(prevState => ({ ...prevState, "ans": data }));
      const result = await helloWorldGraph.invoke({
  messages: [{ role: "user", content: st.qn }],
});
           console.log("\n=====START======");
  console.log("Graph result: ", result);
  console.log("\n=====END======");
    };
  return (
    <button onClick={handleClick}>{title}</button>
  );
}