import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopLatedMovieSlide from "./components/TopLatedMovieSlide/TopLatedMovieSlide";
import UpComingMovieSlide from "./components/UpComingMovieSlide/UpComingMovieSlide";

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여준다.
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopLatedMovieSlide />
      <UpComingMovieSlide />
    </div>
  );
};

export default Homepage;
