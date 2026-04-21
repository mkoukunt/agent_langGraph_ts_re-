import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '', // Adjust the base URL as needed
  headers: { 'Content-Type': 'application/json' }
});
