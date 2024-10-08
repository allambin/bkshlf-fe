import React from "react";
import { Review } from "../../types";

interface Props {
  review: Review;
}

const BookReviews: React.FC<Props> = ({ review }) => {
  return (
    <div className="review">
      <p>Content: {review?.content}</p>
      <p>Rating: {review?.rating}</p>
    </div>
  );
}

export default BookReviews;