import React from "react";
import { Alert } from "bootstrap";
import { useUpComingMoviesQuery } from "../../../../hooks/userUpComingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const UpComingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  return (
    <div className="Wrap popularMovieSlide">
      <MovieSlider title="개봉예정 영화" movies={data.results} />
    </div>
  );
};

export default UpComingMovieSlide;
