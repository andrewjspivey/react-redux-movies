import { combineReducers } from "redux";
import searchedMoviesReducer from "./searchMovie";
import searchTermReducer from "./searchTermReducer";
import movieDetailsReducer from "./movieDetails";
import searchTypeReducer from "./searchType";
import singleMovieReducer from "./singleMovieReducer";
import darkModeReducer from "./darkModeReducer";

const allReducers = combineReducers({
  searchTerm: searchTermReducer,
  searchType: searchTypeReducer,
  searchedMovies: searchedMoviesReducer,
  singleMovie: singleMovieReducer,
  movieDetails: movieDetailsReducer,
  darkMode: darkModeReducer,
});

export default allReducers;
