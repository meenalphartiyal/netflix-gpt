import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    recentMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailer: null,
  },
  reducers: {
    addRecentMovies: (state, action) => {
      state.recentMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addRecentMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
