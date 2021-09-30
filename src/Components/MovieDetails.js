import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/dataActions";

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.MovieDetails);

  const getMovieDetails = (movieId) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
      .then((data) => {
        dispatch(getMovieDetailsById(data.data));
      })
      .catch((err) => console.log(err));
  };
  // to load details on render, (use params)
  useEffect(() => {}, []);

  return <div></div>;
};

export default MovieDetails;
