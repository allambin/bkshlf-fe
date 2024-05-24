// src/api/axiosInstance.ts
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_URL = "http://localhost:8080";

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
});

const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Export the function to set the token
export { setAuthToken };

// Request interceptor to add the token to the headers
// api.interceptors.request.use(
//   (config) => {
//     const { token } = useAuth();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
