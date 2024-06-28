export interface User {
  id: number;
  email: string;
}

export interface Series {
  id: number;
  title: string;
}

export interface Review {
  id: number;
  content: string;
  rating: number;
  user: User;
}

export interface Author {
  id: string;
  name: string;
  books: Book[];
}

export interface Edition {
  id: number;
  isbn10: string;
  isbn13: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  series_order: number;
  authors: Author[];
  editions: Edition[];
  series: Series;
}

// RESPONSES

export interface ReviewsResponse {
  reviews: Review[];
  meta: {
    average_rating: number,
    total_reviews: number
  }
}