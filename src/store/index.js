import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const { payload } = action;
      const findIndex = state.indexOf(payload);
      state.splice(findIndex, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const { payload } = action;
      const findIndex = state.indexOf(payload);
      state.splice(findIndex, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(moviesSlice.actions.reset, (state, action) => {
      return [];
    });
  },
});

const reducers = combineReducers({
  songs: songsSlice.reducer,
  movies: moviesSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export const { addMovie, removeMovie, reset } = moviesSlice.actions;
export const { addSong, removeSong } = songsSlice.actions;

export { store };
