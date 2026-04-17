import { apiClient, nsApiClient } from './apiClient';

export const getreasoning = async (qn:string): Promise<string> => {
  console.log('qn is', qn);
  const { data } = await apiClient.post<string>('/reasoning',{question:{qn}}); // Adjust the endpoint as needed
  console.log('data is', data);
  return {data}.data; // Adjust based on your API response structure
};

export const findApi = async (qn:string): Promise<string> => {  
  const { data } = await apiClient.post<string>('/findApi',{question:{qn}}); // Adjust the endpoint as needed  
  return {data}.data; // Adjust based on your API response structure
};

export const fetchData = async (path:string): Promise<string> => {
  
  const { data } = await nsApiClient.get<string>('/fetchData'+path); 
  console.log(data)
  return {data}.data; // Adjust based on your API response structure
};