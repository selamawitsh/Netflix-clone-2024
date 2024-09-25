const API_Key = import.meta.env.VITE_apiKey;


const requests = {
   TrendingMovie: `/trending/movie/week?api_key=${API_Key}&language=en-US`,
   RomanceMovie: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
   ActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
   ComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
   HorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
   Documentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
   NetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
   TopRatedMovies: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
   TvShow: `/tv/popular?api_key=${API_Key}&language=en-US&page=1`,
};

export default requests;

