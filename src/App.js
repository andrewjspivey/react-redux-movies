import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "./API/API";
//redux related
import { searchMovies, searchSingleMovie } from "./redux/actions/dataActions";
//styled-components
import MainContainer from "./StyledComponents/MainContainer";
//components
import MovieDetails from "./Components/MovieDetails";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

function App() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const onSearchSubmit = (e, type) => {
    try {
      e.preventDefault();
      if (type === "s") {
        API.getAllMoviesBySearch(searchTerm, 1, (err, data) => {
          if (err) throw err;
          console.log(data.Response);
          if (data.Response === "True") dispatch(searchMovies(data.Search));
        });
      } else {
        API.getMovieByTitle(searchTerm, (err, data) => {
          if (err) throw err;
          if (data.Response === "True") dispatch(searchSingleMovie(data));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer darkMode={darkMode}>
      <BrowserRouter>
        <NavBar darkMode={darkMode} onSearchSubmit={onSearchSubmit} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
