import { agentApi } from "../api/apiSvc";
import type { AgentStore } from "../store";

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
     setState((prevState) => ({
      ...prevState,
      ans: "", // Replace with actual API response when ready,
    }));
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    console.log("Question:", st.qn);

    let data = await agentApi({
      qn: st.qn,
      apiHost: st.apiHost,
      accessToken: st.accessToken,
    }); // Replace with actual API call when ready
   // const words = JSON.stringify(data).split(/([+-])/);
   // let res="";
   // for (let word of words) {
    //  res =res+" "+word;
      setState((prevState) => ({
      ...prevState,
      ans:JSON.stringify(data), // Replace with actual API response when ready,
    }));
   //   await sleep(5); // Pause for 150ms between words
   // }

   
  };
  return (
    <div className="item">
      <button onClick={handleClick}>{title}</button>
    </div>
  );
}
