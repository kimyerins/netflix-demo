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
      <div className="overlay">
        <h1>{movie.title}</h1>
        <ul className="genre">
          {movie.genre_ids.map((id) => (
            <li>
              {id}
              <span>·</span>
            </li>
          ))}
        </ul>
        <div className="vote">
          <span>평균평점 :</span> {movie.vote_average.toFixed(1)}
        </div>
        <div className="popular">
          <span>인기도 :</span> {movie.popularity}
        </div>
        <div className={`adult ${movie.adult === "18" ? "" : "all"}`}>
          {movie.adult ? "18" : "All"}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
