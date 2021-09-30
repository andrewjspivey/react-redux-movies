import React from "react";
import { getMovieDetailsById } from "../redux/actions/dataActions";

const MovieDetails = () => {
  return <div></div>;
};

export default MovieDetails;

const getMovieDetails = (movieId) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
    .then((data) => {
      dispatch(getMovieDetailsById(data.data));
    })
    .catch((err) => console.log(err));
};
