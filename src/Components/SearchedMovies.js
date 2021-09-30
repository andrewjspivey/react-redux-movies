import React from "react";
import { useSelector } from "react-redux";
import MovieListContainer from "../StyledComponents/MovieListContainer";
import ListCard from "../StyledComponents/ListCard/ListCard.js";
import { useHistory } from "react-router-dom";
import ListCardImage from "../StyledComponents/ListCard/ListCardImage";
import ListCardHeader from "../StyledComponents/ListCard/ListCardHeader";

const SearchedMovies = () => {
  const searchedMovies = useSelector((state) => state.searchedMovies);
  const darkMode = useSelector((state) => state.darkMode);
  const history = useHistory();

  return (
    <MovieListContainer>
      {searchedMovies.map((movie, index) => (
        <ListCard key={index}>
          <ListCardHeader darkMode={darkMode}>
            {movie.Title} ({movie.Year})
          </ListCardHeader>
          <ListCardImage
            onClick={() => history.push(`/movie/${movie.imdbID}`)}
            src={movie.Poster}
          />
        </ListCard>
      ))}
    </MovieListContainer>
  );
};

export default SearchedMovies;
