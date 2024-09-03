import React from "react";
import { Alert } from "bootstrap";
import { useVideoMovieQuery } from "../../../../../hooks/useVideoMovies";
import { ReactPlayer } from "react-player";

const VideoMovie = (movie_id) => {
  const { data, videos, isLoading, isError, error } =
    useVideoMovieQuery(movie_id);
  console.log("mmm", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  const video = videos[movie_id];
  const videoUrl = `https://www.youtube.com/watch?v=${video.key}`;
  return (
    <div className="Wrap video-wrap">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default VideoMovie;
