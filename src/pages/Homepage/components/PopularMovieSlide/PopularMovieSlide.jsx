import React from "react";
import { Alert } from "bootstrap";
import { usePopularMoviesQuery } from "../../../../hooks/userPopularMovies";
import "./PopularMovieSlide.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  return (
    <div className="Wrap popularMovieSlide">
      <MovieSlider title="인기있는 영화" movies={data.results} />
    </div>
  );
};

export default PopularMovieSlide;
