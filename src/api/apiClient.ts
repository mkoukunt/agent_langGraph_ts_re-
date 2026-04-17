import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '', // Replace with your API base URL
  headers: { 'Content-Type': 'application/json' }
});

export const nsApiClient = axios.create({
  baseURL: '', // Replace with your API base URL
 
});