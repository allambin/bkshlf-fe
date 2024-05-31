import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBookReviews } from "../../api/library";
import { Review, ReviewsResponse } from "../../types";
import BookReview from "./BookReview";

interface BookReviewsProps {
  onReviewData: (averageRating: number, totalReviews: number) => void;
}

const BookReviews: React.FC<BookReviewsProps> = ({ onReviewData }) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBookReviews = async (id: string) => {
        try {
          const data: ReviewsResponse = await getBookReviews(id);
          setData(data);
          onReviewData(data.average_rating, data.total_reviews);
        } catch (err) {
          console.error('Error fetching book reviews data:', err);
        }
      };
  
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
    </div>
  );
}

export default BookReviews;