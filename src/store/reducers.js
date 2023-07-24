import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";
import { songsReducer } from "./slices/songsSlice";

export const reducers = combineReducers({
  songs: songsReducer,
  movies: moviesReducer,
});
