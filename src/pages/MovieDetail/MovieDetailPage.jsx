import React, { useState } from "react";
import "./MovieDetailPage.style.css";
import { useMovieDetaileQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import MovieDetailReview from "./components/MovieDetailReview";
import MovieDetailTrailer from "./components/MovieDetailTrailer";
import MovieDetailRecomm from "./components/MovieDetailRecomm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useMovieDetaileQuery({ id });
  const [activeTab, setActiveTab] = useState("reviews");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "reviews":
        return <MovieDetailReview />;
      case "trailers":
        return <MovieDetailTrailer />;
      case "recomm":
        return <MovieDetailRecomm />;
      default:
        return null;
    }
  };
  return (
    <div className="movieDetail-container">
      <div
        className="backImage"
        style={{
          backgroundImage:
            "URL(" +
            `https://media.themoviedb.org/t/p/original${data?.backdrop_path}` +
            ")",
        }}
      ></div>
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
            <div className="title">평균평점</div>
            <p className="cont">{data?.vote_average.toFixed(1)}</p>
          </div>
          <div className="popular lists">
            <div className="title">인기도</div>
            <p className="cont">{data?.popularity}</p>
          </div>
          <div className="date lists">
            <div className="title">개봉일</div>
            <p className="cont">{data?.release_date}</p>
          </div>
          <div className="budget lists">
            <div className="title">예산</div>
            <p className="cont">{data?.budget?.toLocaleString()}</p>
          </div>
          <div className="overview">
            <h4>줄거리</h4>
            <p>{data?.overview}</p>
          </div>
        </div>
      </div>
      <div className="datail_bottom">
        <div className="tabs">
          <div
            onClick={() => handleTabClick("reviews")}
            className={`btn ${activeTab === "reviews" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faFeatherAlt} size="2x" />
            <p>리뷰</p>
          </div>
          <div
            onClick={() => handleTabClick("trailers")}
            className={`btn ${activeTab === "trailers" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faPlay} size="2x" />
            <p>예고편</p>
          </div>
          <div
            onClick={() => handleTabClick("recomm")}
            className={`btn ${activeTab === "recomm" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faVideo} size="2x" />
            <p>추천영화</p>
          </div>
        </div>
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
