import React, { useState } from "react";
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";
import { useParams } from "react-router-dom";
import { Alert } from "bootstrap";

const MovieDetailReview = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useMovieReviewQuery({ id });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const reviews = data.results || [];

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div className="review_wrap">
      <h3>리뷰</h3>
      {reviews.length === 0 ? (
        <p>리뷰가 존재하지 않습니다.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieDetailReview;
