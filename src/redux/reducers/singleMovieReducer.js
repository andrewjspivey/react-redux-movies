const singleMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCHSINGLEMOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default singleMovieReducer;
