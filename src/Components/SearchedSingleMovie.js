import React from "react";
import { useSelector } from "react-redux";

const SearchedSingleMovie = () => {
  const singleMovie = useSelector((state) => state.singleMovie);
  return (
    <div>
      <h1>{singleMovie.Title}</h1>
      <img src={singleMovie.Poster} alt="" />
    </div>
  );
};

export default SearchedSingleMovie;
