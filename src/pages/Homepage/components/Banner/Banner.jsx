import React from "react";
import "./Banner.style.css";
import { usePopularMoviesQuery } from "../../../../hooks/userPopularMovies";
import { Alert } from "bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import VideoMovie from "./VideoMovie/VideoMovie";

const Banner = (movie_id) => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  if (isLoading) {
    <h1>Loading...</h1>;
  } else if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="banner_container">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(
          https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data?.results[0].backdrop_path}
          )`,
          }}
        >
          <div className="inner_container">
            <div className="txtbox text-white">
              <h1>{data?.results[0].title}</h1>
              <p>{data?.results[0].overview}</p>
            </div>
            {/* <div className="videoBox">
              <VideoMovie movie_id={movie_id} />
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(
          https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data?.results[1].backdrop_path}
          )`,
          }}
        >
          <div className="inner_container">
            <div className="txtbox text-white">
              <h1>{data?.results[1].title}</h1>
              <p>{data?.results[1].overview}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(
          https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data?.results[2].backdrop_path}
          )`,
          }}
        >
          <div className="inner_container">
            <div className="txtbox text-white">
              <h1>{data?.results[2].title}</h1>
              <p>{data?.results[2].overview}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
