import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchVideoMovie = async ({id}) => {
  return await api.get(`/movie/${id}/videos`);
};
export const useVideoMovieQuery = ({id}) => {
  return useQuery({
    queryKey: ["movie-video", {id}],
    queryFn: () => fetchVideoMovie({id}),
    select: (result) => result.data,
  });
};
