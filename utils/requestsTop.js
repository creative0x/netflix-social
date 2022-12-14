const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: {
    title: "Trending Now",
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Most Popular",
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchLatest: {
    title: "Recently Added",
    url: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  },
  fetchNetflixOriginals: {
    title: "Netflix Originals",
    url: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  },
};

export default requests;
