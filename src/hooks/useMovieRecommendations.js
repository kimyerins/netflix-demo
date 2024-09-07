import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecommendations = async ({ id }) => {
  return await api.get(`/movie/${id}/recommendations?language=ko-KR`);
};

export const useMovieRecommendationsQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-rec", id],
    queryFn: () => fetchMovieRecommendations({ id }),
    select: (result) => result.data,
  });
};
