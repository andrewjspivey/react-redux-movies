import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchedMovies from "./SearchedMovies";
import SearchedSingleMovie from "./SearchedSingleMovie";

const Home = () => {
  const searchType = useSelector((state) => state.searchType);
  return (
    <div>
      {searchType === "s" && <SearchedMovies />}
      {searchType === "t" && <SearchedSingleMovie />}
    </div>
  );
};

export default Home;
