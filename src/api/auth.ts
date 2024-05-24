import axios from 'axios';

const API_URL = "http://localhost:8080";

interface UserData {
  email: String;
  password: String;
}

export const register = async (userData: UserData): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const login = async (userData: UserData): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/auth`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}