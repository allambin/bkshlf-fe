import { Author } from '../types';
import api from './api';

const API_URL = "http://localhost:8080/api";

export const getAuthor = async (id: String): Promise<Author> => {
  try {
    const response = await api.get(`${API_URL}/authors/${id}`);
    return response.data.author as Author;
  } catch (error) {
    throw error;
  }
}