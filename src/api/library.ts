import { Book, Review, ReviewsResponse } from '../types';
import api from './api';

// todo rename!

const API_URL = "http://localhost:8080";

export const getLibrary = async (): Promise<any> => {
  try {
    const response = await api.get(`${API_URL}/library`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getBook = async (id: String): Promise<Book> => {
  try {
    const response = await api.get(`${API_URL}/books/${id}`);
    return response.data as Book;
  } catch (error) {
    throw error;
  }
}

export const getBookReviews = async (id: String): Promise<ReviewsResponse> => {
  try {
    const response = await api.get(`${API_URL}/books/${id}/reviews`);
    return response.data as ReviewsResponse;
  } catch (error) {
    throw error;
  }
}