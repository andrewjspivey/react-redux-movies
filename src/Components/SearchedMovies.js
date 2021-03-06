import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieListContainer from "../StyledComponents/MovieListContainer";
import ListCard from "../StyledComponents/ListCard/ListCard.js";
import { useHistory } from "react-router-dom";
import ListCardImage from "../StyledComponents/ListCard/ListCardImage";
import ListCardHeader from "../StyledComponents/ListCard/ListCardHeader";
import { searchMovies } from "../redux/actions/dataActions";
import { API } from "../API/API";
import Paginator from "./Paginator";

const SearchedMovies = () => {
  const searchedMovies = useSelector((state) => state.searchedMovies);
  const searchTerm = useSelector((state) => state.searchTerm);
  const page = useSelector((state) => state.page);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (page > 0) {
      API.getAllMoviesBySearch(searchTerm, page, (err, data) => {
        if (err) throw err;
        if (data.Response === "True") dispatch(searchMovies(data.Search));
      });
    }
  }, [searchTerm, page]);

  const truncate = (str, len = 20) => {
    if (str.length > 15) {
      return `${str.substring(0, len)}...`;
    } else {
      return str;
    }
  };

  return (
    <div>
      <Paginator />
      <MovieListContainer>
        {searchedMovies &&
          searchedMovies.map((movie, index) => (
            <ListCard key={index}>
              <ListCardHeader darkMode={darkMode}>
                {truncate(movie.Title)} ({movie.Year})
              </ListCardHeader>
              <ListCardImage
                onClick={() => history.push(`/movie/${movie.imdbID}`)}
                src={movie.Poster}
                alt="No Poster"
              />
            </ListCard>
          ))}
      </MovieListContainer>
      <Paginator />
    </div>
  );
};

export default SearchedMovies;
