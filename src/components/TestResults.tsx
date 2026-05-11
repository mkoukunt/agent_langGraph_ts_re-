import React from "react";
import type { AgentStore } from "../store";
import { NSbutton } from "./Button";
import { NSInput } from "./Input";

import { fetchApi } from "../api/apiSvc";
import { NSSearchTable } from "./NsSearchTable";
import { NsNavigation } from "./NsNavigation";
import { NSDetailTable } from "./NsDetailTable";

export function TestResults() {

  const [state, setState] = React.useState<AgentStore>({
      apiHost: "",
      accessToken: "",
      qn: "",
      ans: "",
     
    });

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setState((prevState) => ({
      ...prevState,
      search: "", // Replace with actual API response when ready,
    }));  

    let data: any = await fetchApi({
      qn: state.qn,
     tId: crypto.randomUUID(),
    }); // Replace with actual API call when ready

  console.log("+++++++", JSON.stringify(data));
   

    setState((prevState) => ({
      ...prevState,
      search: JSON.stringify(data), // Replace with actual API response when ready,
    }));
    //   await sleep(5); // Pause for 150ms between words
    // }
  };




  return (
    <div className="container">
      <div className="item">
      <div className="i-container">
        <NsNavigation   st={state} setState={setState} /> 
        <NSInput
          inputName="qn"
          st={state}
          setState={setState}
          placeholder="enter instruction"
        />
        <NSbutton title="Fetch" st={state} setState={setState} handleClick={handleClick}/>
        <NSSearchTable st={state} setState={setState} />
     
      </div>
    </div>
    </div>
  );
}
