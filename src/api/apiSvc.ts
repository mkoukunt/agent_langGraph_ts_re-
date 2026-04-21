import { apiClient } from './apiClient';

export const agentApi = async (b: { qn: string, apiHost: string, accessToken: string }): Promise<string> => {  
  const { data } = await apiClient.post<{}>('/agent', b); // Adjust the endpoint as needed  
  return {data}.data; // Adjust based on your API response structure
};

