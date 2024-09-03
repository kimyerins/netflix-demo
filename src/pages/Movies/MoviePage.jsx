import React from "react";
import { Alert } from "bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.style.css";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  console.log("qqq", data);
  return (
    <div className="movieContainer">
      <div className="left">필터</div>
      <div className="right">
        {data?.results.map((movie, index) => (
          <div className="movie_box" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
