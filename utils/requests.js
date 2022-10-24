const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchActionMovies: {
    title: "Action",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
  fetchDrama: {
    title: "Drama",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  },
  fetchFamily: {
    title: "Family",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
  },
  fetchHistory: {
    title: "History",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchThriller: {
    title: "Thriller",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  },
  fetchScifi: {
    title: "Sci-Fi",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
};

export default requests;
