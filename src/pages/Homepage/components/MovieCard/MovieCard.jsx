import React from "react";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "URL(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movieCard"
    >
      <div>
        <h1>{movie.title}</h1>
        <ul>
          {movie.genre_ids.map((id) => (
            <li>{id}</li>
          ))}
        </ul>
        <div>{movie.vote_average}</div>
        <div>{movie.popularity}</div>
        <div>{movie.adult ? "over18" : "under18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
