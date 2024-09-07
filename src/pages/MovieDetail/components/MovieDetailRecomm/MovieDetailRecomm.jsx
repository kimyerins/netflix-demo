import React from "react";
import { useMovieRecommendationsQuery } from "../../../../hooks/useMovieRecommendations.js";
import { useParams } from "react-router-dom";
import MovieDetailRecommSlider from "./MovieDetailRecommSlider.jsx";
import "./MovieDetailRecomm.style.css";

const MovieDetailRecomm = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useMovieRecommendationsQuery({
    id,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log("Recomm", data);
  return (
    <div className="recomm_wrap">
      <div className="movie_box">
        <MovieDetailRecommSlider title={"추천영화"} movies={data.results} />
      </div>
    </div>
  );
};

export default MovieDetailRecomm;
