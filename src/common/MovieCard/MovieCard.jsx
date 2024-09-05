import React from "react";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
  const navigate = useNavigate();
  const goMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          "URL(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movieCard"
      onClick={goMovieDetail}
    >
      <div className="overlay">
        <h1>{movie?.title}</h1>
        <ul className="genre">
          {showGenre(movie.genre_ids).map((id) => (
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
