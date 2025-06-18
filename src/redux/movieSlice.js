import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    recentMovies: null,
    base_url: "",
    secure_base_url: "",
    trailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.recentMovies = action.payload;
    },
    addURLs: (state, action) => {
      state.base_url = action.payload.base;
      state.secure_base_url = action.payload.secureBase;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    }
  },
});

export const { addMovies, addURLs, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
