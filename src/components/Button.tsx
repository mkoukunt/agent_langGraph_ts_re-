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
    console.log("React button clicked");
    console.log("API Host:", st.apiHost);
    console.log("Access Token:", st.accessToken);
    console.log("Question:", st.qn);

    let {data}=await agentApi({qn: st.qn,apiHost: st.apiHost, accessToken: st.accessToken}); // Replace with actual API call when ready


    setState((prevState) => ({
      ...prevState,
      ans: JSON.stringify({data}), // Replace with actual API response when ready,
    }));
  };
  return (
    <div className="item">
      <button onClick={handleClick}>{title}</button>
    </div>
  );
}
