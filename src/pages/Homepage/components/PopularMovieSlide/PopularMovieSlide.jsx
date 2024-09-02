import React from "react";
import { Alert } from "bootstrap";
import { usePopularMoviesQuery } from "../../../../hooks/userPopularMovies";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }
  return (
    <div className="Wrap popularMovieSlide">
      <h3>Popular Movies</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          981: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1301: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper popularSlideWrap"
      >
        {data?.results.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie}>slide{index}</MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMovieSlide;
