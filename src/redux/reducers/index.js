import { combineReducers } from "redux";
import searchMoviesReducer from "./searchMovie";
import searchTermReducer from "./searchTermReducer";
import movieDetailsReducer from "./movieDetails";

const allReducers = combineReducers({
  searchMovie: searchMoviesReducer,
  searchTerm: searchTermReducer,
  movieDetails: movieDetailsReducer,
});

export default allReducers;
