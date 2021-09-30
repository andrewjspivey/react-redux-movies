import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/dataActions";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.MovieDetails);
  const dispatch = useDispatch();
  const params = useParams();

  const getMovieDetails = (movieId) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
      .then((data) => {
        dispatch(getMovieDetailsById(data.data));
      })
      .catch((err) => console.log(err));
  };
  // to load details on render, (use params)
  useEffect(() => {
    getMovieDetails(params.id);
  }, []);

  return <div></div>;
};

export default MovieDetails;
