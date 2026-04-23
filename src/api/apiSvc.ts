import { apiClient } from './apiClient';

export const agentApi = async (b: { qn: string, apiHost: string, accessToken: string }): Promise<string> => {  
  const data  = await fetch('/agent', {method:'POST',headers: { 'Content-Type': 'application/json' },body:JSON.stringify(b)}); // Adjust the endpoint as needed  
  
  return data.json(); // Adjust based on your API response structure
};

