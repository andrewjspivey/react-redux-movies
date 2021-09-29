import axios from "axios";

export const searchMovies = (data) => {
  return {
    type: "SEARCHMOVIES",
    payload: data,
  };
};

export const getMovieDetailsById = (data) => {
  return {
    type: "MOVIEDETAILS",
    payload: data,
  };
};

export const change = (event) => {
  return {
    type: "CHANGE",
    payload: event,
  };
};
