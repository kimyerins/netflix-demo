import React, { useEffect, useState } from "react";
import { Alert } from "bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.style.css";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const { id } = useParams();
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const [filter, setFilter] = useState("high");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const genreParam = query.get("genre");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const { data: genre } = useMovieGenreQuery({ id });
  useEffect(() => {
    setPage(1);
  }, [genreParam]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    navigate(`/movies?genre=${genreId}`);
    setPage(1);
  };
  const navigate = useNavigate();
  const filteredItems = data?.results
    ? data.results.filter(
        (movie) => !genreParam || movie.genre_ids.includes(selectedGenre)
      )
    : [];
  const sortedItems = filteredItems.sort((a, b) => {
    if (filter === "high") {
      return b.popularity - a.popularity;
    } else {
      return a.popularity - b.popularity;
    }
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  console.log("qqq", data);
  return (
    <div className="movieContainer">
      <div className="left">
        <ul className="genre_list">
          {genre?.map((genre) => (
            <li
              className={selectedGenre === genre.id ? "active" : ""}
              onClick={() => handleGenreClick(genre.id)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <div className="moviePaging">
          <DropdownButton
            id="dropdown-basic-button"
            value={filter}
            title={filter === "high" ? "인기도 높음" : "인기도 낮음"}
            onChange={(event) => setFilter(event.target.value)}
          >
            <Dropdown.Item onClick={() => setFilter("high")}>
              인기도 높음
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("low")}>
              인기도 낮음
            </Dropdown.Item>
          </DropdownButton>
          <div className="movieList">
            {keyword && filteredItems.length === 0 && (
              <p>{keyword}에대한 검색값이 없습니다.</p>
            )}
            {genreParam && filteredItems.length === 0 && (
              <p>선택한 장르의 영화가 없습니다.</p>
            )}
            {sortedItems.map((movie, index) => (
              <div className="movie_box" key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} //전체페이지
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
