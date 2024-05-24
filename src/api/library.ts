import api from './api';

const API_URL = "http://localhost:8080";

export const getLibrary = async (): Promise<any> => {
  try {
    const response = await api.get(`${API_URL}/library`);
    return response.data;
  } catch (error) {
    throw error;
  }
}