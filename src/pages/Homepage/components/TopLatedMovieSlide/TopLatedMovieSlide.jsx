import React from "react";
import { Alert } from "bootstrap";
import { useTopRatedMoviesQuery } from "../../../../hooks/userTopRatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const TopLatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  return (
    <div className="Wrap popularMovieSlide">
      <MovieSlider title="평단의 찬사" movies={data.results} />
    </div>
  );
};

export default TopLatedMovieSlide;
