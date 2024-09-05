import React, { useState } from "react";
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";
import { useParams } from "react-router-dom";

const MovieDetailReview = ({ movieId }) => {
  const { data, isError, isLoading, error } = useMovieReviewQuery({
    id: movieId,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const reviews = data.results || [];
  //console.log("ss", reviews);
  console.log("review", reviews);
  return (
    <div>
      <h3>reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>Author: {review.author}</strong>
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
