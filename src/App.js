import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { API } from "./API/API";
import { searchMovies, searchSingleMovie } from "./redux/actions/dataActions";
import { change, searchTypeChange } from "./redux/actions/searchActions";
import SearchedMovies from "./Components/SearchedMovies";
import SearchedSingleMovie from "./Components/SearchedSingleMovie";

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

  const handleSearchTypeChange = (e) => {
    dispatch(searchTypeChange(e));
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>
        <form onSubmit={(e) => onSearchSubmit(e, searchType)}>
          <input
            type="text"
            name="search"
            onChange={(e) => dispatch(change(e))}
          />
          <select
            name="search-type"
            value={searchType}
            onChange={(e) => handleSearchTypeChange(e)}
          >
            <option value="t">One Movie</option>
            <option value="s">All movies</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {searchType === "s" && <SearchedMovies />}
        {searchType === "t" && <SearchedSingleMovie />}
      </div>
    </div>
  );
}

export default App;
