import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useVideoMovieQuery } from "../../../../hooks/useVideoMovies";
import { Alert } from "bootstrap";

const MovieDetailTrailer = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useVideoMovieQuery({ id });
  console.log("mmm", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div className="Wrap video-wrap">
      <YouTube videoId={data?.results?.[0].key} />
    </div>
  );
};

export default MovieDetailTrailer;
