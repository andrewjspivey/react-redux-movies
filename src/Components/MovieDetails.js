import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailsById } from "../redux/actions/dataActions";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../API/API";

const MovieDetails = () => {
  const movieDetails = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();
  const params = useParams();

  const getMovieDetails = (movieId) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=71a9dce3&i=${movieId}`)
      .then((data) => {
        dispatch(getMovieDetailsById(data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    API.getMovieDetails(params.id, (data) =>
      dispatch(getMovieDetailsById(data))
    );
    //console.log(movieDetails);
  }, []);

  return (
    <div>
      {movieDetails && (
        <div>
          <h1>{movieDetails.Title}</h1>
          <h1>{movieDetails.Year}</h1>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
