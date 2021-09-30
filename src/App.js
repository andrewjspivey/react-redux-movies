import React from "react";
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
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div>
        {searchType === "s" && <SearchedMovies />}
        {searchType === "t" && <SearchedSingleMovie />}
      </div>
    </MainContainer>
  );
}

export default App;
