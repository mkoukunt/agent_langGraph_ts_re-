import { StateGraph, START, END, interrupt } from "@langchain/langgraph/web";
import { fetchData, findApi, getreasoning } from "./apiSvc";
// 1. Define the Graph State
// This represents the "memory" that flows between nodes.
const graphState = {
  messages: {
    value: (x, y) => x.concat(y),
    default: () => [],
  },
};

// 2. Define a Node
// A node is just a function that takes the current state and returns an update.
const reasoningNode = async (state) => {  
  interrupt({}); // This will stop the graph execution until we call resume() from the UI.
   let data;
   data  = await getreasoning(state['messages'][0]['content']);  
   data=data.slice(3);
  return { 
    messages: [{ role: "reasoning", content: data }] 
  };
};

const findApiNode = async (state) => {  
   let data;
   data  = await findApi(state['messages'][1]['content']);  
  return { 
    messages: [{ role: "findApi", content: data }] 
  };
};

const findDataNode = async (state) => {  
  
   let data;
   console.log("DATA ============",state)
   data  = await fetchData(state['messages'][2]['content'].split(" ")[1],state['messages'][0]['apiHost'], state['messages'][0]['accessToken']);
  
  return { 
    messages: [{ role: "findData", content: data }] 
  };
};


// 3. Construct the Graph
const workflow = new StateGraph({ channels: graphState })
  .addNode("reasoning", reasoningNode) 
  .addNode("findApi", findApiNode) 
   .addNode("fetchData", findDataNode) 
  .addEdge(START, "reasoning")   
   .addEdge("reasoning", "findApi") 
    .addEdge("findApi", "fetchData")           
  .addEdge("fetchData", END);         

  export const helloWorldGraph = workflow.compile();