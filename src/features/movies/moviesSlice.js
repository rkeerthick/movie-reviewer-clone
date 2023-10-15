import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  moviesOrShowsDetails: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state, actions) => {
      state.moviesOrShowsDetails = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending...");
    },
    [fetchAsyncMovies.fulfilled]: (state, actions) => {
      console.log("fulfilled");
      return { ...state, movies: actions.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected...");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("pending...");
    },
    [fetchAsyncShows.fulfilled]: (state, actions) => {
      console.log("fulfilled");
      return { ...state, shows: actions.payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("rejected...");
    },
    [fetchAsyncMovieOrShowDetail.pending]: () => {
      console.log("pending...");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, actions) => {
      console.log("fulfilled");
      return { ...state, moviesOrShowsDetails: actions.payload };
    },
    [fetchAsyncMovieOrShowDetail.rejected]: () => {
      console.log("rejected...");
    },
  },
});

export const { removeSelectedMovieOrShow } = moviesSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviesOrShows = (state) => state.movies.moviesOrShowsDetails

export default moviesSlice.reducer;
