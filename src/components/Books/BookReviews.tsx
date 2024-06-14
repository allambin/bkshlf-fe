import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useParams } from 'react-router-dom';
import { getBookReviews, postBookReview } from "../../api/library";
import { Review, ReviewsResponse } from "../../types";
import BookReview from "./BookReview";
import { useAuth } from "../../context/AuthContext";

interface BookReviewsProps {
  onReviewData: (averageRating: number, totalReviews: number) => void;
}

interface ReviewFormState {
  content: string;
}

const BookReviews: React.FC<BookReviewsProps> = ({ onReviewData }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const { isLoggedIn } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ReviewFormState>({ content: '' });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (id) {
        await postBookReview(id, formData);
        await fetchBookReviews(id);
      }
    } catch (err) {
      setError('Review failed');
    }
  };

  const fetchBookReviews = async (id: string) => {
    try {
      const data: ReviewsResponse = await getBookReviews(id);
      setData(data);
      onReviewData(data.average_rating, data.total_reviews);
    } catch (err) {
      console.error('Error fetching book reviews data:', err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBookReviews(id);
    }
  }, [id]);

  return (
    <div className="reviews">
      {data && (
        <>
          {data.reviews.map((review) => (
            <BookReview key={review.id} review={review} />
          ))}
          <div>
            <p>Average Rating: {data.average_rating}</p>
            <p>Total Reviews: {data.total_reviews}</p>
          </div>
        </>
      )}
      { isLoggedIn ? (
        <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea name="content" onChange={handleChange} />
          <input type="number" name="rating" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      ) : (
        <p>Please log in to leave a review</p>
      )}
    </div>
  );
}

export default BookReviews;