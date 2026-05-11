import React from "react";

import { NSbutton } from "./Button";

import { NSTextArea } from "./TextArea";
import { NSPara } from "./Para";
import { NSInput } from "./Input";
import type { AgentStore } from "../store";
import { NSTable } from "./NsTable";
import { NsSummary } from "./NsSummary";
import { NsNavigation } from "./NsNavigation";
import { agentApi } from "../api/apiSvc";
export function Agent({ title: string }) {
  const [state, setState] = React.useState<AgentStore>({
    apiHost: "",
    accessToken: "",
    qn: "",
    ans: "",
  });

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setState((prevState) => ({
      ...prevState,
      ans: "", // Replace with actual API response when ready,
    }));
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    console.log("Question:", state.qn);

    let data: any = await agentApi({
      qn: state.qn,
      apiHost: state.apiHost,
      accessToken: state.accessToken,
      tId: crypto.randomUUID(),
    }); // Replace with actual API call when ready
    // const words = JSON.stringify(data).split(/([+-])/);
    // let res="";
    // for (let word of words) {
    //  res =res+" "+word;
   console.log("+++++++", JSON.stringify(data));
    if (data.interrupted) {
      console.log(data.id);
      data = await agentResume({
        tId: data.thread_id,
        apiHost: st.apiHost,
        accessToken: st.accessToken,
        resume_value: true,
      });
    }    

    setState((prevState) => ({
      ...prevState,
      ans: JSON.stringify(data), // Replace with actual API response when ready,
    }));
    //   await sleep(5); // Pause for 150ms between words
    // }
  };








  return (
    <div className="container">
       
      {/*<NSInput  label="Api Host" inputName="apiHost" st={state} setState={setState} placeholder="enter Api Host"/>  
      <NSInput  label="Access Token" inputName="accessToken" st={state} setState={setState} placeholder="enter Access Token"/>  */}
      <div className="item">
        <div className="i-container">
          <NsNavigation   st={state} setState={setState} />           
            <NSInput              
              inputName="qn"
              st={state}
              setState={setState}
              placeholder="enter instruction"
            />
            <NSbutton title="Validate" st={state} setState={setState}  handleClick={handleClick}/>
          </div>
          {/*<NsSummary   st={state} setState={setState} />  
      <NSTable st={state} setState={setState}/>  */}
        </div>
      </div>
   
  );
}
