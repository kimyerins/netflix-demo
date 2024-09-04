import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchVideoMovie = (movie_id) => {
  return api.get(`/movie/{movie_id}/videos?language=ko-KR`);
};
export const useVideoMovieQuery = (movie_id) => {
  return useQuery({
    queryKey: ["movie-video", movie_id],
    queryFn: () => fetchVideoMovie(movie_id),
    select: (result) => result.data,
    enabled: !!movie_id,
  });
};
