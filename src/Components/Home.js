import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchedMovies from "./SearchedMovies";
import SearchedSingleMovie from "./SearchedSingleMovie";

const Home = () => {
  const searchType = useSelector((state) => state.searchType);
  const singleMovie = useSelector((state) => state.singleMovie);
  const searchedMovies = useSelector((state) => state.searchedMovies);
  return (
    <div>
      {Object.keys(singleMovie).length > 0 || searchedMovies.length > 1 ? (
        <div>
          {searchType === "s" && <SearchedMovies />}
          {searchType === "t" && <SearchedSingleMovie />}
        </div>
      ) : (
        <h1>Search For Movies!</h1>
      )}
    </div>
  );
};

export default Home;
