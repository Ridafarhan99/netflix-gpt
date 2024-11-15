import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie", // make sure this matches the key in the store
  initialState: { nowPlayingMovies: {} },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
