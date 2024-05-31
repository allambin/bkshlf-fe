import React, { useState } from 'react';
import BookDetails from '../components/Books/BookDetails';
import BookReviews from '../components/Books/BookReviews';

const BookDetailsPage = () => {
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);

  const handleReviewData = (averageRating: number, totalReviews: number) => {
    setAverageRating(averageRating);
    setTotalReviews(totalReviews);
  };

  return <div>
    <BookDetails averageRating={averageRating} totalReviews={totalReviews} />
    <BookReviews onReviewData={handleReviewData} />
    </div>;
};

export default BookDetailsPage;