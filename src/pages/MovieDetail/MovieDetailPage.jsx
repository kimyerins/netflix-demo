import React from "react";
import "./MovieDetailPage.style.css";
import { useMovieDetaileQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import MovieDetailReview from "./components/MovieDetailReview";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useMovieDetaileQuery({ id });
  console.log("ddd", data);
  return (
    <div
      className="movieDetail-container"
      style={{
        backgroundImage:
          "URL(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.backdrop_path}` +
          ")",
      }}
    >
      <div className="dfbox">
        <div className="imgbox">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
            alt="poster"
          ></img>
        </div>
        <div className="txtbox">
          <h1>{data?.title}</h1>
          <ul className="genre">
            {data?.genres.map((genre, id) => (
              <li>
                {genre.name}
                <span>·</span>
              </li>
            ))}
          </ul>
          <div className="vote">
            <span>평균평점 :</span> {data?.vote_average.toFixed(1)}
          </div>
          <div className="popular">
            <span>인기도 :</span> {data?.popularity}
          </div>
          <div className={`adult ${data?.adult === "18" ? "" : "all"}`}>
            {data?.adult ? "18" : "All"}
          </div>
          <div className="overview">
            <p>{data?.release_date}</p>
          </div>
          <div className="overview">
            <p>{data?.budget?.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className="review_wrap">
        <MovieDetailReview movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
