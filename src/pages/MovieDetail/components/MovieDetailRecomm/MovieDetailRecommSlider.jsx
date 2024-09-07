import React from "react";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MovieDetailRecommSlider = ({ title, movies }) => {
  return (
    <div className="movieSlider_container">
      <h3>{title}</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          981: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1301: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1601: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper popularSlideWrap"
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie}>slide{index}</MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieDetailRecommSlider;
