import React, { useState } from "react";
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";
import { useParams } from "react-router-dom";

const MovieDetailReview = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useMovieReviewQuery({ id });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const reviews = data.results || [];
  //console.log("ss", reviews);
  console.log("review", data);
  return (
    <div>
      <h3>리뷰</h3>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>작성자: {review.author}</strong>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieDetailReview;
