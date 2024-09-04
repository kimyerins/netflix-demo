import React from "react";
//import { Alert } from "bootstrap";
import { useVideoMovieQuery } from "../../../../../hooks/useVideoMovies";
import { ReactPlayer } from "react-player";
//import YouTube from "react-youtube";

const VideoMovie = (movieId) => {
  const { data, videos } = useVideoMovieQuery(movieId);
  console.log("mmm", data);
  const video = videos[movieId];
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
