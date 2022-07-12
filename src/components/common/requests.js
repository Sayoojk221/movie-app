import { create } from "apisauce";

const API_KEY = "825350e2b9de73ef07625d76b40e80c9";

const apiClient = create({
  baseURL: "https://api.themoviedb.org/3",
});

const endpoints = {
  "Now Playing": `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  "Top Rated": `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  "Popular": `/movie/popular?api_key=${API_KEY}&language=en-US`,
  "Upcoming": `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export { apiClient,endpoints,API_KEY};
