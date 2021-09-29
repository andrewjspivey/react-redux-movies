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

export const change = (event) => {
  return {
    type: "CHANGE",
    payload: event,
  };
};

export const searchTypeChange = (event) => {
  return {
    type: "CHANGE_TYPE",
    payload: event,
  };
};
