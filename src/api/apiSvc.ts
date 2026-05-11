

export const agentApi = async (b: { qn: string, apiHost: string, accessToken: string,tId:string }): Promise<string> => {  
  let data:any  = await fetch('/agent', {method:'POST',headers: { 'Content-Type': 'application/json' },body:JSON.stringify(b)}); // Adjust the endpoint as needed  
  data=data.json()
  console.log("========", data)
  return data; // Adjust based on your API response structure
};


export const agentResume = async (b: {tId:string, apiHost: string, accessToken: string,resume_value:boolean }): Promise<string> => {  
  const data  = await fetch('/agent/resume', {method:'POST',headers: { 'Content-Type': 'application/json' },body:JSON.stringify(b)}); // Adjust the endpoint as needed  
  console.log("__________", data)
  return data.json(); // Adjust based on your API response structure
};


export const fetchApi = async (b: { qn: string, tId: string}): Promise<string> => {  
  let data:any  = await fetch('/agent/fetch', {method:'POSt',headers: { 'Content-Type': 'application/json' },body:JSON.stringify(b)}); // Adjust the endpoint as needed  
  data=data.json()
  console.log("========", data)
  return data; // Adjust based on your API response structure
};
