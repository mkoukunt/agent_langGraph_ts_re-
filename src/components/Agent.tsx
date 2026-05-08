import React from "react";

import { NSbutton } from "./Button";

import { NSTextArea } from "./TextArea";
import { NSPara } from "./Para";
import { NSInput } from "./Input";
import type { AgentStore } from "../store";
import { NSTable } from "./NsTable";
import { NsSummary } from "./NsSummary";
import { NsNavigation } from "./NsNavigation";
export function Agent({ title: string }) {
  const [state, setState] = React.useState<AgentStore>({
    apiHost: "",
    accessToken: "",
    qn: "",
    ans: "",
  });
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
            <NSbutton title="Validate" st={state} setState={setState} />
          </div>
          {/*<NsSummary   st={state} setState={setState} />  
      <NSTable st={state} setState={setState}/>  */}
        </div>
      </div>
   
  );
}
