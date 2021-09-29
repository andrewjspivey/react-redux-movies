import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { API } from "./API/API";
import {
  searchMovies,
  getMovieDetailsById,
  change,
  searchTypeChange,
  searchSingleMovie,
} from "./redux/actions/index";
import axios from "axios";
import SearchedMovies from "./Components/SearchedMovies";
import SearchedSingleMovie from "./Components/SearchedSingleMovie";

function App() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchType = useSelector((state) => state.searchType);
  const searchedMovies = useSelector((state) => state.searchedMovies);
  const singleMovie = useSelector((state) => state.singleMovie);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("https://www.omdbapi.com/?apikey=71a9dce3&s=matrix")
  //     .then((data) => {
  //       dispatch(searchMovies(data.data.Search));
  //     })
  //     .catch((err) => console.log(err));
  // }, [dispatch]);

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

  const getMovieDetails = (movieId) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
      .then((data) => {
        dispatch(getMovieDetailsById(data.data));
      })
      .catch((err) => console.log(err));
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
