import React from "react";
import { useSelector } from "react-redux";

const SearchedMovies = () => {
  const searchedMovies = useSelector((state) => state.searchedMovies);
  return (
    <div
      style={{
        width: "100%",
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
      }}
    >
      {searchedMovies.map((movie, index) => (
        <div style={{ margin: "2rem" }} key={index}>
          <h3>
            {movie.Title} - {movie.Year}
          </h3>
          <img
            style={{ cursor: "pointer" }}
            // onClick={() => getMovieDetails(movie.imdbID)}
            src={movie.Poster}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default SearchedMovies;
