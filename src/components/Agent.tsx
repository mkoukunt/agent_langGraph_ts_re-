import React from "react";

import { NSbutton } from "./Button";

import { NSTextArea } from "./TextArea";
import { NSPara } from "./Para";
import { NSInput } from "./Input";
import type { AgentStore } from "../store";
 export function Agent({  title: string }) {
  const [state, setState] = React.useState<AgentStore>({  apiHost: '', accessToken: '' , qn: '', ans: ''});
  return (
    <div> 
      <NSInput  label="Api Host" inputName="apiHost" st={state} setState={setState} />  
      <NSInput  label="Access Token" inputName="accessToken" st={state} setState={setState} />  
      <NSInput  label="Question" inputName="qn" st={state} setState={setState} />  
      <NSTextArea  st={state} setState={setState}/>
      <NSbutton   title='Generate' st={state} setState={setState} />
      <NSPara st={state} setState={setState}/>
    </div>
    
  );
}