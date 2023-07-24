import {
  combineReducers,
  configureStore,
  createSlice,
  createAction,
} from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

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
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
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
    builder.addCase(reset, (state, action) => {
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

export const { addMovie, removeMovie } = moviesSlice.actions;
export const { addSong, removeSong } = songsSlice.actions;

export { store };
