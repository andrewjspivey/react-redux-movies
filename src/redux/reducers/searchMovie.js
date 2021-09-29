const searchedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCHMOVIES":
      return action.payload;
    default:
      return state;
  }
};

export default searchedMoviesReducer;
