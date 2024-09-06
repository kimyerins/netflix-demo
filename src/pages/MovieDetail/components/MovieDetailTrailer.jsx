import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useVideoMovieQuery } from "../../../hooks/useVideoMovies";


const MovieDetailTrailer = () => {
  const {id} = useParams();
  const { data } = useVideoMovieQuery({id});
  console.log("mmm", data);

  return (
    <div className="Wrap video-wrap">
       <YouTube
          videoId={data?.results?.[0].key}
        />
    </div>
  );
};

export default MovieDetailTrailer;
