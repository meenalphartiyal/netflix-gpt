const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const SIGN_UP_EMAIL = "⮾ Please enter a valid email to proceed.";
export const FIREBASE = {
  SIGN_IN_ERROR_CODE : "auth/invalid-credential",
  SIGN_UP_ERROR_CODE: "auth/email-already-in-use",
  SIGN_IN_ERROR : "Invalid email or password. Please try again.",
  SIGN_UP_ERROR : "An account with this email already exists.",
  DEFAULT_ERROR: "Server isn't responding at the moment. Please Try Again Later.",
}
export const SIGN_IN_UP = {
  EMAIL: "⮾ Please enter a valid email",
  PASSWORD: "⮾ Please enter a valid password",
}
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
export const CONFIG_ENDPOINT = `${TMDB_BASE_URL}/configuration?api_key=`;
export const RECENT_MOVIES = `${TMDB_BASE_URL}/movie/now_playing`;
export const POPULAR_MOVIES = `${TMDB_BASE_URL}/movie/popular`;
export const UPCOMING_MOVIES = `${TMDB_BASE_URL}/movie/upcoming`;
export const TOP_RATED_MOVIES = `${TMDB_BASE_URL}/movie/top_rated`;
export const GET_LOGO_URL = (movieId) => `${TMDB_BASE_URL}/movie/${movieId}/images?include_image_language=en`;
export const GET_TRAILER = (movieId) => `${TMDB_BASE_URL}/movie/${movieId}/videos`;
export const GET_YOUTUBE_VIDEO = "https://www.youtube.com/watch?v=";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_AUTH_TOKEN,
  },
};

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


