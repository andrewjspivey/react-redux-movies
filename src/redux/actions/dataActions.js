export const searchSingleMovie = (data) => {
  return {
    type: "SEARCHSINGLEMOVIE",
    payload: data,
  };
};

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
