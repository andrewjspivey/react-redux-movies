import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "./API/API";
//redux related
import { searchMovies, searchSingleMovie } from "./redux/actions/dataActions";
import { change, searchTypeChange } from "./redux/actions/searchActions";
//styled-components
import MainContainer from "./StyledComponents/MainContainer";
//components
import SearchedMovies from "./Components/SearchedMovies";
import SearchedSingleMovie from "./Components/SearchedSingleMovie";
import SearchBar from "./Components/SearchBar";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchType = useSelector((state) => state.searchType);
  const dispatch = useDispatch();

  const onSearchSubmit = (e, type) => {
    try {
      e.preventDefault();
      if (type === "s") {
        API.getAllMoviesBySearch(searchTerm, (data) =>
          dispatch(searchMovies(data))
        );
      } else {
        API.getMovieByTitle(searchTerm, (data) =>
          dispatch(searchSingleMovie(data))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            {searchType === "s" && <SearchedMovies />}
            {searchType === "t" && <SearchedSingleMovie />}
          </Route>
          <Route exact path="/movie/:id">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
