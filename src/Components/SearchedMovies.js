import React from "react";
import { useSelector } from "react-redux";
import MovieListContainer from "../StyledComponents/MovieListContainer";
import ListCard from "../StyledComponents/ListCard";
import { useHistory } from "react-router-dom";

const SearchedMovies = () => {
  const searchedMovies = useSelector((state) => state.searchedMovies);

  const history = useHistory();

  return (
    <MovieListContainer>
      {searchedMovies.map((movie, index) => (
        <ListCard style={{ margin: "2rem" }} key={index}>
          <h3>
            {movie.Title} - {movie.Year}
          </h3>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => history.push(`/movie/${movie.imdbID}`)}
            src={movie.Poster}
          />
        </ListCard>
      ))}
    </MovieListContainer>
  );
};

export default SearchedMovies;
