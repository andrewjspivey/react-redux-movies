import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./redux/actions";

import {
  increment,
  decrement,
  login,
  searchMovies,
  getMovieDetailsById,
} from "./redux/actions/index";
import axios from "axios";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const searchMovie = useSelector((state) => state.searchMovie);
  const searchTerm = useSelector((state) => state.searchTerm);
  const movieDetails = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=71a9dce3&s=matrix")
      .then((data) => {
        dispatch(searchMovies(data.data.Search));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&s=${searchTerm}`)
      .then((data) => {
        dispatch(searchMovies(data.data.Search));
      })
      .catch((err) => console.log(err));
  };

  const getMovieDetails = (movieId) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
      .then((data) => {
        dispatch(getMovieDetailsById(data.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Counter state: {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>Add 5</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(login())}>Log in</button>
      {isLogged ? <h3>Valuable info here if logged in</h3> : ""}

      <div>
        <form onSubmit={(e) => onSearchSubmit(e)}>
          <input
            type="text"
            name="search"
            onChange={(e) => dispatch(change(e))}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div
        style={{
          width: "100%",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap",
        }}
      >
        {searchMovie.map((movie, index) => (
          <div style={{ margin: "2rem" }} key={index}>
            <h3>
              {movie.Title} - {movie.Year}
            </h3>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => getMovieDetails(movie.imdbID)}
              src={movie.Poster}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
