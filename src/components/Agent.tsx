import { NSbutton } from "./Button";

import { NSTextArea } from "./TextArea";
import { NSPara } from "./Para";
 export function Agent({ title }: { title: string }) {
  return (
    <div>        
        <NSTextArea />
        <NSbutton title='Generate'/>
        <NSPara />
    </div>
    
  );
}