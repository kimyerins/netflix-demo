import React, { useState, useEffect } from "react";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import { useParams } from "react-router-dom";
import { Alert } from "bootstrap";
import "./MovieDetailReview.style.css";

const MovieDetailReview = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useMovieReviewQuery({ id });

  const reviews = data?.results || [];

  const [expandedStates, setExpandedStates] = useState(
    reviews.map(() => false)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <Alert varient="danger">{error.message}</Alert>;

  const toggleExpand = (index) => {
    setExpandedStates((prevExpandedStates) => {
      const newExpandedStates = [...prevExpandedStates];
      newExpandedStates[index] = !newExpandedStates[index]; // 클릭된 인덱스의 상태만 토글합니다.
      return newExpandedStates;
    });
  };

  return (
    <div className="review_wrap">
      <h3>리뷰</h3>
      {reviews.length === 0 ? (
        <p>리뷰가 존재하지 않습니다.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => {
            const isExpanded = expandedStates[index];
            const content = review.content;
            const contentPreview = content.slice(0, 200);
            const isLongContent = content.length > 200;

            return (
              <li key={review.id} className="review-item">
                <h4>{review.author}</h4>
                <p className="review-content">
                  {isExpanded ? content : contentPreview}
                  {isLongContent && !isExpanded && "..."}
                </p>
                {isLongContent && (
                  <button onClick={() => toggleExpand(index)}>
                    {isExpanded ? "접기" : "더보기"}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieDetailReview;
