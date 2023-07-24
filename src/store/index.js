import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { addSong, removeSong } from "./slices/songsSlice";
import { addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: reducers,
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
