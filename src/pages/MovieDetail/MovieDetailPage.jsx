import React from "react";
import "./MovieDetailPage.style.css";
import { useMovieDetaileQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import MovieDetailReview from "./components/MovieDetailReview";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useMovieDetaileQuery({ id });
  //console.log("ddd", data);
  return (
    <div
      className="movieDetail-container"
    >
      <div className="backImage" style={{
        backgroundImage:
          "URL(" +
          `https://media.themoviedb.org/t/p/original${data?.backdrop_path}` +
          ")",
      }}></div>
      <div className="dfbox">
        <div className="imgbox">
          <img
            src={`https://media.themoviedb.org/t/p/w1280${data?.poster_path}`}
            alt="poster"
          ></img>
        </div>
        <div className="txtbox">
          <ul className="genre">
            {data?.genres.map((genre, id) => (
              <li>
                {genre.name}
                <span>·</span>
              </li>
            ))}
          </ul>
          <div className="tit">
            <span className={`adult ${data?.adult === "18" ? "" : "all"}`}>
              {data?.adult ? "18" : "All"}
            </span>
            <h1>{data?.title}</h1>
          </div>
          <div className="vote lists">
            <div className="title">평균평점</div><p className="cont">{data?.vote_average.toFixed(1)}</p>
          </div>
          <div className="popular lists">
            <div className="title">인기도</div><p className="cont">{data?.popularity}</p>
          </div>
          <div className="overview lists">
            <div className="title">개봉일</div><p className="cont">{data?.release_date}</p>
          </div>
          <div className="overview lists">
            <div className="title">예산</div><p className="cont">{data?.budget?.toLocaleString()}</p>
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
