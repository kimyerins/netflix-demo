import React from "react";
import { useMovieRecommendationsQuery } from "../../../hooks/useMovieRecommendations.js";
import { useParams } from "react-router-dom";
import MovieCard from "../../../common/MovieCard/MovieCard.jsx";

const MovieDetailRecomm = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useMovieRecommendationsQuery({ id });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log("Recomm", data);
  return (
    <div className="recomm_wrap">
      {data?.results.map((movie, index) => (
          <div className="movie_box" key={index}  movie={movie} >
          </div>
        ))}
    </div>
  );
};

export default MovieDetailRecomm;
